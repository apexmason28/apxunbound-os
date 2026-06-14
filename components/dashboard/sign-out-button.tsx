"use client"

import { useRouter } from "next/navigation"

export function SignOutButton() {
  const router = useRouter()

  async function handleSignOut() {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/login")
    router.refresh()
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
    >
      Sign out
    </button>
  )
}
