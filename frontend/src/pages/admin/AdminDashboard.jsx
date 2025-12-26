import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { FaEdit, FaTrash } from "react-icons/fa";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [page, setPage] = useState(1);

  const perPage = 10;

  // ================= LOAD USERS =================
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await axiosClient.get("/users");
      setUsers(res.data || []);
    } catch (err) {
      console.error("LOAD USERS ERROR:", err);
    }
  };

  // ================= SEARCH =================
  const filtered = users.filter((u) =>
    `${u.name} ${u.email} ${u.phone}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ================= PAGINATION =================
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const data = filtered.slice((page - 1) * perPage, page * perPage);

  // ================= SELECT =================
  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(data.map((u) => u._id));
    }
  };

  // ================= BULK DELETE =================
  const bulkDelete = async () => {
    if (!selected.length) return alert("Select users");

    if (!window.confirm("Delete selected users?")) return;

    try {
      await Promise.all(
        selected.map((id) => axiosClient.delete(`/users/${id}`))
      );
      setSelected([]);
      loadUsers();
    } catch {
      alert("Bulk delete failed");
    }
  };

  // ================= ROLE UPDATE =================
  const changeRole = async (id, role) => {
    try {
      await axiosClient.put(`/users/${id}`, { role });
      loadUsers();
    } catch {
      alert("Role update failed");
    }
  };

  // ================= EXPORT =================
  const exportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.csv");
  };

  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");
    XLSX.writeFile(wb, "users.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    autoTable(doc, {
      head: [["Name", "Email", "Phone", "Role"]],
      body: users.map((u) => [u.name, u.email, u.phone, u.role]),
    });
    doc.save("users.pdf");
  };

  // ================= SAVE EDIT =================
  const saveEdit = async () => {
    try {
      await axiosClient.put(`/users/${editUser._id}`, editUser);
      setEditUser(null);
      loadUsers();
    } catch {
      alert("Update failed");
    }
  };

  return (
    <div className="manage-user-wrapper">
      {/* HEADER */}
      <div className="breadcrumb-box">
        <span className="module-name">User Module</span>
        <span className="separator">•</span>
        <span className="page-name">Manage Users</span>
      </div>

      <div className="user-card">
        <h2 className="title">Manage Users</h2>

        {/* TOP BAR */}
        <div className="top-bar">
          <input
            className="search-input"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />

          <div className="actions">
            <button onClick={exportCSV}>CSV</button>
            <button onClick={exportExcel}>EXCEL</button>
            <button onClick={exportPDF}>PDF</button>
            <button className="danger" onClick={bulkDelete}>
              Delete
            </button>
          </div>
        </div>

        {/* TABLE */}
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={data.length && selected.length === data.length}
                  onChange={toggleSelectAll}
                />
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((u) => (
              <tr key={u._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(u._id)}
                    onChange={() => toggleSelect(u._id)}
                  />
                </td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>
                  <select
                    value={u.role}
                    onChange={(e) => changeRole(u._id, e.target.value)}
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>********</td>
                <td>
                  <FaEdit onClick={() => setEditUser(u)} />
                  <FaTrash
                    onClick={() =>
                      axiosClient.delete(`/users/${u._id}`).then(loadUsers)
                    }
                  />
                </td>
              </tr>
            ))}

            {!data.length && (
              <tr>
                <td colSpan="7">No users found</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* PAGINATION */}
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            ← Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next →
          </button>
        </div>
      </div>

      {/* EDIT MODAL */}
      {editUser && (
        <div className="modal">
          <div className="modal-box">
            <h3>Edit User</h3>
            <input
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
            />
            <input
              value={editUser.email}
              onChange={(e) =>
                setEditUser({ ...editUser, email: e.target.value })
              }
            />
            <div className="modal-actions">
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditUser(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
