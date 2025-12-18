

import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api",
  withCredentials: true,
});

// Doctor — Get my appointments (correct backend route)
export const getDoctorAppointments = () =>
  API.get("/appointments/doctor/my");

// Doctor — Update appointment status (correct backend route)
export const updateAppointmentStatus = (id, status) =>
  API.patch(`/appointments/${id}/status`, { status });
