import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {
//   FaTwitter,
//   FaFacebookF,
//   FaYoutube,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <>
      {/* --- OFFICE DETAILS SECTION --- */}
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

      {/* --- FOOTER SECTION --- */}
      <footer className="footer-section py-4">
        <Container>
          <Row className="justify-content-center text-white text-start">
            <Col md={3} sm={6} xs={12} className="mb-3">
              <h6 className="fw-bold text-uppercase">Our Services</h6>
              <p className="small m-0">Telemedicine</p>
            </Col>

            <Col md={3} sm={6} xs={12} className="mb-3">
              <h6 className="fw-bold text-uppercase">Eclinic Franchise</h6>
              <p className="small m-0">About Program</p>
            </Col>

            <Col md={3} sm={6} xs={12} className="mb-3">
              <h6 className="fw-bold text-uppercase">Help Center</h6>
              <p className="small m-0">E-Consultation Help</p>
            </Col>

            <Col md={3} sm={6} xs={12} className="mb-3">
              <h6 className="fw-bold text-uppercase">Press & Media</h6>
              {/* <div className="social-icons mt-2">
                <FaTwitter />
                <FaFacebookF />
                <FaYoutube />
                <FaInstagram />
                <FaLinkedinIn />
              </div> */}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterSection;
