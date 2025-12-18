import React from "react";
import "./Services.css";

import me1 from "../assets/telemed.jpg";
import me3 from "../assets/43.jpg";
import me4 from "../assets/4.jpg";
import me5 from "../assets/5.jpg";
import me6 from "../assets/6.jpg";
import me7 from "../assets/7.jpg";

import { useNavigate, useParams } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const deptId = Number(id) || 1;

  const DEPARTMENT_DATA = {
    1: {
      title: "Telemedicine",
      image: me1,
      content: `
Telemedicine provides access to specialists and super-specialists located in
different parts of the world through the advanced Clinicwala software. It 
connects doctors and patients using video conferencing and online tools.

Telehealth — remote treatment using technology  
Telemedicine — video conferencing, remote monitoring  
Telecare — support at home

History:  
Telemedicine began in the 20th century with telephones and radios. 
Internet & mobile devices made it grow rapidly.

Benefits:  
• Low cost  
• Improved access  
• Preventive care  
• Convenience  
• Reduces infection spread  
• Supports digital health records
      `
    },
    2: {
      title: "Pathology",
      image: me3,
      content: `
Our pathology department offers a full range of diagnostic tests including
blood, urine, stool, hormonal panels, and advanced reports.

Features:
• Fast report delivery  
• Accurate lab testing  
• Home sample collection  
• Auto-updated reports in EHR
      `
    },
    3: {
      title: "Health Records",
      image: me4,
      content: `
Digital Health Records help store patient history, prescriptions, lab reports,
and medical data securely for easy access anytime.

Benefits:
• No lost records  
• Access anywhere  
• Helps doctors diagnose faster  
• Reduces duplicate tests
      `
    },
    4: {
      title: "Food & Diet",
      image: me5,
      content: `
Personalized diet plans for diabetes, weight loss, heart health, thyroid, 
pregnancy care, and general wellness.

Includes:
• Custom diet charts  
• Nutrition counseling  
• Follow-up tracking  
• Healthy recipes
      `
    },
    5: {
      title: "Referral Program",
      image: me6,
      content: `
Our medical referral program connects patients with top specialists and 
super-specialists based on diagnosis and need.

Benefits:
• Faster consultations  
• Trusted doctors  
• Affordable pricing  
• Priority appointments
      `
    },
    6: {
      title: "Software Apps",
      image: me7,
      content: `
We offer healthcare software including telemedicine apps, clinic management 
systems, e-prescriptions, and digital patient monitoring tools.

Tools:
• Doctor Portal  
• Patient App  
• EHR System  
• Billing & Reports
      `
    }
  };

  const data = DEPARTMENT_DATA[deptId];

  return (
    <div className="telemedicine-page">
      {/* Banner */}
      <div className="banner">
        <h1>{data.title}</h1>
      </div>

      <div className="main-section">
        {/* Left Section */}
        <div className="left-content">
          
          <img src={data.image} alt={data.title} className="main-img" />

          <h2>{data.title}</h2>

          <p style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
            {data.content}
          </p>
        </div>

        {/* Right Sidebar */}
        <div className="sidebar">
          <div className="card services">
            <h4>Our Services</h4>
            <ul>
              <li onClick={() => navigate("/services/1")}>Tele Medicine</li>
              <li onClick={() => navigate("/services/2")}>Pathology</li>
              <li onClick={() => navigate("/services/3")}>Health Records</li>
              <li onClick={() => navigate("/services/4")}>Food & Diet</li>
              <li onClick={() => navigate("/services/5")}>Referral Program</li>
              <li onClick={() => navigate("/services/6")}>Software Apps</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="card newsletter">
            <h4>Newsletter</h4>
            <input type="text" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>

          {/* Quick Appointment */}
          <div className="card quick-appointment">
            <h4>Quick Appointment</h4>

            <div className="doctor-card" onClick={() => navigate("/doctor/1")}>
  <img src={me3} className="doctor-img" alt="" />
  <h6 className="fw-bold mt-2">DR. ANITHA RAMESH</h6>
  <p className="small text-primary fw-semibold">CARDIOLOGIST</p>
</div>


            <div
              className="doctor-card"
              onClick={() => navigate("/doctor/2")}
              style={{ cursor: "pointer" }}
            >
              <img src={me4} className="doctor-img" alt="" />
              <h6 className="fw-bold mt-3">DR. KARTHIK S</h6>
              <p className="small text-primary fw-semibold">DERMATOLOGIST</p>
            </div>

            <div
              className="doctor-card"
              onClick={() => navigate("/doctor/3")}
              style={{ cursor: "pointer" }}
            >
              <img src={me5} className="doctor-img" alt="" />
              <h6 className="fw-bold mt-3">DR. PRIYA B</h6>
              <p className="small text-primary fw-semibold">PEDIATRICIAN</p>
            </div>

            <div
              className="doctor-card"
              onClick={() => navigate("/doctor/4")}
              style={{ cursor: "pointer" }}
            >
              <img src={me6} className="doctor-img" alt="" />
              <h6 className="fw-bold mt-3">DR. RAJESH KUMAR</h6>
              <p className="small text-primary fw-semibold">NEUROLOGIST</p>
            </div>

            <div
              className="doctor-card"
              onClick={() => navigate("/doctor/5")}
              style={{ cursor: "pointer" }}
            >
              <img src={me7} className="doctor-img" alt="" />
              <h6 className="fw-bold mt-3">DR. MEENA G</h6>
              <p className="small text-primary fw-semibold">GYNECOLOGIST</p>
            </div>

            <button onClick={() => navigate("/doctors")} className="view-all">
              View All →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
