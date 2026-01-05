import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import { FaEdit, FaTrash } from "react-icons/fa";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import "./AdminUsers.css";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [page, setPage] = useState(1);

  const perPage = 5;

  // ================= LOAD USERS =================
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await axiosClient.get("/users");
      setUsers(res.data || []);
    } catch (err) {
      console.error("Load users error:", err);
    }
  };

  // ================= SEARCH =================
  const filtered = users.filter((u) =>
    `${u?.name} ${u?.email} ${u?.phone}`
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
    if (data.length === 0) return;
    setSelected(
      selected.length === data.length ? [] : data.map((u) => u._id)
    );
  };

  // ================= BULK DELETE =================
  const bulkDelete = async () => {
    if (!selected.length) return alert("Please select users");

    if (!window.confirm("Are you sure you want to delete selected users?"))
      return;

    try {
      await Promise.all(
        selected.map((id) => axiosClient.delete(`/users/${id}`))
      );
      setSelected([]);
      setPage(1);
      loadUsers();
    } catch {
      alert("Bulk delete failed");
    }
  };

  // ================= SINGLE DELETE =================
  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    await axiosClient.delete(`/users/${id}`);
    loadUsers();
  };

  // ================= ROLE UPDATE =================
  const changeRole = async (id, role, currentRole) => {
    if (currentRole === "admin") {
      return alert("Admin role cannot be changed");
    }
    await axiosClient.put(`/users/${id}`, { role });
    loadUsers();
  };

  // ================= EXPORTS =================
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
    if (!editUser.name || !editUser.email) {
      return alert("Name & Email required");
    }
    await axiosClient.put(`/users/${editUser._id}`, editUser);
    setEditUser(null);
    loadUsers();
  };

  return (
    <div className="user-card">
      <h2 className="title">User Management</h2>

      {/* TOP BAR */}
      <div className="top-bar">
        <input
          placeholder="Search users..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <div className="actions">
          <button onClick={exportExcel}>Excel</button>
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
                checked={data.length > 0 && selected.length === data.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length ? (
            data.map((u) => (
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
                    disabled={u.role === "admin"}
                    onChange={(e) =>
                      changeRole(u._id, e.target.value, u.role)
                    }
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="action-icons">
                  <FaEdit onClick={() => setEditUser(u)} />
                  <FaTrash onClick={() => deleteUser(u._id)} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="empty">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
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
