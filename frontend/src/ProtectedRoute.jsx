import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If a specific role is required but user does NOT match
  if (roleRequired && role !== roleRequired) {
    // Redirect them based on their real role
    if (role === "admin") return <Navigate to="/admin" replace />;
    if (role === "doctor") return <Navigate to="/doctor/dashboard" replace />;
    return <Navigate to="/dashboard" replace />; // patient
  }

  return children;
}

export default ProtectedRoute;
