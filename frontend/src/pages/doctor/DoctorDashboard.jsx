// import React, { useEffect, useState } from "react";
// import axiosClient from "../../api/axiosClient";

// export default function DoctorDashboard() {
//   const [appts, setAppts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const load = async () => {
//     try {
//       const res = await axiosClient.get("/doctors/appointments/my");
//       setAppts(res.data);
//     } catch {
//       alert("Failed to load appointments");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="doctor-dashboard">
//       <h1>Doctor Dashboard</h1>
//       <h3>My Appointments</h3>

//       {appts.length === 0 ? (
//         <p>No appointments yet.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Patient</th>
//               <th>Date</th>
//               <th>Status</th>
//               <th>Fees</th>
//             </tr>
//           </thead>
//           <tbody>
//             {appts.map((a) => (
//               <tr key={a._id}>
//                 <td>{a.user?.name}</td>
//                 <td>{new Date(a.date).toLocaleString()}</td>
//                 <td>{a.status}</td>
//                 <td>₹{a.fees}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function DoctorDashboard() {
  const [appts, setAppts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAppointments = async () => {
    try {
      // CORRECT ENDPOINT
      const res = await axiosClient.get("/appointments/doctor/my");
      setAppts(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  // Update status (confirm / cancel)
  const updateStatus = async (id, status) => {
    try {
      await axiosClient.patch(`/appointments/${id}/status`, { status });
      loadAppointments();
    } catch (err) {
      console.error(err);
      alert("Failed to update");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="doctor-dashboard container py-4">
      <h2 className="mb-4">Doctor Dashboard</h2>

      <h4>My Appointments</h4>

      {appts.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <table className="table table-bordered table-striped mt-3">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Phone</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {appts.map((a) => (
              <tr key={a._id}>
                <td>{a.user?.name}</td>
                <td>{a.user?.phone}</td>
                <td>{new Date(a.date).toLocaleString()}</td>
                <td>{a.status}</td>

                <td>
                  {a.status === "pending" && (
                    <>
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => updateStatus(a._id, "confirmed")}
                      >
                        Confirm
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => updateStatus(a._id, "cancelled")}
                      >
                        Cancel
                      </button>
                    </>
                  )}

                  {a.status === "confirmed" && (
                    <span className="text-success fw-bold">✔ Confirmed</span>
                  )}

                  {a.status === "cancelled" && (
                    <span className="text-danger fw-bold">✖ Cancelled</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
