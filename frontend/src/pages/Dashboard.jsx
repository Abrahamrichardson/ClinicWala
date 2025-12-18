// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Welcome to Clinicwala Dashboard 🩺</h1>
//       <p>You are successfully logged in.</p>

//       <button onClick={handleLogout} style={{ marginTop: "20px" }}>
//         Logout
//       </button>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Load logged in user + role redirect
  const loadUser = async () => {
    try {
      const res = await axiosClient.get("/auth/me");
      setUser(res.data.user);

      // ROLE REDIRECTS
      if (res.data.user.role === "doctor") {
        navigate("/doctor-dashboard");
        return;
      }

      if (res.data.user.role === "admin") {
        navigate("/admin-dashboard");
        return;
      }

      loadAppointments(); // Only patient gets appointments
    } catch (err) {
      console.log(err);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  // Load patient appointments
  const loadAppointments = async () => {
    try {
      const res = await axiosClient.get("/appointments/my");
      setAppointments(res.data);
    } catch (err) {
      console.log("Failed to load patient appointments");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container py-4">
      <h2 className="mb-3">Welcome, {user?.name}! 👋</h2>

      <div className="mb-3">
        <p><strong>Phone:</strong> {user?.phone}</p>
        {user?.email && <p><strong>Email:</strong> {user.email}</p>}
        <p><strong>Role:</strong> Patient</p>
      </div>

      <button
        className="btn btn-primary mb-4"
        onClick={() => navigate("/book-doctor")}
      >
        Book New Appointment
      </button>

      <hr />

      <h3 className="mt-4">My Appointments</h3>

      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <div className="mt-3">
          {appointments.map((a) => (
            <div key={a._id} className="card p-3 mb-3 shadow-sm">
              <h5>Doctor: {a.doctor?.name}</h5>

              <p>
                <strong>Date & Time:</strong>{" "}
                {new Date(a.date).toLocaleString()}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color:
                      a.status === "confirmed"
                        ? "green"
                        : a.status === "cancelled"
                        ? "red"
                        : "orange",
                  }}
                >
                  {a.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-danger mt-4" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
