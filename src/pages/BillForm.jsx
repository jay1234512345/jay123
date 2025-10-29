import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { bills } from "../mockData";

export default function BillForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const existing = bills.find((b) => b.id === Number(id));

  const [form, setForm] = useState(
    existing || {
      bill_id: "",
      customer: "",
      phone: "",
      total: "",
      product_id: "",
      users_id: "",
    }
  );

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (existing) {
      Object.assign(existing, form);
    } else {
      bills.push({ id: Date.now(), ...form });
    }
    nav("/bills");
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">{existing ? "Edit Bill" : "Add Bill"}</h2>
      {["bill_id", "customer", "phone", "total", "product_id", "users_id"].map((f) => (
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
        <button type="button" onClick={() => nav("/bills")} className="bg-gray-400 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </form>
  );
}
