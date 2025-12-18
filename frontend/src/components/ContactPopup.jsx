import React from "react";
import "./ContactPopup.css";

const ContactPopup = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>×</button>

        <h3>CONTACT US</h3>

        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Mobile number" />
        <input type="email" placeholder="Email (optional)" />
        <textarea placeholder="Message"></textarea>

        <input type="text" placeholder="Security Question (4+3)" />

        <button className="submit-btn">SUBMIT →</button>
      </div>
    </div>
  );
};

export default ContactPopup;
