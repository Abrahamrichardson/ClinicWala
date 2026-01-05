const express = require("express");
const router = express.Router();
const Subcategory = require("../models/Subcategory");

// ================= GET ALL SUBCATEGORIES =================
router.get("/subcategories", async (req, res) => {
  try {
    const subcategories = await Subcategory.find()
      .populate("category", "name") // only category name
      .sort({ createdAt: -1 });

    res.json(subcategories);
  } catch (err) {
    console.error("GET SUBCATEGORIES ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// ================= CREATE SUBCATEGORY =================
router.post("/subcategories", async (req, res) => {
  try {
    const { name, categoryId, status } = req.body;

    if (!name || !categoryId) {
      return res.status(400).json({ message: "All fields required" });
    }

    const sub = new Subcategory({
      name,
      category: categoryId,
      status,
    });

    await sub.save();
    res.status(201).json(sub);
  } catch (err) {
    console.error("CREATE SUBCATEGORY ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// ================= DELETE SUBCATEGORY =================
router.delete("/subcategories/:id", async (req, res) => {
  try {
    await Subcategory.findByIdAndDelete(req.params.id);
    res.json({ message: "Subcategory deleted" });
  } catch (err) {
    console.error("DELETE SUBCATEGORY ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
