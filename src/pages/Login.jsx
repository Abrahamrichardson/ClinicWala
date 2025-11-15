import React from "react";
import "./Login.css";
import me1 from "../assets/doctor-login-thumb.jpg";

function Login() {
  return (
    <div className="login-page">
      {/* Header */}
      <header className="top-bar">
        <strong style={{ color: "#3a609bff" }}> CELL : 788 000 3838</strong>
        <div className="right-links">
          <button className="btn register">REGISTER</button>
          <button className="btn login">LOGIN</button>
        </div>
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
            <label>E-Mail/Phone</label>
            <input type="text" placeholder="Enter email or phone" />
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
            <div className="remember">
              <input type="checkbox" /> Remember Me
            </div>
            <button className="btn primary">LOGIN</button>
            <div className="links">
              <a href="#">Forgot Password?</a> <span>|</span>{" "}
              <a href="#">New User?</a>
            </div>
          </div>

          {/* OTP Login */}
          <div className="otp-login">
            <h4>LOGIN WITH OTP</h4>
            <label>Mobile #</label>
            <input type="text" placeholder="Enter mobile number" />
            <button className="btn otp">GET OTP</button>
            <div className="links">
              <a href="#">New User?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
