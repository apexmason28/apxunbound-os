"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils/formatters"
import { SignOutButton } from "@/components/dashboard/sign-out-button"
import {
  LayoutDashboard, Camera, BarChart3, GitMerge,
  Activity, FileText, Utensils, Settings,
} from "lucide-react"

const NAV = [
  { label: "Overview",        href: "/",          icon: LayoutDashboard },
  { label: "Instagram",       href: "/instagram",  icon: Camera },
  { label: "Meta Ads",        href: "/ads",        icon: BarChart3 },
  { label: "Pipeline",        href: "/pipeline",   icon: GitMerge },
  { label: "Business Health", href: "/health",     icon: Activity },
  { label: "Content OS",      href: "/content",    icon: FileText },
  { label: "Dinner Events",   href: "/dinners",    icon: Utensils },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside
      className="fixed inset-y-0 left-0 z-50 w-64 flex flex-col"
      style={{
        background: "rgba(6,8,16,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderRight: "1px solid rgba(255,255,255,0.055)",
      }}
    >
      {/* Brand */}
      <div className="px-5 pt-6 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-3">
          <div
            className="h-8 w-8 rounded-xl flex items-center justify-center text-[13px] font-black text-white shrink-0"
            style={{ background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)", boxShadow: "0 0 16px rgba(99,102,241,0.5)" }}
          >
            A
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: "rgba(165,180,252,0.7)" }}>
              APXUnbound
            </p>
            <p className="text-sm font-semibold text-white -mt-0.5 tracking-tight">Business OS</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="px-2 mb-2 text-[9px] font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.18)" }}>
          Modules
        </p>

        {NAV.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || (href !== "/" && pathname.startsWith(href))
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] transition-all duration-150",
                active ? "text-white font-medium" : "text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.04]"
              )}
              style={active ? {
                background: "linear-gradient(90deg, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.06) 100%)",
                boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.22), 0 0 16px -4px rgba(99,102,241,0.2)",
              } : {}}
            >
              {active && (
                <span
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 rounded-full"
                  style={{ background: "linear-gradient(180deg, #6366f1, #a78bfa)" }}
                />
              )}
              <Icon
                size={14}
                className={cn(
                  "shrink-0 transition-colors",
                  active ? "text-indigo-400" : "text-zinc-600 group-hover:text-zinc-400"
                )}
              />
              <span className="truncate">{label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 space-y-1" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="flex items-center gap-3 px-2 py-2 rounded-xl">
          <div
            className="h-7 w-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white shrink-0"
            style={{ background: "linear-gradient(135deg, #1f2937, #374151)" }}
          >
            O
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white leading-none truncate">Ozzie</p>
            <p className="text-[10px] text-zinc-600 mt-0.5">Admin</p>
          </div>
          <SignOutButton />
        </div>
      </div>
    </aside>
  )
}
