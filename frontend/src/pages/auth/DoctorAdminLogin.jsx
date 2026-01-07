import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import "./DoctorAdminLogin.css";

export default function DoctorAdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email & password");
      return;
    }

    try {
      setLoading(true);

      const res = await axiosClient.post("/auth/login", {
        email,
        password,
      });

      const { token, role, userId } = res.data;

      // ❌ block patient
      if (role === "patient") {
        alert("Patients are not allowed here");
        return;
      }

      // ✅ save auth
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("userId", userId || "");

      // 🔀 redirect
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "doctor") {
        navigate("/doctor/dashboard");
      }

    } catch (err) {
      console.error("LOGIN ERROR:", err);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="doctor-admin-login">
      <form className="da-login-card" onSubmit={handleLogin}>
        <h3>Doctor / Admin Login</h3>
        <p>Authorized access only</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
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

        <button
          type="submit"
          className="da-login-btn"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="da-login-footer">
          Patients must login from{" "}
          <span
            style={{ color: "#3a609b", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            patient login
          </span>
        </div>
      </form>
    </div>
  );
}
