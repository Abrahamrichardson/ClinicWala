import React, { useEffect, useState } from "react";
import { getAdminStats } from "../../api/adminApi";
import {
  FaUserInjured,
  FaUserMd,
  FaCalendarCheck,
  FaRupeeSign,
} from "react-icons/fa";
import CountUp from "react-countup";
import { Bar, Pie } from "react-chartjs-2";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

/* MONTH NAMES */
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export default function AdminAnalytics() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 30000); // 🔁 auto refresh
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    try {
      const data = await getAdminStats();
      setStats(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load analytics");
    }
  };

  /* EXPORT PDF */
  const exportPDF = async () => {
    const element = document.querySelector(".admin-content");
    const canvas = await html2canvas(element);
    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(img, "PNG", 0, 0, 210, 297);
    pdf.save("Admin-Dashboard.pdf");
  };

  if (!stats) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" />
        <p>Loading analytics...</p>
      </div>
    );
  }

  /* BAR CHART */
  const barData = {
    labels: stats.monthlyAppointments.map(
      (m) => MONTHS[m._id - 1]
    ),
    datasets: [
      {
        label: "Appointments per Month",
        data: stats.monthlyAppointments.map((m) => m.count),
        backgroundColor: "rgba(99,102,241,0.75)",
        borderRadius: 10,
      },
    ],
  };

  /* PIE CHART */
  const roleMap = {};
  stats.activeUsers.forEach((u) => {
    roleMap[u._id] = u.count;
  });

  const pieData = {
    labels: ["Patients", "Doctors", "Admins"],
    datasets: [
      {
        data: [
          roleMap.patient || 0,
          roleMap.doctor || 0,
          roleMap.admin || 0,
        ],
        backgroundColor: ["#2563eb", "#16a34a", "#9333ea"],
      },
    ],
  };

  return (
    <>
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-success btn-sm" onClick={exportPDF}>
          📄 Export PDF
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="clinic-card stat-card d-flex justify-content-between align-items-center">
            <div>
              <h6>Total Patients</h6>
              <h3><CountUp end={stats.totalPatients} duration={1.5} /></h3>
            </div>
            <FaUserInjured size={34} />
          </div>
        </div>

        <div className="col-md-3">
          <div className="clinic-card stat-card d-flex justify-content-between align-items-center">
            <div>
              <h6>Total Doctors</h6>
              <h3><CountUp end={stats.totalDoctors} duration={1.5} /></h3>
            </div>
            <FaUserMd size={34} />
          </div>
        </div>

        <div className="col-md-3">
          <div className="clinic-card stat-card d-flex justify-content-between align-items-center">
            <div>
              <h6>Total Appointments</h6>
              <h3><CountUp end={stats.totalAppointments} duration={1.5} /></h3>
            </div>
            <FaCalendarCheck size={34} />
          </div>
        </div>

        <div className="col-md-3">
          <div className="clinic-card stat-card d-flex justify-content-between align-items-center">
            <div>
              <h6>Total Revenue</h6>
              <h3>₹<CountUp end={stats.totalRevenue} duration={1.5} /></h3>
            </div>
            <FaRupeeSign size={34} />
          </div>
        </div>
      </div>

      {/* CHARTS */}
      <div className="row g-4">
        <div className="col-md-7">
          <div className="clinic-card">
            <h5 className="mb-3">Monthly Appointments</h5>
            <Bar data={barData} />
          </div>
        </div>

        <div className="col-md-5">
          <div className="clinic-card">
            <h5 className="mb-3">User Role Distribution</h5>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </>
  );
}
