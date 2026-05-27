import pandas as pd
import numpy as np
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib

# Load dataset

df = pd.read_csv('framingham.csv')

# Drop unwanted column

df.drop(['education'], axis=1, inplace=True)

# Rename column

df.rename(columns={'male':'Sex_male'}, inplace=True)

# Remove null values

df.dropna(inplace=True)

# Features

X = np.asarray(df[[
    'age',
    'Sex_male',
    'cigsPerDay',
    'totChol',
    'sysBP',
    'glucose'
]])

# Target

y = np.asarray(df['TenYearCHD'])

# Scaling

scaler = preprocessing.StandardScaler()
X = scaler.fit_transform(X)

# Train Test Split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.3,
    random_state=4
)

# Model

model = LogisticRegression()
model.fit(X_train, y_train)

# Prediction

y_pred = model.predict(X_test)

# Accuracy

accuracy = accuracy_score(y_test, y_pred)
print("Model Accuracy:", accuracy)

# Save model

joblib.dump(model, 'heart_model.pkl')
joblib.dump(scaler, 'scaler.pkl')

print('Model and scaler saved successfully!')