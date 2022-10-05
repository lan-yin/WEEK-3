import requests
import json
import pprint
import csv

url = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"

response = requests.get(url)
data = json.loads(response.text)
# pprint.pprint(data)

areas = ["中正區", "萬華區", "中山區", "大同區", "大安區", "松山區", "信義區", "士林區", "文山區", "北投區", "內湖區", "南港區"]

for i in range(len(data["result"]["results"])):
    xpostDate = int(data["result"]["results"][i]["xpostDate"][0:4])

    if xpostDate < 2015:
        continue
    elif data["result"]["results"][i]["address"][5:8] not in areas:
        continue
    else:
        stitle = data["result"]["results"][i]["stitle"]
        address = data["result"]["results"][i]["address"][5:8]
        longitude = data["result"]["results"][i]["longitude"]
        latitude = data["result"]["results"][i]["latitude"]
        pic_url = "https://" + data["result"]["results"][i]["file"].split("https://")[1]
        with open("data.csv", "a", newline="") as f:
            thewriter = csv.writer(f)
            thewriter.writerow([stitle, address, longitude, latitude, pic_url])























