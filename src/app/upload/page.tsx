"use client"
import { useState } from "react"

export default function UploadPage() {
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", e.target.file.files[0])

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })

    const text = await res.text()
    setMessage(text)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="file" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded ml-2">
        Upload
      </button>
      <p className="mt-2">{message}</p>
    </form>
  )
}
