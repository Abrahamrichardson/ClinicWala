const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// ================= JWT =================
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// ================= ADMIN CREDENTIALS =================
const ADMIN_EMAIL = "abrahamrichardson9970@";
const ADMIN_PASSWORD = "Abraham9970@";

// ================= REGISTER (PATIENT ONLY) =================
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashed,
      role: "patient", // 🔥 FIXED
    });

    res.status(201).json({
      success: true,
      token: generateToken(user._id, user.role),
      role: user.role,
      userId: user._id,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔐 ADMIN LOGIN
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      let admin = await User.findOne({ email });

      if (!admin) {
        const hashed = await bcrypt.hash(password, 10);
        admin = await User.create({
          name: "Admin",
          email,
          password: hashed,
          role: "admin",
        });
      }

      return res.json({
        success: true,
        token: generateToken(admin._id, admin.role),
        role: admin.role,
      });
    }

    // 👤 PATIENT / DOCTOR LOGIN
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({
      success: true,
      token: generateToken(user._id, user.role),
      role: user.role,
      userId: user._id,
      doctorId: user.doctorId || null, // 🔥 IMPORTANT
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
