"use client"

import { useState } from "react"

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzY5NjQxMjQ1LCJpYXQiOjE3Njk2Mzc2NDUsImp0aSI6ImU3YzBkZTY2NTdlYzRiMTZhMTIyYTMzMTJlMGQ1Y2QyIiwidXNlcl9pZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIn0.YfZhYnOd4k4YE2ecYFUWGn6QWPnLFHEvraiEoM28f8c"

export default function AddCourseModal({
  onClose,
  onCreate,
}: {
  onClose: () => void
  onCreate: (course: any) => void
}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleCreate = async () => {
    const res = await fetch("http://localhost:8000/api/courses/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        title,
        description,
        start_date: startDate,
        end_date: endDate,
      }),
    })

    const data = await res.json()

    // ✅ SADECE BACKEND'DEN GELENİ EKLİYORUZ
    onCreate(data)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-slate-900 p-6 rounded-xl w-[400px] space-y-4">
        <h2 className="text-xl font-bold">Add Course</h2>

        <input
          className="w-full p-2 bg-slate-800 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-2 bg-slate-800 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          className="w-full p-2 bg-slate-800 rounded"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          className="w-full p-2 bg-slate-800 rounded"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <div className="flex justify-end gap-3 pt-2">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleCreate}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}
