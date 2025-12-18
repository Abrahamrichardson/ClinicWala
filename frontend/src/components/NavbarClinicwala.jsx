import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../components/NavbarClinicwala.css";

import me from "../assets/image.png";
import me1 from "../assets/icn_doc.png";
import me2 from "../assets/icn_lab.png";
import me3 from "../assets/icn_drug.png";
import me4 from "../assets/home_nav.svg";

import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { CURE_LIST } from "../data/CureData";


export default function NavbarClinicwala() {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [lang, setLang] = useState(i18n.language || "en");

  // Listen to language change
  useEffect(() => {
    const handle = (lng) => setLang(lng);
    i18n.on("languageChanged", handle);
    return () => i18n.off("languageChanged", handle);
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // Sticky navbar logic
  useEffect(() => {
    const handleScroll = () => {
      const sec = document.getElementById("second-section");
      if (sec) setIsSticky(sec.getBoundingClientRect().top <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar-wrapper ${isSticky ? "sticky-nav" : ""}`}>

      {/* TOP BAR - DESKTOP */}
      <div className="topbar-desktop">
        <img src={me} className="logo" />

        <div className="call-box">
          <div className="call-number">788 000 3838</div>
          <div className="call-btn">CALL A DOCTOR</div>
        </div>

        {/* TOP BUTTONS (Image 1 Style) */}
        <div className="top-buttons">
          

          <Link to="/doctors" className="top-btn">
            <img src={me1} alt="" />
            <span>
              BOOK DOCTOR <br /> APPOINTMENT
            </span>
          </Link>

          <Link to="/order-test" className="top-btn">
            <img src={me2} alt="" />
            <span>
              ORDER TEST <br /> PATHOLOGY
            </span>
          </Link>

          <Link to="/get-medicines" className="top-btn">
            <img src={me3} alt="" />
            <span>
              GET YOUR <br /> MEDICINES
            </span>
          </Link>

        </div>
      </div>

      {/* TOP BAR - MOBILE */}
      <div className="topbar-mobile">
        <img src={me} className="logo" />

        <div className="mobile-right">
          <select value={lang} onChange={handleLanguageChange}>
            <option value="en">ENGLISH</option>
            <option value="ta">தமிழ்</option>
            <option value="hi">हिन्दी</option>
          </select>

          <Navbar.Toggle className="hamburger-menu" />
        </div>
      </div>

      {/* MOBILE BLUE CATEGORY ROW */}
      <div className="mobile-category-row">
        <Link to="/"><img src={me4} /></Link>
        <Link to="/services"><img src={me1} /><span>CONSULT</span></Link>
        <Link to="/order-test"><img src={me2} /><span>LAB TEST</span></Link>
        <Link to="/get-medicines"><img src={me3} /><span>MEDICINE</span></Link>
      </div>

      {/* MAIN NAVBAR */}
      <Navbar expand="md" className="blue-navbar">
        <Container fluid>

          <Navbar.Collapse id="clinicwala-navbar">
            <Nav className="desktop-menu d-flex align-items-center w-100">

              <Nav.Link as={Link} to="/" className="home-icon">
                <img src={me4} height="20" />
              </Nav.Link>

              <NavDropdown title="SERVICES">
                <NavDropdown.Item as={Link} to="/services">
                  General Consultation
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="E-CLINIC">
                <NavDropdown.Item as={Link} to="/eclinic">
                  Online Consultation
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="FOOD & DIET">
                <NavDropdown.Item as={Link} to="/food-diet">
                  Nutrition
                </NavDropdown.Item>
              </NavDropdown>

            

      <NavDropdown title="FIND CURE">
  {CURE_LIST.map((cure) => (
    <NavDropdown.Item as={Link} key={cure.slug} to={`/cure/${cure.slug}`}>
      {cure.label}
    </NavDropdown.Item>
  ))}
</NavDropdown>



              <NavDropdown title={t("about")} id="about-dropdown">

  <NavDropdown.Item as={HashLink} smooth to="#our-services">
    Our Services
  </NavDropdown.Item>

  

  <NavDropdown.Item as={HashLink} smooth to="#online-appointment">
    Online Appointment
  </NavDropdown.Item>

  

  

  <NavDropdown.Item as={HashLink} smooth to="#diet-foods">
    Diet Foods
  </NavDropdown.Item>

  <NavDropdown.Item as={HashLink} smooth to="#health-blog">
    Health Blog
  </NavDropdown.Item>

  <NavDropdown.Item as={HashLink} smooth to="#alt-medicines">
    Alternative Medicines
  </NavDropdown.Item>

</NavDropdown>

              <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>

              {/* LANGUAGE DROPDOWN RIGHT ALIGN */}
              <select
                className="lang-select-desktop"
                value={lang}
                onChange={handleLanguageChange}
              >
                <option value="en">ENG</option>
                <option value="ta">TAM</option>
                <option value="hi">HIN</option>
              </select>

            </Nav>

            {/* MOBILE MENU */}
            <div className="mobile-menu">
              <NavDropdown title="Menu">
                <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/eclinic">E-Clinic</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/food-diet">Food</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/find-cure">Find Cure</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              </NavDropdown>
            </div>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  );
}
