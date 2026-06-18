// Instagram Graph API — direct (no proxy)
const IG_BASE = "https://graph.facebook.com/v21.0"
const ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID!
const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN!

async function igFetch<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${IG_BASE}/${path}`)
  url.searchParams.set("access_token", ACCESS_TOKEN)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url.toString(), { next: { revalidate: 900 } })
  if (!res.ok) throw new Error(`Instagram API error: ${res.status} ${await res.text()}`)
  return res.json()
}

async function igPost<T>(path: string, body: Record<string, string>): Promise<T> {
  const res = await fetch(`${IG_BASE}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, access_token: ACCESS_TOKEN }),
  })
  if (!res.ok) throw new Error(`Instagram API error: ${res.status} ${await res.text()}`)
  return res.json()
}

export async function getAccountInsights(period = "day", since?: string, until?: string) {
  return igFetch(`${ACCOUNT_ID}/insights`, {
    metric: "impressions,reach,profile_views,follower_count",
    period,
    ...(since && { since }),
    ...(until && { until }),
  })
}

export async function getRecentMedia(limit = 20) {
  return igFetch(`${ACCOUNT_ID}/media`, {
    fields: "id,media_type,media_url,permalink,caption,timestamp,like_count,comments_count",
    limit: String(limit),
  })
}

export async function getMediaInsights(mediaId: string) {
  return igFetch(`${mediaId}/insights`, {
    metric: "engagement,impressions,reach,saved,video_views",
  })
}

// Instagram's Content Publishing API publishes immediately — there is no
// native "publish at future time" param. True scheduling means calling this
// from a cron job at the desired time, keyed off content_pieces.scheduled_at.
export async function schedulePost(payload: {
  caption: string
  mediaUrl: string
  mediaType: "IMAGE" | "VIDEO" | "REELS"
  publishedAt: string
}) {
  const isVideo = payload.mediaType === "VIDEO" || payload.mediaType === "REELS"

  const container = await igPost<{ id: string }>(`${ACCOUNT_ID}/media`, {
    caption: payload.caption,
    ...(isVideo
      ? { video_url: payload.mediaUrl, media_type: payload.mediaType === "REELS" ? "REELS" : "VIDEO" }
      : { image_url: payload.mediaUrl }),
  })

  if (isVideo) await waitForContainerReady(container.id)

  return igPost<{ id: string }>(`${ACCOUNT_ID}/media_publish`, {
    creation_id: container.id,
  })
}

async function waitForContainerReady(containerId: string, maxAttempts = 10) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const { status_code } = await igFetch<{ status_code: string }>(containerId, {
      fields: "status_code",
    })
    if (status_code === "FINISHED") return
    if (status_code === "ERROR") throw new Error(`Instagram media container ${containerId} failed processing`)
    await new Promise((r) => setTimeout(r, 3000))
  }
  throw new Error(`Instagram media container ${containerId} did not finish processing in time`)
}
