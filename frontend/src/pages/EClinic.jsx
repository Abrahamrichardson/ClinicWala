import React, { useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import AOS from "aos";
import franchiseMenu from "../data/franchiseMenu.json";
import eclinicMenu from "../data/eclinicMenu.json";
import content from "../data/franchiseContent.json";
import "../EClinic.css";
import me1 from "../assets/pharma_intro.png";

function FranchiseLayout() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out"
    });
  }, []);

  return (
    <Container fluid>

      {/* ---------- Banner Image ---------- */}
      <Row>
        <Col className="p-0" >
          <img
            src={me1}
            alt="banner"
            className="img-fluid w-100"
            data-aos="fade-up"
            style={{height:"400px"}}
          />
        </Col>
      </Row>

      {/* ---------- Main Layout ---------- */}
      <Container className="py-5">

        <Row>

          {/* LEFT CONTENT */}
          <Col lg={8} data-aos="fade-up">
            <h3>{content.title}</h3>
            <p>{content.intro}</p>

            <h4 className="mt-4">Why Choose Dawaiwala Pharmacy Franchise?</h4>
            <ul>
              {content.whyChoose.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4 className="mt-5">Our Vision</h4>
            <ul>
              {content.visionPoints.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Col>

          {/* RIGHT SIDEBAR */}
          <Col lg={4}>

            {/* Franchise Menu */}
            <Card className="mb-4 sidebar-card" data-aos="fade-left">
              <Card.Header><b>Franchise</b></Card.Header>
              <ListGroup variant="flush">
                {franchiseMenu.map((item, index) => (
                  <ListGroup.Item key={index} className="hover-item">
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>

            {/* E-Clinic Menu */}
            <Card className="mb-4 sidebar-card" data-aos="fade-left">
              <Card.Header><b>E-Clinic Franchise</b></Card.Header>
              <ListGroup variant="flush">
                {eclinicMenu.map((item, index) => (
                  <ListGroup.Item key={index} className="hover-item">
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>

            

          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default FranchiseLayout;
