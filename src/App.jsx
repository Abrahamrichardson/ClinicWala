import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarClinicwala from "./components/NavbarClinicwala";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import EClinic from "./pages/EClinic";
import FoodDiet from "./pages/FoodDiet";
import FindCure from "./pages/FindCure";
import About from "./pages/About";
import Login from "./pages/Login";
import BookDoctor from "./pages/BookDoctor";
import OrderTest from "./pages/OrderTest";
import GetMedicines from "./pages/GetMedicines";
import FooterSection from "./pages/FooterSection";


export default function App() {
  return (
    <>
  
      <NavbarClinicwala />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/eclinic" element={<EClinic />} />
        <Route path="/food-diet" element={<FoodDiet />} />
        <Route path="/find-cure" element={<FindCure />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-doctor" element={<BookDoctor />} />
        <Route path="/order-test" element={<OrderTest />} />
        <Route path="/get-medicines" element={<GetMedicines />} />
        <Route path="/franchise" element={<EClinic />} />
      </Routes>
      
<FooterSection />

    </>
  );
}
