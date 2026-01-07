import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminRoute = () => {
  const location = useLocation();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role")?.toLowerCase();

  // ❌ Not logged in → doctor/admin login
  if (!token) {
    return (
      <Navigate
        to="/login/dashboard"
        state={{ from: location }}
        replace
      />
    );
  }

  // ❌ Logged in but not admin
  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ Admin allowed
  return <Outlet />;
};

export default AdminRoute;
