import React, { useEffect, useState } from "react";
import { Card, Table, Button, Form } from "react-bootstrap";
import axiosClient from "../api/axiosClient";

export default function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    city: "",
    experience: "",
    fees: "",
    image: "",
  });

  // -----------------------------
  // Fetch Doctors
  // -----------------------------
  const fetchDoctors = async () => {
    try {
      const res = await axiosClient.get("/doctors");

      const list = Array.isArray(res.data)
        ? res.data
        : res.data.doctors || [];

      setDoctors(list);
    } catch (err) {
      console.error("FETCH DOCTORS ERROR:", err);
      setDoctors([]);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  // -----------------------------
  // Handle Form Change
  // -----------------------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // -----------------------------
  // Save Doctor
  // -----------------------------
  const saveDoctor = async (e) => {
    e.preventDefault();

    try {
      await axiosClient.post("/doctors", form);

      setForm({
        name: "",
        specialization: "",
        city: "",
        experience: "",
        fees: "",
        image: "",
      });

      fetchDoctors();
    } catch (err) {
      console.error("SAVE DOCTOR ERROR:", err);
    }
  };

  return (
    <div className="container py-4">
      <h3 className="fw-bold text-primary mb-3">
        Admin – Manage Doctors
      </h3>

      {/* ADD DOCTOR */}
      <Card className="p-3 mb-4 shadow-sm">
        <h5>Add New Doctor</h5>

        <Form onSubmit={saveDoctor}>
          <div className="row">

            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>Specialization</Form.Label>
                <Form.Control
                  name="specialization"
                  value={form.specialization}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>

          </div>

          <div className="row">

            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>Experience (Years)</Form.Label>
                <Form.Control
                  name="experience"
                  type="number"
                  value={form.experience}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>Consultation Fee</Form.Label>
                <Form.Control
                  name="fees"
                  type="number"
                  value={form.fees}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            <div className="col-md-4">
              <Form.Group className="mb-2">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

          </div>

          <Button type="submit" className="mt-3">
            Save Doctor
          </Button>
        </Form>
      </Card>

      {/* DOCTOR LIST */}
      <Card className="p-3 shadow-sm">
        <h5>All Doctors</h5>

        <Table bordered hover responsive className="mt-3">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Specialization</th>
              <th>City</th>
              <th>Experience</th>
              <th>Fee</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((d, i) => (
              <tr key={d._id}>
                <td>{i + 1}</td>
                <td>{d.name}</td>
                <td>{d.specialization}</td>
                <td>{d.city}</td>
                <td>{d.experience}</td>
                <td>₹{d.fees}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
