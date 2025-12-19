import { Navigate } from "react-router-dom";

export default function PatientRoute({ children }) {
  const role = localStorage.getItem("role");

  if (role !== "patient") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
