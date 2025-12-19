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

      const res = await axiosClient.post("/auth/login", {
        email,
        password,
      });

      const { token, role, userId, doctorId } = res.data;

      // ✅ SAVE AUTH DATA
      login(token);
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId || "");
      localStorage.setItem("doctorId", doctorId || "");

      // ✅ ROLE BASED REDIRECT
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "doctor") {
        navigate("/doctor/dashboard");
      } else {
        navigate("/patient/dashboard");
      }

    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert("❌ Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 ENTER KEY SUPPORT
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-page">
      {/* Header */}
      <header className="top-bar">
        <strong style={{ color: "#3a609bff" }}>
          CELL : 788 000 3838
        </strong>
      </header>

      {/* Brand */}
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
          <div className="login-form">
            <h4>LOGIN</h4>

            <label>E-Mail</label>
            <input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
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
                  navigate("/register"); // Patient register
                }}
              >
                New User?
              </a>
            </div>

            {/* OPTIONAL HELPER */}
            <div className="text-muted mt-2" style={{ fontSize: "13px" }}>
              Doctors & Admin use the same login form
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
