import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";
import { DOCTORS } from "../data/DoctorData"; // ✅ FRONTEND DATA
import "./DoctorsDetails.css";

export default function DoctorDetails() {
  const { id } = useParams(); // ✅ frontend id
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");

  // ✅ FIND doctor from frontend data
  const doctor = DOCTORS.find(
    (d) => String(d.id) === String(id)
  );

  // -----------------------------
  // Not Found
  // -----------------------------
  if (!doctor) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger">Doctor Not Found</h3>
        <Button className="mt-3" onClick={() => navigate(-1)}>
          ← Go Back
        </Button>
      </div>
    );
  }

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="container py-4">
      <Button className="mb-3" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      {/* Doctor Profile */}
      <Card className="p-4 shadow-sm border-0">
        <div className="d-flex flex-column flex-md-row">
          <img
            src={doctor.image}
            alt={doctor.name}
            width="150"
            height="150"
            className="rounded-circle me-md-4 mb-3 mb-md-0"
            style={{ objectFit: "cover" }}
          />

          <div>
            <h2 className="text-primary fw-bold">{doctor.name}</h2>

            <p><strong>Specialization:</strong> {doctor.spec}</p>
            <p className="fw-bold text-success">
              Experience: {doctor.exp}
            </p>
            <p className="fw-bold">
              Consultation Fee: ₹{doctor.fee}
            </p>
            <p className="fw-bold text-muted">
              City: {doctor.city}
            </p>

            <Badge bg="info" text="dark" className="me-2 mb-2">
              {doctor.spec}
            </Badge>

            <Button
              variant="primary"
              size="lg"
              className="mt-3"
              onClick={() =>
                !isLoggedIn
                  ? navigate("/login")
                  : navigate(`/book-appointment/${doctor.id}`)
              }
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </Card>

      {/* ABOUT */}
      <Card className="p-4 mt-4 shadow-sm border-0">
        <h4 className="fw-bold text-primary">About</h4>
        <p>{doctor.bio || "Experienced medical professional."}</p>
      </Card>

      {/* EDUCATION */}
      <Card className="p-4 mt-4 shadow-sm border-0">
        <h4 className="fw-bold text-primary">Education</h4>
        <ul>
          <li>MBBS – Government Medical College</li>
          <li>MD – {doctor.spec}</li>
          <li>Senior Practitioner</li>
        </ul>
      </Card>

      {/* ADDRESS */}
      <Card className="p-4 mt-4 shadow-sm border-0">
        <h4 className="fw-bold text-primary">Clinic Address</h4>
        <p>
          ABC Multispeciality Clinic <br />
          {doctor.city} <br />
          Landmark: Near Main Bus Stand
        </p>
      </Card>

      {/* TIMINGS */}
      <Card className="p-4 mt-4 shadow-sm border-0 mb-5">
        <h4 className="fw-bold text-primary">Available Timings</h4>
        <ul>
          <li>Mon – Fri: 10 AM – 1 PM | 5 PM – 8 PM</li>
          <li>Saturday: 10 AM – 2 PM</li>
          <li>Sunday: Holiday</li>
        </ul>
      </Card>
    </div>
  );
}
