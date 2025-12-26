const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET all users (ADMIN)
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// UPDATE role
router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Update failed" });
  }
});

// DELETE user
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ message: "Delete failed" });
  }
});

module.exports = router;
