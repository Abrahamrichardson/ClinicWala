const express = require("express");
const mongoose = require("mongoose");
const Appointment = require("../models/Appointment");
const User = require("../models/User");
const protect = require("../middleware/protect");

const router = express.Router();

/* ===================================================
   1️⃣ GET ALL APPOINTMENTS (ADMIN)
=================================================== */
router.get("/", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const apps = await Appointment.find()
    .populate("doctorId", "name")
    .populate("patientId", "name")
    .sort({ _id: -1 });

  res.json(apps);
});

/* ===================================================
   2️⃣ ADD APPOINTMENT (PATIENT)
=================================================== */
router.post("/", protect, async (req, res) => {
  try {
    if (req.user.role !== "patient") {
      return res.status(403).json({ message: "Patients only" });
    }

    const {
      doctorId,       // frontend doctor id (string / number)
      doctorName,
      specialization,
      doctorCity,
      fee,
      date,
      time,
      reason,
    } = req.body;

    if (!doctorId || !date || !time) {
      return res.status(400).json({
        message: "doctorId, date and time are required",
      });
    }

    // 🔑 FIND REAL DOCTOR USER
    const doctorUser = await User.findOne({
      doctorId: String(doctorId),
      role: "doctor",
    });

    if (!doctorUser) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // 🔑 SAVE APPOINTMENT
    const appointment = new Appointment({
      doctorId: doctorUser._id,   // ✅ MongoDB ObjectId
      patientId: req.user._id,
      doctorName,
      specialization,
      doctorCity,
      fee,
      date,
      time,
      reason,
      status: "pending",          // ⭐ DEFAULT
    });

    await appointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (err) {
    console.error("BOOK APPOINTMENT ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ===================================================
   3️⃣ DELETE APPOINTMENT (ADMIN)
=================================================== */
router.delete("/:id", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

/* ===================================================
   4️⃣ GET LOGGED-IN DOCTOR APPOINTMENTS
   GET /api/appointments/doctor/my
=================================================== */
router.get("/doctor/my", protect, async (req, res) => {
  if (req.user.role !== "doctor") {
    return res.status(403).json({ message: "Doctors only" });
  }

  const apps = await Appointment.find({
    doctorId: req.user._id,
  })
    .populate("patientId", "name phone")
    .sort({ _id: -1 });

  res.json(apps);
});

/* ===================================================
   5️⃣ DOCTOR APPROVE APPOINTMENT
=================================================== */
router.put("/:id/approve", protect, async (req, res) => {
  if (req.user.role !== "doctor") {
    return res.status(403).json({ message: "Doctors only" });
  }

  const appointment = await Appointment.findOne({
    _id: req.params.id,
    doctorId: req.user._id,
  });

  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  appointment.status = "approved";
  await appointment.save();

  res.json({
    message: "Appointment approved",
    appointment,
  });
});

/* ===================================================
   6️⃣ DOCTOR REJECT APPOINTMENT
=================================================== */
router.put("/:id/reject", protect, async (req, res) => {
  if (req.user.role !== "doctor") {
    return res.status(403).json({ message: "Doctors only" });
  }

  const appointment = await Appointment.findOne({
    _id: req.params.id,
    doctorId: req.user._id,
  });

  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  appointment.status = "rejected";
  await appointment.save();

  res.json({
    message: "Appointment rejected",
    appointment,
  });
});

/* ===================================================
   7️⃣ MARK APPOINTMENT AS COMPLETED (DOCTOR)
=================================================== */
router.put("/:id/complete", protect, async (req, res) => {
  if (req.user.role !== "doctor") {
    return res.status(403).json({ message: "Doctors only" });
  }

  const appointment = await Appointment.findOne({
    _id: req.params.id,
    doctorId: req.user._id,
    status: "approved",
  });

  if (!appointment) {
    return res.status(404).json({
      message: "Only approved appointments can be completed",
    });
  }

  appointment.status = "completed";
  await appointment.save();

  res.json({
    message: "Appointment completed",
    appointment,
  });
});

/* ===================================================
   8️⃣ PATIENT DASHBOARD APPOINTMENTS
=================================================== */
router.get("/patient/my", protect, async (req, res) => {
  if (req.user.role !== "patient") {
    return res.status(403).json({ message: "Patients only" });
  }

  const apps = await Appointment.find({
    patientId: req.user._id,
  })
    .populate("doctorId", "name specialization city")

    .sort({ _id: -1 });

  res.json(apps);
});

module.exports = router;
