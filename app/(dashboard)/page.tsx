import Link from "next/link"
import {
  Camera, BarChart3, GitMerge, Activity, FileText, Utensils,
  ArrowUpRight, Zap, TrendingUp, Users, DollarSign,
} from "lucide-react"

const MODULES = [
  {
    label: "Instagram Growth OS",
    href: "/instagram",
    icon: Camera,
    description: "Analytics · Account health · Content engine · Competitor tracking",
    gradient: "from-purple-600/20 to-pink-600/10",
    border: "rgba(168,85,247,0.2)",
    glow: "rgba(168,85,247,0.12)",
    accent: "#a855f7",
    sub: ["Analytics", "Account Health", "Competitors", "Schedule"],
  },
  {
    label: "Meta Ads Manager",
    href: "/ads",
    icon: BarChart3,
    description: "Live campaign monitor · KPI alerts · Auto-kill thresholds · Creative engine",
    gradient: "from-blue-600/20 to-cyan-600/10",
    border: "rgba(59,130,246,0.2)",
    glow: "rgba(59,130,246,0.12)",
    accent: "#3b82f6",
    sub: ["Campaigns", "KPI Alerts", "Creative Engine"],
  },
  {
    label: "Sales Pipeline",
    href: "/pipeline",
    icon: GitMerge,
    description: "GHL integration · Show rate · Close rate · CPBC · Constraint analysis",
    gradient: "from-emerald-600/20 to-teal-600/10",
    border: "rgba(16,185,129,0.2)",
    glow: "rgba(16,185,129,0.12)",
    accent: "#10b981",
    sub: ["All Leads", "Analytics"],
  },
  {
    label: "Business Health",
    href: "/health",
    icon: Activity,
    description: "Cash ROAS 2:1 target · Revenue ROAS 5:1 target · Ad spend vs collections",
    gradient: "from-amber-600/20 to-orange-600/10",
    border: "rgba(245,158,11,0.2)",
    glow: "rgba(245,158,11,0.12)",
    accent: "#f59e0b",
    sub: ["Revenue", "ROAS", "Ad Spend"],
  },
  {
    label: "Content OS",
    href: "/content",
    icon: FileText,
    description: "AI-generated hooks · Captions & hashtags · Content calendar · Publish via API",
    gradient: "from-rose-600/20 to-pink-600/10",
    border: "rgba(244,63,94,0.2)",
    glow: "rgba(244,63,94,0.12)",
    accent: "#f43f5e",
    sub: ["Generate", "Calendar"],
  },
  {
    label: "Dinner Events",
    href: "/dinners",
    icon: Utensils,
    description: "$1,200/seat · 10–12 guests · Application review · Testimonials · Upsell tracking",
    gradient: "from-indigo-600/20 to-violet-600/10",
    border: "rgba(99,102,241,0.2)",
    glow: "rgba(99,102,241,0.12)",
    accent: "#6366f1",
    sub: ["Events", "Applications"],
  },
]

const KPI_THRESHOLDS = [
  { label: "CPM",       range: "$30–90",   kill: "3× after 6h" },
  { label: "CTR",       range: "1–3%",     kill: null },
  { label: "CPC",       range: "$2–5",     kill: null },
  { label: "CPL",       range: "$30–60",   kill: "2×" },
  { label: "CPBC",      range: "$100–250", kill: "2×" },
  { label: "Show Rate", range: "50%+",     kill: null },
  { label: "Close Rate",range: "25%+",     kill: null },
  { label: "Cash ROAS", range: "2:1 min",  kill: null },
  { label: "Rev ROAS",  range: "5:1 min",  kill: null },
]

const PRODUCTS = [
  { label: "Founder Dinners",  price: "$1,200/seat", detail: "10–12 people · LA",    icon: Utensils,   color: "#6366f1" },
  { label: "DWY Group Course", price: "$2,800",       detail: "Group coaching",       icon: Users,      color: "#a855f7" },
  { label: "1:1 Coaching",     price: "$12k",         detail: "4 months · Ozzie",     icon: TrendingUp, color: "#10b981" },
  { label: "Skool Community",  price: "Free",         detail: "Top of funnel",        icon: Zap,        color: "#f59e0b" },
]

const FUNNELS = [
  {
    label: "Standard Funnel",
    steps: ["Ad", "Application", "Setter Qualifies", "Book Call", "Donnie Closes", "Onboard"],
  },
  {
    label: "High-Ticket VSL",
    steps: ["Ad", "VSL Page", "Book Call", "Thank You"],
    note: "No optin. Straight to book.",
  },
]

export default function DashboardHome() {
  return (
    <div className="space-y-12 animate-fade-in">

      {/* Header */}
      <div className="flex items-end justify-between">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase gradient-text-accent">
            APXUnbound LLC
          </p>
          <h1 className="text-4xl font-bold tracking-tight gradient-text">
            Business OS
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Command center for growth, ads, pipeline, and events.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-dot" />
          Live
        </div>
      </div>

      {/* Module Grid */}
      <section className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-600">Modules</p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod) => {
            const Icon = mod.icon
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className={`group relative rounded-xl p-5 transition-all duration-200 hover:scale-[1.015] bg-gradient-to-br ${mod.gradient}`}
                style={{
                  border: `1px solid ${mod.border}`,
                  boxShadow: `0 0 30px -8px ${mod.glow}`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${mod.accent}18`, border: `1px solid ${mod.accent}30` }}>
                    <Icon size={15} style={{ color: mod.accent }} />
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-zinc-700 group-hover:text-zinc-400 transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1.5 leading-snug">{mod.label}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-4">{mod.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {mod.sub.map((s) => (
                    <span
                      key={s}
                      className="rounded-md px-2 py-0.5 text-[10px] font-medium text-zinc-400"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Products */}
      <section className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-600">Products</p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {PRODUCTS.map(({ label, price, detail, icon: Icon, color }) => (
            <div
              key={label}
              className="rounded-xl p-4 space-y-3"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="h-7 w-7 rounded-lg flex items-center justify-center"
                style={{ background: `${color}18`, border: `1px solid ${color}25` }}>
                <Icon size={13} style={{ color }} />
              </div>
              <div>
                <p className="text-[10px] text-zinc-600 mb-0.5 font-medium">{label}</p>
                <p className="text-lg font-bold text-white tracking-tight">{price}</p>
                <p className="text-[10px] text-zinc-600 mt-0.5">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KPI Thresholds */}
      <section className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-600">KPI Thresholds</p>
        <div className="rounded-xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Metric</th>
                <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Healthy Range</th>
                <th className="px-5 py-3 text-left text-[10px] font-semibold uppercase tracking-wider text-zinc-600">Kill Trigger</th>
              </tr>
            </thead>
            <tbody>
              {KPI_THRESHOLDS.map((kpi, i) => (
                <tr
                  key={kpi.label}
                  className="hover:bg-white/[0.015] transition-colors"
                  style={i < KPI_THRESHOLDS.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.04)" } : {}}
                >
                  <td className="px-5 py-3 text-sm font-medium text-zinc-200">{kpi.label}</td>
                  <td className="px-5 py-3 text-sm text-emerald-400 font-medium">{kpi.range}</td>
                  <td className="px-5 py-3">
                    {kpi.kill
                      ? <span className="text-red-400 text-xs font-semibold bg-red-500/10 border border-red-500/20 rounded-full px-2 py-0.5">{kpi.kill}</span>
                      : <span className="text-zinc-700">—</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Funnel Structure */}
      <section className="space-y-4">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-600">Funnel Structure</p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {FUNNELS.map(({ label, steps, note }) => (
            <div
              key={label}
              className="rounded-xl p-5 space-y-3"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600">{label}</p>
              <div className="flex items-center gap-1.5 flex-wrap">
                {steps.map((step, i) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="text-xs text-zinc-300 font-medium">{step}</span>
                    {i < steps.length - 1 && (
                      <span className="text-zinc-700 text-xs">→</span>
                    )}
                  </span>
                ))}
              </div>
              {note && <p className="text-[11px] text-zinc-600">{note}</p>}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
