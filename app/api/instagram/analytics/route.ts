import { NextResponse } from "next/server"
import { getRecentMedia } from "@/lib/instagram/client"
import { createServiceClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createServiceClient()

    // Return cached posts if synced in last 15min
    const { data: cached } = await supabase
      .from("instagram_posts")
      .select("*")
      .gte("synced_at", new Date(Date.now() - 15 * 60 * 1000).toISOString())
      .order("timestamp", { ascending: false })
      .limit(30)

    if (cached && cached.length > 0) return NextResponse.json({ source: "cache", data: cached })

    const fresh = await getRecentMedia(30)
    // TODO: upsert to instagram_posts, fetch per-post insights in batch
    return NextResponse.json({ source: "api", data: fresh })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
