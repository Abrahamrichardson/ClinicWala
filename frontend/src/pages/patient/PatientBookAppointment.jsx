import React, { useState, useEffect } from "react";
import axiosClient from "../../api/axiosClient";

export default function PatientBookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    doctorId: "",
    date: "",
    time: "",
    reason: "",
  });

  useEffect(() => {
    axiosClient.get("/doctors").then(res =>
      setDoctors(res.data.doctors)
    );
  }, []);

  const submit = async () => {
    await axiosClient.post("/appointments", {
      ...form,
      patientId: localStorage.getItem("userId"),
    });
    alert("Appointment Booked");
  };

  return (
    <div className="container">
      <h3>Book Appointment</h3>

      <select
        onChange={e => setForm({ ...form, doctorId: e.target.value })}
      >
        <option>Select Doctor</option>
        {doctors.map(d => (
          <option key={d._id} value={d._id}>
            {d.name}
          </option>
        ))}
      </select>

      <input type="date" onChange={e => setForm({ ...form, date: e.target.value })} />
      <input type="time" onChange={e => setForm({ ...form, time: e.target.value })} />
      <textarea onChange={e => setForm({ ...form, reason: e.target.value })} />

      <button onClick={submit}>Book</button>
    </div>
  );
}
