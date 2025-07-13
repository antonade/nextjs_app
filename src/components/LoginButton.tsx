"use client"
import { signIn, signOut, useSession } from "next-auth/react"

export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <p>Halo, {session.user?.name}</p>
        <button onClick={() => signOut()}>Keluar</button>
      </div>
    )
  }

  return <button onClick={() => signIn("github")}>Login dengan GitHub</button>
}
