import axiosClient from "./axiosClient";

// ===============================
// DASHBOARD
// ===============================
export const getAdminDashboard = () => {
  return axiosClient.get("/admin/dashboard");
};

// ===============================
// USERS (PATIENTS)
// ===============================
export const getUsers = () => {
  return axiosClient.get("/users");
};

export const deleteUser = (id) => {
  return axiosClient.delete(`/users/${id}`);
};

export const updateUser = (id, data) => {
  return axiosClient.put(`/users/${id}`, data);
};

// ===============================
// DOCTORS (ADMIN)
// ===============================
export const createDoctor = (data) => {
  return axiosClient.post("/admin/doctors", data);
};

export const getAdminDoctors = () => {
  return axiosClient.get("/admin/doctors");
};

export const deleteDoctor = (id) => {
  return axiosClient.delete(`/admin/doctors/${id}`);
};

// ===============================
// APPOINTMENTS
// ===============================
export const getAppointments = () => {
  return axiosClient.get("/appointments");
};
