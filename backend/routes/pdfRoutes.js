// const express = require("express");
// const PDFDocument = require("pdfkit");
// const Appointment = require("../models/Appointment");
// const { authMiddleware } = require("../middleware/authMiddleware");

// const router = express.Router();

// // GET /api/pdf/appointment/:id
// router.get("/appointment/:id", authMiddleware, async (req, res) => {
//   try {
//     const appointment = await Appointment.findById(req.params.id).populate(
//       "user",
//       "name email phone"
//     );

//     if (!appointment)
//       return res.status(404).json({ message: "Appointment not found" });

//     // PDF headers
//     res.setHeader("Content-Type", "application/pdf");
//     res.setHeader(
//       "Content-Disposition",
//       `attachment; filename=appointment-${appointment._id}.pdf`
//     );

//     const doc = new PDFDocument();
//     doc.pipe(res);

//     // Simple content
//     doc.fontSize(20).text("ClinicWala Appointment Summary", { underline: true });
//     doc.moveDown();

//     doc.fontSize(12).text(`Patient: ${appointment.user.name}`);
//     doc.text(`Email: ${appointment.user.email || "-"}`);
//     doc.text(`Phone: ${appointment.user.phone || "-"}`);
//     doc.moveDown();

//     doc.text(`Doctor: ${appointment.doctorName}`);
//     doc.text(`Date: ${appointment.date}`);
//     doc.text(`Status: ${appointment.status}`);
//     doc.text(`Fees: ₹${appointment.fees || 0}`);
//     doc.moveDown();

//     doc.text("Thank you for visiting ClinicWala.");

//     doc.end();
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
const express = require("express");
const User = require("../models/User");
const mongoose = require("mongoose");

const router = express.Router();

/* --------------------------------------------
   PUBLIC – LIST ALL DOCTORS
--------------------------------------------- */
router.get("/", async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" }).select(
      "name email phone specialization experience fees image city"
    );

    res.json({ doctors });
  } catch (err) {
    console.error("DOCTOR LIST ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* --------------------------------------------
   PUBLIC – GET SINGLE DOCTOR BY ID
--------------------------------------------- */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid doctor ID" });
    }

    const doctor = await User.findOne({
      _id: id,
      role: "doctor",
    }).select("name email phone specialization experience fees image city");

    if (!doctor) {
      return res.status(404).json({ message: "Doctor Not Found" });
    }

    res.json({ doctor });
  } catch (err) {
    console.error("DOCTOR DETAILS ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
