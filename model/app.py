
import json
import requests

url = "http://127.0.0.1:8000/prediction"

input_data = {
    "Pregnancies": 1,
    "Glucose": 53,
    "BloodPressure": 64,
    "SkinThickness": 32,
    "Insulin": 200,
    "BMI": 35.0,
    "DiabetesPedigreeFunction": 0.8,
    "Age": 50
}

input_json = json.dumps(input_data)
response = requests.post(url, data=input_json, headers={"Content-Type": "application/json"})

print(response.json())

