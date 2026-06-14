"use client"

import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"

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
      className="h-7 w-7 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-300 hover:bg-white/5 transition-all"
      title="Sign out"
    >
      <LogOut size={13} />
    </button>
  )
}
