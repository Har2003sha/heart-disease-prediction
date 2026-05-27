import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

function DashboardPage() {

  const navigate = useNavigate();

  const topCountries = [
    { country: "United States", past: 22, current: 28, future: 35 },
    { country: "India", past: 18, current: 25, future: 40 },
    { country: "China", past: 20, current: 23, future: 30 },
    { country: "Russia", past: 15, current: 18, future: 24 },
    { country: "Brazil", past: 12, current: 15, future: 22 }
  ];

  return (
    <div className="dashboard-container">

      {/* ✅ ONLY ADDED BUTTON SECTION (DO NOT CHANGE YOUR CODE) */}
      <div className="dashboard-topbar">
        <button
          className="dash-btn prediction-btn"
          onClick={() => navigate("/prediction")}
        >
          🔬 Prediction
        </button>

        <button
          className="dash-btn logout-btn"
          onClick={() => navigate("/")}
        >
          🚪 Logout
        </button>
      </div>

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>🌍 Global Heart Disease Analytics</h1>
        <p>AI-based worldwide risk distribution & future prediction model</p>
      </div>

      {/* STATS BOX */}
      <div className="stats-box">

        <div className="stat-card">
          <h2>195</h2>
          <p>Countries Analyzed</p>
        </div>

        <div className="stat-card">
          <h2>1.2M+</h2>
          <p>Global Patient Records</p>
        </div>

        <div className="stat-card">
          <h2>+18%</h2>
          <p>Yearly Growth Risk</p>
        </div>

      </div>

      {/* COUNTRY BAR CHART */}
      <div className="chart-section">

        <h2>Top 5 Affected Countries (Past vs Current vs Future)</h2>

        {topCountries.map((item, index) => (
          <div key={index} className="country-row">

            <div className="country-name">
              {item.country}
            </div>

            <div className="bar-container">
              <span>Past</span>
              <div className="bar">
                <div style={{ width: `${item.past}%` }} className="bar-past"></div>
              </div>
            </div>

            <div className="bar-container">
              <span>Current</span>
              <div className="bar">
                <div style={{ width: `${item.current}%` }} className="bar-current"></div>
              </div>
            </div>

            <div className="bar-container">
              <span>Future (No Precaution)</span>
              <div className="bar">
                <div style={{ width: `${item.future}%` }} className="bar-future"></div>
              </div>
            </div>

          </div>
        ))}

      </div>

      {/* INSIGHT BOX */}
      <div className="insight-box">
        <h2>🧠 AI Insight</h2>
        <p>
          If lifestyle precautions are not taken, cardiovascular disease cases
          may increase by <b>35–50% globally</b> in the next decade due to:
          poor diet, smoking, stress, and inactivity.
        </p>
      </div>

    </div>
  );
}

export default DashboardPage;