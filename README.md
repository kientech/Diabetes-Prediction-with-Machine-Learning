# Diabetes Prediction with Machine Learning - KienTech

## Description

The **Diabetes Prediction with Machine Learning** project aims to predict the likelihood of an individual developing diabetes based on various health parameters and demographic information. This system leverages machine learning algorithms to analyze input data and provide a risk assessment, helping individuals take proactive steps towards managing their health.

### Purpose

Early detection and management of diabetes can significantly improve health outcomes. This project is designed to:

- **Predict Diabetes Risk:** Utilize machine learning to estimate the probability of diabetes based on individual health metrics and demographics.
- **Support Health Decisions:** Provide individuals with insights into their risk levels, enabling them to make informed decisions about their lifestyle and health management.
- **Aid Healthcare Providers:** Assist healthcare professionals in identifying individuals at risk and prioritizing interventions.

### How It Works

1. **Data Collection:** The system uses a dataset containing health records and demographic information, including parameters like glucose levels, blood pressure, BMI, and age.
2. **Feature Engineering:** Data preprocessing and feature selection are performed to improve the model’s accuracy.
3. **Model Training:** A machine learning model is trained on the dataset to learn the relationship between input features and diabetes risk.
4. **Prediction:** The trained model is used to predict the likelihood of diabetes for new input data.
5. **User Interface:** Users can interact with a web application to input their health metrics and receive a risk assessment.

### Components

- **Backend:** Implements machine learning algorithms and API endpoints using Python and Flask. It handles data processing, model training, and diabetes risk prediction.
- **Frontend:** Developed using React.js, the frontend provides an intuitive interface for users to input their health data and view predictions.
- **Model Training:** Involves training scripts and algorithms that process health data to build a predictive model.

### Features

- **Diabetes Risk Prediction:** Estimate the likelihood of diabetes based on health metrics such as glucose levels, BMI, blood pressure, and more.
- **Data Visualization:** Display risk assessments and trends to help users understand their health status.
- **Interactive Interface:** Allows users to input their health data and receive predictions in real time.

## Tech Stack

- **Backend:**
  - Python
  - FastAPI (for creating the API)
  - Scikit-learn (for machine learning model training and prediction)
- **Frontend:**
  - React.js (for building the user interface)
  - Axios (for making API calls)
  - Tailwind CSS (for styling and responsive design)
- **Database:** 
  - MongoDB (optional, for storing historical data and user inputs)
- **Deployment:**
  - Heroku

## Installation

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/diabetes-prediction.git
    ```

2. Navigate to the backend directory:

    ```bash
    cd diabetes-prediction/backend
    ```

3. Install the required Python packages:

    ```bash
    pip install -r requirements.txt
    ```

4. Start the Flask server:

    ```bash
    python app.py
    ```

   The backend server should now be running on `http://localhost:5000` (or another port if configured differently).

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd diabetes-prediction/frontend
    ```

2. Install the required npm packages:

    ```bash
    npm install
    ```

3. Start the React.js development server:

    ```bash
    npm start
    ```

   The frontend application should now be running on `http://localhost:3000` (or another port if configured differently).

## Usage

- **Web Interface:** Access the web application in your browser. Enter health metrics such as glucose levels, BMI, blood pressure, and age to receive a prediction of diabetes risk.
- **API Endpoints:** The backend API provides endpoints for receiving data from the frontend and returning predictions. You can interact with these endpoints directly using tools like Postman for testing.

### Example API Requests

- **GET /api/predict** - Retrieve a diabetes risk prediction based on input health metrics.
- **POST /api/predict** - Submit health data and receive a risk assessment.

## Model Training

The machine learning model is trained using a dataset containing health metrics and diabetes outcomes. The training script is located in the `model_training` directory.

### Steps to Retrain the Model:

1. Navigate to the `model_training` directory:

    ```bash
    cd diabetes-prediction/model_training
    ```

2. Run the training script:

    ```bash
    python train_model.py
    ```

   This script will preprocess the data, train the model, and save it for use by the backend API.

## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and test them thoroughly.
4. Submit a pull request with a description of your changes.
