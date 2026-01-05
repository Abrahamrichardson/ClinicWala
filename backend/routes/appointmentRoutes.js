const express = require("express");
const Appointment = require("../models/Appointment");
const protect = require("../middleware/protect");
const mongoose = require("mongoose");

const router = express.Router();

/* ===================================================
   1️⃣ GET ALL APPOINTMENTS (ADMIN)
=================================================== */
router.get("/", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const apps = await Appointment.find().sort({ _id: -1 });
  res.json(apps);
});

/* ===================================================
   2️⃣ ADD APPOINTMENT (PATIENT)
=================================================== */
router.post("/", protect, async (req, res) => {
  if (req.user.role !== "patient") {
    return res.status(403).json({ message: "Patients only" });
  }

  const app = new Appointment({
    ...req.body,
    patientId: req.user.id,
    status: "pending",
  });

  await app.save();
  res.json(app);
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
   4️⃣ APPROVE APPOINTMENT (ADMIN)
=================================================== */
router.put("/approve/:id", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const updated = await Appointment.findByIdAndUpdate(
    req.params.id,
    { status: "confirmed" },
    { new: true }
  );

  res.json(updated);
});

/* ===================================================
   5️⃣ GET LOGGED-IN DOCTOR APPOINTMENTS ✅ (IMPORTANT)
   GET /api/appointments/doctor/my
=================================================== */
router.get("/doctor/my", protect, async (req, res) => {
  try {
    if (req.user.role !== "doctor") {
      return res.status(403).json({ message: "Doctors only" });
    }

    const doctorId = req.user.id; // ✅ FIX

    const apps = await Appointment.find({
      doctorId: new mongoose.Types.ObjectId(doctorId),
    })
      .populate("patientId", "name phone")
      .sort({ _id: -1 });

    res.json(apps);
  } catch (err) {
    console.error("DOCTOR APPOINTMENT ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ===================================================
   6️⃣ MARK APPOINTMENT AS COMPLETED (DOCTOR)
=================================================== */
router.put("/:id/complete", protect, async (req, res) => {
  if (req.user.role !== "doctor") {
    return res.status(403).json({ message: "Doctors only" });
  }

  const updated = await Appointment.findOneAndUpdate(
    { _id: req.params.id, doctorId: req.user.id },
    { status: "completed" },
    { new: true }
  );

  res.json(updated);
});

/* ===================================================
   7️⃣ PATIENT DASHBOARD APPOINTMENTS
=================================================== */
router.get("/patient/my", protect, async (req, res) => {
  if (req.user.role !== "patient") {
    return res.status(403).json({ message: "Patients only" });
  }

  const apps = await Appointment.find({
    patientId: req.user.id,
  }).sort({ _id: -1 });

  res.json(apps);
});

module.exports = router;
