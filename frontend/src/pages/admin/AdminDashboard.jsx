import React, { useEffect, useState } from "react";
import AdminLayout from "./layout/AdminLayout";
import { getAdminStats } from "../../api/adminApi";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function AdminAnalytics() {
  const [stats, setStats] = useState(null);

  const loadData = async () => {
    try {
      const res = await getAdminStats();
      setStats(res.data);
    } catch (err) {
      alert("Failed to load analytics");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!stats) {
    return (
      <AdminLayout>
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" />
          <p>Loading analytics...</p>
        </div>
      </AdminLayout>
    );
  }

  const barData = {
    labels: stats.appointmentsPerDay.map((d) => d.date),
    datasets: [
      {
        label: "Appointments per day",
        data: stats.appointmentsPerDay.map((d) => d.count),
      },
    ],
  };

  const pieData = {
    labels: ["Patients", "Doctors", "Admins"],
    datasets: [
      {
        data: [stats.totalPatients, stats.totalDoctors, stats.totalAdmins],
      },
    ],
  };

  return (
    <AdminLayout>
      <h2 className="mb-4">Analytics</h2>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="clinic-card stat-card">
            <h6>Total Patients</h6>
            <h3>{stats.totalPatients}</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="clinic-card stat-card">
            <h6>Total Doctors</h6>
            <h3>{stats.totalDoctors}</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="clinic-card stat-card">
            <h6>Total Appointments</h6>
            <h3>{stats.totalAppointments}</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div className="clinic-card stat-card">
            <h6>Today’s Appointments</h6>
            <h3>{stats.todayAppointments}</h3>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-7">
          <div className="clinic-card">
            <h5 className="mb-3">Appointments per Day</h5>
            <Bar data={barData} />
          </div>
        </div>
        <div className="col-md-5">
          <div className="clinic-card">
            <h5 className="mb-3">User Role Split</h5>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
