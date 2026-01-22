const jwt = require("jsonwebtoken");
const User = require("../models/User");

/* =====================================================
   🔐 AUTH / PROTECT MIDDLEWARE
   - Verifies JWT token
   - Attaches user to req.user
===================================================== */
const protect = async (req, res, next) => {
  let authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  try {
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error("AUTH ERROR:", err.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

/* =====================================================
   👑 ADMIN ROLE CHECK MIDDLEWARE
===================================================== */
const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Admin access only",
    });
  }
  next();
};

/* =====================================================
   ✅ EXPORT MIDDLEWARES
===================================================== */
module.exports = isAdmin;
