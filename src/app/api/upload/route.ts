import { writeFile } from "fs/promises"
import path from "path"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.formData()
  const file = data.get("file") as File

  if (!file) {
    return new Response("Tidak ada file!", { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const filePath = path.join(process.cwd(), "public", file.name)
  await writeFile(filePath, buffer)

  return new Response("Upload berhasil!")
}
