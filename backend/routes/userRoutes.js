const express = require("express");
const router = express.Router();
const User = require("../models/User");
const protect = require("../middleware/protect");

/* ===================================================
   1️⃣ GET ALL USERS (ADMIN ONLY)
   GET /api/users
=================================================== */
router.get("/", protect, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ===================================================
   2️⃣ GET ALL DOCTORS (PUBLIC / PATIENT)
   GET /api/users/doctors
=================================================== */
router.get("/doctors", async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" }).select("-password");
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ===================================================
   3️⃣ GET SINGLE DOCTOR BY ID
   GET /api/users/doctors/:id
=================================================== */
router.get("/doctors/:id", async (req, res) => {
  try {
    const doctor = await User.findOne({
      _id: req.params.id,
      role: "doctor",
    }).select("-password");

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.json(doctor);
  } catch (err) {
    res.status(400).json({ message: "Invalid doctor ID" });
  }
});

/* ===================================================
   4️⃣ UPDATE USER (ADMIN ONLY)
   PUT /api/users/:id
=================================================== */
router.put("/:id", protect, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Update failed" });
  }
});

/* ===================================================
   5️⃣ DELETE USER (ADMIN ONLY)
   DELETE /api/users/:id
=================================================== */
router.delete("/:id", protect, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only" });
    }

    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ message: "Delete failed" });
  }
});

module.exports = router;
