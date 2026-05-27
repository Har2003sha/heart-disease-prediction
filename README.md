# 🫀 Heart Disease Prediction Web App

A Full Stack Machine Learning Web Application that predicts the risk of heart disease using patient health parameters. The system uses a trained **Logistic Regression model** and provides an interactive UI built with **React** and a backend powered by **Flask**.

---

## 👩‍💻 Author
**Harshita V Sharma**

---

## 🚀 Project Overview

Heart disease is one of the leading causes of death worldwide. This project aims to assist in early detection by analyzing key health indicators such as:

- Age  
- Gender  
- Cholesterol level  
- Blood pressure  
- Smoking habits  
- Glucose level  

The system predicts whether a person is at **low or high risk of heart disease** along with probability percentage.

---

## 🏗️ Tech Stack

### Frontend:
- React.js
- HTML5
- CSS3
- Bootstrap
- Axios

### Backend:
- Flask (Python)
- Flask REST API

### Machine Learning:
- Scikit-learn
- Pandas
- NumPy
- Logistic Regression

---

## 🧠 Machine Learning Model

- Algorithm: Logistic Regression
- Dataset: Framingham Heart Study (or similar structured dataset)
- Preprocessing:
  - Handling missing values
  - Feature scaling
  - Train-test split
- Output:
  - Binary classification (0 = No Risk, 1 = High Risk)
  - Probability score

---

## 📊 Features

### 🔐 Authentication System
- Login Page
- Register Page
- LocalStorage-based user validation

### ❤️ Prediction System
- Input patient health parameters
- Real-time prediction from ML model
- Risk probability visualization

### 📈 Dashboard
- Global heart disease insights
- Top affected countries (visual bar representation)
- Past vs Current vs Future risk analysis
- AI-based insights for prevention

### 🎨 UI/UX
- Modern 3D glassmorphism design
- Animated gradients and glowing effects
- Responsive layout for all devices

---

## 📂 Project Structure
heart-disease-prediction/
│
├── backend/
│ ├── app.py
│ ├── model.pkl
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ └── PredictionForm.js
│ │ ├── pages/
│ │ │ ├── LoginPage.js
│ │ │ ├── RegisterPage.js
│ │ │ └── DashboardPage.js
│ │ ├── App.js
│ │ └── index.js
│
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Har2003sha/heart-disease-prediction.git

cd backend
pip install -r requirements.txt
python app.py

http://127.0.0.1:5001

cd frontend
npm install
npm start

API Endpoint
Predict Heart Disease
POST /predict
Request Body:
{
  "age": 45,
  "sex": 1,
  "cigsPerDay": 5,
  "totChol": 200,
  "sysBP": 120,
  "glucose": 85
}
Response:
{
  "result": "High Risk of Heart Disease",
  "probability": 82.5
}

📊 Future Improvements
Firebase authentication
Real-time database integration
Doctor recommendation system
AI-based lifestyle suggestion engine
Deployment on AWS / Render / Vercel

⚠️ Disclaimer

This project is for educational purposes only and should not be used as a medical diagnosis tool.

⭐ Acknowledgements
Scikit-learn documentation
Framingham Heart Study dataset
Open-source React community