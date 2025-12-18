import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Badge } from "react-bootstrap";

export default function AppointmentSuccess() {
  const navigate = useNavigate();

  // Get last booked appointment
  const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  const last = appointments[appointments.length - 1];

  if (!last) {
    return (
      <h3 className="text-center text-danger mt-5">
        ❌ No Appointment Found
      </h3>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <Card className="shadow p-4 text-center">

        <i
          className="bi bi-check-circle-fill text-success"
          style={{ fontSize: "70px" }}
        ></i>

        <h2 className="mt-3 fw-bold text-success">
          Appointment Confirmed!
        </h2>

        <p className="text-muted">
          Your appointment has been successfully booked.
        </p>

        <hr />

        <h5 className="fw-bold">Booking Details</h5>

        <div className="text-start mt-3">

          <p><strong>Doctor:</strong> {last.doctorName}</p>
          <p><strong>Specialization:</strong> {last.specialization}</p>
          <p><strong>City:</strong> {last.doctorCity}</p>

          <p><strong>Date:</strong> {last.date}</p>
          <p><strong>Time:</strong> {last.time}</p>

          {last.reason && (
            <p>
              <strong>Reason:</strong> {last.reason}
            </p>
          )}

          <Badge bg="primary" className="px-3 py-2 mt-2">
            Booking ID: CLW-{last.id.toString().slice(-6)}
          </Badge>
        </div>

        <hr />

      <div className="mt-3 d-flex gap-2 justify-content-center">
  <Button variant="primary" onClick={() => navigate("/")}>
    Go to Home
  </Button>

  <Button
    variant="outline-success"
    onClick={() => navigate("/login")}
  >
    Login
  </Button>
</div>

      </Card>
    </div>
  );
}
