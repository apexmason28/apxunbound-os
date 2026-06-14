import Link from "next/link"

const MODULES = [
  {
    label: "Instagram Growth OS",
    href: "/instagram",
    icon: "◎",
    description: "Analytics · Account health · Content engine · Competitor tracking · Schedule via API",
    color: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
    accent: "text-purple-400",
    sub: [
      { label: "Analytics", href: "/instagram/analytics" },
      { label: "Account Health", href: "/instagram/health" },
      { label: "Competitors", href: "/instagram/competitors" },
      { label: "Schedule", href: "/instagram/schedule" },
    ],
  },
  {
    label: "Meta Ads Manager",
    href: "/ads",
    icon: "◈",
    description: "Live campaign monitor · KPI alerts with auto-kill thresholds · Claude creative engine",
    color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    accent: "text-blue-400",
    sub: [
      { label: "Campaigns", href: "/ads/campaigns" },
      { label: "KPI Alerts", href: "/ads/alerts" },
      { label: "Creative Engine", href: "/ads/creative" },
    ],
  },
  {
    label: "Sales Pipeline",
    href: "/pipeline",
    icon: "◑",
    description: "GHL integration · Show rate · Close rate · CPBC · Constraint analysis",
    color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
    accent: "text-emerald-400",
    sub: [
      { label: "All Leads", href: "/pipeline/leads" },
      { label: "Analytics", href: "/pipeline/analytics" },
    ],
  },
  {
    label: "Business Health",
    href: "/health",
    icon: "◉",
    description: "Cash ROAS (2:1 target) · Revenue ROAS (5:1 target) · Ad spend vs collections",
    color: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
    accent: "text-amber-400",
    sub: [],
  },
  {
    label: "Content OS",
    href: "/content",
    icon: "◧",
    description: "AI-generated hooks, captions & hashtags · Content calendar · Publish via Instagram API",
    color: "from-rose-500/10 to-pink-500/10 border-rose-500/20",
    accent: "text-rose-400",
    sub: [
      { label: "Generate", href: "/content/generate" },
      { label: "Calendar", href: "/content/calendar" },
    ],
  },
  {
    label: "Dinner Events",
    href: "/dinners",
    icon: "◍",
    description: "$2,500–$3,500/ticket · 10–12 guests · Application review · Testimonials · Upsell tracking",
    color: "from-indigo-500/10 to-violet-500/10 border-indigo-500/20",
    accent: "text-indigo-400",
    sub: [
      { label: "Events", href: "/dinners/events" },
      { label: "Applications", href: "/dinners/applications" },
    ],
  },
]

const KPI_THRESHOLDS = [
  { label: "CPM", range: "$30–90", kill: "3× after 6h" },
  { label: "CTR", range: "1–3%", kill: "—" },
  { label: "CPC", range: "$2–5", kill: "—" },
  { label: "CPL", range: "$30–60", kill: "2×" },
  { label: "CPBC", range: "$100–250", kill: "2×" },
  { label: "Show Rate", range: "50%+", kill: "—" },
  { label: "Close Rate", range: "25%+", kill: "—" },
  { label: "Cash ROAS", range: "2:1 min", kill: "—" },
  { label: "Rev ROAS", range: "5:1 min", kill: "—" },
]

export default function DashboardHome() {
  return (
    <div className="space-y-10 max-w-5xl">

      {/* Header */}
      <div className="space-y-1">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">APXUnbound LLC</p>
        <h1 className="text-4xl font-bold text-white tracking-tight">Business OS</h1>
        <p className="text-zinc-500 text-sm mt-2">
          Ozzie coaches · Mason runs ops · Donnie closes.{" "}
          <span className="text-zinc-600">High-performance mindset for 6–7 figure operators.</span>
        </p>
      </div>

      {/* Module Grid */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">Modules</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((mod) => (
            <Link
              key={mod.href}
              href={mod.href}
              className={`group relative rounded-xl border bg-gradient-to-br p-5 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-black/40 ${mod.color}`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-2xl leading-none ${mod.accent}`}>{mod.icon}</span>
                <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">→</span>
              </div>
              <h3 className="font-semibold text-white text-base mb-1">{mod.label}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4">{mod.description}</p>
              {mod.sub.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {mod.sub.map((s) => (
                    <span
                      key={s.href}
                      className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-xs text-zinc-400"
                    >
                      {s.label}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* KPI Reference */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">
          Hardcoded KPI Thresholds
        </h2>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Metric</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Healthy Range</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Kill Trigger</th>
              </tr>
            </thead>
            <tbody>
              {KPI_THRESHOLDS.map((kpi, i) => (
                <tr key={kpi.label} className={i < KPI_THRESHOLDS.length - 1 ? "border-b border-white/5" : ""}>
                  <td className="px-4 py-2.5 font-medium text-white">{kpi.label}</td>
                  <td className="px-4 py-2.5 text-emerald-400">{kpi.range}</td>
                  <td className="px-4 py-2.5 text-zinc-500">
                    {kpi.kill === "—" ? (
                      <span className="text-zinc-700">—</span>
                    ) : (
                      <span className="text-red-400">{kpi.kill}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Funnel Reference */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Funnel Structure</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Standard Funnel</p>
            <div className="flex items-center gap-2 flex-wrap text-sm">
              {["Ad", "Application", "Setter Qualifies", "Book Call", "Donnie Closes", "Onboard"].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="text-zinc-300">{step}</span>
                  {i < arr.length - 1 && <span className="text-zinc-700">→</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">High-Ticket DSL</p>
            <div className="flex items-center gap-2 flex-wrap text-sm">
              {["Ad", "DSL Page", "Book Call", "Thank You"].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="text-zinc-300">{step}</span>
                  {i < arr.length - 1 && <span className="text-zinc-700">→</span>}
                </span>
              ))}
            </div>
            <p className="text-xs text-zinc-600 mt-2">No optin. Straight to book.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Products</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 text-sm">
          {[
            { label: "Founder Dinners", price: "$2,500–$3,500", detail: "10–12 people · LA" },
            { label: "DWY Group Course", price: "$2,800", detail: "Group coaching" },
            { label: "1:1 Coaching", price: "$12k–$20k", detail: "3 months · Ozzie" },
            { label: "Skool Community", price: "Free", detail: "Top of funnel" },
          ].map(({ label, price, detail }) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs text-zinc-500 mb-1">{label}</p>
              <p className="font-bold text-white">{price}</p>
              <p className="text-xs text-zinc-600 mt-0.5">{detail}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
