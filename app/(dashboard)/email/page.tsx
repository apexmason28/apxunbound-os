import Link from "next/link"
import { Mail, Zap, BarChart2, ArrowUpRight, CheckCircle2, Circle } from "lucide-react"

const BENCHMARKS = [
  { label: "Emails / Month",   target: "30–40",   unit: "" },
  { label: "Open Rate",        target: "20%+",    unit: "" },
  { label: "Click Rate (DO)",  target: "0.5–1%+", unit: "" },
  { label: "Click Rate (CS)",  target: "0.2–0.5%",unit: "" },
  { label: "Unsubscribe Rate", target: "<1%",     unit: "" },
  { label: "Spam Rate",        target: "<0.1%",   unit: "" },
]

const AUTORESPONDER = [
  { day: "Immediate",   label: "Access Granted + PS: Book Call",         type: "access" },
  { day: "+3 hours",    label: "Reminder: Access Granted",               type: "access" },
  { day: "+21 hours",   label: "Last Chance: Access Granted",            type: "access" },
  { day: "+1 day",      label: "Direct Offer 1",                         type: "offer" },
  { day: "+1 day",      label: "Direct Offer 2 (FWD from team)",         type: "offer" },
  { day: "+1 day",      label: "Direct Offer 3 — Last Chance",           type: "offer" },
  { day: "7–10",        label: "Testimonials (4 emails)",                type: "proof" },
  { day: "11–15",       label: "YouTube + PS: Book a Call (5 emails)",   type: "content" },
  { day: "Day 15",      label: "Transition → Broadcast list",            type: "transition" },
]

const typeStyle: Record<string, string> = {
  access:     "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  offer:      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  proof:      "bg-amber-500/10 text-amber-400 border-amber-500/20",
  content:    "bg-purple-500/10 text-purple-400 border-purple-500/20",
  transition: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
}

const SUB_PAGES = [
  { label: "Campaigns",    href: "/email/campaigns",  icon: BarChart2, desc: "Live stats from Instantly — opens, clicks, replies, conversions" },
  { label: "Sequences",    href: "/email/sequences",  icon: Zap,       desc: "Autoresponder flow — 15-email new lead sequence" },
  { label: "Broadcasts",   href: "/email/broadcasts", icon: Mail,      desc: "Daily broadcast tracker — direct offers, testimonials, case studies, YouTube" },
]

export default function EmailPage() {
  return (
    <div className="space-y-10">

      {/* Header */}
      <div className="space-y-1">
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-indigo-400">Email Marketing</p>
        <h1 className="text-3xl font-bold text-white tracking-tight">Email OS</h1>
        <p className="text-sm text-zinc-500 mt-1">
          Efficiency play — increase funnel throughput, decrease CPBC. Target: 5–10 closes/month from email alone.
        </p>
      </div>

      {/* Integration status */}
      <div
        className="flex items-center gap-3 rounded-2xl px-5 py-4"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}>
          <Zap size={14} className="text-indigo-400" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white">Instantly API</p>
          <p className="text-[11px] text-zinc-600 mt-0.5">Not connected — add <code className="text-zinc-500 bg-white/5 px-1 rounded">INSTANTLY_API_KEY</code> to environment variables to enable live stats</p>
        </div>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-600 bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          Pending
        </span>
      </div>

      {/* Sub-pages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {SUB_PAGES.map(({ label, href, icon: Icon, desc }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-2xl p-5 transition-all duration-200 hover:scale-[1.012] gb-indigo glow-indigo"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="h-8 w-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)" }}>
                <Icon size={14} className="text-indigo-400" />
              </div>
              <ArrowUpRight size={13} className="text-zinc-700 group-hover:text-zinc-400 transition-colors" />
            </div>
            <p className="text-sm font-semibold text-white mb-1">{label}</p>
            <p className="text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>{desc}</p>
          </Link>
        ))}
      </div>

      {/* Benchmarks */}
      <section className="space-y-3">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-700">Benchmarks</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {BENCHMARKS.map(({ label, target }) => (
            <div
              key={label}
              className="rounded-2xl p-4"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-[10px] text-zinc-600 mb-1.5 font-medium leading-tight">{label}</p>
              <p className="text-lg font-bold text-white num">{target}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Autoresponder sequence */}
      <section className="space-y-3">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-700">Autoresponder Sequence (Day 0–15)</p>
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
          {AUTORESPONDER.map(({ day, label, type }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors"
              style={i < AUTORESPONDER.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.04)" } : {}}
            >
              <p className="text-[10px] font-mono text-zinc-600 w-20 shrink-0">{day}</p>
              <p className="text-xs text-zinc-300 flex-1">{label}</p>
              <span className={`text-[10px] font-semibold rounded-full border px-2 py-0.5 shrink-0 ${typeStyle[type]}`}>
                {type}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Broadcast types */}
      <section className="space-y-3">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-700">Broadcast Types</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            {
              label: "Direct Offer",
              pct: "~75% of closes",
              desc: "Relevant question → recent client win → offer → book a call. Outcome-based subject line. Highest click rate.",
              color: "#10b981",
            },
            {
              label: "Testimonial",
              pct: "Social proof",
              desc: "Lesson or insight first, testimonial woven in. Screenshot with play button → funnel with more proof + CTA. Don't make it feel like a testimonial.",
              color: "#6366f1",
            },
            {
              label: "Case Study",
              pct: "Client journey",
              desc: "Who they were, where they started, where they are now. Only use clients who are exactly your ideal prospect. E.g. $250k/mo → $1M/mo in 15 weeks.",
              color: "#a855f7",
            },
            {
              label: "YouTube / Value",
              pct: "Pure value",
              desc: "Drop a video or write a valuable insight with no CTA. Builds trust, improves deliverability, re-engages cold segments. Book call in PS only.",
              color: "#f59e0b",
            },
          ].map(({ label, pct, desc, color }) => (
            <div
              key={label}
              className="rounded-2xl p-5"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-white">{label}</p>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}>{pct}</span>
              </div>
              <p className="text-[11px] leading-relaxed text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverability checklist */}
      <section className="space-y-3">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-700">Deliverability Checklist</p>
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
          {[
            { done: false, item: "SPF and DKIM configured on sending domains" },
            { done: false, item: "Sending domains warmed up (2 weeks minimum)" },
            { done: false, item: "Google Postmaster Tools connected — check monthly" },
            { done: false, item: "Send to engaged subscribers only (opened last 11 emails)" },
            { done: false, item: "List verified through ZeroBounce or Millionverifier" },
            { done: false, item: "Unsubscribe and re-engage automations in place" },
            { done: false, item: "Encourage replies — respond to everyone who replies" },
          ].map(({ done, item }, i, arr) => (
            <div
              key={item}
              className="flex items-center gap-3 px-5 py-3.5 hover:bg-white/[0.02] transition-colors"
              style={i < arr.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.04)" } : {}}
            >
              {done
                ? <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                : <Circle size={14} className="text-zinc-700 shrink-0" />
              }
              <p className="text-xs text-zinc-400">{item}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
