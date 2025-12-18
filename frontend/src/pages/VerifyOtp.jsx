// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axiosClient from "../api/axiosClient";
// import "./Login.css"; // use same styling as Login

// export default function VerifyOtp() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const mobile = location?.state?.mobile; // sent from Login

//   const [otp, setOtp] = useState("");
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   // If user directly opens /verify-otp without mobile → go back to login
//   useEffect(() => {
//     if (!mobile) {
//       setMsg("Session expired. Please request OTP again.");
//       setTimeout(() => navigate("/login"), 1500);
//     }
//   }, [mobile, navigate]);

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     if (!otp) return setMsg("Enter OTP");

//     try {
//       setLoading(true);
//       setMsg("Verifying...");

//       const res = await axiosClient.post("/auth/verify-otp", {
//         mobile,
//         otp,
//       });

//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);
//         setMsg("Login successful!");
//         navigate("/dashboard");
//       } else {
//         setMsg(res.data.message || "Invalid OTP");
//       }
//     } catch (err) {
//       setMsg("Server error. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!mobile) {
//     return (
//       <div className="otp-verify-box">
//         <p>{msg}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="otp-verify-box">
//       <h2>Verify OTP</h2>
//       <p>OTP sent to <b>{mobile}</b></p>

//       <form onSubmit={handleVerify}>
//         <input
//           type="text"
//           placeholder="Enter 6 digit OTP"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? "Verifying..." : "VERIFY OTP"}
//         </button>
//       </form>

//       {msg && <p className="msg">{msg}</p>}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import "./Login.css";

export default function VerifyOtp() {
  const location = useLocation();
  const navigate = useNavigate();

  // mobile number passed from Login
  const mobile = location?.state?.mobile;

  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // If opened directly → redirect
  useEffect(() => {
    if (!mobile) {
      setMsg("Session expired. Please request OTP again.");
      setTimeout(() => navigate("/login"), 1500);
    }
  }, [mobile, navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp) return setMsg("Enter OTP");

    setLoading(true);
    setMsg("Verifying...");

    try {
      const res = await axiosClient.post("/auth/verify-otp", {
        mobile,
        otp,
      });

      // Backend returns { message, token, user }
      if (res.data.token) {
        // Save token
       localStorage.setItem("token", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));

        setMsg("OTP Verified!");

        const role = res.data.user.role;

        // Redirect based on role
        if (role === "admin") navigate("/admin/dashboard");
        else if (role === "doctor") navigate("/doctor/home");
        else navigate("/dashboard"); // patient

      } else {
        setMsg(res.data.message || "Invalid OTP");
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setMsg(err.response.data.message);
      } else {
        setMsg("Server error. Try again.");
      }
    }

    setLoading(false);
  };

  if (!mobile) {
    return (
      <div className="otp-verify-box">
        <p>{msg}</p>
      </div>
    );
  }

  return (
    <div className="otp-verify-box">
      <h2>Verify OTP</h2>
      <p>OTP sent to <b>{mobile}</b></p>

      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Verifying..." : "VERIFY OTP"}
        </button>
      </form>

      {msg && <p className="msg">{msg}</p>}
    </div>
  );
}
3