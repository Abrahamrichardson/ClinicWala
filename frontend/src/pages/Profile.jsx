import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("");

  const load = async () => {
    try {
      const res = await axiosClient.get("/auth/me");
      setUser(res.data.user);
    } catch {
      const u = localStorage.getItem("user");
      if (u) setUser(JSON.parse(u));
      else setMsg("Unable to load profile");
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (!user) return <p>{msg || "Loading..."}</p>;

  return (
    <div className="profile-box">
      <h2>My Profile</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email || "-"}</p>
      <p><b>Phone:</b> {user.phone || "-"}</p>
      <p><b>Role:</b> {user.role}</p>
    </div>
  );
}
