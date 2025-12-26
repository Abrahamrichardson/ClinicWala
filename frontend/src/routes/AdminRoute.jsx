import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  // 🔐 Not logged in → login page
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ❌ Logged in but not admin → home
  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ Admin allowed → render admin pages
  return <Outlet />;
};

export default AdminRoute;
