import { NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"
import { getIntelligence } from "@/lib/claude/client"

export async function GET() {
  const supabase = await createServiceClient()
  const { data } = await supabase
    .from("competitors")
    .select("*")
    .order("followers_count", { ascending: false })
  return NextResponse.json(data ?? [])
}

export async function POST(req: NextRequest) {
  const { username } = await req.json()
  const supabase = await createServiceClient()

  // Use Claude with web search to pull public competitor data
  const intelligence = await getIntelligence(
    `Research the Instagram account @${username}. Return a JSON object with: username, estimated follower count, average engagement rate (%), posts per week, top 3 content types/themes, and a brief strategic summary. Only use public information.`,
    true
  )

  // TODO: parse intelligence, upsert to competitors table
  return NextResponse.json({ username, intelligence })
}
