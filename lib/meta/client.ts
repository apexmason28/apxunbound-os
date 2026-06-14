const META_BASE = "https://graph.facebook.com/v21.0"
const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID!
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN!

const CAMPAIGN_FIELDS = [
  "id",
  "name",
  "status",
  "daily_budget",
  "lifetime_budget",
  "insights.fields(spend,impressions,clicks,cpm,ctr,cpc,actions,cost_per_action_type)",
].join(",")

async function metaFetch<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${META_BASE}/${path}`)
  url.searchParams.set("access_token", ACCESS_TOKEN)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url.toString(), { next: { revalidate: 300 } })
  if (!res.ok) throw new Error(`Meta API error: ${res.status} ${await res.text()}`)
  return res.json()
}

export async function getCampaigns() {
  return metaFetch(`${AD_ACCOUNT_ID}/campaigns`, {
    fields: CAMPAIGN_FIELDS,
    effective_status: JSON.stringify(["ACTIVE", "PAUSED"]),
    limit: "50",
  })
}

export async function getAdSetInsights(adSetId: string, datePreset = "last_7d") {
  return metaFetch(`${adSetId}/insights`, {
    fields: "spend,impressions,clicks,link_clicks,cpm,ctr,cpc,actions,cost_per_action_type",
    date_preset: datePreset,
  })
}

export async function pauseCampaign(campaignId: string) {
  const url = `${META_BASE}/${campaignId}`
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "PAUSED", access_token: ACCESS_TOKEN }),
  })
  if (!res.ok) throw new Error(`Failed to pause campaign: ${res.status}`)
  return res.json()
}
