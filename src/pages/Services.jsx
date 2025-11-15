import React from "react";
import "./Services.css";
import me1 from "../assets/telemed.jpg"; // use any related image

const Services = () => {
  return (
    <div className="telemedicine-page">
     

      {/* ===== Banner ===== */}
      <div className="banner">
        <h1>Telemedicine</h1>
      </div>

      {/* ===== Main Content ===== */}
      <div className="main-section">
        {/* Left Content */}
        <div className="left-content">
          <img src={me1} alt="Telemedicine" className="main-img" />

          <h2>Telemedicine in India</h2>
          <p>
            Telemedicine provides access to specialists and super-specialists located in
            different parts of the world through the advanced Clinicwala software. It connects
            doctors and patients using video conferencing and online consultation tools.
          </p>

          <h3>Difference Between Telehealth, Telecare, Telemedicine</h3>
          <p>
            <strong>Telehealth</strong> – use of technology for medical treatment remotely.<br />
            <strong>Telemedicine</strong> – uses video conferencing, remote monitoring, and data
            exchange to diagnose and treat patients remotely.<br />
            <strong>Telecare</strong> – supports individuals in managing their health at home.
          </p>

          <h3>History of Telemedicine</h3>
          <p>
            The history of telemedicine dates back to the mid-20th century when the earliest
            technologies like telephones and radios connected doctors with patients. It evolved
            with the rise of the internet and mobile devices.
          </p>

          <h3>Some benefits of telemedicine include:</h3>
          <ul>
            <li>Lower costs and less travel time.</li>
            <li>Improved access to trusted doctors from anywhere.</li>
            <li>Preventive and convenient healthcare access.</li>
            <li>Helps prevent infection spread by reducing physical visits.</li>
          </ul>
        </div>

        {/* Right Sidebar */}
        <div className="sidebar">
          <div className="card services">
            <h4>Our Services</h4>
            <ul>
              <li>Tele Medicine</li>
              <li>Pathology</li>
              <li>Health Records</li>
              <li>Referral Program</li>
              <li>Diet Consultation</li>
              <li>Software Apps</li>
            </ul>
          </div>

          <div className="card newsletter">
            <h4>Newsletter</h4>
            <input type="text" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>

          <div className="card quick-appointment">
            <h4>Quick Appointment</h4>
            <div className="doctor-card">
              <img src="https://via.placeholder.com/60" alt="Dr. RP Sinha" />
              <div>
                <h5>Dr. R.P. Sinha</h5>
                <p>Diabetologist (50 yrs)</p>
                <a href="#">View Profile</a>
              </div>
            </div>
            <div className="doctor-card">
              <img src="https://via.placeholder.com/60" alt="Dr. Rakesh Kumar" />
              <div>
                <h5>Dr. Rakesh Kumar</h5>
                <p>Orthopedist (7 yrs)</p>
                <a href="#">View Profile</a>
              </div>
            </div>
            <button className="view-all">View All →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
