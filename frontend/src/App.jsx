import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import NavbarClinicwala from "./components/NavbarClinicwala";
import FooterSection from "./pages/FooterSection";

import AOS from "aos";
import "aos/dist/aos.css";

/* ROUTE GUARDS */
import AdminRoute from "./routes/AdminRoute";
import DoctorRoute from "./routes/DoctorRoute";
import PatientRoute from "./routes/PatientRoute";

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
import DoctorDetails from "./pages/DoctorsDetails";
import BookAppointment from "./pages/BookAppointment";
import AppointmentSuccess from "./pages/AppointmentSuccess";
import OrderTest from "./pages/OrderTest";
import GetMedicines from "./pages/GetMedicines";
import RecipeDetails from "./pages/RecipeDetails";

/* ADMIN */
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAppointments from "./pages/AdminAppointments";
import AdminDoctors from "./pages/AdminDoctors";
import AdminUsers from "./pages/AdminUsers";
import UsersPage from "./pages/UsersPage";

/* DOCTOR & PATIENT */
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import PatientDashboard from "./pages/patient/PatientDashboard";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  // Hide navbar & footer on dashboard pages
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

        {/* SERVICES */}
        <Route path="/services" element={<Services />} />
        <Route path="/telemedicine" element={<EClinic />} />
        <Route path="/eclinic" element={<EClinic />} />
        <Route path="/pathology" element={<Services />} />
        <Route path="/health-records" element={<Services />} />

        {/* FOOD / DIET */}
        <Route path="/food-diet" element={<FoodDiet />} />
        <Route path="/food-diet/:recipeName" element={<RecipeDetails />} />

        {/* BOOK DOCTOR */}
        <Route path="/doctors" element={<BookDoctor />} />
        <Route path="/book-doctor" element={<BookDoctor />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/book-appointment/:id" element={<BookAppointment />} />
        <Route path="/appointment-success" element={<AppointmentSuccess />} />

        {/* FIND CURE */}
        <Route path="/cure/:cureSlug" element={<FindCure />} />
        <Route
          path="/cure/:cureSlug/:topicSlug"
          element={<FindCureTopic />}
        />

        {/* OTHER */}
        <Route path="/order-test" element={<OrderTest />} />
        <Route path="/get-medicines" element={<GetMedicines />} />

        {/* ================= ADMIN ================= */}
        <Route
          path="/admin"
          element={<Navigate to="/admin/dashboard" replace />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/appointments"
          element={
            <AdminRoute>
              <AdminAppointments />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/doctors"
          element={
            <AdminRoute>
              <AdminDoctors />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminUsers />
            </AdminRoute>
          }
        />

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
