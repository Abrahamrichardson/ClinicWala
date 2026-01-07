import React, { useEffect, useState } from "react";
import { Card, Table, Button, Badge, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import "./AdminAppointments.css";

export default function AdminAppointments() {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // -----------------------------
  // Load Appointments (ADMIN VIEW)
  // -----------------------------
  const loadAppointments = async () => {
    try {
      const res = await axiosClient.get("/appointments");
      setAppointments(res.data);
    } catch (err) {
      console.error("LOAD APPOINTMENTS ERROR:", err);
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Admin Check
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
  // Cancel Appointment (ADMIN)
  // -----------------------------
  const handleCancel = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?"))
      return;

    try {
      await axiosClient.delete(`/appointments/${id}`);
      loadAppointments();
    } catch (err) {
      console.error("CANCEL ERROR:", err);
      alert("Failed to cancel appointment");
    }
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
                  <tr key={a._id}>
                    <td>{index + 1}</td>

                    <td>
                      <Badge bg="primary">
                        CLW-{a._id.slice(-6)}
                      </Badge>
                    </td>

                    <td>{a.doctorName}</td>
                    <td>{a.specialization}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>{a.reason || "-"}</td>
                    <td>{a.doctorCity}</td>

                    <td>
                      <Badge
                        bg={
                          a.status === "approved"
                            ? "success"
                            : a.status === "rejected"
                            ? "danger"
                            : a.status === "completed"
                            ? "primary"
                            : "warning"
                        }
                        text="dark"
                      >
                        {a.status}
                      </Badge>
                    </td>

                    <td>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleCancel(a._id)}
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
