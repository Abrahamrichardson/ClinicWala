import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Table, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const res = await axiosClient.get("/appointments/patient/my");
      setAppointments(res.data || []);
    } catch (err) {
      console.error("PATIENT APPOINTMENTS ERROR:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h3>🧑 Patient Dashboard</h3>

      <Button className="mb-3" onClick={() => navigate("/doctors")}>
        + Book Appointment
      </Button>

      <Table bordered hover>
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Specialization</th>
            <th>City</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {appointments.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No appointments booked yet
              </td>
            </tr>
          )}

          {appointments.map((a) => (
            <tr key={a._id}>
              <td>{a.doctorName || "—"}</td>
              <td>{a.specialization || "—"}</td>
              <td>{a.doctorCity || "—"}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>
                <Badge
                  bg={
                    a.status === "pending"
                      ? "warning"
                      : a.status === "confirmed"
                      ? "success"
                      : "secondary"
                  }
                >
                  {a.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="outline-primary" onClick={() => navigate("/login")}>
        Back to login
      </Button>
    </div>
  );
}
