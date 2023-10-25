import requests
import json
import pandas as pd
response_API = requests.get('https://jsonplaceholder.typicode.com/todos')
#print(response_API.status_code)
data = response_API.text
parse_json = json.loads(data)

df = pd.read_json(data)
print(df.head())

