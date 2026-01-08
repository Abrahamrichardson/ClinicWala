import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import NavbarClinicwala from "./components/NavbarClinicwala";
import FooterSection from "./pages/FooterSection";

import AOS from "aos";
import "aos/dist/aos.css";

/* ROUTE GUARDS */
import AdminRoute from "./routes/AdminRoute";
import DoctorRoute from "./routes/DoctorRoute";
import PatientRoute from "./routes/PatientRoute";

/* ADMIN LAYOUT */
import AdminLayout from "./pages/admin/layout/AdminLayout";

/* PUBLIC PAGES */
import Home from "./pages/Home";
import Services from "./pages/Services";
import EClinic from "./pages/EClinic";
import FoodDiet from "./pages/FoodDiet";
import FindCure from "./pages/FindCure";
import FindCureTopic from "./pages/FindCureTopic";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BookDoctor from "./pages/BookDoctor";
import DoctorDetails from "./pages/DoctorsDetails.jsx";
import BookAppointment from "./pages/BookAppointment";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import OrderTest from "./pages/OrderTest";
import GetMedicines from "./pages/GetMedicines";
import RecipeDetails from "./pages/RecipeDetails";

/* ADMIN PAGES */
import AdminDoctors from "./pages/AdminDoctors";
import AdminAppointments from "./pages/AdminAppointments";
import AdminUsers from "./pages/admin/AdminUsers";

/* ADMIN CATALOG */
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminCategories from "./pages/admin/catalog/AdminCategories";
import AdminSubcategories from "./pages/admin/catalog/AdminSubcategories";
import AdminCourses from "./pages/admin/catalog/AdminCourses";
import AdminSettings from "./pages/admin/AdminSettings";

/* DOCTOR & PATIENT */
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
import PatientDashboard from "./pages/patient/PatientDashboard";

/* DOCTOR LAYOUT */
import DoctorLayout from "./pages/doctor/layout/DoctorLayout";

/* 🔐 DOCTOR + ADMIN LOGIN */
import DoctorAdminLogin from "./pages/auth/DoctorAdminLogin";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  /* 🔒 Hide navbar & footer on dashboards + login */
  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/doctor") ||
    location.pathname.startsWith("/patient") ||
    location.pathname.startsWith("/login/dashboard");

  return (
    <>
      {!hideLayout && <NavbarClinicwala />}

      <Routes>
        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/telemedicine" element={<EClinic />} />
        <Route path="/eclinic" element={<EClinic />} />
        <Route path="/food-diet" element={<FoodDiet />} />
        <Route path="/food-diet/:recipeName" element={<RecipeDetails />} />
        <Route path="/about" element={<About />} />

        <Route path="/doctors" element={<BookDoctor />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/book-appointment/:id" element={<BookAppointment />} />
        <Route path="/appointment-success" element={<AppointmentSuccess />} />

        <Route path="/cure/:cureSlug" element={<FindCure />} />
        <Route
          path="/cure/:cureSlug/:topicSlug"
          element={<FindCureTopic />}
        />

        <Route path="/order-test" element={<OrderTest />} />
        <Route path="/get-medicines" element={<GetMedicines />} />

        {/* ================= AUTH ================= */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 👨‍⚕️🛠 Doctor + Admin Login */}
        <Route path="/login/dashboard" element={<DoctorAdminLogin />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<AdminAnalytics />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="doctors" element={<AdminDoctors />} />
            <Route path="appointments" element={<AdminAppointments />} />
            <Route path="catalog/categories" element={<AdminCategories />} />
            <Route path="catalog/subcategories" element={<AdminSubcategories />} />
            <Route path="catalog/courses" element={<AdminCourses />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Route>

        {/* ================= DOCTOR (WITH SIDEBAR) ================= */}
        <Route path="/doctor" element={<DoctorRoute />}>
          <Route element={<DoctorLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DoctorDashboard />} />
            <Route path="appointments" element={<DoctorAppointments />} />
          </Route>
        </Route>

        {/* ================= PATIENT ================= */}
        <Route path="/patient/dashboard" element={
          <PatientRoute>
            <PatientDashboard />
          </PatientRoute>
        } />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {!hideLayout && <FooterSection />}
    </>
  );
}
