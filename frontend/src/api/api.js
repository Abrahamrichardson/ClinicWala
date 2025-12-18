import axiosClient from "./axiosClient";

// ===============================
// AUTH
// ===============================
export const loginUser = (email, password) =>
  axiosClient.post("/auth/login", { email, password });

export const registerUser = (data) =>
  axiosClient.post("/auth/register", data);

// ===============================
// DOCTORS
// ===============================

// Get all doctors
export const getAllDoctors = () =>
  axiosClient.get("/doctors");

// Get single doctor by ID (✅ FIXED ONCE & FOR ALL)
export const getDoctorById = (id) =>
  axiosClient.get(`/doctors/${id}`).then((res) => {
    const data = res.data;

    const doctor =
      data.doctor ||
      (Array.isArray(data.doctors) && data.doctors[0]) ||
      null;

    return {
      ...res,
      data: { doctor },
    };
  });

// Add doctor (admin)
export const addDoctor = (data) =>
  axiosClient.post("/doctors", data);

// Update doctor (admin)
export const updateDoctor = (id, data) =>
  axiosClient.put(`/doctors/${id}`, data);

// Delete doctor (admin)
export const deleteDoctor = (id) =>
  axiosClient.delete(`/doctors/${id}`);

// ===============================
// APPOINTMENTS
// ===============================
export const createAppointment = (data) =>
  axiosClient.post("/appointments", data);

export const getAllAppointments = () =>
  axiosClient.get("/appointments");

export const deleteAppointment = (id) =>
  axiosClient.delete(`/appointments/${id}`);

export const approveAppointment = (id) =>
  axiosClient.put(`/appointments/approve/${id}`);
