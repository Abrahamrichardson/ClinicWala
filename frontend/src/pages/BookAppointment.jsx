import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Badge } from "react-bootstrap";
import axiosClient from "../api/axiosClient";
import { DOCTORS } from "../data/DoctorData";
import "./BookAppointment.css";

export default function BookAppointment() {
  const { id } = useParams(); // doctor frontend id
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const patientId = localStorage.getItem("userId");

  // FIND doctor from frontend data
  const doctor = DOCTORS.find((d) => String(d.id) === String(id));

  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    date: "",
    time: "",
    reason: "",
  });

  const TIME_SLOTS = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM", "07:00 PM",
  ];

  // ❌ Doctor not found
  if (!doctor) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">❌ Doctor Not Found</h3>
        <Button onClick={() => navigate(-1)}>← Go Back</Button>
      </div>
    );
  }

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit booking
  const submitBooking = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login before booking");
      navigate("/login");
      return;
    }

    if (!form.date || !form.time) {
      alert("Please select date & time");
      return;
    }

    try {
      setSubmitting(true);

      await axiosClient.post("/appointments", {
        patientId,
        doctorId: String(doctor.id),
        doctorName: doctor.name,
        specialization: doctor.spec,
        doctorCity: doctor.city,
        fee: doctor.fee,
        date: form.date,
        time: form.time,
        reason: form.reason,
      });

      alert("✅ Appointment booked successfully");
      navigate("/patient/dashboard");

    } catch (err) {
      console.error("BOOKING ERROR:", err);
      alert("❌ Failed to book appointment");
    } finally {
      setSubmitting(false);
    }
  };

  // ✅ UI
return (
  <div className="booking-page container py-5">

    <Button className="mb-4" onClick={() => navigate(-1)}>
      ← Back
    </Button>

    {/* 🔥 JUSTDIAL STYLE CARD */}
    <div className="jd-card shadow-lg">

      {/* LEFT IMAGE */}
      <div className="jd-image">
        <img src={doctor.image} alt={doctor.name} />
      </div>

      {/* MIDDLE CONTENT */}
      <div className="jd-content">

        {/* TITLE */}
        <h4 className="jd-title">{doctor.name}</h4>

        {/* RATING */}
        <div className="jd-rating">
          <span className="rating-badge">4.2★</span>
          <span className="rating-count">117 Ratings</span>
          <span className="trust">✔ Trust</span>
          <span className="verified">Verified</span>
        </div>

        {/* LOCATION */}
        <p className="jd-location">📍 {doctor.city}</p>

        {/* STATUS */}
        <p className="jd-status">🟢 Available Now</p>

        {/* SERVICES */}
        <div className="jd-services">
          <div className="service-box">
            {doctor.spec}
            <span>₹{doctor.fee} / visit</span>
          </div>
        </div>

        <hr />

        {/* BOOKING FORM */}
        <h5 className="fw-bold mb-3">Book Appointment</h5>

        <Form onSubmit={submitBooking}>

          {/* DATE */}
          <Form.Group className="mb-3">
            <Form.Label>Select Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={form.date}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
            />
          </Form.Group>

          {/* TIME */}
          <Form.Group className="mb-3">
            <Form.Label>Select Time</Form.Label>
            <div className="time-slots">
              {TIME_SLOTS.map((t) => (
                <Button
                  key={t}
                  type="button"
                  className={form.time === t ? "slot active" : "slot"}
                  onClick={() => setForm({ ...form, time: t })}
                >
                  {t}
                </Button>
              ))}
            </div>
          </Form.Group>

          {/* REASON */}
          <Form.Group className="mb-4">
            <Form.Label>Describe your issue</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="reason"
              value={form.reason}
              onChange={handleChange}
            />
          </Form.Group>

          {/* SUBMIT */}
          <Button
            type="submit"
            className="confirm-btn"
            disabled={submitting}
          >
            {submitting ? "Booking..." : "Confirm Appointment"}
          </Button>

        </Form>
      </div>

      {/* RIGHT MAP */}
      <div className="map-box">
        <iframe
          title="doctor-location"
          src={`https://www.google.com/maps?q=${doctor.lat},${doctor.lng}&z=15&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </div>
  </div>
);

}
