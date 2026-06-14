// Instagram Graph API via Composio OAuth
const IG_BASE = "https://graph.facebook.com/v21.0"
const ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID!
const COMPOSIO_KEY = process.env.COMPOSIO_API_KEY!

async function igFetch<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  // Composio handles OAuth token refresh — we use their proxy
  const url = new URL(`https://backend.composio.dev/api/v1/actions/INSTAGRAM/${path}`)
  url.searchParams.set("accountId", ACCOUNT_ID)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url.toString(), {
    headers: { "x-api-key": COMPOSIO_KEY },
    next: { revalidate: 900 },
  })
  if (!res.ok) throw new Error(`Instagram API error: ${res.status}`)
  return res.json()
}

export async function getAccountInsights(period = "day", since?: string, until?: string) {
  return igFetch("account_insights", {
    metric: "impressions,reach,profile_views,follower_count",
    period,
    ...(since && { since }),
    ...(until && { until }),
  })
}

export async function getRecentMedia(limit = 20) {
  return igFetch("media", {
    fields: "id,media_type,media_url,permalink,caption,timestamp,like_count,comments_count",
    limit: String(limit),
  })
}

export async function getMediaInsights(mediaId: string) {
  return igFetch(`media/${mediaId}/insights`, {
    metric: "engagement,impressions,reach,saved,video_views",
  })
}

export async function schedulePost(payload: {
  caption: string
  mediaUrl: string
  mediaType: "IMAGE" | "VIDEO" | "REELS"
  publishedAt: string
}) {
  const res = await fetch("https://backend.composio.dev/api/v1/actions/INSTAGRAM/schedule_post", {
    method: "POST",
    headers: {
      "x-api-key": COMPOSIO_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ accountId: ACCOUNT_ID, ...payload }),
  })
  if (!res.ok) throw new Error(`Failed to schedule post: ${res.status}`)
  return res.json()
}
