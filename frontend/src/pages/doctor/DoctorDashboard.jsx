import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Table, Button, Badge } from "react-bootstrap";

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const res = await axiosClient.get("/appointments/doctor/my");
      setAppointments(res.data);
    } catch (err) {
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  const markCompleted = async (id) => {
    try {
      await axiosClient.put(`/appointments/${id}/complete`);
      loadAppointments();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  if (loading) {
    return <p className="text-center mt-4">Loading appointments...</p>;
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-3">👨‍⚕️ Doctor Dashboard</h3>

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
              <td>
                <Badge
                  bg={
                    a.status === "completed"
                      ? "success"
                      : a.status === "confirmed"
                      ? "primary"
                      : "warning"
                  }
                >
                  {a.status}
                </Badge>
              </td>
              <td>
                {a.status !== "completed" && (
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
