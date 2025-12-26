import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="d-flex flex-column text-white min-vh-100">
      <div className="p-3 border-bottom border-secondary">
        <h4 className="mb-0">ClinicWala</h4>
        <small className="text-muted">Admin Panel</small>
      </div>

      <nav className="nav nav-pills flex-column p-2 gap-1 mt-2">

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            "nav-link text-start text-white " +
            (isActive ? "bg-primary" : "bg-transparent")
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/doctors"
          className={({ isActive }) =>
            "nav-link text-start text-white " +
            (isActive ? "bg-primary" : "bg-transparent")
          }
        >
          Add Doctor
        </NavLink>

        <NavLink
          to="/admin/appointments"
          className={({ isActive }) =>
            "nav-link text-start text-white " +
            (isActive ? "bg-primary" : "bg-transparent")
          }
        >
          Appointments
        </NavLink>

        <NavLink
          to="/admin/analytics"
          className={({ isActive }) =>
            "nav-link text-start text-white " +
            (isActive ? "bg-primary" : "bg-transparent")
          }
        >
          Analytics
        </NavLink>

      </nav>

      <div className="mt-auto p-3 small text-muted">
        © {new Date().getFullYear()} ClinicWala
      </div>
    </div>
  );
}
