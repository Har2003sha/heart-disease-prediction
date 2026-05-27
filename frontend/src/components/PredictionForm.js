// import { useState } from 'react';
// import axios from 'axios';

// function PredictionForm() {

//   const [formData, setFormData] = useState({
//     age: '',
//     sex: '',
//     cigsPerDay: '',
//     totChol: '',
//     sysBP: '',
//     glucose: ''
//   });

//   const [result, setResult] = useState('');
//   const [probability, setProbability] = useState('');

//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });

//   };

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       const response = await axios.post(
//         'http://127.0.0.1:5001/predict',
//         formData
//       );

//       setResult(response.data.result);
//       setProbability(response.data.probability);

//     } catch (error) {

//       console.log(error);
//       alert('Backend Connection Error');

//     }
//   };

//   return (

//     <div className="container mt-5">

//       <div className="card shadow p-4">

//         <h2 className="text-center mb-4">
//           Enter Patient Details
//         </h2>

//         <form onSubmit={handleSubmit}>

//           <div className="row">

//             <div className="col-md-6 mb-3">
//               <label>Age</label>

//               <input
//                 type="number"
//                 className="form-control"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="col-md-6 mb-3">
//               <label>Gender (1 Male / 0 Female)</label>

//               <input
//                 type="number"
//                 className="form-control"
//                 name="sex"
//                 value={formData.sex}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="col-md-6 mb-3">
//               <label>Cigarettes Per Day</label>

//               <input
//                 type="number"
//                 className="form-control"
//                 name="cigsPerDay"
//                 value={formData.cigsPerDay}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="col-md-6 mb-3">
//               <label>Total Cholesterol</label>

//               <input
//                 type="number"
//                 className="form-control"
//                 name="totChol"
//                 value={formData.totChol}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="col-md-6 mb-3">
//               <label>Systolic BP</label>

//               <input
//                 type="number"
//                 className="form-control"
//                 name="sysBP"
//                 value={formData.sysBP}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="col-md-6 mb-3">
//               <label>Glucose</label>

//               <input
//                 type="number"
//                 className="form-control"
//                 name="glucose"
//                 value={formData.glucose}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//           </div>

//           <button
//             type="submit"
//             className="btn btn-success w-100"
//           >
//             Predict
//           </button>

//         </form>

//         {result && (

//           <div className="alert alert-info mt-4">

//             <h4>{result}</h4>

//             <p>
//               Probability: {probability}
//             </p>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// }

// export default PredictionForm;




import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./PredictionForm.css";

function PredictionForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cigsPerDay: "",
    totChol: "",
    sysBP: "",
    glucose: "",
  });

  const [result, setResult] = useState("");
  const [probability, setProbability] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/predict",
        formData
      );

      setResult(response.data.result);
      setProbability(response.data.probability);
    } catch (error) {
      console.log(error);
      alert("Backend Connection Error");
    }

    setLoading(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="main-container">

      {/* Animated Background */}
      <div className="background-glow glow1"></div>
      <div className="background-glow glow2"></div>
      <div className="background-glow glow3"></div>

      <div className="prediction-card">

        {/* Top Buttons */}
        <div className="top-buttons">
          <button
            className="nav-btn dashboard-btn"
            onClick={handleDashboard}
          >
            Dashboard
          </button>

          <button
            className="nav-btn logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* Header */}
        <div className="card-header">
          <h1>Heart Disease Prediction</h1>

          <p>
            AI Powered Cardiovascular Risk Detection System
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <div className="input-grid">

            <div className="input-box">
              <label>Age</label>

              <input
                type="number"
                name="age"
                placeholder="Enter Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <label>Gender</label>

              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>

            <div className="input-box">
              <label>Cigarettes Per Day</label>

              <input
                type="number"
                name="cigsPerDay"
                placeholder="Smoking Frequency"
                value={formData.cigsPerDay}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <label>Total Cholesterol</label>

              <input
                type="number"
                name="totChol"
                placeholder="Cholesterol Level"
                value={formData.totChol}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <label>Systolic BP</label>

              <input
                type="number"
                name="sysBP"
                placeholder="Blood Pressure"
                value={formData.sysBP}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-box">
              <label>Glucose</label>

              <input
                type="number"
                name="glucose"
                placeholder="Glucose Level"
                value={formData.glucose}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          {/* Predict Button */}
          <button
            type="submit"
            className="predict-btn"
          >
            {loading ? "Analyzing..." : "Predict Risk"}
          </button>

        </form>

        {/* Result */}
        {result && (
          <div className="result-box">

            <h2>{result}</h2>

            <div className="progress-area">
              <div
                className="progress-bar"
                style={{ width: `${probability}%` }}
              ></div>
            </div>

            <p>
              Risk Probability:
              <span className="probability-text">
                {" "}{probability}%
              </span>
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default PredictionForm;