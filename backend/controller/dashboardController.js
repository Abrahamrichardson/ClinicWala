const User = require("../models/User");
const Appointment = require("../models/Appointment");

exports.getDashboardStats = async (req, res) => {
  try {
    /* ================= COUNTS ================= */
    const totalPatients = await User.countDocuments({ role: "patient" });
    const totalDoctors = await User.countDocuments({ role: "doctor" });
    const totalAppointments = await Appointment.countDocuments();

    /* ================= TOTAL REVENUE ================= */
    const revenueAgg = await Appointment.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$fee" },
        },
      },
    ]);

    const totalRevenue = revenueAgg[0]?.total || 0;

    /* ================= MONTHLY APPOINTMENTS ================= */
    const monthlyAppointments = await Appointment.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" }, // month number (1–12)
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    /* ================= ACTIVE USERS ================= */
    const activeUsers = await User.aggregate([
      {
        $group: {
          _id: "$role", // admin / doctor / patient
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      totalPatients,
      totalDoctors,
      totalAppointments,
      totalRevenue,
      monthlyAppointments,
      activeUsers,
    });
  } catch (err) {
    console.error("DASHBOARD ERROR:", err);
    res.status(500).json({
      message: "Dashboard error",
      error: err.message,
    });
  }
};
