import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api",
  withCredentials: true,
});

// ✅ Doctor — Get my appointments
export const getDoctorAppointments = () =>
  API.get("/appointments/doctor/my");

// ✅ Doctor — Update appointment status
export const updateAppointmentStatus = (id, status) =>
  API.put(`/appointments/${id}/status`, { status });
