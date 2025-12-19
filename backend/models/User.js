const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,

  role: {
    type: String,
    enum: ["admin", "doctor", "patient"],
    default: "patient",
  },

  // 🔥 LINK TO FRONTEND DOCTORS (ONLY FOR DOCTOR LOGIN)
  doctorId: {
    type: String, // "1", "2", "3" (matches DOCTORS.id)
  },
});

module.exports = mongoose.model("User", userSchema);
