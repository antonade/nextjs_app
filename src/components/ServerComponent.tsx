export default async function ServerComponent() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", { cache: "no-store" })
  const data = await res.json()
  return <p>{data.title}</p>
}
