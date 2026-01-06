const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",           // doctor is a user
      required: true,
    },

    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    doctorName: String,
    specialization: String,
    doctorCity: String,
    fee: Number,

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    reason: String,

    status: {
  type: String,
  enum: ["pending", "approved", "rejected", "completed"], // ✅ FIXED
  default: "pending",
}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
