import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const patientId = localStorage.getItem("userId");

  useEffect(() => {
    if (!patientId) return;

    axiosClient
      .get(`/appointments/patient/${patientId}`)
      .then((res) => {
        setAppointments(res.data.appointments || []);
      })
      .catch((err) => {
        console.error("PATIENT APPOINTMENTS ERROR:", err);
      });
  }, [patientId]);

  return (
    <div className="container mt-4">
      <h3>🧑 Patient Dashboard</h3>

      <Button
        className="mb-3"
        onClick={() => navigate("/doctors")}
      >
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
              <td>{a.doctorName}</td>
              <td>{a.specialization}</td>
              <td>{a.doctorCity}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
  variant="outline-primary"
  onClick={() => navigate("/login")}
>
  Back to login
</Button>

    </div>
  );
}
