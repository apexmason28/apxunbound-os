// TODO: fetch from /api/ads/campaigns → Meta Marketing API (cached 5min in Supabase)
export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Active Campaigns</h2>
        <p className="text-xs text-zinc-500">Refreshes every 5 min</p>
      </div>
      <p className="text-zinc-500 text-sm">
        Live CPM / CTR / CPC / CPC-link / CPL / CPBC with hardcoded kill thresholds.
      </p>
      {/* CampaignRow table — columns: Campaign, Spend, CPM, CTR, CPC, CPL, Status, Action */}
    </div>
  )
}
