const express = require("express");
const Appointment = require("../models/Appointment");
const protect = require("./protect");
const router = express.Router();

// GET all appointments (admin)
router.get("/", protect, async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });

  const apps = await Appointment.find().sort({ _id: -1 });
  res.json(apps);
});

// ADD appointment (user)
router.post("/", protect, async (req, res) => {
  const app = new Appointment(req.body);
  await app.save();
  res.json(app);
});

// DELETE appointment (admin)
router.delete("/:id", protect, async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });

  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});


// APPROVE Appointment (Admin)
router.put("/approve/:id", protect, async (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only" });

  const updated = await Appointment.findByIdAndUpdate(
    req.params.id,
    { status: "Approved" },
    { new: true }
  );

  res.json(updated);
});

module.exports = router;
