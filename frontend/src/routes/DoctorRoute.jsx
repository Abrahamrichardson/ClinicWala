import { Navigate } from "react-router-dom";

export default function DoctorRoute({ children }) {
  const role = localStorage.getItem("role");

  if (role !== "doctor") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
