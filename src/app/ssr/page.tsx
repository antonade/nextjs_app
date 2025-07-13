export const dynamic = "force-dynamic"

export default async function Page() {
  const res = await fetch("https://api.vercel.app/blog", { cache: "no-store" })
  const posts = await res.json()

  return (
    <div>
      <h1>Blog Posts (SSR)</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
