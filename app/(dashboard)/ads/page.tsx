export default function AdsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Meta Ads Manager</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
        {[
          { label: "Campaigns", href: "/ads/campaigns", desc: "Live campaign monitor with KPI status" },
          { label: "KPI Alerts", href: "/ads/alerts", desc: "Auto-triggered kill/warn alerts" },
          { label: "Creative Engine", href: "/ads/creative", desc: "Ad copy & creative generation via Claude" },
        ].map(({ label, href, desc }) => (
          <a key={href} href={href} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
            <p className="font-semibold text-white">{label}</p>
            <p className="mt-1 text-xs text-zinc-500">{desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
