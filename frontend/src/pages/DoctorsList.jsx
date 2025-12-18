import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Form } from "react-bootstrap";
import { DOCTORS } from "../data/doctors"; // ✅ FRONTEND DATA
import "./DoctorsList.css";

export default function DoctorsList() {
  const navigate = useNavigate();

  // ✅ Frontend-only doctors data
  const [doctors] = useState(DOCTORS);

  const [search, setSearch] = useState("");
  const [filterSpec, setFilterSpec] = useState("");

  // -------------------------------------------------------
  // Unique Specializations (safe)
  // -------------------------------------------------------
  const specializations = [
    ...new Set(doctors.map((d) => d.spec).filter(Boolean)),
  ];

  // -------------------------------------------------------
  // Search + Filter
  // -------------------------------------------------------
  const filteredDoctors = doctors.filter((doc) => {
    const text = search.toLowerCase();

    const matchesSearch =
      doc.name?.toLowerCase().includes(text) ||
      doc.spec?.toLowerCase().includes(text) ||
      doc.city?.toLowerCase().includes(text);

    const matchesSpec = filterSpec ? doc.spec === filterSpec : true;

    return matchesSearch && matchesSpec;
  });

  // -------------------------------------------------------
  // UI
  // -------------------------------------------------------
  return (
    <div className="container py-4 doctor-list-container">
      <h2 className="doctor-list-title">Find a Doctor</h2>

      {/* Search & Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <Form.Control
            type="text"
            placeholder="Search by name, specialization or city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-2">
          <Form.Select
            value={filterSpec}
            onChange={(e) => setFilterSpec(e.target.value)}
          >
            <option value="">Filter by Specialization</option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="row">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <div className="col-md-4 mb-4" key={doc.id}>
              <Card className="shadow-sm border-0 doctor-card h-100">
                <Card.Img
                  variant="top"
                  src={doc.image}
                  alt={doc.name}
                  className="doctor-card-img"
                />

                <Card.Body>
                  <h4 className="doctor-name">{doc.name}</h4>
                  <p className="doctor-spec">{doc.spec}</p>
                  <p className="doctor-exp">
                    Experience: {doc.exp}
                  </p>
                  <p className="doctor-fee">
                    Fee: ₹{doc.fee}
                  </p>

                  {/* ✅ FRONTEND ROUTING (CORRECT) */}
                  <Button
                    className="doctor-btn w-100"
                    onClick={() => navigate(`/doctor/${doc.id}`)}
                  >
                    View Profile
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h4 className="text-center mt-5 text-danger">
            ❌ No doctors found
          </h4>
        )}
      </div>
    </div>
  );
}
