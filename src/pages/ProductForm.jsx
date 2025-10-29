import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../mockData'

export default function ProductForm() {
  const { id } = useParams()
  const nav = useNavigate()
  const ex = products.find(p => p.id === Number(id))

  const [form, setForm] = useState(
    ex || { product_id: '', name: '', detail: '', price: '', category_id: '', users_id: '' }
  )

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    if (!ex) {
      form.id = Date.now()
      products.push(form)
    } else {
      const i = products.findIndex(p => p.id === ex.id)
      products[i] = form
    }
    nav('/products')
  }

  return (
    <form
      onSubmit={submit}
      className="max-w-md mx-auto bg-white p-4 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">Product Form</h2>

      <label className="block mb-1">Product ID</label>
      <input
        name="product_id"
        value={form.product_id}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-1">Name</label>
      <input
        name="name"
        value={form.name}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-1">Detail</label>
      <input
        name="detail"
        value={form.detail}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-1">Price</label>
      <input
        name="price"
        type="number"
        value={form.price}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-1">Category ID</label>
      <input
        name="category_id"
        value={form.category_id}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-1">Users ID</label>
      <input
        name="users_id"
        value={form.users_id}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <div className="flex justify-end space-x-2">
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
        <button
          type="button"
          onClick={() => nav('/products')}
          className="bg-gray-400 text-white px-3 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
