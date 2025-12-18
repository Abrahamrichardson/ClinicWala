import axiosClient from "./axiosClient";

// ===============================
// USERS
// ===============================

// Get all users
export const getAllUsers = () => {
  return axiosClient.get("/admin/users");
};

// Change user role
export const updateUserRole = (userId, role) => {
  return axiosClient.patch(`/admin/users/${userId}/role`, { role });
};

// Delete user (backend supports this)
export const deleteUser = (userId) => {
  return axiosClient.delete(`/admin/users/${userId}`);
};


// ===============================
// APPOINTMENTS
// ===============================

// Get all appointments
export const getAppointments = () => {
  return axiosClient.get("/admin/appointments");
};

// ===============================
// DOCTORS
// ===============================

// Create new doctor (works)
export const createDoctor = (data) => {
  return axiosClient.post("/admin/doctors", data);
};

// Get all doctors — use PUBLIC route, not admin route
export const getAllDoctors = () => {
  return axiosClient.get("/doctors");
};

// Doctor delete DOES NOT EXIST in backend — removed
// If you want delete doctor: add route in backend


// ===============================
// ANALYTICS
// ===============================

// Admin Stats (if backend has it)
export const getAdminStats = () => {
  return axiosClient.get("/admin/stats");
};
