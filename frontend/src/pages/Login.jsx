import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";
import me1 from "../assets/doctor-login-thumb.jpg";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
  if (!email || !password) {
    alert("❌ Please enter email & password");
    return;
  }

  try {
    setLoading(true);

    // ✅ CORRECT API CALL
    const res = await axiosClient.post("/auth/login", {
      email,
      password,
    });

   const { token, role } = res.data;

login(token);
localStorage.setItem("role", role);

if (role === "admin") {
  navigate("/admin/dashboard");
} else {
  navigate("/doctors");
}


  } catch (err) {
    console.error("LOGIN ERROR:", err);
    alert("❌ Invalid email or password");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="login-page">
      {/* Header */}
      <header className="top-bar">
        <strong style={{ color: "#3a609bff" }}> CELL : 788 000 3838</strong>
       
      </header>

      <div className="brand-bar">
        <h3>CLINICWALA.COM</h3>
        <p>🔒 Secure Access</p>
      </div>

      {/* Login Section */}
      <div className="login-container">
        <div className="doctor-image">
          <img src={me1} alt="Doctor" />
        </div>

        <div className="login-boxes">
          {/* Normal Login */}
          <div className="login-form">
            <h4>LOGIN</h4>

            <label>E-Mail / Phone</label>
            <input
              type="text"
              placeholder="Enter email or phone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="remember">
              <input type="checkbox" /> Remember Me
            </div>

            <button
              className="btn primary"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>

            <div className="links">
                <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/register"); // 🆕 New User → Register
                }}
              >
                New User?
              </a>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Login;
