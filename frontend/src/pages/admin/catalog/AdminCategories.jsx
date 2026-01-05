import React, { useEffect, useState } from "react";
import axiosClient from "../../../api/axiosClient";
import * as XLSX from "xlsx";

export default function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("enabled");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const perPage = 5;

  // ================= LOAD =================
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    const res = await axiosClient.get("/admin/categories");

    // ✅ SAFE descending order (no mutation)
    setCategories([...res.data].reverse());
  };

  // ================= ADD CATEGORY =================
  const submitCategory = async () => {
    if (!name.trim()) return alert("Category name required");

    try {
      await axiosClient.post("/admin/categories", { name, status });
      setName("");
      setStatus("enabled");
      loadCategories();
    } catch (err) {
      alert(err.response?.data?.message || "Category already exists");
    }
  };

  // ================= SEARCH =================
  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
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
    if (!data.length) return;
    setSelected(
      selected.length === data.length ? [] : data.map((c) => c._id)
    );
  };

  // ================= DELETE =================
  const deleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    await axiosClient.delete(`/admin/categories/${id}`);
    loadCategories();
  };

  const bulkDelete = async () => {
    if (!selected.length) return alert("Select categories");
    if (!window.confirm("Delete selected categories?")) return;

    await Promise.all(
      selected.map((id) =>
        axiosClient.delete(`/admin/categories/${id}`)
      )
    );

    setSelected([]);
    setPage(1);
    loadCategories();
  };

  // ================= EXPORT =================
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(categories);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Categories");
    XLSX.writeFile(wb, "categories.xlsx");
  };

  const exportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(categories);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Categories");
    XLSX.writeFile(wb, "categories.csv");
  };

  return (
    <div className="card">
      <h3>Category Management</h3>

      {/* ADD FORM */}
      <div className="form-row">
        <input
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>

        <button onClick={submitCategory}>Submit</button>
      </div>

      <hr />

      {/* TOP BAR */}
      <div className="top-bar">
        <input
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <div>
          <button onClick={exportExcel}>Excel</button>
          <button onClick={exportCSV}>CSV</button>
          <button className="danger" onClick={bulkDelete}>
            Delete
          </button>
        </div>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={data.length > 0 && selected.length === data.length}
                onChange={toggleSelectAll}
              />
            </th>
            <th>Category Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.length ? (
            data.map((c) => (
              <tr key={c._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(c._id)}
                    onChange={() => toggleSelect(c._id)}
                  />
                </td>
                <td>{c.name}</td>
                <td>{c.status}</td>
                <td>
                  ✏️ 👁️{" "}
                  <span
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => deleteCategory(c._id)}
                  >
                    🗑
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No categories found</td>
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
    </div>
  );
}
