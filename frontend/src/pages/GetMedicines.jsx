import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function GetMedicines() {
  return (
    <Container className="py-5 text-center">
      <h2 className="text-primary fw-bold mb-3">Get Your Medicine</h2>
      <p className="mb-4">
        <h1>GetMedicine</h1>
      </p>
      <Button variant="primary">Get</Button>
    </Container>
  );
}
