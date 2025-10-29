import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../mockData";

export default function CategoryForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const existing = categories.find((c) => c.id === Number(id));

  const [form, setForm] = useState(
    existing || {
      category_id: "",
      name: "",
    }
  );

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (existing) {
      Object.assign(existing, form);
    } else {
      categories.push({ id: Date.now(), ...form });
    }
    nav("/categories");
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">{existing ? "Edit Category" : "Add Category"}</h2>
      {["category_id", "name"].map((f) => (
        <div key={f} className="mb-3">
          <label className="block mb-1 capitalize">{f.replace("_", " ")}</label>
          <input
            name={f}
            value={form[f]}
            onChange={change}
            className="border p-2 w-full rounded"
            required
          />
        </div>
      ))}
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button type="button" onClick={() => nav("/categories")} className="bg-gray-400 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
}
