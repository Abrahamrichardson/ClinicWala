import React, { useEffect, useState } from "react";
import { Card, Table, Button, Badge, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AdminAppointments.css";


export default function AdminAppointments() {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // -----------------------------
  // Load Appointments (FRONTEND)
  // -----------------------------
  const loadAppointments = () => {
    const list =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(list);
    setLoading(false);
  };

  // -----------------------------
  // Admin Check + Load
  // -----------------------------
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "admin") {
      setIsAdmin(true);
      loadAppointments();
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, []);

  // -----------------------------
  // Cancel Appointment
  // -----------------------------
  const handleCancel = (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?"))
      return;

    const updated = appointments.filter((a) => a.id !== id);
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
  };

  // -----------------------------
  // Approve Appointment
  // -----------------------------
  const handleApprove = (id) => {
    const updated = appointments.map((a) =>
      a.id === id ? { ...a, status: "Approved" } : a
    );

    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
  };

  // -----------------------------
  // Admin Guard
  // -----------------------------
  if (!isAdmin && !loading) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger">⚠ Admin Access Only</h3>
        <p className="text-muted">
          You don't have permission to view this page.
        </p>
        <Button onClick={() => navigate("/")}>Go to Home</Button>
      </div>
    );
  }

  // -----------------------------
  // Loading
  // -----------------------------
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
        <p>Loading appointments...</p>
      </div>
    );
  }

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold text-primary mb-0">
          All Booked Appointments
        </h3>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          ← Back
        </Button>
      </div>

      <Card className="shadow-sm">
        <Card.Body>
          {appointments.length === 0 ? (
            <p className="text-center text-muted mb-0">
              No appointments booked yet.
            </p>
          ) : (
            <Table responsive bordered hover className="mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Booking ID</th>
                  <th>Doctor</th>
                  <th>Specialization</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Reason</th>
                  <th>City</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((a, index) => (
                  <tr key={a.id}>
                    <td>{index + 1}</td>

                    <td>
                      <Badge bg="primary">
                        CLW-{String(a.id).slice(-6)}
                      </Badge>
                    </td>

                    <td>{a.doctorName}</td>
                    <td>{a.specialization}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>{a.reason || "-"}</td>
                    <td>{a.city}</td>

                    <td>
                      <Badge
                        bg={
                          a.status === "Approved"
                            ? "success"
                            : "warning"
                        }
                        text="dark"
                      >
                        {a.status}
                      </Badge>
                    </td>

                    <td>
                      {a.status !== "Approved" && (
                        <Button
                          variant="success"
                          size="sm"
                          className="me-2"
                          onClick={() => handleApprove(a.id)}
                        >
                          Approve
                        </Button>
                      )}

                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleCancel(a.id)}
                      >
                        Cancel
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
