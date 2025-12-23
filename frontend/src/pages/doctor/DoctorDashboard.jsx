import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Table, Button, Badge } from "react-bootstrap";

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);

  const doctorId = localStorage.getItem("userId");
console.log("DASHBOARD doctorId 👉", doctorId);
  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const res = await axiosClient.get(
      `/appointments/doctor/${doctorId}`
    );
    setAppointments(res.data.appointments);
  };

  const markCompleted = async (id) => {
    await axiosClient.put(`/appointments/${id}/complete`);
    loadAppointments();
  };

  return (
    <div className="container mt-4">
      <h3>👨‍⚕️ Doctor Dashboard</h3>

      <Table striped bordered hover>
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
          {appointments.map((a) => (
            <tr key={a._id}>
              <td>{a.patientId?.name}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>{a.reason}</td>
              <td>
                <Badge bg={a.status === "Completed" ? "success" : "warning"}>
                  {a.status}
                </Badge>
              </td>
              <td>
                {a.status !== "Completed" && (
                  <Button
                    size="sm"
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
