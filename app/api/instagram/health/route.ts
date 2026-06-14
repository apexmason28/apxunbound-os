import { NextResponse } from "next/server"
import { getAccountInsights } from "@/lib/instagram/client"
import { createServiceClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const [insights7d, insights30d] = await Promise.all([
      getAccountInsights("day"),
      getAccountInsights("day"),
    ])

    // TODO: compute AccountHealth score from insights
    // Factors: follower growth rate, avg engagement, posting consistency, reel performance
    return NextResponse.json({ insights7d, insights30d })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
