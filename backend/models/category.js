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

module.exports = mongoose.model("Category", categorySchema);
