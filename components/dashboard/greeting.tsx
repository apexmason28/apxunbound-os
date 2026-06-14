"use client"

import { useEffect, useState } from "react"

function greeting(h: number) {
  if (h < 5)  return "Late night"
  if (h < 12) return "Good morning"
  if (h < 17) return "Good afternoon"
  if (h < 21) return "Good evening"
  return "Late night grind"
}

export function Greeting() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  if (!now) return (
    <div>
      <div className="h-7 w-48 rounded-lg bg-white/5 animate-pulse mb-1" />
      <div className="h-4 w-64 rounded-lg bg-white/[0.03] animate-pulse" />
    </div>
  )

  const date = now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
  const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })

  return (
    <div>
      <h1 className="text-2xl font-bold text-white tracking-tight">
        {greeting(now.getHours())}, Ozzie
      </h1>
      <p className="text-sm text-zinc-500 mt-0.5 num">
        {date} <span className="text-zinc-700 mx-1.5">·</span> {time}
      </p>
    </div>
  )
}
