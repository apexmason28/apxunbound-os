export default function InstagramPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Instagram Growth OS</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-sm">
        {[
          { label: "Analytics", href: "/instagram/analytics", desc: "Post performance, reach, engagement" },
          { label: "Account Health", href: "/instagram/health", desc: "Growth rate, score, benchmarks" },
          { label: "Content Engine", href: "/instagram/content", desc: "AI-generated content queue" },
          { label: "Competitors", href: "/instagram/competitors", desc: "Track & analyze competitor accounts" },
          { label: "Schedule", href: "/instagram/schedule", desc: "Calendar & publish via API" },
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
