import axiosClient from "./axiosClient";

// ================= ADMIN DASHBOARD =================
export const getAdminStats = async () => {
  const res = await axiosClient.get("/admin/dashboard");
  return res.data;
};

// ================= USERS =================
export const getUsers = () => axiosClient.get("/users");
export const deleteUser = (id) => axiosClient.delete(`/users/${id}`);
export const updateUser = (id, data) =>
  axiosClient.put(`/users/${id}`, data);

// ================= DOCTORS =================
export const createDoctor = (data) =>
  axiosClient.post("/admin/doctors", data);

export const getAdminDoctors = () =>
  axiosClient.get("/admin/doctors");

export const deleteDoctor = (id) =>
  axiosClient.delete(`/admin/doctors/${id}`);

// ================= CATEGORIES =================
export const getCategories = () =>
  axiosClient.get("/admin/categories");

export const createCategory = (data) =>
  axiosClient.post("/admin/categories", data);

export const deleteCategory = (id) =>
  axiosClient.delete(`/admin/categories/${id}`);

// ================= SUBCATEGORIES =================
export const getSubcategories = () =>
  axiosClient.get("/admin/subcategories");

export const createSubcategory = (data) =>
  axiosClient.post("/admin/subcategories", data);

export const deleteSubcategory = (id) =>
  axiosClient.delete(`/admin/subcategories/${id}`);

// ================= COURSES =================
export const getCourses = () =>
  axiosClient.get("/admin/courses");

export const createCourse = (data) =>
  axiosClient.post("/admin/courses", data);

export const deleteCourse = (id) =>
  axiosClient.delete(`/admin/courses/${id}`);
