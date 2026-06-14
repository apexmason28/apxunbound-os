export default function BroadcastsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-indigo-400 mb-1">Email Marketing</p>
        <h1 className="text-3xl font-bold text-white tracking-tight">Broadcasts</h1>
        <p className="text-sm text-zinc-500 mt-1">
          30–40 emails/month. Engage and convert older leads. 2 on Sundays to stack the calendar.
        </p>
      </div>

      <div className="rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-3"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px dashed rgba(255,255,255,0.1)" }}>
        <p className="text-sm font-medium text-white">Broadcast log coming soon</p>
        <p className="text-xs text-zinc-600 max-w-sm">
          Connect Instantly API to track every broadcast — send date, type, open rate, click rate, replies, and pipeline attribution.
        </p>
      </div>
    </div>
  )
}
