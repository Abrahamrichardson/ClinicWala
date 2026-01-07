const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();
const protect = require("../middleware/protect");

// ================= GET ALL DOCTORS =================
// GET /api/doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json({ doctors });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch doctors" });
  }
});

// ================= GET SINGLE DOCTOR BY CUSTOM ID =================
// GET /api/doctors/custom/1
router.get("/custom/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ id: req.params.id });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // ✅ FIXED
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ================= GET SINGLE DOCTOR BY MONGODB _id =================
// GET /api/doctors/:id
router.get("/:id", async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: "Invalid doctor ID" });
  }
});

// ================= ADD DOCTOR (ADMIN) =================
// POST /api/doctors
router.post("/", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const doc = new Doctor(req.body);
  await doc.save();
  res.json(doc);
});

// ================= UPDATE DOCTOR BY CUSTOM ID (ADMIN) =================
// PUT /api/doctors/custom/1
router.put("/custom/:id", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const updated = await Doctor.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true }
  );

  if (!updated) {
    return res.status(404).json({ message: "Doctor not found" });
  }

  res.json(updated);
});

// ================= DELETE DOCTOR BY CUSTOM ID (ADMIN) =================
// DELETE /api/doctors/custom/1
router.delete("/custom/:id", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const deleted = await Doctor.findOneAndDelete({ id: req.params.id });

  if (!deleted) {
    return res.status(404).json({ message: "Doctor not found" });
  }

  res.json({ success: true });
});



// ✅ DOCTOR SUMMARY
router.get("/summary", protect, async (req, res) => {
  try {
    const doctorId = req.user._id;

    const today = new Date().toISOString().split("T")[0];

    const totalPatients = await Appointment.distinct("patientId", {
      doctorId,
    });

    const todayAppointments = await Appointment.countDocuments({
      doctorId,
      date: today,
    });

    const pendingAppointments = await Appointment.countDocuments({
      doctorId,
      status: "pending",
    });

    const completedConsultations = await Appointment.countDocuments({
      doctorId,
      status: "completed",
    });

    res.json({
      totalPatients: totalPatients.length,
      todayAppointments,
      pendingAppointments,
      completedConsultations,
    });
  } catch (err) {
    console.error("SUMMARY ERROR:", err);
    res.status(500).json({ message: "Failed to load summary" });
  }
});


module.exports = router;
