const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  // ✅ Custom ID like "1", "2", "3"
  id: {
    type: String,      // use String to be safe ("1", "2")
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true
  },

  spec: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  exp: {
    type: String,
    required: true
  },

  fee: {
    type: Number,
    required: true
  },

  image: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Doctor", doctorSchema);
