"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils/formatters"
import { SignOutButton } from "@/components/dashboard/sign-out-button"
import {
  LayoutDashboard,
  Camera,
  BarChart3,
  GitMerge,
  Activity,
  FileText,
  Utensils,
  LogOut,
} from "lucide-react"

const NAV = [
  { label: "Overview",        href: "/",         icon: LayoutDashboard },
  { label: "Instagram",       href: "/instagram", icon: Camera },
  { label: "Meta Ads",        href: "/ads",       icon: BarChart3 },
  { label: "Pipeline",        href: "/pipeline",  icon: GitMerge },
  { label: "Business Health", href: "/health",    icon: Activity },
  { label: "Content OS",      href: "/content",   icon: FileText },
  { label: "Dinner Events",   href: "/dinners",   icon: Utensils },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-40 w-64 flex flex-col"
      style={{ borderRight: "1px solid rgba(255,255,255,0.06)", background: "rgba(7,8,14,0.95)" }}>

      {/* Brand */}
      <div className="px-6 pt-7 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg flex items-center justify-center text-xs font-black text-white"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
            A
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] text-indigo-400 uppercase leading-none">APXUnbound</p>
            <p className="text-sm font-semibold text-white leading-tight mt-0.5">Business OS</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="px-3 mb-3 text-[10px] font-semibold tracking-[0.12em] uppercase"
          style={{ color: "rgba(255,255,255,0.2)" }}>
          Modules
        </p>
        {NAV.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || (href !== "/" && pathname.startsWith(href))
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-150",
                active
                  ? "text-white font-medium"
                  : "text-zinc-500 hover:text-zinc-200"
              )}
              style={active ? {
                background: "linear-gradient(90deg, rgba(99,102,241,0.15), rgba(139,92,246,0.08))",
                border: "1px solid rgba(99,102,241,0.2)",
                boxShadow: "inset 0 0 20px rgba(99,102,241,0.05)",
              } : {
                background: "transparent",
                border: "1px solid transparent",
              }}
            >
              <Icon
                size={15}
                className={cn(
                  "shrink-0 transition-colors",
                  active ? "text-indigo-400" : "text-zinc-600 group-hover:text-zinc-400"
                )}
              />
              {label}
              {active && (
                <span className="ml-auto h-1 w-1 rounded-full bg-indigo-400 opacity-80" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: "linear-gradient(135deg, #374151, #1f2937)" }}>
              O
            </div>
            <div>
              <p className="text-xs font-medium text-white leading-none">Ozzie</p>
              <p className="text-[10px] text-zinc-600 mt-0.5">Admin</p>
            </div>
          </div>
          <SignOutButton />
        </div>
      </div>
    </aside>
  )
}
