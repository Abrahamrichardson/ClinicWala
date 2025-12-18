import React, { useState } from "react";
import "./OtpPopup.css";

function OtpPopup({ phone, onVerify, onClose }) {
  const [otp, setOtp] = useState("");

  return (
    <div className="otp-overlay">
      <div className="otp-box">
        <h3>Enter OTP</h3>
        <p>OTP sent to {phone}</p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button onClick={() => onVerify(otp)}>Verify OTP</button>

        <p className="close" onClick={onClose}>Close</p>
      </div>
    </div>
  );
}

export default OtpPopup;
