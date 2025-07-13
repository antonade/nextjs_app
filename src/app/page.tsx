import Image from "next/image"

export default function Home() {
  return (
    <main>
      <h1>Optimized Image</h1>
      <Image src="/Screenshot 2025-07-14 035617.png" alt="Gambar" width={600} height={400} />
    </main>
  )
}
