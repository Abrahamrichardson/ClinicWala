import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <>
      {/* OFFICE DETAILS SECTION */}
      <div className="office-section py-4">
        <Container>
          <Row className="justify-content-center text-white text-start">

            <Col md={3} sm={6} xs={12} className="mb-3 border-end">
              <h6 className="fw-bold text-uppercase">Corporate Office</h6>
              <p className="small mb-1">B 822, Gera, Caranzalem,</p>
              <p className="small mb-1">Panaji, North Goa,</p>
              <p className="small">
                <span className="fw-bold">Goa</span> - 403002 INDIA
              </p>
            </Col>

            <Col md={3} sm={6} xs={12} className="mb-3 border-end">
              <h6 className="fw-bold text-uppercase">Head Office</h6>
              <p className="small mb-1">Office No. 708, Niharika Mirage,</p>
              <p className="small mb-1">Navi Mumbai,</p>
              <p className="small">
                <span className="fw-bold">Maharashtra</span> - 410210 INDIA
              </p>
            </Col>

            <Col md={3} sm={6} xs={12} className="mb-3 border-end">
              <h6 className="fw-bold text-uppercase">Branch Office</h6>
              <p className="small mb-1">G-110, Sita Sadan, P.C. Colony,</p>
              <p className="small mb-1">Kankarbagh, Patna,</p>
              <p className="small">
                <span className="fw-bold">Bihar</span> - 800020 INDIA
              </p>
            </Col>

            <Col md={3} sm={6} xs={12} className="mb-3">
              <h6 className="fw-bold text-uppercase">Branch Office</h6>
              <p className="small mb-1">Plot no. 15, Link Road,</p>
              <p className="small mb-1">Kapurthala City,</p>
              <p className="small">
                <span className="fw-bold">Punjab</span> - 144601 INDIA
              </p>
            </Col>

          </Row>
        </Container>
      </div>

      {/* --- MAIN FOOTER SECTION --- */}
      <footer className="footer-section py-5">
        <Container>
          <Row className="justify-content-center text-white text-start">

            {/* OUR SERVICES */}
            <Col md={3} sm={6} xs={12} className="mb-4">
              <h6 className="fw-bold text-uppercase">Our Services</h6>
              <p className="small m-0">Telemedicine</p>
              <p className="small m-0">Pathology</p>
              <p className="small m-0">Health Record</p>
              <p className="small m-0">Diet Consultation</p>
              <p className="small m-0">Doctors Apps</p>
            </Col>

            {/* ECLINIC FRANCHISE */}
            <Col md={3} sm={6} xs={12} className="mb-4">
              <h6 className="fw-bold text-uppercase">Eclinic Franchise</h6>
              <p className="small m-0">About Program</p>
              <p className="small m-0">Verticals</p>
              <p className="small m-0">Strengths</p>
              <p className="small m-0">Requirements</p>
              <p className="small m-0">Our Offer</p>
            </Col>

            {/* HELP CENTER */}
            <Col md={3} sm={6} xs={12} className="mb-4">
              <h6 className="fw-bold text-uppercase">Help Center</h6>
              <p className="small m-0">E-Consultation Help</p>
              <p className="small m-0">Pathology Help</p>
              <p className="small m-0">Tele-Health Apps</p>
              <p className="small m-0">Health FAQs</p>
              <p className="small m-0">eClinic FAQs</p>
            </Col>

            {/* SOCIAL + LINKS */}
            <Col md={3} sm={6} xs={12} className="mb-4">
              <div className="social-icons mb-3">
                <FaTwitter />
                <FaFacebookF />
                <FaYoutube />
                <FaInstagram />
                <FaLinkedinIn />
              </div>

              <p className="small m-0">Press & Media</p>
              <p className="small m-0">Privacy Policy</p>
              <p className="small m-0">Terms & Conditions</p>
              <p className="small m-0">Refund Policy</p>
              <p className="small m-0">Contact Us</p>
              <p className="small m-0">Sitemap</p>
            </Col>

          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterSection;
