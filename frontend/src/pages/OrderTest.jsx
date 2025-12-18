import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function BookDoctor() {
  return (
    <Container className="py-5 text-center">
      <h2 className="text-primary fw-bold mb-3">Order Test Pathology</h2>
      <p className="mb-4">
        <h1>Test you Order</h1>
      </p>
      <Button variant="primary">Book Order</Button>
    </Container>
  );
}
