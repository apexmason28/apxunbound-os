// TODO: fetch revenue_snapshots from Supabase, compute ROAS metrics
export default function BusinessHealthPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Business Health</h2>
      <p className="text-zinc-500 text-sm">
        Cash ROAS (target 2:1) · Revenue ROAS (target 5:1) · Ad spend vs collections.
      </p>
      {/* KPI grid: cash collected, revenue recognized, ad spend, cash ROAS, rev ROAS */}
      {/* Period switcher: 7d / 30d / MTD / YTD */}
      {/* Recharts area chart: revenue vs spend over time */}
    </div>
  )
}
