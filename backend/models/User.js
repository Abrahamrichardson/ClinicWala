const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // --------------------
    // COMMON FIELDS
    // --------------------
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      sparse: true, // ✅ allows multiple empty emails (important for doctors)
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "doctor", "patient"],
      default: "patient",
    },

    // --------------------
    // DOCTOR PROFILE FIELDS
    // --------------------
    specialization: {
      type: String,
      default: "",
    },

    fees: {
      type: Number,
      default: 0,
    },

    experience: {
      type: String,
      default: "0",
    },

    city: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: Boolean,
      default: true, // enable / disable doctor
    },

    // 🔥 FRONTEND DOCTOR LINK (ONLY FOR DOCTOR LOGIN)
    doctorId: {
      type: String,
      default: null, // "1", "2", "3"
    },
  },
  {
    timestamps: true, // ✅ needed for sorting (descending)
  }
);

module.exports = mongoose.model("User", userSchema);
