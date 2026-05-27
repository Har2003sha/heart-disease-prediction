from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Load model and scaler

model = joblib.load('heart_model.pkl')
scaler = joblib.load('scaler.pkl')

@app.route('/')
def home():
    return jsonify({
        'message': 'Heart Disease Prediction API Running Successfully'
    })

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json

        age = float(data['age'])
        sex = float(data['sex'])
        cigsPerDay = float(data['cigsPerDay'])
        totChol = float(data['totChol'])
        sysBP = float(data['sysBP'])
        glucose = float(data['glucose'])

        features = np.array([[
            age,
            sex,
            cigsPerDay,
            totChol,
            sysBP,
            glucose
        ]])

        scaled_data = scaler.transform(features)

        prediction = model.predict(scaled_data)[0]
        probability = model.predict_proba(scaled_data)[0][1]

        result = 'High Risk of Heart Disease' if prediction == 1 else 'Low Risk of Heart Disease'

        return jsonify({
            'prediction': int(prediction),
            'result': result,
            'probability': round(float(probability * 100), 2)
        })

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5001)