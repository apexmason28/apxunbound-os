import { type AdMetrics } from "@/types"

// Adjust these to match the actual conversion event names configured on your
// Meta Pixel / CAPI once known — Meta reports custom conversions under
// "actions"/"cost_per_action_type" using whatever event name you set up.
const LEAD_ACTION_TYPES = ["lead", "onsite_conversion.lead_grouped", "offsite_conversion.fb_pixel_lead"]
const BOOKING_ACTION_TYPES = ["schedule", "offsite_conversion.fb_pixel_schedule"]

interface MetaAction {
  action_type: string
  value: string
}

interface MetaInsight {
  spend?: string
  impressions?: string
  clicks?: string
  cpm?: string
  ctr?: string
  cpc?: string
  actions?: MetaAction[]
  cost_per_action_type?: MetaAction[]
}

interface MetaCampaign {
  id: string
  name: string
  status: string
  start_time?: string
  insights?: { data?: MetaInsight[] }
}

function sumActions(actions: MetaAction[] | undefined, types: string[]): number {
  if (!actions) return 0
  return actions
    .filter((a) => types.includes(a.action_type))
    .reduce((sum, a) => sum + Number(a.value), 0)
}

export function parseCampaignMetrics(raw: { data?: MetaCampaign[] }): AdMetrics[] {
  const campaigns = raw.data ?? []

  return campaigns.map((c) => {
    const insight = c.insights?.data?.[0]
    const spend = Number(insight?.spend ?? 0)
    const impressions = Number(insight?.impressions ?? 0)
    const clicks = Number(insight?.clicks ?? 0)
    const linkClicks = sumActions(insight?.actions, ["link_click"])
    const leads = sumActions(insight?.actions, LEAD_ACTION_TYPES)
    const bookings = sumActions(insight?.actions, BOOKING_ACTION_TYPES)

    const hoursRunning = c.start_time
      ? Math.max(0, (Date.now() - new Date(c.start_time).getTime()) / (1000 * 60 * 60))
      : 0

    return {
      campaignId: c.id,
      campaignName: c.name,
      spend,
      impressions,
      clicks,
      linkClicks,
      leads,
      bookings,
      cpm: Number(insight?.cpm ?? 0),
      ctr: Number(insight?.ctr ?? 0) / 100,
      cpc: Number(insight?.cpc ?? 0),
      costPerLinkClick: linkClicks > 0 ? spend / linkClicks : 0,
      cpl: leads > 0 ? spend / leads : 0,
      cpbc: bookings > 0 ? spend / bookings : 0,
      roas: 0,
      createdAt: new Date().toISOString(),
      hoursRunning,
    }
  })
}
