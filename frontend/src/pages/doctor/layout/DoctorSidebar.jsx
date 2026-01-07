import { NavLink } from "react-router-dom";
import "./DoctorLayout.css";

export default function DoctorSidebar() {
  return (
    <div className="doctor-sidebar">
      <h4 className="sidebar-title">👨‍⚕️ Doctor</h4>

      <NavLink to="/doctor/dashboard" className="sidebar-link">
        Dashboard
      </NavLink>

      <NavLink to="/doctor/appointments" className="sidebar-link">
        Appointments
      </NavLink>

      <NavLink to="/doctor/profile" className="sidebar-link">
        Profile
      </NavLink>
    </div>
  );
}
