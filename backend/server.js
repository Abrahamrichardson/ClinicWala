const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// ✅ MIDDLEWARE FIRST
app.use(cors());
app.use(express.json());

// ===================================
// CONNECT MONGODB
// ===================================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB error:", err));

// ===================================
// API ROUTES
// ===================================
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);              // 👈 USERS
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);

// ===================================
// SERVER START
// ===================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
