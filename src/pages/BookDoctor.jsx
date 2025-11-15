import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import "./BookDoctor.css";
import doc1 from "../assets/2.jpg";
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
import doc13 from "../assets/2.jpg";
import doc14 from "../assets/4.jpg";
import doc15 from "../assets/5.jpg";
import doc16 from "../assets/2.jpg";

function BookDoctor() {
  return (
    <Container fluid className="py-4 bg-light">
      {/* 🔍 Search Bar */}
      <Row className="mb-4">
        <Col md={9}>
          <Form.Control type="text" placeholder="Search Doctors..." />
        </Col>
      </Row>

      <Row>
        {/* 👨‍⚕️ Left Side - Doctor Cards */}
        <Col md={9}>
          <Row>
            {/* Doctor 1 */}
            <Col md={6} className="mb-4">
              <Card className="shadow-sm rounded-3 border-0">
                <div className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <div className="doctor-img rounded-circle overflow-hidden" style={{ width: "80px", height: "80px" }}>
                      <img src={doc1} alt="Dr. Anitha Ramesh" width="80" height="80" style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="text-primary fw-bold mb-1">Dr. Anitha Ramesh</h5>
                    <p className="mb-1">Cardiologist</p>
                    <small className="text-muted">Coimbatore, Tamil Nadu</small>
                    <div className="mt-2"><span className="fw-bold text-success">15 Years Experience</span></div>
                  </div>
                  <div className="text-end">
                    <p className="fw-bold text-dark mb-1">₹500</p>
                    <Button variant="primary" size="sm">Book Now</Button>
                  </div>
                </div>
              </Card>
            </Col>

            
            <Col md={6} className="mb-4">
              <Card className="shadow-sm rounded-3 border-0">
                <div className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <div className="doctor-img rounded-circle overflow-hidden" style={{ width: "80px", height: "80px" }}>
                      <img src={doc2} alt="Dr. Karthik S" width="80" height="80" style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="text-primary fw-bold mb-1">Dr. Karthik S</h5>
                    <p className="mb-1">Dermatologist</p>
                    <small className="text-muted">Erode, Tamil Nadu</small>
                    <div className="mt-2"><span className="fw-bold text-success">10 Years Experience</span></div>
                  </div>
                  <div className="text-end">
                    <p className="fw-bold text-dark mb-1">₹400</p>
                    <Button variant="primary" size="sm">Book Now</Button>
                  </div>
                </div>
              </Card>
            </Col>

            
            <Col md={6} className="mb-4">
              <Card className="shadow-sm rounded-3 border-0">
                <div className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <div className="doctor-img rounded-circle overflow-hidden" style={{ width: "80px", height: "80px" }}>
                      <img src={doc3} alt="Dr. Priya B" width="80" height="80" style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="text-primary fw-bold mb-1">Dr. Priya B</h5>
                    <p className="mb-1">Pediatrician</p>
                    <small className="text-muted">Salem, Tamil Nadu</small>
                    <div className="mt-2"><span className="fw-bold text-success">8 Years Experience</span></div>
                  </div>
                  <div className="text-end">
                    <p className="fw-bold text-dark mb-1">₹350</p>
                    <Button variant="primary" size="sm">Book Now</Button>
                  </div>
                </div>
              </Card>
            </Col>

            
            <Col md={6} className="mb-4">
              <Card className="shadow-sm rounded-3 border-0">
                <div className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <div className="doctor-img rounded-circle overflow-hidden" style={{ width: "80px", height: "80px" }}>
                      <img src={doc4} alt="Dr. Rajesh Kumar" width="80" height="80" style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="text-primary fw-bold mb-1">Dr. Rajesh Kumar</h5>
                    <p className="mb-1">Neurologist</p>
                    <small className="text-muted">Madurai, Tamil Nadu</small>
                    <div className="mt-2"><span className="fw-bold text-success">12 Years Experience</span></div>
                  </div>
                  <div className="text-end">
                    <p className="fw-bold text-dark mb-1">₹600</p>
                    <Button variant="primary" size="sm">Book Now</Button>
                  </div>
                </div>
              </Card>
            </Col>

            
            <Col md={6} className="mb-4">
              <Card className="shadow-sm rounded-3 border-0">
                <div className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <div className="doctor-img rounded-circle overflow-hidden" style={{ width: "80px", height: "80px" }}>
                      <img src={doc5} alt="Dr. Meena G" width="80" height="80" style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="text-primary fw-bold mb-1">Dr. Meena G</h5>
                    <p className="mb-1">Gynecologist</p>
                    <small className="text-muted">Tiruppur, Tamil Nadu</small>
                    <div className="mt-2"><span className="fw-bold text-success">14 Years Experience</span></div>
                  </div>
                  <div className="text-end">
                    <p className="fw-bold text-dark mb-1">₹550</p>
                    <Button variant="primary" size="sm">Book Now</Button>
                  </div>
                </div>
              </Card>
            </Col>

            
            <Col md={6} className="mb-4">
              <Card className="shadow-sm rounded-3 border-0">
                <div className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <div className="doctor-img rounded-circle overflow-hidden" style={{ width: "80px", height: "80px" }}>
                      <img src={doc6} alt="Dr. Aravind T" width="80" height="80" style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="text-primary fw-bold mb-1">Dr. Aravind T</h5>
                    <p className="mb-1">Orthopedic Surgeon</p>
                    <small className="text-muted">Chennai, Tamil Nadu</small>
                    <div className="mt-2"><span className="fw-bold text-success">11 Years Experience</span></div>
                  </div>
                  <div className="text-end">
                    <p className="fw-bold text-dark mb-1">₹650</p>
                    <Button variant="primary" size="sm">Book Now</Button>
                  </div>
                </div>
              </Card>
            </Col>

            
            <Col md={6} className="mb-4">
              <Card className="shadow-sm rounded-3 border-0">
                <div className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <div className="doctor-img rounded-circle overflow-hidden" style={{ width: "80px", height: "80px" }}>
                      <img src={doc7} alt="Dr. Kavitha S" width="80" height="80" style={{ objectFit: "cover" }} />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="text-primary fw-bold mb-1">Dr. Kavitha S</h5>
                    <p className="mb-1">Dentist</p>
                    <small className="text-muted">Erode, Tamil Nadu</small>
                    <div className="mt-2"><span className="fw-bold text-success">9 Years Experience</span></div>
                  </div>
                  <div className="text-end">
                    <p className="fw-bold text-dark mb-1">₹300</p>
                    <Button variant="primary" size="sm">Book Now</Button>
                  </div>
                </div>
              </Card>
            </Col>

            
            <Col md={6} className="mb-4">
            <Card className="shadow-sm rounded-3 border-0">
              <div className="d-flex align-items-center p-3">
                <div className="me-3">
                  <div className="doctor-img rounded-circle overflow-hidden" style={{width:"80px",height:"80px"}}>
                    <img src={doc8} alt="Dr. Vignesh P" width="80" height="80" style={{objectFit:"cover"}}/>
                    </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">Dr. Vignesh P</h5>
                      <p className="mb-1">ENT Specialist</p><small className="text-muted">Coimbatore, Tamil Nadu</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">7 Years Experience</span>
                        </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-dark mb-1">₹400</p>
                          <Button variant="primary" size="sm">Book Now</Button>
                          </div>
                          </div>
                          </Card>
                          </Col>
            <Col md={6} className="mb-4">
            <Card className="shadow-sm rounded-3 border-0">
              <div className="d-flex align-items-center p-3">
                <div className="me-3">
                  <div className="doctor-img rounded-circle overflow-hidden" style={{width:"80px",height:"80px"}}>
                    <img src={doc9} alt="Dr. Deepa R" width="80" height="80" style={{objectFit:"cover"}}/>
                    </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">Dr. Deepa R</h5>
                      <p className="mb-1">Psychiatrist</p>
                      <small className="text-muted">Trichy, Tamil Nadu</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">13 Years Experience</span>
                        </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-dark mb-1">₹500</p>
                          <Button variant="primary" size="sm">Book Now</Button>
                          </div>
                          </div>
                          </Card>
                          </Col>
            <Col md={6} className="mb-4">
            <Card className="shadow-sm rounded-3 border-0">
              <div className="d-flex align-items-center p-3">
                <div className="me-3">
                  <div className="doctor-img rounded-circle overflow-hidden" style={{width:"80px",height:"80px"}}>
                    <img src={doc10} alt="Dr. Sanjay M" width="80" height="80" style={{objectFit:"cover"}}/>
                    </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">Dr. Sanjay M</h5>
                      <p className="mb-1">Urologist</p>
                      <small className="text-muted">Salem, Tamil Nadu</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">10 Years Experience</span>
                        </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-dark mb-1">₹600</p>
                          <Button variant="primary" size="sm">Book Now</Button>
                          </div>
                          </div>
                          </Card>
                          </Col>
            <Col md={6} className="mb-4">
            <Card className="shadow-sm rounded-3 border-0">
              <div className="d-flex align-items-center p-3">
                <div className="me-3">
                  <div className="doctor-img rounded-circle overflow-hidden" style={{width:"80px",height:"80px"}}>
                    <img src={doc11} alt="Dr. Monica A" width="80" height="80" style={{objectFit:"cover"}}/>
                    </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">Dr. Monica A</h5>
                      <p className="mb-1">Dermatologist</p>
                      <small className="text-muted">Coimbatore, Tamil Nadu</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">9 Years Experience</span>
                        </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-dark mb-1">₹450</p>
                          <Button variant="primary" size="sm">Book Now</Button>
                          </div>
                          </div>
                          </Card>
                          </Col>
            <Col md={6} className="mb-4">
            <Card className="shadow-sm rounded-3 border-0">
              <div className="d-flex align-items-center p-3">
                <div className="me-3">
                  <div className="doctor-img rounded-circle overflow-hidden" style={{width:"80px",height:"80px"}}>
                    <img src={doc12} alt="Dr. Ramesh B" width="80" height="80" style={{objectFit:"cover"}}/>
                    </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">Dr. Ramesh B</h5>
                      <p className="mb-1">Cardiologist</p>
                      <small className="text-muted">Tirunelveli, Tamil Nadu</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">16 Years Experience</span>
                        </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-dark mb-1">₹700</p>
                          <Button variant="primary" size="sm">Book Now</Button>
                          </div>
                          </div>
                          </Card>
                          </Col>
            <Col md={6} className="mb-4">
            <Card className="shadow-sm rounded-3 border-0">
              <div className="d-flex align-items-center p-3">
                <div className="me-3">
                  <div className="doctor-img rounded-circle overflow-hidden" style={{width:"80px",height:"80px"}}>
                    <img src={doc13} alt="Dr. Sneha S" width="80" height="80" style={{objectFit:"cover"}}/>
                    </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">Dr. Sneha S</h5>
                      <p className="mb-1">Ophthalmologist</p>
                      <small className="text-muted">Erode, Tamil Nadu</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">6 Years Experience</span>
                        </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-dark mb-1">₹400</p>
                          <Button variant="primary" size="sm">Book Now</Button>
                          </div>
                          </div>
                          </Card>
                          </Col>
            <Col md={6} className="mb-4">
            <Card className="shadow-sm rounded-3 border-0">
              <div className="d-flex align-items-center p-3">
                <div className="me-3">
                  <div className="doctor-img rounded-circle overflow-hidden" style={{width:"80px",height:"80px"}}>
                    <img src={doc14} alt="Dr. Manikandan P" width="80" height="80" style={{objectFit:"cover"}}/>
                    </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">Dr. Manikandan P</h5>
                      <p className="mb-1">General Physician</p>
                      <small className="text-muted">Namakkal, Tamil Nadu</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">8 Years Experience</span>
                        </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-dark mb-1">₹350</p>
                          <Button variant="primary" size="sm">Book Now</Button>
                          </div>
                          </div>
                          </Card>
                          </Col>
            <Col md={6} className="mb-4">
            <Card className="shadow-sm rounded-3 border-0">
              <div className="d-flex align-items-center p-3">
                <div className="me-3">
                  <div className="doctor-img rounded-circle overflow-hidden" style={{width:"80px",height:"80px"}}>
                    <img src={doc15} alt="Dr. Harini R" width="80" height="80" style={{objectFit:"cover"}}/>
                    </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">Dr. Harini R</h5>
                      <p className="mb-1">Gynecologist</p>
                      <small className="text-muted">Chennai, Tamil Nadu</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">11 Years Experience</span>
                        </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-dark mb-1">₹500</p>
                          <Button variant="primary" size="sm">Book Now</Button>
                          </div>
                          </div>
                          </Card>
                          </Col>
            <Col md={6} className="mb-4">
            <Card className="shadow-sm rounded-3 border-0">
              <div className="d-flex align-items-center p-3">
                <div className="me-3">
                  <div className="doctor-img rounded-circle overflow-hidden" style={{width:"80px",height:"80px"}}>
                    <img src={doc16} alt="Dr. Naveen K" width="80" height="80" style={{objectFit:"cover"}}/>
                    </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="text-primary fw-bold mb-1">Dr. Naveen K</h5>
                      <p className="mb-1">Pediatrician</p>
                      <small className="text-muted">Coimbatore, Tamil Nadu</small>
                      <div className="mt-2">
                        <span className="fw-bold text-success">10 Years Experience</span>
                        </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-dark mb-1">₹450</p>
                          <Button variant="primary" size="sm">Book Now</Button>
                          </div>
                          </div>
                          </Card>
                          </Col>
          </Row>
        </Col>

        {/* 🧾 Right Side - Filter Sidebar */}
        <Col md={3}>
          <div className="p-3 border rounded bg-white shadow-sm " style={{ top: "20px" }}>
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
              <Button variant="primary" className="w-100">Apply Filters</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BookDoctor;
