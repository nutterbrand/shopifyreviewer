from dataforseolib import RestClient
from serpapi.google_search_results import GoogleSearchResults
import json
import time
import pprint
import pandas as pd
import sys
import psycopg2
import psycopg2.extras


pp = pprint.PrettyPrinter(indent=1)

client = RestClient("brandon@metricstory.com", "pmq1CqTG5EXzTaZW")

db = psycopg2.connect(
    dbname='db641k8cvcuisk',
    port=5432,
    user='gkwhwcjdeuaowr',
    password='3a0ca46502457c5837a20b72de87191b263ba39ffe8f37bbcf7ab879c3d8aa9c',
    host='ec2-18-235-20-228.compute-1.amazonaws.com')

cursor = db.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
work_mem = 2048
cursor.execute('SET work_mem TO %s', (work_mem,))


def fetch_companies_without_reports():
    cursor.execute(
        "SELECT * FROM public.company WHERE company.last_report_generated IS NULL;")
    records = cursor.fetchall()
    return records


def fetch_companies():
    cursor.execute(
        "SELECT * FROM public.company;")
    records = cursor.fetchall()
    return records


def insert_company_report_date(company_id):
    company_id = str(company_id)
    sql = """UPDATE public.company SET last_report_generated = NOW() WHERE id = %s RETURNING last_report_generated"""

    cursor.execute(sql, (company_id))
    last_report_generated = cursor.fetchone()['last_report_generated']
    db.commit()
    return last_report_generated


def latest_company_keyword_records(company_id):
    cursor.execute(
        "SELECT DISTINCT ON (keyword) keyword, id, created_date, company_id, report_id, keyword, domain, type, rank_group, rank_absolute, title, snippet, cpc, search_volume, url, relative_url FROM public.company_keyword_rank WHERE company_id = %s ORDER BY keyword, created_date DESC;", str(company_id))
    records = cursor.fetchall()
    return records


def insert_new_report(company_id):
    company_id = str(company_id)
    sql = """INSERT INTO public.company_report(company_id)
             VALUES(%s) RETURNING id"""

    cursor.execute(sql, (company_id))
    new_report_id = cursor.fetchone()['id']
    db.commit()
    return new_report_id


def fetch_json_data_from_file(company_name):
    with open(company_name) as json_file:
        json_data = json.load(json_file)
    return json_data


def process_keywords_rankings(json_data, company_id, report_id):
    keywords = []
    for task in json_data.get('tasks', []):
        for result in task.get('result', []):
            for item in result.get('items', []):
                keyword_data = item.get('keyword_data')
                keyword = {}
                if(keyword_data):
                    keyword_info = keyword_data.get('keyword_info')
                    if(keyword_info):
                        keyword['company_id'] = str(company_id)
                        keyword['report_id'] = str(report_id)
                        keyword['keyword'] = keyword_data['keyword']
                        keyword['location'] = str(keyword_data['location'])
                        keyword['cpc'] = str(keyword_info['cpc'])
                        keyword['search_volume'] = str(
                            keyword_info['search_volume'])
                    impression_info = keyword_data.get('impression_info')
                    if(impression_info):
                        keyword['avg_pos'] = str(
                            keyword_data['ad_position_average'])
                ranked_serp_element = item.get('ranked_serp_element')
                if(ranked_serp_element):
                    serp_item = ranked_serp_element.get(
                        'serp_item')
                    if(serp_item):
                        keyword['domain'] = serp_item['domain']
                        keyword['url'] = serp_item['url']
                        keyword['relative_url'] = serp_item['relative_url']
                        keyword['type'] = serp_item['type']
                        keyword['rank_group'] = str(serp_item['rank_group'])
                        keyword['rank_absolute'] = str(
                            serp_item['rank_absolute'])
                        keyword['title'] = serp_item['title']
                        keyword['description'] = serp_item['description']

                keywords.append(keyword)
    return tuple(keywords)


def insert_keywords_to_sql(keywords):
    sql = """INSERT INTO public.company_keyword_rank(keyword, company_id, report_id, cpc, location_code, search_volume, rank_absolute, rank_group, domain, relative_url, url, title, snippet, type)
             VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING id"""

    keyword_ids = []
    for k in keywords:
        cursor.execute(sql, (k['keyword'], k['company_id'], k['report_id'], k['cpc'], k['location'], k['search_volume'],
                             k['rank_absolute'], k['rank_group'], k['domain'], k['relative_url'], k['url'], k['title'], k['description'], k['type']))
        new_keyword_id = cursor.fetchone()['id']
        keyword_ids.append(new_keyword_id)

    db.commit()
    return keyword_ids


def fetch_serp_api_data(domain, keywords):
    results = []
    for keyword in keywords:
        keyword_text = keyword['keyword']
        print("Getting shopping results for: %s with keyword: %s..." %
              (domain, keyword_text))
        params = {
            "api_key": "bd9c6284ab9a91ffe763e700cfc6f8b0035b7db18b59591a2a6498723b79ad24",
            "engine": "google",
            "q": keyword_text,
            "google_domain": "google.com",
        }

        client = GoogleSearchResults(params)
        result = client.get_dict()
        results.append(result)
        time.sleep(1)
    return results


def insert_shopping_to_sql(serp_listings, report_id, company_id):
    sql = """INSERT INTO public.company_paid_shopping(report_id, company_id, position, title, link, domain, thumbnail, extensions, rating, reviews, keyword, extracted_price)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) RETURNING id"""

    shopping_ids = []
    for listing in serp_listings:
        shopping_serp = listing.get('shopping_results', [])
        keyword = listing['search_parameters']['q']
        company_id = str(company_id)
        report_id = str(report_id)

        for s in shopping_serp:
            position = s.get('position', '')
            title = s.get('title', '')
            link = s.get('link', '')
            source = s.get('source', '')
            extensions = s.get('extensions', '')
            thumbnail = s.get('thumbnail', '')
            rating = s.get('rating', '')
            reviews = s.get('reviews', '')
            extracted_price = s.get('extracted_price', '')
            cursor.execute(sql, (str(report_id), str(company_id), str(position), str(title), str(link), str(source),
                                 str(thumbnail), str(extensions), str(rating), str(reviews), str(keyword), str(extracted_price)))
            new_shopping_id = cursor.fetchone()['id']
            shopping_ids.append(new_shopping_id)
            db.commit()

    return shopping_ids


def fetch_keyword_data(domain, limit):
    response_json = dict()
    post_data = dict()
    # simple way to set a task
    post_data[len(post_data)] = dict(
        target=domain,
        location_name="United States",
        language_name="English",
        limit=limit,
        order_by=["keyword_data.keyword_info.search_volume,desc"],
        filters=[
            ["keyword_data.keyword_info.search_volume", ">=", 100],
            "and",
            ["keyword_data.keyword_info.cpc", ">=", 1.00],
        ]
    )
    # POST /v3/dataforseo_labs/ranked_keywords/live
    response = client.post(
        "/v3/dataforseo_labs/ranked_keywords/live", post_data)
    # you can find the full list of the response codes here https://docs.dataforseo.com/v3/appendix/errors
    if response["status_code"] == 20000:
        # json_formatted_str = json.dumps(response, indent=2)
        # print(json_formatted_str)
        response_json = response
    else:
        print("error. Code: %d Message: %s" %
              (response["status_code"], response["status_message"]))
    return response_json


def main():
    companies = fetch_companies()
    for company in companies:
        company_id = company['id']
        domain = company['domain']
        keywords = latest_company_keyword_records(company_id)
        if not keywords:
            json_keywords = fetch_keyword_data(domain, 100)
            if (json_keywords):
                new_report_id = insert_new_report(company_id)
                processed_keywords = process_keywords_rankings(
                    json_keywords, company_id, new_report_id)
                if processed_keywords:
                    keywords_ids = insert_keywords_to_sql(
                        processed_keywords)
                    latest_keyword_date = insert_company_report_date(
                        company_id)
                    serp_api_listings = fetch_serp_api_data(
                        domain, processed_keywords)
                    shopping_ids = insert_shopping_to_sql(
                        serp_api_listings, new_report_id, company_id)
                    print("New Domain: '%s' new keywords: %s new shopping: %s" %
                          (domain, len(keywords_ids), len(shopping_ids)))
        else:
            print("Existing Domain: '%s' existing keywords: %s" %
                  (domain, len(keywords)))


if __name__ == "__main__":
    main()
