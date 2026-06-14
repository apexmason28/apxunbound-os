"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const REVENUE_OPTIONS = [
  "Under $100k",
  "$100k – $250k",
  "$250k – $500k",
  "$500k – $1M",
  "$1M – $3M",
  "$3M – $10M",
  "$10M+",
]

export default function ApplyPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setLoading(true)

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      businessRole: (form.elements.namedItem("businessRole") as HTMLInputElement).value,
      revenue: (form.elements.namedItem("revenue") as HTMLSelectElement).value,
      constraint: (form.elements.namedItem("constraint") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/ghl/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? "Something went wrong. Please try again.")
      }

      router.push("/book")
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
          APXUnbound
        </p>
        <h1 className="text-3xl font-bold text-white leading-tight">
          Apply for an Exclusive<br />Founder Dinner
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed">
          10–12 founders. One table in LA. No pitches, no panels —
          just honest conversation about what's actually working.
        </p>
      </div>

      {/* Social proof bar */}
      <div className="flex items-center justify-center gap-6 text-xs text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Invite-only
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          10–12 seats
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          Los Angeles
        </span>
      </div>

      {/* Form card */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-5"
      >
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">First name</label>
            <input
              name="firstName"
              type="text"
              required
              placeholder="Mason"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-zinc-400">Last name</label>
            <input
              name="lastName"
              type="text"
              required
              placeholder="McFadden"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">Phone</label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
          />
        </div>

        {/* Business / Role */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            What do you do? <span className="text-zinc-600">(title + business)</span>
          </label>
          <input
            name="businessRole"
            type="text"
            required
            placeholder="CEO at Acme Agency — $1.2M ARR SaaS"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
          />
        </div>

        {/* Revenue */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">Annual revenue</label>
          <select
            name="revenue"
            required
            defaultValue=""
            className="w-full rounded-lg border border-white/20 bg-zinc-900 px-3 py-2.5 text-sm text-white outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors appearance-none cursor-pointer"
          >
            <option value="" disabled className="text-zinc-600">Select a range…</option>
            {REVENUE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-zinc-900">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Constraint */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-zinc-400">
            What's your #1 growth constraint right now?
          </label>
          <textarea
            name="constraint"
            required
            rows={4}
            placeholder="Be specific. The more honest you are, the more useful the dinner will be."
            className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors resize-none"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-xs text-red-400 text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 py-3 text-sm font-semibold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting…" : "Apply for a Seat →"}
        </button>

        <p className="text-center text-xs text-zinc-600">
          Applications reviewed within 24 hours. Seats are limited.
        </p>
      </form>

      {/* Footer trust */}
      <p className="text-center text-xs text-zinc-700">
        APXUnbound LLC · By submitting you agree to be contacted by our team.
      </p>
    </div>
  )
}
