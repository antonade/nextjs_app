"use client"

import { useEffect, useState } from "react"

export default function CSRPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://api.vercel.app/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Blog Posts (CSR)</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
