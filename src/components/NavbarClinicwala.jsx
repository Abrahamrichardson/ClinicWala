

// import React, { useEffect, useState } from "react";
// import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import me from "../assets/image.png";
// import me1 from "../assets/icn_doc.png";
// import me2 from "../assets/icn_lab.png";
// import me3 from "../assets/icn_drug.png";
// import me4 from "../assets/home_nav.svg";
// import "../components/NavbarClinicwala.css";
// import i18n from "i18next";
// import { useTranslation } from "react-i18next";

// export default function NavbarClinicwala() {
//   const [isSticky, setIsSticky] = useState(false);

// useEffect(() => {

//     useEffect(() => {
//     const handle = (lng) => setLang(lng);
//     i18n.on("languageChanged", handle);
//     return () => i18n.off("languageChanged", handle);
//   }, []);

//   const handleLanguageChange = (e) => {
//     const lng = e.target.value;
//     i18n.changeLanguage(lng);
//     setLang(lng);
//   };


//   const handleScroll = () => {
//     const section = document.getElementById("second-section");

//     if (section) {
//       const top = section.getBoundingClientRect().top;

//       if (top <= 0) {
//         setIsSticky(true);     // SECOND SECTION reached → stick
//       } else {
//         setIsSticky(false);    // Before that → normal
//       }
//     }
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);




//   return (
//     <>
//       <div id="navbar-wrapper" className={`navbar-wrapper ${isSticky ? "sticky-nav" : ""}`}>


//         {/* -------------------- TOP BAR -------------------- */}
//         <div className="btn top-bar d-flex justify-content-between align-items-center w-full px-4 py-2">
//           <img src={me} alt="ClinicWala Logo" />

//           <div>
//             <button className="btn btn-sm btn-outline-white ms-2">
//               <strong style={{ color: "#3a609bff" }}>788 000 3838</strong> <br />
//               <div style={{ backgroundColor: "#3a609bff", color: "white" }}>
//                 CALL A DOCTOR
//               </div>
//             </button>
//           </div>

//           <div className="d-flex align-items-center gap-3">
//             <Link to="/book-doctor" className="text-decoration-none">
//               <div className="d-flex flex-row">
//                 <div style={{ backgroundColor: "#3a609bff", padding: "6px" }}>
//                   <img src={me1} style={{ height: "28px" }} />
//                 </div>
//                 <div
//                   style={{
//                     paddingLeft: "5px",
//                     color: "#3a609bff",
//                     backgroundColor: "#ecf0f7ff",
//                   }}
//                 >
//                   <strong>BOOK DOCTOR <br /> APPOINTMENT</strong>
//                 </div>
//               </div>
//             </Link>

//             <Link to="/order-test" className="text-decoration-none">
//               <div className="d-flex flex-row">
//                 <div style={{ backgroundColor: "#3a609bff", padding: "6px" }}>
//                   <img src={me2} style={{ height: "28px" }} />
//                 </div>
//                 <div
//                   style={{
//                     paddingLeft: "5px",
//                     color: "#3a609bff",
//                     backgroundColor: "#ecf0f7ff",
//                   }}
//                 >
//                   <strong>ORDER TEST <br /> PATHOLOGY</strong>
//                 </div>
//               </div>
//             </Link>

//             <Link to="/get-medicines" className="text-decoration-none">
//               <div className="d-flex flex-row">
//                 <div style={{ backgroundColor: "#3a609bff", padding: "6px" }}>
//                   <img src={me3} style={{ height: "28px" }} />
//                 </div>
//                 <div
//                   style={{
//                     paddingLeft: "5px",
//                     color: "#3a609bff",
//                     backgroundColor: "#ecf0f7ff",
//                   }}
//                 >
//                   <strong>GET YOUR <br /> MEDICINES</strong>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* -------------------- MAIN NAVBAR -------------------- */}
//         {/* <Navbar
//           expand="lg"
//           variant="dark"
//           className={`clinic-nav ${isSticky ? "sticky-nav" : ""}`}
//         > */}

//         <Navbar
 
// >

//           <Container fluid>
//             <Navbar.Toggle aria-controls="clinicwala-navbar" />
//             <Navbar.Collapse id="clinicwala-navbar">
//               <Nav className="me-auto" style={{ gap: "20px" }}>
//                 <Nav.Link as={Link} to="/">
//                   <i className="bi bi-house"></i>
//                 </Nav.Link>

//                 <Navbar.Brand as={Link} to="/">
//                   <img
//                     style={{
//                       color: "white",
//                       marginLeft: "0px",
//                       height: "20px",
//                       marginTop: "-5px",
//                     }}
//                     src={me4}
//                   />
//                 </Navbar.Brand>

//                 <NavDropdown title={t("services")}>

//                   <NavDropdown.Item as={Link} to="/services">
//                     General Consultation
//                   </NavDropdown.Item>
//                   <NavDropdown.Item>Telemedicine</NavDropdown.Item>
//                   <NavDropdown.Item>Lab Testing</NavDropdown.Item>
//                 </NavDropdown>

//                 <NavDropdown title="E-CLINIC">
//                   <NavDropdown.Item as={Link} to="/eclinic">
//                     Online Consultation
//                   </NavDropdown.Item>
//                 </NavDropdown>

//                 <NavDropdown title="FOOD & DIET">
//                   <NavDropdown.Item as={Link} to="/food-diet">
//                     Nutrition Advice
//                   </NavDropdown.Item>
//                 </NavDropdown>

//                 <NavDropdown title="FIND CURE">
//                   <NavDropdown.Item as={Link} to="/find-cure">
//                     Find Doctor
//                   </NavDropdown.Item>
//                 </NavDropdown>




//                 <NavDropdown title="ABOUT" id="about-dropdown">
//   <NavDropdown.Item href="#our-services">Our Services</NavDropdown.Item>
//   <NavDropdown.Item href="#our-departments">Our Departments</NavDropdown.Item>
//   <NavDropdown.Item href="#online-appointment">Online Appointment</NavDropdown.Item>
//   <NavDropdown.Item href="#eclinic-franchise">E-Clinic Franchise</NavDropdown.Item>
//   <NavDropdown.Item href="#health-wellness">Health & Wellness Initiatives</NavDropdown.Item>
//   <NavDropdown.Item href="#diet-foods">Diet Foods</NavDropdown.Item>
//   <NavDropdown.Item href="#health-blog">Health Blog</NavDropdown.Item>
//   <NavDropdown.Item href="#alternative-medicines">Alternative Medicines</NavDropdown.Item>
// </NavDropdown>


//                 <Nav.Link as={Link} to="/login">
//                   LOGIN
//                 </Nav.Link>
//               </Nav>
//             </Navbar.Collapse>

//             <select
//   className="form-select form-select-sm w-auto"
//   onChange={(e) => i18n.changeLanguage(e.target.value)}
// >
//   <option value="en">ENG</option>
//   <option value="ta">TAM</option>
// </select>
//           </Container>
//         </Navbar>
//       </div>
//     </>
//   );
// }



import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import me from "../assets/image.png";
import me1 from "../assets/icn_doc.png";
import me2 from "../assets/icn_lab.png";
import me3 from "../assets/icn_drug.png";
import me4 from "../assets/home_nav.svg";
import "../components/NavbarClinicwala.css";

import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function NavbarClinicwala() {
  const [isSticky, setIsSticky] = useState(false);

  // ADD THIS — important!
  const { t } = useTranslation();

  const [lang, setLang] = useState(i18n.language || "en");

  useEffect(() => {
    const handle = (lng) => setLang(lng);
    i18n.on("languageChanged", handle);
    return () => i18n.off("languageChanged", handle);
  }, []);

  const handleLanguageChange = (e) => {
    const lng = e.target.value;
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  // Sticky navbar logic
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("second-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        setIsSticky(top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="navbar-wrapper"
        className={`navbar-wrapper ${isSticky ? "sticky-nav" : ""}`}
      >
        {/* -------------------- TOP BAR -------------------- */}
        <div className="btn top-bar d-flex justify-content-between align-items-center w-full px-4 py-2">
          <img src={me} alt="ClinicWala Logo" />

          <div>
            <button className="btn btn-sm btn-outline-white ms-2">
              <strong style={{ color: "#3a609bff" }}>788 000 3838</strong> <br />
              <div style={{ backgroundColor: "#3a609bff", color: "white" }}>
                CALL A DOCTOR
              </div>
            </button>
          </div>

          <div className="d-flex align-items-center gap-3">
            <Link to="/book-doctor" className="text-decoration-none">
              <div className="d-flex flex-row">
                <div style={{ backgroundColor: "#3a609bff", padding: "6px" }}>
                  <img src={me1} style={{ height: "28px" }} />
                </div>
                <div
                  style={{
                    paddingLeft: "5px",
                    color: "#3a609bff",
                    backgroundColor: "#ecf0f7ff",
                  }}
                >
                  <strong>BOOK DOCTOR <br /> APPOINTMENT</strong>
                </div>
              </div>
            </Link>

            <Link to="/order-test" className="text-decoration-none">
              <div className="d-flex flex-row">
                <div style={{ backgroundColor: "#3a609bff", padding: "6px" }}>
                  <img src={me2} style={{ height: "28px" }} />
                </div>
                <div
                  style={{
                    paddingLeft: "5px",
                    color: "#3a609bff",
                    backgroundColor: "#ecf0f7ff",
                  }}
                >
                  <strong>ORDER TEST <br /> PATHOLOGY</strong>
                </div>
              </div>
            </Link>

            <Link to="/get-medicines" className="text-decoration-none">
              <div className="d-flex flex-row">
                <div style={{ backgroundColor: "#3a609bff", padding: "6px" }}>
                  <img src={me3} style={{ height: "28px" }} />
                </div>
                <div
                  style={{
                    paddingLeft: "5px",
                    color: "#3a609bff",
                    backgroundColor: "#ecf0f7ff",
                  }}
                >
                  <strong>GET YOUR <br /> MEDICINES</strong>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* -------------------- MAIN NAVBAR -------------------- */}
        <Navbar>
          <Container fluid>
            <Navbar.Toggle aria-controls="clinicwala-navbar" />
            <Navbar.Collapse id="clinicwala-navbar">
              <Nav className="me-auto" style={{ gap: "20px" }}>
                <Nav.Link as={Link} to="/">
                  <i className="bi bi-house"></i>
                </Nav.Link>

                <Navbar.Brand as={Link} to="/">
                  <img
                    style={{
                      color: "white",
                      marginLeft: "0px",
                      height: "20px",
                      marginTop: "-5px",
                    }}
                    src={me4}
                  />
                </Navbar.Brand>

                {/* <NavDropdown title={t("Services")}>


                  <NavDropdown.Item as={Link} to="/services">
                    General Consultation
                  </NavDropdown.Item>
                  <NavDropdown.Item>Telemedicine</NavDropdown.Item>
                  <NavDropdown.Item>Lab Testing</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t("EClinic")}>


                  <NavDropdown.Item as={Link} to="/eclinic">
                    Online Consultation
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t("FoodDiet")}>


                  <NavDropdown.Item as={Link} to="/food-diet">
                    Nutrition Advice
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t("FindCure")}>


                  <NavDropdown.Item as={Link} to="/find-cure">
                    Find Doctor
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={t("About")} id="about-dropdown">

                  <NavDropdown.Item>Our Services</NavDropdown.Item>
                  <NavDropdown.Item>Our Departments</NavDropdown.Item>
                  <NavDropdown.Item>Online Appointment</NavDropdown.Item>
                  <NavDropdown.Item>E-Clinic Franchise</NavDropdown.Item>
                  <NavDropdown.Item>Health & Wellness</NavDropdown.Item>
                  <NavDropdown.Item>Diet Foods</NavDropdown.Item>
                  <NavDropdown.Item>Health Blog</NavDropdown.Item>
                  <NavDropdown.Item>Alternative Medicines</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/login">
                       {t("login")}
                      </Nav.Link> */}



                      <NavDropdown title={t("services")}>
  <NavDropdown.Item as={Link} to="/services">
    General Consultation
  </NavDropdown.Item>
  <NavDropdown.Item>Telemedicine</NavDropdown.Item>
  <NavDropdown.Item>Lab Testing</NavDropdown.Item>
</NavDropdown>

<NavDropdown title={t("eclinic")}>
  <NavDropdown.Item as={Link} to="/eclinic">
    Online Consultation
  </NavDropdown.Item>
</NavDropdown>

<NavDropdown title={t("foodDiet")}>
  <NavDropdown.Item as={Link} to="/food-diet">
    Nutrition Advice
  </NavDropdown.Item>
</NavDropdown>

<NavDropdown title={t("findCure")}>
  <NavDropdown.Item as={Link} to="/find-cure">
    Find Doctor
  </NavDropdown.Item>
</NavDropdown>

<NavDropdown title={t("about")} id="about-dropdown">
  <NavDropdown.Item>Our Services</NavDropdown.Item>
  <NavDropdown.Item>Our Departments</NavDropdown.Item>
  <NavDropdown.Item>Online Appointment</NavDropdown.Item>
  <NavDropdown.Item>E-Clinic Franchise</NavDropdown.Item>
  <NavDropdown.Item>Health & Wellness</NavDropdown.Item>
  <NavDropdown.Item>Diet Foods</NavDropdown.Item>
  <NavDropdown.Item>Health Blog</NavDropdown.Item>
  <NavDropdown.Item>Alternative Medicines</NavDropdown.Item>
</NavDropdown>

<Nav.Link as={Link} to="/login">
  {t("login")}
</Nav.Link>

              </Nav>
            </Navbar.Collapse>

            {/* LANGUAGE SWITCHER — FIXED */}
            <select
              className="form-select form-select-sm w-auto"
              value={lang}
              onChange={handleLanguageChange}
            >
              <option value="en">ENG</option>
              <option value="ta">TAM</option>
            </select>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
