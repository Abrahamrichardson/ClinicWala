import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./BookDoctor.css";

// Doctor Images
import doc1 from "../assets/43.jpg";
import doc2 from "../assets/4.jpg";
import doc3 from "../assets/5.jpg";
import doc4 from "../assets/6.jpg";
import doc5 from "../assets/7.jpg";
import doc6 from "../assets/8.jpg";
import doc7 from "../assets/9.jpg";
import doc8 from "../assets/10.jpg";
import doc9 from "../assets/11.jpg";
import doc10 from "../assets/12.jpg";
import doc11 from "../assets/13.jpg";
import doc12 from "../assets/25.jpg";
import doc13 from "../assets/41.jpg";


export default function BookDoctor() {
  const navigate = useNavigate();

  // ------------------------------------
  // Doctor Data (Frontend Demo)
  // ------------------------------------
  const DOCTORS = [
    {
      id: 1,
      name: "Dr. Anitha Ramesh",
      spec: "Cardiologist",
      city: "Coimbatore, Tamil Nadu",
      exp: 15,
      fee: 500,
      image: doc1,
    },
    {
      id: 2,
      name: "Dr. Karthik S",
      spec: "Dermatologist",
      city: "Erode, Tamil Nadu",
      exp: 10,
      fee: 400,
      image: doc2,
    },
    {
      id: 3,
      name: "Dr. Priya B",
      spec: "Pediatrician",
      city: "Salem, Tamil Nadu",
      exp: 8,
      fee: 350,
      image: doc3,
    },
    {
      id: 4,
      name: "Dr. Rajesh Kumar",
      spec: "Neurologist",
      city: "Madurai, Tamil Nadu",
      exp: 12,
      fee: 600,
      image: doc4,
    },
    {
      id: 5,
      name: "Dr. Meena G",
      spec: "Gynecologist",
      city: "Tiruppur, Tamil Nadu",
      exp: 14,
      fee: 550,
      image: doc5,
    },
    {
      id: 6,
      name: "Dr. Aravind T",
      spec: "Orthopedic Surgeon",
      city: "Chennai, Tamil Nadu",
      exp: 11,
      fee: 650,
      image: doc6,
    },
    {
      id: 7,
      name: "Dr. Kavitha S",
      spec: "Dentist",
      city: "Erode, Tamil Nadu",
      exp: 9,
      fee: 300,
      image: doc7,
    },
    {
      id: 8,
      name: "Dr. Vignesh P",
      spec: "ENT Specialist",
      city: "Coimbatore, Tamil Nadu",
      exp: 7,
      fee: 400,
      image: doc8,
    },
    {
      id: 9,
      name: "Dr. Deepak R",
      spec: "Psychiatrist",
      city: "Trichy, Tamil Nadu",
      exp: 13,
      fee: 500,
      image: doc9,
    },
    {
      id: 10,
      name: "Dr. Sanjay M",
      spec: "Urologist",
      city: "Salem, Tamil Nadu",
      exp: 10,
      fee: 600,
      image: doc10,
    },
    {
      id: 11,
      name: "Dr. Monica A",
      spec: "Dermatologist",
      city: "Coimbatore, Tamil Nadu",
      exp: 9,
      fee: 450,
      image: doc11,
    },
    {
      id: 12,
      name: "Dr. Ramesh B",
      spec: "Cardiologist",
      city: "Tirunelveli, Tamil Nadu",
      exp: 16,
      fee: 700,
      image: doc12,
    },
    {
      id: 13,
      name: "Dr. Sneha S",
      spec: "Ophthalmologist",
      city: "Erode, Tamil Nadu",
      exp: 6,
      fee: 400,
      image: doc13,
    },
  ];

  // ------------------------------------
  // Book Now Handler
  // ------------------------------------
  const handleBookNow = (doctorId) => {
    navigate(`/book-appointment/${doctorId}`);
  };

  // ------------------------------------
  // UI
  // ------------------------------------
  return (
    <Container fluid className="py-4 bg-light">
      {/* Search Bar */}
      <Row className="mb-4">
        <Col md={9}>
          <Form.Control type="text" placeholder="Search Doctors..." />
        </Col>
      </Row>

      <Row>
        {/* Doctor List */}
        <Col md={9}>
          <Row>
            {DOCTORS.map((doc) => (
              <Col md={6} className="mb-4" key={doc.id}>
                <Card className="shadow-sm rounded-3 border-0">
                  <div className="d-flex align-items-center p-3">
                    <div className="me-3">
                      <div
                        className="rounded-circle overflow-hidden"
                        style={{ width: 80, height: 80 }}
                      >
                        <img
                          src={doc.image}
                          alt={doc.name}
                          width="80"
                          height="80"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>

                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">
                        {doc.name}
                      </h5>
                      <p className="mb-1">{doc.spec}</p>
                      <small className="text-muted">{doc.city}</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">
                          {doc.exp} Years Experience
                        </span>
                      </div>
                    </div>

                    <div className="text-end">
                      <p className="fw-bold mb-1">₹{doc.fee}</p>
                      <Button
                        size="sm"
                        onClick={() => handleBookNow(doc.id)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Filter Sidebar */}
        <Col md={3}>
          <div className="p-3 border rounded bg-white shadow-sm">
            <h6 className="fw-bold mb-3">Filter Doctors</h6>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Specialization</Form.Label>
                <Form.Select>
                  <option>All</option>
                  <option>Cardiologist</option>
                  <option>Dermatologist</option>
                  <option>Pediatrician</option>
                  <option>Neurologist</option>
                  <option>Gynecologist</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" />
              </Form.Group>

              <Button className="w-100">Apply Filters</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
