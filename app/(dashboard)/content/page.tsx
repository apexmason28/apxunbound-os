export default function ContentPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Content OS</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-sm">
        {[
          { label: "Generate", href: "/content/generate", desc: "Claude generates hooks, captions, hashtags" },
          { label: "Calendar", href: "/content/calendar", desc: "Scheduled content calendar view" },
          { label: "Schedule", href: "/instagram/schedule", desc: "Publish queue via Instagram API" },
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
