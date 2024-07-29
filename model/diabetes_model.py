from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
import numpy as np
from fastapi.middleware.cors import CORSMiddleware
from sklearn.preprocessing import StandardScaler
import logging
from fastapi.logger import logger

logger.setLevel(logging.INFO)
logger.info("FastAPI app started")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://kientech-diabetes-prediction.netlify.app"],  # Allow your React app's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)


class ModelInput(BaseModel):
    Pregnancies: int
    Glucose: int
    BloodPressure: int
    SkinThickness: int
    Insulin: int
    BMI: float
    DiabetesPedigreeFunction: float
    Age: int


# Loading the saved model and scaler
model = pickle.load(open("diabetes_model.sav", 'rb'))
scaler = pickle.load(open("scaler.sav", 'rb'))


@app.post("/prediction")
def prediction(input_parameters: ModelInput):
    input_data = input_parameters.json()
    input_dictionary = json.loads(input_data)

    pregnancies = input_dictionary['Pregnancies']
    glucose = input_dictionary['Glucose']
    blood_pressure = input_dictionary['BloodPressure']
    skin_thickness = input_dictionary['SkinThickness']
    insulin = input_dictionary['Insulin']
    bmi = input_dictionary['BMI']
    diabetes_pedigree_function = input_dictionary['DiabetesPedigreeFunction']
    age = input_dictionary['Age']

    input_list = [pregnancies, glucose, blood_pressure, skin_thickness, insulin, bmi, diabetes_pedigree_function, age]

    input_array = np.asarray(input_list).reshape(1, -1)

    # Apply scaling
    std_data = scaler.transform(input_array)

    # Make prediction
    predicted = model.predict(std_data)
    print(predicted)

    if predicted[0] == 0:
        return "Not Diabetes"
    else:
        return "Diabetes"
