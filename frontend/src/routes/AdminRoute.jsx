import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminRoute = () => {
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role")?.toLowerCase(); // normalize

  // 🔐 Not logged in → redirect to login
  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // ❌ Logged in but not admin → redirect to home
  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ Admin authenticated → allow access
  return <Outlet />;
};

export default AdminRoute;
