import DoctorSidebar from "./DoctorSidebar";
import "./DoctorLayout.css";

export default function DoctorLayout({ children }) {
  return (
    <div className="doctor-layout">
      <DoctorSidebar />
      <div className="doctor-content">
        {children}
      </div>
    </div>
  );
}
