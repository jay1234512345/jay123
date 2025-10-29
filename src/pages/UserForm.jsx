import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { users } from '../mockData'

export default function UserForm() {
  const { id } = useParams()
  const nav = useNavigate()
  const ex = users.find(u => u.id === Number(id))

  const [form, setForm] = useState(
    ex || { name: '', lastname: '', email: '', phone: '', password: '' }
  )

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    if (!ex) {
      form.id = Date.now()
      users.push(form)
    } else {
      const i = users.findIndex(u => u.id === ex.id)
      users[i] = form
    }
    nav('/users')
  }

  return (
    <form
      onSubmit={submit}
      className="max-w-md mx-auto bg-white p-4 rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">User Form</h2>

      <label className="block mb-1">Name</label>
      <input
        name="name"
        value={form.name}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-1">Lastname</label>
      <input
        name="lastname"
        value={form.lastname}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-1">Email</label>
      <input
        name="email"
        value={form.email}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-1">Phone</label>
      <input
        name="phone"
        value={form.phone}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-1">Password</label>
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={change}
        className="border p-2 w-full mb-2"
      />

      <div className="flex justify-end space-x-2">
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
        <button
          type="button"
          onClick={() => nav('/users')}
          className="bg-gray-400 text-white px-3 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
