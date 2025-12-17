const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  // ✅ Frontend doctor ID (string like "1")
  doctorId: {
    type: String,
    required: true
  },

  doctorName: {
    type: String,
    required: true
  },

  specialization: {
    type: String,
    required: true
  },

  doctorCity: {
    type: String,
    required: true
  },

  fee: {
    type: Number,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  time: {
    type: String,
    required: true
  },

  reason: {
    type: String
  },

  status: {
    type: String,
    default: "Pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
