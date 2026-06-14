import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen apx-grid-bg">
      <Sidebar />
      <main className="ml-64 flex-1 min-h-screen overflow-y-auto">
        <div className="px-10 py-10 max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  )
}
