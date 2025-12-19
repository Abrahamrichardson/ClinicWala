// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Form, Button, Card, Badge } from "react-bootstrap";
// import { DOCTORS } from "../data/DoctorData"; // ✅ FRONTEND DATA
// import "./BookAppointment.css";

// export default function BookAppointment() {
//   const { id } = useParams(); // ✅ frontend id
//   const navigate = useNavigate();

//   const isLoggedIn = localStorage.getItem("token");

//   // ✅ FIND doctor from frontend data
//   const doctor = DOCTORS.find(
//     (d) => String(d.id) === String(id)
//   );

//   const [submitting, setSubmitting] = useState(false);
//   const [form, setForm] = useState({
//     date: "",
//     time: "",
//     reason: "",
//   });

//   // -----------------------------
//   // Time Slots
//   // -----------------------------
//   const TIME_SLOTS = [
//     "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
//     "12:00 PM", "05:00 PM", "05:30 PM",
//     "06:00 PM", "06:30 PM", "07:00 PM",
//   ];

//   // -----------------------------
//   // Not Found
//   // -----------------------------
//   if (!doctor) {
//     return (
//       <div className="text-center mt-5">
//         <h3 className="text-danger">❌ Doctor Not Found</h3>
//         <Button className="mt-3" onClick={() => navigate(-1)}>
//           ← Go Back
//         </Button>
//       </div>
//     );
//   }

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // -----------------------------
//   // Submit Appointment (FRONTEND)
//   // -----------------------------
//   const submitBooking = (e) => {
//     e.preventDefault();

//     if (!form.date) return alert("❗ Please select appointment date");
//     if (!form.time) return alert("❗ Please choose a time slot");

//     if (!isLoggedIn) {
//       alert("Please login before booking.");
//       navigate("/login");
//       return;
//     }

//     try {
//       setSubmitting(true);

//       const appointment = {
//         id: Date.now(), // fake booking id
//         doctorId: doctor.id,
//         doctorName: doctor.name,
//         specialization: doctor.spec,
//         city: doctor.city,
//         date: form.date,
//         time: form.time,
//         reason: form.reason,
//         status: "Pending",
//       };

//       // ✅ Save in localStorage (frontend demo)
//       const existing =
//         JSON.parse(localStorage.getItem("appointments")) || [];

//       localStorage.setItem(
//         "appointments",
//         JSON.stringify([...existing, appointment])
//       );

//       console.log("FRONTEND APPOINTMENT 👉", appointment);

//       alert("✅ Appointment booked successfully!");
//       navigate("/appointment-success");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // -----------------------------
//   // UI
//   // -----------------------------
//   return (
//     <div className="container py-4">
//       <Button className="mb-3" onClick={() => navigate(-1)}>
//         ← Back
//       </Button>

//       {/* Doctor Info */}
//       <Card className="shadow-sm p-4 mb-4 appointment-card">
//         <div className="doctor-card">
//           <img
//             src={doctor.image}
//             alt={doctor.name}
//             width="130"
//             height="130"
//             className="rounded-circle"
//             style={{ objectFit: "cover" }}
//           />

//           <div className="ms-3">
//             <h3 className="text-primary fw-bold">{doctor.name}</h3>
//             <p className="mb-1">{doctor.spec}</p>
//             <p className="text-success fw-bold">
//               Experience: {doctor.exp} years
//             </p>
//             <p className="fw-bold">
//               Consultation Fee: ₹{doctor.fee}
//             </p>

//             <Badge bg="info" text="dark">
//               {doctor.spec}
//             </Badge>
//           </div>
//         </div>
//       </Card>

//       {/* Booking Form */}
//       <Card className="shadow-sm p-4 appointment-card">
//         <h4 className="text-primary fw-bold mb-3">
//           Select Appointment Slot
//         </h4>

//         <Form onSubmit={submitBooking}>
//           <Form.Group className="mb-3">
//             <Form.Label className="fw-bold">Select Date</Form.Label>
//             <Form.Control
//               type="date"
//               name="date"
//               min={new Date().toISOString().split("T")[0]}
//               value={form.date}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fw-bold">Select Time</Form.Label>
//             <div className="d-flex flex-wrap gap-2">
//               {TIME_SLOTS.map((t) => (
//                 <Button
//                   type="button"
//                   key={t}
//                   variant={form.time === t ? "primary" : "outline-primary"}
//                   onClick={() => setForm({ ...form, time: t })}
//                 >
//                   {t}
//                 </Button>
//               ))}
//             </div>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label className="fw-bold">
//               Describe your issue
//             </Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               name="reason"
//               value={form.reason}
//               onChange={handleChange}
//             />
//           </Form.Group>

//           <Button
//             size="lg"
//             className="w-100"
//             type="submit"
//             disabled={submitting}
//           >
//             {submitting ? "Booking..." : "Confirm Appointment"}
//           </Button>
//         </Form>
//       </Card>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Card, Badge } from "react-bootstrap";
import axiosClient from "../api/axiosClient";
import { DOCTORS } from "../data/DoctorData";
import "./BookAppointment.css";

export default function BookAppointment() {
  const { id } = useParams(); // doctor frontend id
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const patientId = localStorage.getItem("userId");

  // FIND doctor from frontend data
  const doctor = DOCTORS.find((d) => String(d.id) === String(id));

  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    date: "",
    time: "",
    reason: "",
  });

  const TIME_SLOTS = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM", "07:00 PM",
  ];

  if (!doctor) {
    return (
      <div className="text-center mt-5">
        <h3 className="text-danger">❌ Doctor Not Found</h3>
        <Button className="mt-3" onClick={() => navigate(-1)}>
          ← Go Back
        </Button>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ===============================
  // SUBMIT APPOINTMENT (BACKEND)
  // ===============================
  const submitBooking = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login before booking");
      navigate("/login");
      return;
    }

    if (!form.date || !form.time) {
      alert("Please select date & time");
      return;
    }

    try {
      setSubmitting(true);

      await axiosClient.post("/appointments", {
        // 🔥 REQUIRED FOR PATIENT DASHBOARD
        patientId,

        // 🔥 DOCTOR INFO (FROM FRONTEND)
        doctorId: String(doctor.id),
        doctorName: doctor.name,
        specialization: doctor.spec,
        doctorCity: doctor.city,
        fee: doctor.fee,

        // 🔥 BOOKING INFO
        date: form.date,
        time: form.time,
        reason: form.reason,
      });

      alert("✅ Appointment booked successfully");

      // 🔥 REDIRECT TO PATIENT DASHBOARD
      navigate("/patient/dashboard");

    } catch (err) {
      console.error("BOOKING ERROR:", err);
      alert("❌ Failed to book appointment");
    } finally {
      setSubmitting(false);
    }
  };

  // ===============================
  // UI
  // ===============================
  return (
    <div className="container py-4">
      <Button className="mb-3" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      {/* Doctor Info */}
      <Card className="shadow-sm p-4 mb-4 appointment-card">
        <div className="doctor-card">
          <img
            src={doctor.image}
            alt={doctor.name}
            width="130"
            height="130"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />

          <div className="ms-3">
            <h3 className="text-primary fw-bold">{doctor.name}</h3>
            <p className="mb-1">{doctor.spec}</p>
            <p className="text-success fw-bold">
              Experience: {doctor.exp}
            </p>
            <p className="fw-bold">Consultation Fee: ₹{doctor.fee}</p>

            <Badge bg="info" text="dark">
              {doctor.spec}
            </Badge>
          </div>
        </div>
      </Card>

      {/* Booking Form */}
      <Card className="shadow-sm p-4 appointment-card">
        <h4 className="text-primary fw-bold mb-3">
          Select Appointment Slot
        </h4>

        <Form onSubmit={submitBooking}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Select Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              value={form.date}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Select Time</Form.Label>
            <div className="d-flex flex-wrap gap-2">
              {TIME_SLOTS.map((t) => (
                <Button
                  type="button"
                  key={t}
                  variant={form.time === t ? "primary" : "outline-primary"}
                  onClick={() => setForm({ ...form, time: t })}
                >
                  {t}
                </Button>
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Describe your issue</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="reason"
              value={form.reason}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            size="lg"
            className="w-100"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Booking..." : "Confirm Appointment"}
          </Button>
        </Form>
      </Card>
    </div>
  );
}
