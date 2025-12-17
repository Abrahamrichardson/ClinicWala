const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();
const protect = require("./protect");

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
    const doctor = await Doctor.findOne({ id: req.params.id }).exec();

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json({ doctors });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
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

module.exports = router;
