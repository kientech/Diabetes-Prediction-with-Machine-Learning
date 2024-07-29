import React, { useState } from "react";
import axios from "axios";

const FormPrediction = ({ setResult }) => {
  const [formData, setFormData] = useState({
    Pregnancies: 0,
    Glucose: 0,
    BloodPressure: 0,
    SkinThickness: 0,
    Insulin: 0,
    BMI: 0.0,
    DiabetesPedigreeFunction: 0.0,
    Age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending request with data:", formData);
      const response = await axios.post(
        "https://diabetes-prediction-harb.onrender.com/prediction",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Received response:", response.data);
      setResult(response.data);
    } catch (error) {
      console.error("There was an error making the request:", error);
      setResult("Error: Could not get prediction");
    }
  };

  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl">
        Diabetes Prediction - Machine Learning
      </h1>
      <p>
        Machine Learning to predict the likelihood of diabetes based on health
        metrics like glucose levels and BMI
      </p>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex items-center justify-between gap-5">
          <div className="w-full">
            <label
              htmlFor="Pregnancies"
              className="block font-base text-sm py-1"
            >
              Pregnancies
            </label>
            <input
              type="number"
              name="Pregnancies"
              value={formData.Pregnancies}
              onChange={handleChange}
              className="py-2 px-2 rounded-lg w-full"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="Glucose" className="block font-base text-sm py-1">
              Glucose
            </label>
            <input
              type="number"
              name="Glucose"
              value={formData.Glucose}
              onChange={handleChange}
              className="py-2 px-2 rounded-lg w-full"
              required
            />
          </div>
        </div>

        <div className="w-full my-4">
          <label
            htmlFor="BloodPressure"
            className="block font-base text-sm py-1"
          >
            BloodPressure
          </label>
          <input
            type="number"
            name="BloodPressure"
            value={formData.BloodPressure}
            onChange={handleChange}
            className="py-2 px-2 rounded-lg w-full"
            required
          />
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="w-full">
            <label
              htmlFor="SkinThickness"
              className="block font-base text-sm py-1"
            >
              SkinThickness
            </label>
            <input
              type="number"
              name="SkinThickness"
              value={formData.SkinThickness}
              onChange={handleChange}
              className="py-2 px-2 rounded-lg w-full"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="Insulin" className="block font-base text-sm py-1">
              Insulin
            </label>
            <input
              type="number"
              name="Insulin"
              value={formData.Insulin}
              onChange={handleChange}
              className="py-2 px-2 rounded-lg w-full"
              required
            />
          </div>
        </div>

        <div className="w-full my-4">
          <label htmlFor="BMI" className="block font-base text-sm py-1">
            BMI
          </label>
          <input
            type="number"
            name="BMI"
            value={formData.BMI}
            onChange={handleChange}
            className="py-2 px-2 rounded-lg w-full"
            required
          />
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="w-full">
            <label
              htmlFor="DiabetesPedigreeFunction"
              className="block font-base text-sm py-1"
            >
              DiabetesPedigreeFunction
            </label>
            <input
              type="number"
              name="DiabetesPedigreeFunction"
              value={formData.DiabetesPedigreeFunction}
              onChange={handleChange}
              className="py-2 px-2 rounded-lg w-full"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="Age" className="block font-base text-sm py-1">
              Age
            </label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              className="py-2 px-2 rounded-lg w-full"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 font-bold text-lg text-white bg-blue-400 transition-all hover:bg-blue-500 rounded-lg py-4 px-6 w-full"
        >
          Predict
        </button>
      </form>
    </div>
  );
};

export default FormPrediction;
