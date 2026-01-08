import { Outlet } from "react-router-dom";
import DoctorSidebar from "./DoctorSidebar";
import "./DoctorLayout.css";

export default function DoctorLayout() {
  return (
    <div className="doctor-layout">
      <DoctorSidebar />
      <div className="doctor-content">
        <Outlet />
      </div>
    </div>
  );
}
