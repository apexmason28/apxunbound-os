"use client"

import { useEffect, useState } from "react"
import { CampaignRow } from "@/components/ads/campaign-row"
import { type AdMetrics } from "@/types"

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<AdMetrics[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pausingId, setPausingId] = useState<string | null>(null)

  useEffect(() => {
    fetchCampaigns()
  }, [])

  async function fetchCampaigns() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/ads/campaigns")
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? "Failed to load campaigns")
      setCampaigns(json.data ?? [])
    } catch (err) {
      setError(String(err))
    } finally {
      setLoading(false)
    }
  }

  async function handlePause(campaignId: string) {
    setPausingId(campaignId)
    try {
      const res = await fetch(`/api/ads/campaigns/${campaignId}/pause`, { method: "POST" })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? "Failed to pause campaign")
      setCampaigns((prev) => prev.filter((c) => c.campaignId !== campaignId))
    } catch (err) {
      setError(String(err))
    } finally {
      setPausingId(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Active Campaigns</h2>
        <p className="text-xs text-zinc-500">Refreshes every 5 min</p>
      </div>
      <p className="text-zinc-500 text-sm">
        Live CPM / CTR / CPC / CPC-link / CPL / CPBC with hardcoded kill thresholds.
      </p>

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {loading ? (
        <p className="text-zinc-500 text-sm">Loading campaigns…</p>
      ) : campaigns.length === 0 ? (
        <p className="text-zinc-500 text-sm">
          No active campaigns. Once Meta Ads env vars are connected, live campaigns will appear here.
        </p>
      ) : (
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500">Campaign</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500">Spend</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500">CPM</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500">CTR</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500">CPC</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500">CPL</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500">Status</th>
                <th className="px-4 py-3 text-xs font-semibold text-zinc-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((metrics) => (
                <CampaignRow
                  key={metrics.campaignId}
                  metrics={metrics}
                  onPause={handlePause}
                  pausing={pausingId === metrics.campaignId}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
