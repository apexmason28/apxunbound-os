import { NextResponse } from "next/server"
import { getCampaigns } from "@/lib/meta/client"
import { parseCampaignMetrics } from "@/lib/meta/parse"
import { createServiceClient } from "@/lib/supabase/server"
import { evaluateKPI } from "@/lib/meta/kpi-thresholds"
import { type AdMetrics } from "@/types"

function rowToMetrics(row: Record<string, unknown>): AdMetrics {
  return {
    campaignId: row.campaign_id as string,
    campaignName: row.campaign_name as string,
    spend: Number(row.spend ?? 0),
    impressions: Number(row.impressions ?? 0),
    clicks: Number(row.clicks ?? 0),
    linkClicks: Number(row.link_clicks ?? 0),
    leads: Number(row.leads ?? 0),
    bookings: Number(row.bookings ?? 0),
    cpm: Number(row.cpm ?? 0),
    ctr: Number(row.ctr ?? 0),
    cpc: Number(row.cpc ?? 0),
    costPerLinkClick: Number(row.cost_per_link_click ?? 0),
    cpl: Number(row.cpl ?? 0),
    cpbc: Number(row.cpbc ?? 0),
    roas: Number(row.roas ?? 0),
    createdAt: row.created_at as string,
    hoursRunning: Number(row.hours_running ?? 0),
  }
}

async function fireAlerts(supabase: Awaited<ReturnType<typeof createServiceClient>>, metrics: AdMetrics[]) {
  for (const m of metrics) {
    const checks: Array<{ metric: string; value: number; threshold: number }> = [
      { metric: "cpm", value: m.cpm, threshold: 90 },
      { metric: "ctr", value: m.ctr * 100, threshold: 1 },
      { metric: "cpl", value: m.cpl, threshold: 60 },
    ]

    for (const { metric, value, threshold } of checks) {
      if (value <= 0) continue
      const status = evaluateKPI(metric as "cpm" | "ctr" | "cpl", value, m.hoursRunning)
      if (status === "healthy") continue

      const { data: existing } = await supabase
        .from("kpi_alerts")
        .select("id")
        .eq("campaign_id", m.campaignId)
        .eq("metric", metric)
        .eq("acknowledged", false)
        .is("resolved_at", null)
        .limit(1)

      if (existing && existing.length > 0) continue

      await supabase.from("kpi_alerts").insert({
        metric,
        value,
        threshold,
        multiplier: status === "kill" ? value / threshold : 1,
        action: status,
        campaign_id: m.campaignId,
        campaign_name: m.campaignName,
      })
    }
  }
}

// Returns campaigns with KPI status. Caches result in Supabase for 5min.
export async function GET() {
  try {
    const supabase = await createServiceClient()

    const { data: cached } = await supabase
      .from("ad_metrics")
      .select("*")
      .gte("created_at", new Date(Date.now() - 5 * 60 * 1000).toISOString())
      .order("created_at", { ascending: false })

    if (cached && cached.length > 0) {
      return NextResponse.json({ source: "cache", data: cached.map(rowToMetrics) })
    }

    const raw = await getCampaigns()
    const metrics = parseCampaignMetrics(raw as { data?: Parameters<typeof parseCampaignMetrics>[0]["data"] })

    if (metrics.length > 0) {
      await supabase.from("ad_metrics").upsert(
        metrics.map((m) => ({
          campaign_id: m.campaignId,
          campaign_name: m.campaignName,
          ad_set_id: "", // campaign-level only; "" (not null) so the unique constraint dedupes correctly
          date: new Date().toISOString().slice(0, 10),
          spend: m.spend,
          impressions: m.impressions,
          clicks: m.clicks,
          link_clicks: m.linkClicks,
          leads: m.leads,
          bookings: m.bookings,
          cpm: m.cpm,
          ctr: m.ctr,
          cpc: m.cpc,
          cost_per_link_click: m.costPerLinkClick,
          cpl: m.cpl,
          cpbc: m.cpbc,
          roas: m.roas,
          hours_running: m.hoursRunning,
        })),
        { onConflict: "campaign_id,ad_set_id,date" }
      )

      await fireAlerts(supabase, metrics)
    }

    return NextResponse.json({ source: "meta", data: metrics })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
