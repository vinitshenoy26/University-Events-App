import json
import re
from datetime import datetime

import pandas as pd
import pytz
import requests
from bs4 import BeautifulSoup
from tqdm import tqdm

newlist = []
university_abbr_name = []
edt_timezone = pytz.timezone("America/New_York")

def get_time():
    current_utc_datetime = datetime.utcnow()
    eastern_timezone = pytz.timezone('US/Eastern')
    current_est_datetime = current_utc_datetime.replace(tzinfo=pytz.utc).astimezone(eastern_timezone)
    iso8601_string_est = current_est_datetime.isoformat()
    return iso8601_string_est

def htmlparser(input: str) -> str:

    soup = BeautifulSoup(input, features="html.parser").get_text()
    soup = soup.replace("\xa0", " ")
    soup = soup.replace("\n", " ")
    return soup

today = get_time()
university_name = 'rutgers'

url = f"https://{university_name}.campuslabs.com/engage/api/discovery/event/search?endsAfter={today}&orderByField=endsOn&orderByDirection=ascending&status=Approved&take=1000"
response = requests.request("GET", url,).json()

rows = [event for event in response['value']]
df = pd.DataFrame(rows)
df['startsOn'] = pd.to_datetime(df['startsOn'])
df['endsOn'] = pd.to_datetime(df['endsOn'])
df['startsOn'] = pd.to_datetime(df['startsOn']).dt.tz_convert('America/New_York')
df['startsOn'] = df['startsOn'].dt.strftime('%m/%d/%Y %I:%M %p')
df['endsOn'] = pd.to_datetime(df['endsOn']).dt.tz_convert('America/New_York')
df['endsOn'] = df['endsOn'].dt.strftime('%m/%d/%Y %I:%M %p')
df["description"] = df["description"].map(htmlparser)
default_background = "https://via.placeholder.com/400"
df["imagePath"] = [default_background if img is None else f"https://se-images.campuslabs.com/clink/images/{str(img)}" for img in df["imagePath"]]


with open("src/assets/data.json", "w") as file:
    unformatted = json.loads(df.to_json(orient="table"))
    json.dump(unformatted, file, indent=4, sort_keys=True)


with open('src/assets/all_universities.txt', 'r') as file:
    for line in file:
        newlist.append(line.strip())


print(newlist)

for uni in tqdm(newlist):
    url = f"https://{uni}.campuslabs.com/engage/globalcontext"
    response = requests.request("GET", url).text
    match = re.search(r'"name":\s*"([^"]+)"', response)
    if match:
        name = match.group(1)
        university_abbr_name.append({'uni':uni, 'name':name})
    else:
        print(uni + " not found in JavaScript code.")


with open('./src/assets/uni_abbr.json', "w") as json_file:
    json.dump(university_abbr_name, json_file, indent=4)










