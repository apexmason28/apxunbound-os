// TODO: read kpi_alerts table from Supabase, unacknowledged first
export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">KPI Alerts</h2>
      <p className="text-zinc-500 text-sm">
        Auto-triggered flag alerts based on your hardcoded thresholds.
        CPM flagged at 3× after 6h. Cost/link-click flagged at 3× after 48h. CPL/CPBC flagged at 2×.
        Review flagged campaigns and pause manually in Meta Ads Manager.
      </p>
      {/* Alert feed: metric, value, threshold, campaign, action, time */}
    </div>
  )
}
