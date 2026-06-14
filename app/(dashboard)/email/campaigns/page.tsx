import { Mail, TrendingUp, Users, MousePointer, AlertTriangle } from "lucide-react"

export default function EmailCampaignsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-indigo-400 mb-1">Email Marketing</p>
        <h1 className="text-3xl font-bold text-white tracking-tight">Campaigns</h1>
        <p className="text-sm text-zinc-500 mt-1">Live stats from Instantly — open rates, clicks, replies, pipeline attribution.</p>
      </div>

      {/* KPI placeholders */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "OPEN RATE",   value: "—", target: "20%+",   icon: Mail,          color: "#6366f1" },
          { label: "CLICK RATE",  value: "—", target: "0.5%+",  icon: MousePointer,  color: "#10b981" },
          { label: "REPLIES",     value: "—", target: "—",      icon: TrendingUp,    color: "#a855f7" },
          { label: "ACTIVE LEADS",value: "—", target: "—",      icon: Users,         color: "#f59e0b" },
        ].map(({ label, value, target, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl p-5 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${color}80, transparent)` }} />
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-zinc-600">{label}</p>
              <Icon size={12} style={{ color }} className="opacity-50" />
            </div>
            <p className="text-3xl font-bold text-white num">{value}</p>
            <p className="text-[11px] text-zinc-700 mt-1.5">target: {target}</p>
          </div>
        ))}
      </div>

      {/* Connection required */}
      <div className="rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-3"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.1)" }}>
        <div className="h-10 w-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
          <AlertTriangle size={16} className="text-indigo-400" />
        </div>
        <p className="text-sm font-medium text-white">Instantly API not connected</p>
        <p className="text-xs text-zinc-600 max-w-sm">
          Add <code className="text-zinc-400 bg-white/5 px-1.5 py-0.5 rounded">INSTANTLY_API_KEY</code> to your Vercel environment variables to pull live campaign data.
        </p>
      </div>
    </div>
  )
}
