import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  UserDoctor,
  Users,
  Calendar,
  Settings,
  Layers
} from "lucide-react";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white shadow-lg">
        <h2 className="text-xl font-bold p-4 border-b">ClinicWala</h2>

        <nav className="p-4 space-y-2">

          <NavLink to="/admin/adminUsers" className="nav-link">
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <NavLink to="/admin/doctors" className="nav-link">
            <UserDoctor size={18} /> Doctors
          </NavLink>

          <NavLink to="/admin/patients" className="nav-link">
            <Users size={18} /> Patients
          </NavLink>

          <NavLink to="/admin/appointments" className="nav-link">
            <Calendar size={18} /> Appointments
          </NavLink>

          {/* ===== CATALOG SECTION ===== */}
          <div className="mt-4">
            <p className="text-xs text-gray-500 uppercase mb-2">
              Catalog
            </p>

            <NavLink
              to="/admin/catalog/categories"
              className="nav-link ml-3"
            >
              <Layers size={16} /> Categories
            </NavLink>

            <NavLink
              to="/admin/catalog/subcategories"
              className="nav-link ml-3"
            >
              <Layers size={16} /> Subcategories
            </NavLink>

            <NavLink
              to="/admin/catalog/courses"
              className="nav-link ml-3"
            >
              <Layers size={16} /> Courses
            </NavLink>
          </div>

          {/* SETTINGS */}
          <NavLink to="/admin/settings" className="nav-link mt-4">
            <Settings size={18} /> Settings
          </NavLink>

        </nav>
      </aside>

      {/* CONTENT */}
      <div className="flex-1">
        <header className="bg-white shadow px-6 py-3 font-semibold">
          Admin Panel
        </header>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
