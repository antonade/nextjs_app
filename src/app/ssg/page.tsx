export const revalidate = 60 // ISR (regenerasi setiap 60 detik)

export default async function SSGPage() {
  const res = await fetch("https://api.vercel.app/blog", { next: { revalidate: 60 } })
  const posts = await res.json()

  return (
    <div>
      <h1>Blog Posts (SSG)</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
