import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("heartUser"));

    if (!storedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true"); // 🔥 session flag
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  const socialLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login Successful (Demo)");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">

      <div className="login-card glass">

        <h1>Heart Disease AI</h1>
        <p className="subtitle">Smart Prediction System</p>

        <form onSubmit={handleLogin} autoComplete="off">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-btn">
            Login
          </button>

        </form>

        <div className="divider">OR</div>

        <div className="social-login">

          <button className="google-btn" onClick={socialLogin}>
            <FaGoogle /> Google
          </button>

          <button className="facebook-btn" onClick={socialLogin}>
            <FaFacebookF /> Facebook
          </button>

        </div>

        <p className="register-text">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

      </div>

    </div>
  );
}

export default LoginPage;