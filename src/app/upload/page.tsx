"use client"
import { useState } from "react"

export default function UploadPage() {
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const fileInput = form.elements.namedItem("file") as HTMLInputElement

    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      setMessage("No file selected.")
      return
    }

    const formData = new FormData()
    formData.append("file", fileInput.files[0])

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
