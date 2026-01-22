const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Appointment = require("../models/Appointment");

const protect = require("../middleware/protect");
const isAdmin = require("../middleware/adminMiddleware");

const { getDashboardStats } = require("../controller/dashboardController");

const router = express.Router();

/* =====================================================
   🔐 PROTECT ALL ADMIN ROUTES
===================================================== */
router.use(protect, isAdmin);

/* =====================================================
   📊 ADMIN – DASHBOARD STATS
===================================================== */
router.get("/dashboard", getDashboardStats);

/* =====================================================
   👨‍⚕️ ADMIN – CREATE DOCTOR
===================================================== */
router.post("/doctors", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      specialization,
      fees,
      experience,
      city,
      image,
    } = req.body;

    if (!name || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, phone and password are required",
      });
    }

    const existingUser = await User.findOne({
      $or: [
        email ? { email } : null,
        phone ? { phone } : null,
      ].filter(Boolean),
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email or phone already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const doctor = await User.create({
      name,
      email: email || "",
      phone,
      password: hashedPassword,
      role: "doctor",
      specialization: specialization || "",
      fees: fees || 0,
      experience: experience || "0",
      city: city || "",
      image: image || "",
    });

    res.status(201).json({
      success: true,
      message: "Doctor created successfully",
      doctor: {
        _id: doctor._id,
        name: doctor.name,
        phone: doctor.phone,
        specialization: doctor.specialization,
        city: doctor.city,
      },
    });
  } catch (err) {
    console.error("ADMIN ADD DOCTOR ERROR:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* =====================================================
   📋 ADMIN – GET ALL DOCTORS
===================================================== */
router.get("/doctors", async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" })
      .select("-password")
      .sort({ createdAt: -1 });

    res.json({ success: true, doctors });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

/* =====================================================
   🗑️ ADMIN – DELETE DOCTOR
===================================================== */
router.delete("/doctors/:id", async (req, res) => {
  try {
    const doctor = await User.findById(req.params.id);

    if (!doctor || doctor.role !== "doctor") {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    await doctor.deleteOne();

    res.json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
