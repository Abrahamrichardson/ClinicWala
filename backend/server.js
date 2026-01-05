const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ROUTES
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const adminCatalogRoutes = require("./routes/adminCatalogRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const adminSubcategoryRoutes = require("./routes/adminSubcategoryRoutes"); // ✅ ADD

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= DB CONNECTION ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

/* ================= ROUTES ================= */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/appointments", appointmentRoutes);

// 🔐 ADMIN ROUTES
app.use("/api/admin", adminRoutes);
app.use("/api/admin", adminCatalogRoutes);
app.use("/api/admin/categories", categoryRoutes); // categories
app.use("/api/admin", adminSubcategoryRoutes);    // ✅ subcategories

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("🚀 ClinicWala Backend Running");
});

/* ================= GLOBAL ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  console.error("❌ SERVER ERROR:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
