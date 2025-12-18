import React, { useState } from "react";
import AdminLayout from "./layout/AdminLayout";
import { createDoctor } from "../../api/adminApi";

export default function AdminAddDoctor() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    specialization: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      await createDoctor(form);
      alert("Doctor added successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        specialization: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to add doctor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <h2 className="mb-4">Add New Doctor</h2>

      <div className="clinic-card">
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Specialization</label>
            <input
              name="specialization"
              className="form-control"
              placeholder="Cardiologist, Dermatologist..."
              value={form.specialization}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Phone</label>
            <input
              name="phone"
              className="form-control"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 mt-3">
            <button className="btn btn-primary" disabled={loading}>
              {loading ? "Saving..." : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
