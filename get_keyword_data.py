import json
from dataforseolib import RestClient
# You can download this file from here https://cdn.dataforseo.com/v3/examples/python/python_Client.zip
client = RestClient("brandon@metricstory.com", "pmq1CqTG5EXzTaZW")
post_data = dict()
# simple way to set a task
post_data[len(post_data)] = dict(
    target="blindsgalore.com",
    location_name="United States",
    language_name="English",
    limit=1,
    # order_by=["keyword_data.keyword_info.search_volume,asc",
    #           "keyword_data.keyword_info.cpc,desc"],
    order_by=["keyword_data.keyword_info.search_volume,desc"],
    filters=[
        ["keyword_data.keyword_info.search_volume", ">=", 100],
        "and",
        ["keyword_data.keyword_info.cpc", ">=", 1.00],

        # "and",
        # [
        #     ["ranked_serp_element.serp_item.type", "=", "paid"],
        #     "or",
        #     ["ranked_serp_element.is_paid", "=", True]
        # ]
    ]
)
# POST /v3/dataforseo_labs/ranked_keywords/live
response = client.post("/v3/dataforseo_labs/ranked_keywords/live", post_data)
# you can find the full list of the response codes here https://docs.dataforseo.com/v3/appendix/errors
if response["status_code"] == 20000:
    json_formatted_str = json.dumps(response, indent=2)
    print(json_formatted_str)
    # do something with result
else:
    print("error. Code: %d Message: %s" %
          (response["status_code"], response["status_message"]))
