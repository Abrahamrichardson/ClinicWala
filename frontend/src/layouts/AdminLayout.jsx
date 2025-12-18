import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./AdminLayout.css";

export default function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2 className="admin-logo">ClinicWala</h2>

        <nav>
          <NavLink to="/admin/dashboard" className="admin-link">
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className="admin-link">
            Users
          </NavLink>
          <NavLink to="/admin/appointments" className="admin-link">
            Appointments
          </NavLink>
        </nav>

        <button className="admin-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
