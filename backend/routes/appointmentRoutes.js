const express = require("express");
const Appointment = require("../models/Appointment");
const protect = require("../middleware/protect"); // 🔥 FIX
const router = express.Router();


// ===================================================
// 1️⃣ GET ALL APPOINTMENTS (ADMIN ONLY)
// ===================================================
router.get("/", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const apps = await Appointment.find().sort({ _id: -1 });
  res.json(apps);
});


// ===================================================
// 2️⃣ ADD APPOINTMENT (PATIENT)
// ===================================================
router.post("/", protect, async (req, res) => {
  if (req.user.role !== "patient") {
    return res.status(403).json({ message: "Patients only" });
  }

  const app = new Appointment({
    ...req.body,
    status: "Booked",   // default
  });

  await app.save();
  res.json(app);
});


// ===================================================
// 3️⃣ DELETE APPOINTMENT (ADMIN ONLY)
// ===================================================
router.delete("/:id", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});


// ===================================================
// 4️⃣ APPROVE APPOINTMENT (ADMIN)
// ===================================================
router.put("/approve/:id", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const updated = await Appointment.findByIdAndUpdate(
    req.params.id,
    { status: "Approved" },
    { new: true }
  );

  res.json(updated);
});


// ===================================================
// 5️⃣ GET APPOINTMENTS BY DOCTOR (DOCTOR DASHBOARD)
// doctorId = FRONTEND doctor id (ex: "doc1")
// ===================================================
router.get("/doctor/:doctorId", protect, async (req, res) => {
  if (req.user.role !== "doctor") {
    return res.status(403).json({ message: "Doctors only" });
  }

  const apps = await Appointment.find({
    doctorId: req.params.doctorId,
  }).sort({ _id: -1 });

  res.json({ appointments: apps });
});


// ===================================================
// 6️⃣ MARK APPOINTMENT AS COMPLETED (DOCTOR)
// ===================================================
router.put("/:id/complete", protect, async (req, res) => {
  if (req.user.role !== "doctor") {
    return res.status(403).json({ message: "Doctors only" });
  }

  const updated = await Appointment.findByIdAndUpdate(
    req.params.id,
    { status: "Completed" },
    { new: true }
  );

  res.json(updated);
});


// ===================================================
// 7️⃣ GET APPOINTMENTS BY PATIENT (PATIENT DASHBOARD)
// ===================================================
router.get("/patient/:patientId", protect, async (req, res) => {
  if (req.user.role !== "patient") {
    return res.status(403).json({ message: "Patients only" });
  }

  const apps = await Appointment.find({
    patientId: req.params.patientId,
  }).sort({ _id: -1 });

  res.json({ appointments: apps });
});

module.exports = router;
