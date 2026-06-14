"use client"

import { useCallback, useState } from "react"
import { Menu } from "lucide-react"
import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const closeSidebar = useCallback(() => setSidebarOpen(false), [])

  return (
    <div className="flex min-h-screen apx-canvas">
      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className="orb-1 absolute rounded-full"
          style={{
            width: 700, height: 700,
            top: -200, left: -150,
            background: "radial-gradient(circle, rgba(99,102,241,0.13) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          className="orb-2 absolute rounded-full"
          style={{
            width: 600, height: 600,
            bottom: -150, right: -100,
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="orb-3 absolute rounded-full"
          style={{
            width: 400, height: 400,
            top: "50%", left: "45%",
            background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <Sidebar open={sidebarOpen} onClose={closeSidebar} />

      <main className="relative z-10 lg:ml-64 flex-1 min-h-screen overflow-y-auto">
        {/* Mobile top bar */}
        <div
          className="lg:hidden sticky top-0 z-30 flex items-center gap-3 px-4 py-3"
          style={{
            background: "rgba(6,8,16,0.9)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255,255,255,0.055)",
          }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
          <div className="flex items-center gap-2">
            <div
              className="h-6 w-6 rounded-lg flex items-center justify-center text-[11px] font-black text-white"
              style={{ background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)" }}
            >
              A
            </div>
            <span className="text-sm font-semibold text-white tracking-tight">Business OS</span>
          </div>
        </div>

        <div className="px-4 py-6 lg:px-10 lg:py-10 max-w-[1200px]">
          {children}
        </div>
      </main>
    </div>
  )
}
