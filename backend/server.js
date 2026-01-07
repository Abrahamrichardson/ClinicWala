const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ======================
   CORS (FIXED)
====================== */
app.use(
  cors({
    origin: "http://localhost:5173", // Vite frontend
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// handle preflight explicitly
app.options("*", cors());

/* ======================
   MIDDLEWARE
====================== */
app.use(express.json());

/* ======================
   ROUTES IMPORT
====================== */
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const adminCatalogRoutes = require("./routes/adminCatalogRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const adminSubcategoryRoutes = require("./routes/adminSubcategoryRoutes");
const doctorRoutes = require("./routes/doctorRoutes");

/* ======================
   ROUTES USE
====================== */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

// 🔐 ADMIN ROUTES
app.use("/api/admin", adminRoutes);
app.use("/api/admin", adminCatalogRoutes);
app.use("/api/admin/categories", categoryRoutes);
app.use("/api/admin", adminSubcategoryRoutes);

// 👨‍⚕️ DOCTOR ROUTES
app.use("/api/doctor", doctorRoutes);

/* ======================
   DB CONNECTION
====================== */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

/* ======================
   HEALTH CHECK
====================== */
app.get("/", (req, res) => {
  res.send("🚀 ClinicWala Backend Running");
});

/* ======================
   GLOBAL ERROR HANDLER
====================== */
app.use((err, req, res, next) => {
  console.error("❌ SERVER ERROR:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

/* ======================
   SERVER
====================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
