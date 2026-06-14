export default function DinnersPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Founder Dinner Manager</h2>
      <p className="text-zinc-500 text-sm">$2,500–$3,500/ticket · 10–12 guests · LA-based</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
        {[
          { label: "Events", href: "/dinners/events", desc: "Upcoming and past dinners" },
          { label: "Applications", href: "/dinners/applications", desc: "Applicant review, approve, waitlist" },
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
