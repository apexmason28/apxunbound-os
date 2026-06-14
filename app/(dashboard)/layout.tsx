import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
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

      <Sidebar />

      <main className="relative z-10 ml-64 flex-1 min-h-screen overflow-y-auto">
        <div className="px-10 py-10 max-w-[1200px]">
          {children}
        </div>
      </main>
    </div>
  )
}
