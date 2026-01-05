const express = require("express");
const router = express.Router();

// ✅ Middleware (case correct)
const authMiddleware = require("../middleware/authMiddleware");
const isAdmin = require("../middleware/adminMiddleware");

// ✅ Models
const Category = require("../models/Category");
const Subcategory = require("../models/Subcategory");
const Course = require("../models/Course");

/* 🔐 PROTECT ALL ADMIN CATALOG ROUTES */
router.use(authMiddleware, isAdmin);

/* ================= CATEGORIES ================= */

// GET ALL CATEGORIES
router.get("/categories", async (req, res) => {
  try {
    const data = await Category.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

// CREATE CATEGORY
router.post("/categories", async (req, res) => {
  try {
    const { name, status } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const exists = await Category.findOne({ name });
    if (exists) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const cat = await Category.create({
      name,
      status: status || "enabled", // ✅ FIXED
    });

    res.status(201).json(cat);
  } catch (err) {
    res.status(500).json({ message: "Failed to create category" });
  }
});

// DELETE CATEGORY
router.delete("/categories/:id", async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete category" });
  }
});

/* ================= SUBCATEGORIES ================= */

// GET ALL SUBCATEGORIES
router.get("/subcategories", async (req, res) => {
  try {
    const data = await Subcategory.find().populate("category");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch subcategories" });
  }
});

// CREATE SUBCATEGORY
router.post("/subcategories", async (req, res) => {
  try {
    const { name, category } = req.body;

    if (!name || !category) {
      return res
        .status(400)
        .json({ message: "Subcategory name & category are required" });
    }

    const sub = await Subcategory.create({ name, category });
    res.status(201).json(sub);
  } catch (err) {
    res.status(500).json({ message: "Failed to create subcategory" });
  }
});

// DELETE SUBCATEGORY
router.delete("/subcategories/:id", async (req, res) => {
  try {
    await Subcategory.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete subcategory" });
  }
});

/* ================= COURSES ================= */

// GET ALL COURSES
router.get("/courses", async (req, res) => {
  try {
    const data = await Course.find()
      .populate("category")
      .populate("subcategory");

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch courses" });
  }
});

// CREATE COURSE
router.post("/courses", async (req, res) => {
  try {
    const { name, category, subcategory } = req.body;

    if (!name || !category || !subcategory) {
      return res
        .status(400)
        .json({ message: "Course name, category & subcategory are required" });
    }

    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: "Failed to create course" });
  }
});

// DELETE COURSE
router.delete("/courses/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete course" });
  }
});

module.exports = router;
