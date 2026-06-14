// TODO: read kpi_alerts table from Supabase, unacknowledged first
export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">KPI Alerts</h2>
      <p className="text-zinc-500 text-sm">
        Auto-triggered kill/warn alerts based on your hardcoded thresholds.
        CPM kill at 3× after 6h. Cost/link-click kill at 3× after 48h. CPL/CPBC kill at 2×.
      </p>
      {/* Alert feed: metric, value, threshold, campaign, action, time */}
    </div>
  )
}
