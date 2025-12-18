import React from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Sidebar */}
        <div className="col-12 col-md-3 col-lg-2 p-0 bg-dark">
          <AdminSidebar />
        </div>

        {/* Content */}
        <div className="col-12 col-md-9 col-lg-10 bg-light p-3 p-md-4">
          {children}
        </div>
      </div>
    </div>
  );
}
