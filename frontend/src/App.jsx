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
import Login from "./pages/Login";
import Register from "./pages/Register";
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
import PatientDashboard from "./pages/patient/PatientDashboard";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  // Hide navbar & footer on dashboards
  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/doctor") ||
    location.pathname.startsWith("/patient");

  return (
    <>
      {!hideLayout && <NavbarClinicwala />}

      <Routes>
        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />
        <Route path="/telemedicine" element={<EClinic />} />
        <Route path="/eclinic" element={<EClinic />} />

        <Route path="/food-diet" element={<FoodDiet />} />
        <Route path="/food-diet/:recipeName" element={<RecipeDetails />} />

        <Route path="/doctors" element={<BookDoctor />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/book-appointment/:id" element={<BookAppointment />} />
        <Route path="/appointment-success" element={<AppointmentSuccess />} />

        <Route path="/cure/:cureSlug" element={<FindCure />} />
        <Route path="/cure/:cureSlug/:topicSlug" element={<FindCureTopic />} />

        <Route path="/order-test" element={<OrderTest />} />
        <Route path="/get-medicines" element={<GetMedicines />} />

       {/* ================= ADMIN ================= */}
<Route path="/admin" element={<AdminRoute />}>
  <Route element={<AdminLayout />}>

    {/* DEFAULT → DASHBOARD / ANALYTICS */}
    <Route index element={<Navigate to="dashboard" replace />} />

    {/* DASHBOARD */}
    <Route path="dashboard" element={<AdminAnalytics />} />

    {/* USER MANAGEMENT */}
    <Route path="users" element={<AdminUsers />} />
    <Route path="doctors" element={<AdminDoctors />} />
    <Route path="appointments" element={<AdminAppointments />} />

    {/* CATALOG */}
    <Route path="catalog/categories" element={<AdminCategories />} />
    <Route path="catalog/subcategories" element={<AdminSubcategories />} />
    <Route path="catalog/courses" element={<AdminCourses />} />

    {/* SETTINGS */}
    <Route path="settings" element={<AdminSettings />} />

  </Route>
</Route>



        {/* ================= DOCTOR ================= */}
        <Route
          path="/doctor/dashboard"
          element={
            <DoctorRoute>
              <DoctorDashboard />
            </DoctorRoute>
          }
        />

        {/* ================= PATIENT ================= */}
        <Route
          path="/patient/dashboard"
          element={
            <PatientRoute>
              <PatientDashboard />
            </PatientRoute>
          }
        />
      </Routes>

      {!hideLayout && <FooterSection />}
    </>
  );
}
