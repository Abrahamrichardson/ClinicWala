import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Table, Button, Badge } from "react-bootstrap";
import SummaryCards from "./SummaryCards";

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAppointments();
  }, []);

  // ===============================
  // LOAD APPOINTMENTS
  // ===============================
  const loadAppointments = async () => {
    try {
      const res = await axiosClient.get("/appointments/doctor/my");
      setAppointments(res.data);
    } catch {
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // APPROVE APPOINTMENT
  // ===============================
  const approveAppointment = async (id) => {
    try {
      await axiosClient.put(`/appointments/${id}/approve`);
      loadAppointments();
    } catch  {
      alert("Failed to approve appointment");
    }
  };

  // ===============================
  // REJECT APPOINTMENT
  // ===============================
  const rejectAppointment = async (id) => {
    try {
      await axiosClient.put(`/appointments/${id}/reject`);
      loadAppointments();
    } catch  {
      alert("Failed to reject appointment");
    }
  };

  // ===============================
  // MARK COMPLETED
  // ===============================
  const markCompleted = async (id) => {
    try {
      await axiosClient.put(`/appointments/${id}/complete`);
      loadAppointments();
    } catch  {
      alert("Failed to mark completed");
    }
  };

  if (loading) {
    return <p className="text-center mt-4">Loading appointments...</p>;
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-3">👨‍⚕️ Doctor Dashboard</h3>
 {/* SUMMARY CARDS */}
  <SummaryCards />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No appointments yet
              </td>
            </tr>
          )}

          {appointments.map((a) => (
            <tr key={a._id}>
              <td>{a.patientId?.name || "-"}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>{a.reason || "-"}</td>

              {/* ================= STATUS BADGE ================= */}
              <td>
                <Badge
                  bg={
                    a.status === "completed"
                      ? "success"
                      : a.status === "approved"
                      ? "primary"
                      : a.status === "rejected"
                      ? "danger"
                      : "warning"
                  }
                >
                  {a.status}
                </Badge>
              </td>

              {/* ================= ACTION BUTTONS ================= */}
              <td>
                {a.status === "pending" && (
                  <>
                    <Button
                      size="sm"
                      variant="success"
                      className="me-2"
                      onClick={() => approveAppointment(a._id)}
                    >
                      Approve
                    </Button>

                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => rejectAppointment(a._id)}
                    >
                      Reject
                    </Button>
                  </>
                )}

                {a.status === "approved" && (
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => markCompleted(a._id)}
                  >
                    Mark Completed
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
