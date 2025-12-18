import React, { useEffect, useState } from "react";
import { getDoctorAppointments, updateAppointmentStatus } from "../../api/doctorApi";

export default function DoctorAppointments() {
  const [appts, setAppts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const res = await getDoctorAppointments();
      setAppts(res.data);
      setLoading(false);
    } catch (err) {
      alert("Error loading appointments");
    }
  };

  const handleStatus = async (id, status) => {
    try {
      await updateAppointmentStatus(id, status);
      loadData();
    } catch (err) {
      alert("Failed to update status");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="container py-4">
        <div className="text-center">
          <div className="spinner-border" />
          <p>Loading your appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="mb-4">My Appointments</h2>

      <div className="clinic-card">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-primary">
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {appts.map((a) => (
                <tr key={a._id}>
                  <td>{a.user?.name}</td>
                  <td>{new Date(a.date).toLocaleString()}</td>
                  <td>{a.reason || "-"}</td>
                  <td>
                    <span
                      className={`badge ${
                        a.status === "confirmed"
                          ? "bg-success"
                          : a.status === "cancelled"
                          ? "bg-danger"
                          : a.status === "completed"
                          ? "bg-secondary"
                          : "bg-warning"
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td>
                    {a.status === "pending" && (
                      <>
                        <button
                          className="btn btn-sm btn-success me-1"
                          onClick={() => handleStatus(a._id, "confirmed")}
                        >
                          Confirm
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleStatus(a._id, "cancelled")}
                        >
                          Cancel
                        </button>
                      </>
                    )}

                    {a.status === "confirmed" && (
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={() => handleStatus(a._id, "completed")}
                      >
                        Mark Completed
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {appts.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center">
                    No appointments yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
