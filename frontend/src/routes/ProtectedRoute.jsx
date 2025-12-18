import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles }) {
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  // Not logged in
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Role restriction (for admin / doctor pages)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Allowed
  return <Outlet />;
}
