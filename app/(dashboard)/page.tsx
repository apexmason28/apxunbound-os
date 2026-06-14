import Link from "next/link"
import { Camera, BarChart3, GitMerge, Activity, FileText, Utensils, ArrowUpRight, Zap, TrendingUp, Users, AlertTriangle, CheckCircle2, Circle } from "lucide-react"
import { Sparkline } from "@/components/ui/sparkline"
import { Greeting } from "@/components/dashboard/greeting"

/* ─── Static placeholder sparkline data ─────────────────────────────────────── */
const SP_CASH   = [2.1, 3.4, 2.8, 4.2, 3.9, 5.1, 4.4, 6.2, 5.8, 7.1]
const SP_SPEND  = [1.2, 1.8, 1.5, 2.1, 1.9, 2.4, 2.0, 2.8, 2.6, 3.0]
const SP_LEADS  = [4, 7, 5, 9, 6, 11, 8, 13, 10, 15]
const SP_ROAS   = [1.8, 2.1, 1.6, 2.4, 2.0, 2.6, 2.2, 2.8, 2.4, 2.9]

/* ─── Module config ─────────────────────────────────────────────────────────── */
const MODULES = [
  {
    label: "Instagram Growth OS",
    href: "/instagram",
    icon: Camera,
    desc: "Analytics · Account health · Content engine · Competitor tracking",
    gb: "gb-purple", glow: "glow-purple",
    accent: "#a855f7", badge: "bg-purple-500/10 text-purple-400",
    sub: ["Analytics", "Health", "Competitors", "Schedule"],
    stat: "—", statLabel: "followers",
    span: "lg:col-span-2",
  },
  {
    label: "Meta Ads Manager",
    href: "/ads",
    icon: BarChart3,
    desc: "Live campaign monitor · KPI alerts · Auto-kill thresholds · Claude creative engine",
    gb: "gb-blue", glow: "glow-blue",
    accent: "#3b82f6", badge: "bg-blue-500/10 text-blue-400",
    sub: ["Campaigns", "KPI Alerts", "Creative Engine"],
    stat: "—", statLabel: "active campaigns",
    span: "lg:col-span-1",
  },
  {
    label: "Sales Pipeline",
    href: "/pipeline",
    icon: GitMerge,
    desc: "GHL sync · Show rate · Close rate · CPBC · Constraint identifier",
    gb: "gb-emerald", glow: "glow-emerald",
    accent: "#10b981", badge: "bg-emerald-500/10 text-emerald-400",
    sub: ["All Leads", "Analytics"],
    stat: "—", statLabel: "open leads",
    span: "lg:col-span-1",
  },
  {
    label: "Business Health",
    href: "/health",
    icon: Activity,
    desc: "Cash ROAS 2:1 target · Revenue ROAS 5:1 · Ad spend vs collections over time",
    gb: "gb-amber", glow: "glow-amber",
    accent: "#f59e0b", badge: "bg-amber-500/10 text-amber-400",
    sub: ["ROAS", "Revenue", "Ad Spend"],
    stat: "—", statLabel: "cash ROAS",
    span: "lg:col-span-1",
  },
  {
    label: "Content OS",
    href: "/content",
    icon: FileText,
    desc: "Claude-generated hooks, captions & hashtags · Calendar · Publish via Instagram API",
    gb: "gb-rose", glow: "glow-rose",
    accent: "#f43f5e", badge: "bg-rose-500/10 text-rose-400",
    sub: ["Generate", "Calendar"],
    stat: "—", statLabel: "drafts ready",
    span: "lg:col-span-1",
  },
  {
    label: "Dinner Events",
    href: "/dinners",
    icon: Utensils,
    desc: "$1,200/seat · 10–12 guests · Application review · Testimonials · Upsell tracking",
    gb: "gb-indigo", glow: "glow-indigo",
    accent: "#6366f1", badge: "bg-indigo-500/10 text-indigo-400",
    sub: ["Events", "Applications"],
    stat: "—", statLabel: "upcoming dinners",
    span: "lg:col-span-2",
  },
]

/* ─── KPI thresholds ─────────────────────────────────────────────────────────── */
const KPIs = [
  { label: "CPM",        range: "$30–90",   kill: "3× after 6h" },
  { label: "CTR",        range: "1–3%",     kill: null },
  { label: "CPC",        range: "$2–5",     kill: null },
  { label: "CPL",        range: "$30–60",   kill: "2×" },
  { label: "CPBC",       range: "$100–250", kill: "2×" },
  { label: "Show Rate",  range: "50%+",     kill: null },
  { label: "Close Rate", range: "25%+",     kill: null },
  { label: "Cash ROAS",  range: "2:1 min",  kill: null },
  { label: "Rev ROAS",   range: "5:1 min",  kill: null },
]

/* ─── Products ───────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  { label: "Founder Dinners",  price: "$1,200",   unit: "/seat",    icon: Utensils,   color: "#6366f1" },
  { label: "DWY Group Course", price: "$2,800",   unit: "",         icon: Users,      color: "#a855f7" },
  { label: "1:1 Coaching",     price: "$12k",     unit: "/3 mo",    icon: TrendingUp, color: "#10b981" },
  { label: "Skool Community",  price: "Free",     unit: "",         icon: Zap,        color: "#f59e0b" },
]

/* ─── Integrations status ────────────────────────────────────────────────────── */
const INTEGRATIONS = [
  { label: "GHL",       status: "pending" },
  { label: "Meta Ads",  status: "pending" },
  { label: "Instagram", status: "pending" },
  { label: "Supabase",  status: "pending" },
]

export default function DashboardHome() {
  return (
    <div className="space-y-10">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="fade-up flex items-start justify-between gap-6">
        <Greeting />
        <div className="flex items-center gap-2 flex-shrink-0">
          {INTEGRATIONS.map(({ label, status }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: status === "live" ? "#10b981" : status === "error" ? "#ef4444" : "#3f3f46" }}
              />
              <span className="text-zinc-500">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Hero KPIs ──────────────────────────────────────────────────────── */}
      <div className="fade-up fade-up-1 grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "CASH COLLECTED",  value: "—",  sub: "awaiting GHL",  sparkline: SP_CASH,  color: "#10b981" },
          { label: "AD SPEND",        value: "—",  sub: "awaiting Meta", sparkline: SP_SPEND, color: "#3b82f6" },
          { label: "CASH ROAS",       value: "—",  sub: "target: 2:1",   sparkline: SP_ROAS,  color: "#f59e0b" },
          { label: "PIPELINE LEADS",  value: "—",  sub: "awaiting GHL",  sparkline: SP_LEADS, color: "#a855f7" },
        ].map(({ label, value, sub, sparkline, color }) => (
          <div
            key={label}
            className="relative rounded-2xl p-5 overflow-hidden group"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${color}80, transparent)` }} />

            <div className="flex items-start justify-between mb-3">
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-zinc-600">{label}</p>
              <div className="opacity-60">
                <Sparkline data={sparkline} color={color} width={64} height={22} />
              </div>
            </div>
            <p className="text-3xl font-bold text-white num tracking-tight">{value}</p>
            <p className="text-[11px] text-zinc-600 mt-1.5">{sub}</p>
          </div>
        ))}
      </div>

      {/* ── Module bento grid ──────────────────────────────────────────────── */}
      <section className="fade-up fade-up-2 space-y-3">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-700">Modules</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {MODULES.map((mod) => {
            const Icon = mod.icon
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className={`group relative rounded-2xl p-5 transition-all duration-200 hover:scale-[1.012] hover:-translate-y-0.5 ${mod.gb} ${mod.glow} ${mod.span}`}
              >
                {/* Top-right arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-150 translate-x-1 group-hover:translate-x-0">
                  <ArrowUpRight size={13} className="text-zinc-400" />
                </div>

                {/* Icon */}
                <div
                  className="h-9 w-9 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${mod.accent}14`, border: `1px solid ${mod.accent}28` }}
                >
                  <Icon size={16} style={{ color: mod.accent }} />
                </div>

                {/* Label + desc */}
                <h3 className="text-sm font-semibold text-white mb-1.5 leading-snug tracking-tight">{mod.label}</h3>
                <p className="text-[11px] leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.32)" }}>{mod.desc}</p>

                {/* Sub-pages + stat */}
                <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex flex-wrap gap-1">
                    {mod.sub.map((s) => (
                      <span
                        key={s}
                        className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${mod.badge}`}
                        style={{ background: `${mod.accent}0d` }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-700 shrink-0 ml-2">
                    <span className="num font-medium text-zinc-500">{mod.stat}</span> {mod.statLabel}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Products + KPI side-by-side ────────────────────────────────────── */}
      <div className="fade-up fade-up-3 grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Products */}
        <section className="space-y-3">
          <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-700">Products</p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
            {PRODUCTS.map(({ label, price, unit, icon: Icon, color }, i) => (
              <div
                key={label}
                className="flex items-center gap-4 px-5 py-4 hover:bg-white/[0.025] transition-colors"
                style={i < PRODUCTS.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.05)" } : {}}
              >
                <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${color}14`, border: `1px solid ${color}25` }}>
                  <Icon size={13} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-zinc-200">{label}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-bold text-white num">{price}</span>
                  {unit && <span className="text-[10px] text-zinc-600 ml-0.5">{unit}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KPI Thresholds */}
        <section className="space-y-3">
          <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-700">KPI Thresholds</p>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
            {KPIs.map(({ label, range, kill }, i) => (
              <div
                key={label}
                className="flex items-center gap-3 px-5 py-3 hover:bg-white/[0.025] transition-colors"
                style={i < KPIs.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.04)" } : {}}
              >
                <p className="w-24 text-xs font-medium text-zinc-300 shrink-0">{label}</p>
                <p className="flex-1 text-xs text-emerald-500 font-medium num">{range}</p>
                {kill
                  ? <span className="text-[10px] font-semibold text-red-400 bg-red-500/10 border border-red-500/15 rounded-full px-2 py-0.5 shrink-0">{kill}</span>
                  : <span className="text-[10px] text-zinc-800 shrink-0">—</span>
                }
              </div>
            ))}
          </div>
        </section>
      </div>


    </div>
  )
}
