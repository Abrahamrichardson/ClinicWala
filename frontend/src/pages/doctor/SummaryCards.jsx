import { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { Card } from "react-bootstrap";

export default function SummaryCards() {
  const [data, setData] = useState({});

  useEffect(() => {
    axiosClient.get("/doctor/summary").then(res => setData(res.data));
  }, []);

  return (
    <div className="row">
      {[
        ["Total Patients", data.totalPatients],
        ["Today’s Appointments", data.todayAppointments],
        ["Pending", data.pendingAppointments],
        ["Completed", data.completedConsultations],
      ].map(([title, value], i) => (
        <div className="col-md-3" key={i}>
          <Card className="p-3 text-center">
            <h6>{title}</h6>
            <h3>{value || 0}</h3>
          </Card>
        </div>
      ))}
    </div>
  );
}
