from python_semrush.semrush import SemrushClient
from sqlalchemy import create_engine, String, DateTime, Integer, Float
from serpapi.google_search_results import GoogleSearchResults
from tabulate import tabulate
import pprint
import psycopg2
import pandas as pd

# Add a domain override
main_domain_name = 'blindsgalore.com'
db = create_engine(
    'postgres://gkwhwcjdeuaowr:3a0ca46502457c5837a20b72de87191b263ba39ffe8f37bbcf7ab879c3d8aa9c@ec2-18-235-20-228.compute-1.amazonaws.com:5432/db641k8cvcuisk')

client = SemrushClient(key='3ce0500eff602727669df64ca8bbbd24')
keywords = client.domain_shopping(domain=main_domain_name, database='us', display_limit='200',
                                  export_columns='Ph,Po,Pp,Pd,Nq,Sn,Ur,Tt,Tr,Pr,Ts,Oc', display_sort='nq_desc')
pp = pprint.PrettyPrinter(indent=4)
keyword_list = []
for keyword in keywords:
    keyword_text = keyword['Keyword']
    pp.pprint(keyword['Keyword'])
    params = {
        "api_key": "bd9c6284ab9a91ffe763e700cfc6f8b0035b7db18b59591a2a6498723b79ad24",
        "engine": "google",
        "q": keyword['Keyword'],
        "google_domain": "google.com",
    }

    client = GoogleSearchResults(params)
    results = client.get_dict()
    if "shopping_results" in results and keyword_text not in keyword_list:
        keyword_list.append(keyword_text)
        pp.pprint(keyword_list)
        pdresults = pd.DataFrame(results["shopping_results"])
        pdresults['keyword'] = keyword['Keyword']
        pdresults['company'] = main_domain_name
        del pdresults['price']

        print(tabulate(pdresults, headers='keys', tablefmt='psql'))
        pdresults.to_sql('company_shopping', con=db, if_exists='append', index=False, schema='public',
                         dtype={"extensions": String(), "date": DateTime(), "extracted_price": Float(),
                                "link": String(), "position": String(), "price": String(), "source": String(),
                                "thumbnail": String(), "title": String(), "rating": String(), "reviews": String()})
