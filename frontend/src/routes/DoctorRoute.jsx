import { Navigate, useLocation, Outlet } from "react-router-dom";

export default function DoctorRoute() {
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role")?.toLowerCase();

  // ❌ Not logged in
  if (!token) {
    return (
      <Navigate
        to="/login/dashboard"
        state={{ from: location }}
        replace
      />
    );
  }

  // ❌ Logged in but not doctor
  if (role !== "doctor") {
    return <Navigate to="/" replace />;
  }

  // ✅ Doctor allowed → render nested routes
  return <Outlet />;
}
