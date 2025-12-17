


// const express = require("express");
// const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
// const User = require("../models/User");
// const Appointment = require("../models/Appointment");
// const bcrypt = require("bcryptjs");   // ✅ add this

// const router = express.Router();

// // Protect all admin routes
// router.use(authMiddleware, isAdmin);

// // -----------------------------------------
// // ADMIN – CREATE DOCTOR  ✅ NEW
// // POST /api/admin/doctors
// // -----------------------------------------
// router.post("/doctors", async (req, res) => {
//   try {
//     const { name, email, phone, password, specialization } = req.body;

//     if (!name || !phone || !password) {
//       return res
//         .status(400)
//         .json({ message: "Name, phone & password are required" });
//     }

//     const existing = await User.findOne({
//       $or: [{ email }, { phone }],
//     });

//     if (existing) {
//       return res
//         .status(400)
//         .json({ message: "Email or phone already in use" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const doctor = await User.create({
//       name,
//       email: email || "",
//       phone,
//       password: hashedPassword,
//       specialization: specialization || "",
//       role: "doctor",
//     });

//     res
//       .status(201)
//       .json({ message: "Doctor created successfully", doctor });
//   } catch (err) {
//     console.error("ADMIN ADD DOCTOR ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });
 const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");
const User = require("../models/User");
const Appointment = require("../models/Appointment");
const bcrypt = require("bcryptjs");

const router = express.Router();

// Protect all admin routes
router.use(authMiddleware, isAdmin);

/* -----------------------------------------
   ADMIN – CREATE DOCTOR (SAFE VERSION)
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

    // Required fields
    if (!name || !phone || !password) {
      return res
        .status(400)
        .json({ message: "Name, phone & password are required" });
    }

    // Check duplicates safely
    const existing = await User.findOne({
      $or: [
        email ? { email } : null,
        phone ? { phone } : null,
      ].filter(Boolean),
    });

    if (existing) {
      return res
        .status(400)
        .json({ message: "Email or phone already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create doctor with defaults
    const doctor = await User.create({
      name,
      email: email || "",
      phone,
      password: hashedPassword,
      specialization: specialization || "",
      fees: fees || 0,
      experience: experience || "0",
      city: city || "",
      image: image || "",
      role: "doctor",
    });

    res.status(201).json({
      message: "Doctor created successfully",
      doctor: {
        _id: doctor._id,
        name: doctor.name,
        specialization: doctor.specialization,
      },
    });
  } catch (err) {
    console.error("ADMIN ADD DOCTOR ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
