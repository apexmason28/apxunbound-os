"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils/formatters"
import { SignOutButton } from "@/components/dashboard/sign-out-button"

const NAV = [
  { label: "Overview", href: "/", icon: "▦" },
  { label: "Instagram", href: "/instagram", icon: "◎" },
  { label: "Meta Ads", href: "/ads", icon: "◈" },
  { label: "Pipeline", href: "/pipeline", icon: "◑" },
  { label: "Business Health", href: "/health", icon: "◉" },
  { label: "Content OS", href: "/content", icon: "◧" },
  { label: "Dinner Events", href: "/dinners", icon: "◍" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-60 border-r border-white/10 bg-zinc-950 flex flex-col">
      <div className="px-6 py-5 border-b border-white/10">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">APXUnbound</p>
        <h1 className="mt-1 text-lg font-bold text-white">Business OS</h1>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV.map(({ label, href, icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === href || (href !== "/" && pathname.startsWith(href))
                ? "bg-white/10 text-white font-medium"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <span className="text-base leading-none">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-white/10 flex items-center justify-end">
        <SignOutButton />
      </div>
    </aside>
  )
}
