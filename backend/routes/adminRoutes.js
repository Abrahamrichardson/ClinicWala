const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const Appointment = require("../models/Appointment");
const authMiddleware = require("../middleware/authmiddleware");
const isAdmin = require("../middleware/adminMiddleware");
const { getDashboardStats } = require("../controller/dashboardController");

const router = express.Router();

/* -----------------------------------------
   🔐 PROTECT ALL ADMIN ROUTES
----------------------------------------- */
router.use(authMiddleware, isAdmin);

/* -----------------------------------------
   📊 ADMIN – DASHBOARD STATS
   GET /api/admin/dashboard
----------------------------------------- */
router.get("/dashboard", getDashboardStats);

/* -----------------------------------------
   👨‍⚕️ ADMIN – CREATE DOCTOR
   POST /api/admin/doctors
----------------------------------------- */
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

    // ✅ Required fields check
    if (!name || !phone || !password) {
      return res
        .status(400)
        .json({ message: "Name, phone and password are required" });
    }

    // ✅ Duplicate check (safe)
    const existingUser = await User.findOne({
      $or: [
        email ? { email } : null,
        phone ? { phone } : null,
      ].filter(Boolean),
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email or phone already exists" });
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create doctor user
    const doctor = await User.create({
      name,
      email: email || "",
      phone,
      password: hashedPassword,
      role: "doctor",

      // optional doctor fields
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
        specialization: doctor.specialization,
        phone: doctor.phone,
        city: doctor.city,
      },
    });
  } catch (err) {
    console.error("ADMIN ADD DOCTOR ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* -----------------------------------------
   📋 ADMIN – GET ALL DOCTORS
   GET /api/admin/doctors
----------------------------------------- */
router.get("/doctors", async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" })
      .select("-password")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      doctors,
    });
  } catch (err) {
    console.error("ADMIN GET DOCTORS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* -----------------------------------------
   🗑️ ADMIN – DELETE DOCTOR
   DELETE /api/admin/doctors/:id
----------------------------------------- */
router.delete("/doctors/:id", async (req, res) => {
  try {
    const doctor = await User.findById(req.params.id);

    if (!doctor || doctor.role !== "doctor") {
      return res.status(404).json({ message: "Doctor not found" });
    }

    await doctor.deleteOne();

    res.json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (err) {
    console.error("ADMIN DELETE DOCTOR ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
