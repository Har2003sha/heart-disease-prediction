import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullName: "",
    age: "",
    mobile: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("heartUser", JSON.stringify(userData));

    alert("Registration Successful!");
    navigate("/");
  };

  return (
    <div className="register-container">

      <div className="register-card">

        <h1>Create Account</h1>

        <form onSubmit={handleRegister} autoComplete="off">

          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <input
            type="number"
            placeholder="Age"
            name="age"
            value={userData.age}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          <input
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            value={userData.mobile}
            onChange={handleChange}
            autoComplete="off"
            required
          />

          {/* IMPORTANT FIX FOR EMAIL AUTOFILL */}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            autoComplete="new-email"
            required
          />

          {/* IMPORTANT FIX FOR PASSWORD AUTOFILL */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p>
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default RegisterPage;