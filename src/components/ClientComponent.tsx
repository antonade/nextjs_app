"use client"
import { useState } from "react"

export default function ClientComponent() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  )
}
