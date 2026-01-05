const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

// ============================
// ➕ ADD CATEGORY
// ============================
router.post("/", async (req, res) => {
  try {
    const { name, status } = req.body;

    const existing = await Category.findOne({
      name: { $regex: `^${name}$`, $options: "i" }
    });

    if (existing) {
      return res.status(400).json({
        message: "Category already exists",
      });
    }

    const category = new Category({ name, status });
    await category.save();

    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ============================
// 📥 GET ALL CATEGORIES  ✅ ADD THIS
// ============================
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
