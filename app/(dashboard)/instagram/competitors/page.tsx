import { TrendingUp, Users, Zap, ExternalLink } from "lucide-react"

const SUGGESTED_COMPETITORS = [
  {
    handle: "@alexhormozi",
    name: "Alex Hormozi",
    followers: "8.9M",
    why: "Acquisition.com. Same ICP — operators wanting to scale. Dominates with free value → high-ticket offer. Study his hook structure and offer framing.",
    tactics: ["Daily volume posting", "Free game → premium offer", "Business case studies", "Contrarian takes"],
    threat: "high",
    niche: "Business scaling",
  },
  {
    handle: "@danmartell",
    name: "Dan Martell",
    followers: "1.2M",
    why: "SaaS/agency coaching for $1M+ operators. Dinner and mastermind events. Direct overlap with your founder dinner model.",
    tactics: ["Frameworks & systems content", "High-ticket mastermind events", "Operator-focused messaging", "YouTube long-form → IG clips"],
    threat: "high",
    niche: "SaaS / Agency coaching",
  },
  {
    handle: "@charlie_morgan_",
    name: "Charlie Morgan",
    followers: "180K",
    why: "Agency scaling coaching, $500k–$5M ICP. Similar setter/closer sales process. Blowing up on IG with no-BS operator content.",
    tactics: ["Raw talking-head content", "Revenue milestone posts", "Client result screenshots", "Direct DM funnels"],
    threat: "medium",
    niche: "Agency scaling",
  },
  {
    handle: "@raviabuvala",
    name: "Ravi Abuvala",
    followers: "95K",
    why: "Scaling With Systems — agency automation coaching. Overlapping ICP. Strong paid ad game driving to VSL → book call.",
    tactics: ["System-based content", "Case study reels", "Ad → VSL → call funnel", "Delegation frameworks"],
    threat: "medium",
    niche: "Agency / systems coaching",
  },
  {
    handle: "@myrongolden",
    name: "Myron Golden",
    followers: "680K",
    why: "High-ticket offer coaching, events, masterminds. Strong faith-based angle. Viral content on offer creation and sales.",
    tactics: ["Biblical/philosophical angle", "Offer structure breakdowns", "Live event clips", "Story-based selling"],
    threat: "medium",
    niche: "High-ticket offers",
  },
  {
    handle: "@colegordonnow",
    name: "Cole Gordon",
    followers: "210K",
    why: "Closer/setter training and remote sales. Clients overlap with yours — high-ticket coaches who need a sales team. Watch for setter market share.",
    tactics: ["Sales training content", "Objection handling clips", "Income claims / proof", "YouTube → IG repurpose"],
    threat: "low",
    niche: "Sales / closing",
  },
  {
    handle: "@taylorwelchtw",
    name: "Taylor Welch",
    followers: "140K",
    why: "Consulting/coaching for 7-figure operators. Strong email marketing angle — relevant to your email OS strategy. Dinner-style events.",
    tactics: ["Long-form value posts", "Email-first strategy", "High-ticket consulting", "Intimate mastermind events"],
    threat: "medium",
    niche: "Consulting / coaching",
  },
  {
    handle: "@hormozi_quotes",
    name: "Note: Watch for emerging accounts",
    followers: "—",
    why: "New accounts in the 'operator coaching' space gain 50–100K followers fast when they post raw journey content + client results. Monitor weekly.",
    tactics: ["Journey content", "Raw unpolished reels", "Controversial takes", "Result screenshots"],
    threat: "watch",
    niche: "Emerging",
  },
]

const threatStyle: Record<string, { bg: string; text: string; border: string; label: string }> = {
  high:   { bg: "rgba(239,68,68,0.1)",   text: "#f87171", border: "rgba(239,68,68,0.2)",   label: "High" },
  medium: { bg: "rgba(245,158,11,0.1)",  text: "#fbbf24", border: "rgba(245,158,11,0.2)",  label: "Medium" },
  low:    { bg: "rgba(16,185,129,0.1)",  text: "#34d399", border: "rgba(16,185,129,0.2)",  label: "Low" },
  watch:  { bg: "rgba(99,102,241,0.1)",  text: "#818cf8", border: "rgba(99,102,241,0.2)",  label: "Monitor" },
}

export default function CompetitorsPage() {
  return (
    <div className="space-y-8">

      <div>
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-purple-400 mb-1">Instagram</p>
        <h1 className="text-3xl font-bold text-white tracking-tight">Competitor Intelligence</h1>
        <p className="text-sm text-zinc-500 mt-1 max-w-2xl">
          Suggested based on @ozzieblessed's niche — high-ticket coaching, founder dinners, $500k–$10M operators in LA and online.
          Claude continuously researches trending accounts and content strategies in this space.
        </p>
      </div>

      {/* What to study banner */}
      <div
        className="rounded-2xl px-5 py-4 flex items-start gap-4"
        style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)" }}
      >
        <Zap size={16} className="text-indigo-400 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-white mb-1">What to reverse-engineer</p>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Hook format in the first 1–2 seconds · Offer framing language · How they handle objections in captions ·
            Which content types get the most saves (not just likes) · How fast they move from value → CTA ·
            What their bio says and where it sends traffic
          </p>
        </div>
      </div>

      {/* Competitor cards */}
      <div className="space-y-3">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-zinc-700">Suggested Accounts to Track</p>
        <div className="space-y-3">
          {SUGGESTED_COMPETITORS.map((c) => {
            const ts = threatStyle[c.threat]
            return (
              <div
                key={c.handle}
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                      style={{ background: "linear-gradient(135deg, #374151, #1f2937)" }}>
                      {c.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-white">{c.name}</p>
                        <a href={`https://instagram.com/${c.handle.replace("@","")}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={11} className="text-zinc-700 hover:text-zinc-400 transition-colors" />
                        </a>
                      </div>
                      <p className="text-[11px] text-zinc-600">{c.handle} · <span className="text-zinc-500 num">{c.followers}</span> followers</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] text-zinc-600 bg-white/[0.04] border border-white/[0.07] rounded-full px-2 py-0.5">{c.niche}</span>
                    <span
                      className="text-[10px] font-semibold rounded-full px-2 py-0.5 border"
                      style={{ background: ts.bg, color: ts.text, borderColor: ts.border }}
                    >
                      {ts.label}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-3">{c.why}</p>

                <div className="flex flex-wrap gap-1.5">
                  {c.tactics.map(t => (
                    <span key={t} className="text-[10px] font-medium text-zinc-500 bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Custom tracking note */}
      <div
        className="rounded-2xl px-5 py-4 text-xs text-zinc-600 leading-relaxed"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="text-zinc-500 font-medium">Coming when Instagram API is connected:</span> Auto-pull follower count, engagement rate, and post frequency for each account above. Flag when a competitor posts something that spikes their engagement so you can study it immediately.
      </div>

    </div>
  )
}
