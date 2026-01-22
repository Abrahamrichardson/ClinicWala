const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["enabled", "disabled"],
      default: "enabled",
    },
  },
  {
    timestamps: true, // 🔥 adds createdAt & updatedAt
  }
);

// ✅ IMPORTANT FIX LINE
module.exports =
  mongoose.models.Category ||
  mongoose.model("Category", categorySchema);
  