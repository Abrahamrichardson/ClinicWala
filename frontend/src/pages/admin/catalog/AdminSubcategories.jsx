import React, { useEffect, useState } from "react";
import {
  getCategories,
  getSubcategories,
  createSubcategory,
  deleteSubcategory,
} from "../../../api/adminApi";
import * as XLSX from "xlsx";

export default function AdminSubcategories() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);

  const perPage = 5;

  const [form, setForm] = useState({
    categoryId: "",
    name: "",
    status: "enabled",
  });

  // ================= LOAD =================
  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    try {
      const [catRes, subRes] = await Promise.all([
        getCategories(),
        getSubcategories(),
      ]);

      setCategories(catRes.data);
      setSubcategories([...subRes.data].reverse()); // ✅ safe reverse
    } catch (err) {
      alert("Failed to load data");
    }
  };

  // ================= ADD =================
  const submitSubcategory = async () => {
    if (!form.categoryId || !form.name.trim())
      return alert("All fields required");

    try {
      await createSubcategory(form);
      setForm({ categoryId: "", name: "", status: "enabled" });
      loadAll();
    } catch (err) {
      alert(err.response?.data?.message || "Error creating subcategory");
    }
  };

  // ================= SEARCH =================
  const filtered = subcategories.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.category?.name.toLowerCase().includes(search.toLowerCase())
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
      selected.length === data.length ? [] : data.map((s) => s._id)
    );
  };

  // ================= DELETE =================
  const removeSubcategory = async (id) => {
    if (!window.confirm("Delete subcategory?")) return;
    await deleteSubcategory(id);
    loadAll();
  };

  const bulkDelete = async () => {
    if (!selected.length) return alert("Select subcategories");
    if (!window.confirm("Delete selected subcategories?")) return;

    await Promise.all(selected.map((id) => deleteSubcategory(id)));
    setSelected([]);
    setPage(1);
    loadAll();
  };

  // ================= EXPORT =================
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(subcategories);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Subcategories");
    XLSX.writeFile(wb, "subcategories.xlsx");
  };

  const exportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(subcategories);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Subcategories");
    XLSX.writeFile(wb, "subcategories.csv");
  };

  return (
    <div className="card p-3">
      <h3>Subcategory Management</h3>

      {/* ADD FORM */}
      <div className="form-row">
        <select
          value={form.categoryId}
          onChange={(e) =>
            setForm({ ...form, categoryId: e.target.value })
          }
        >
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        <input
          placeholder="Subcategory Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <select
          value={form.status}
          onChange={(e) =>
            setForm({ ...form, status: e.target.value })
          }
        >
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>

        <button onClick={submitSubcategory}>Submit</button>
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
            <th>Category</th>
            <th>Subcategory</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.length ? (
            data.map((s) => (
              <tr key={s._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selected.includes(s._id)}
                    onChange={() => toggleSelect(s._id)}
                  />
                </td>
                <td>{s.category?.name}</td>
                <td>{s.name}</td>
                <td>{s.status}</td>
                <td>
                  <span
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => removeSubcategory(s._id)}
                  >
                    🗑
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No subcategories found</td>
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
