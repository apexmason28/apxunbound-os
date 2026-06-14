"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"

function LoginForm() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const params = useSearchParams()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push(params.get("from") ?? "/")
      router.refresh()
    } else {
      setError("Wrong password.")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
        required
        className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none"
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={loading || !password}
        className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors disabled:opacity-50"
      >
        {loading ? "Checking…" : "Enter"}
      </button>
    </form>
  )
}

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm space-y-8">
      <div className="text-center space-y-1">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">APXUnbound</p>
        <h1 className="text-2xl font-bold text-white">Business OS</h1>
        <p className="text-sm text-zinc-600">Internal access only</p>
      </div>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  )
}
