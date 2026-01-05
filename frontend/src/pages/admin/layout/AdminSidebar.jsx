import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const linkClass = ({ isActive }) =>
    `nav-link text-start ${
      isActive ? "bg-primary text-white" : "text-white"
    }`;

  return (
    <div className="admin-sidebar d-flex flex-column min-vh-100 text-white">

      {/* HEADER */}
      <div className="p-3 border-bottom border-secondary">
        <h4 className="mb-0">ClinicWala</h4>
        <small className="text-muted">Admin Panel</small>
      </div>

      {/* NAV */}
      <nav className="nav nav-pills flex-column p-2 gap-1 mt-2">

        {/* DASHBOARD */}
        <NavLink to="/admin/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        {/* USER MANAGEMENT */}
        <NavLink to="/admin/users" className={linkClass}>
          Users
        </NavLink>

        <NavLink to="/admin/doctors" className={linkClass}>
          Doctors
        </NavLink>

        <NavLink to="/admin/appointments" className={linkClass}>
          Appointments
        </NavLink>

        {/* CATALOG */}
        <div className="text-uppercase small text-muted mt-3 px-2">
          Catalog
        </div>

        <NavLink to="/admin/catalog/categories" className={linkClass}>
          Categories
        </NavLink>

        <NavLink to="/admin/catalog/subcategories" className={linkClass}>
          Subcategories
        </NavLink>

        <NavLink to="/admin/catalog/courses" className={linkClass}>
          Courses
        </NavLink>

        {/* SETTINGS */}
        <div className="text-uppercase small text-muted mt-3 px-2">
          Settings
        </div>

        <NavLink to="/admin/settings" className={linkClass}>
          Settings
        </NavLink>

      </nav>

      {/* FOOTER */}
      <div className="mt-auto p-3 small text-muted text-center">
        © {new Date().getFullYear()} ClinicWala
      </div>
    </div>
  );
}
