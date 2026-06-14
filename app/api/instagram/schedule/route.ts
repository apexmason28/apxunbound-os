import { NextRequest, NextResponse } from "next/server"
import { schedulePost } from "@/lib/instagram/client"
import { createServiceClient } from "@/lib/supabase/server"

export async function POST(req: NextRequest) {
  const { contentId, scheduledAt } = await req.json()
  const supabase = await createServiceClient()

  const { data: piece, error } = await supabase
    .from("content_pieces")
    .select("*")
    .eq("id", contentId)
    .single()

  if (error || !piece) return NextResponse.json({ error: "Content not found" }, { status: 404 })
  if (!piece.media_url) return NextResponse.json({ error: "No media attached" }, { status: 400 })

  const result = await schedulePost({
    caption: `${piece.caption}\n\n${piece.hashtags?.join(" ") ?? ""}`,
    mediaUrl: piece.media_url,
    mediaType: piece.type === "reel" ? "REELS" : "IMAGE",
    publishedAt: scheduledAt,
  })

  await supabase
    .from("content_pieces")
    .update({ status: "scheduled", scheduled_at: scheduledAt })
    .eq("id", contentId)

  return NextResponse.json(result)
}
