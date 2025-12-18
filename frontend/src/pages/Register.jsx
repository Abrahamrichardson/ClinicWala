import React, { useState } from "react";
import axiosClient from "../api/axiosClient";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setMsg("Registering...");

    try {
      const res = await axiosClient.post("/auth/register", form);

      if (res.status === 201) {
        setMsg("✅ Successfully Registered");

        // 🔁 FINAL REQUIREMENT → HOME PAGE
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setMsg(err.response.data.message);
      } else {
        setMsg("Server error, try again.");
      }
    }
  };

  return (
    <div className="register-box">
      <h2>Create Account</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">REGISTER</button>
      </form>

      {msg && <p className="msg">{msg}</p>}

      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}
