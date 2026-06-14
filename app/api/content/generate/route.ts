import { NextRequest, NextResponse } from "next/server"
import { generateContent } from "@/lib/claude/client"
import { createServiceClient } from "@/lib/supabase/server"

export async function POST(req: NextRequest) {
  const { topic, contentType, angle } = await req.json()

  const prompt = `Create Instagram content for Ozzie Blessed / APXUnbound.

Topic: ${topic}
Content type: ${contentType ?? "reel"}
Angle: ${angle ?? "the internal game of high-performance"}

Generate:
1. Three reel hooks (pattern interrupt openers, ≤8 words each)
2. Full caption (conversational, direct, no fluff, story → insight → CTA)
3. 15 hashtags (mix of niche + broad)
4. Carousel outline if applicable (5–7 slides with titles)

Return JSON: { hooks: string[], caption: string, hashtags: string[], carouselSlides?: string[] }`

  const text = await generateContent(prompt)
  const json = JSON.parse(text.match(/\{[\s\S]*\}/)?.[0] ?? "{}")

  const supabase = await createServiceClient()
  const { data } = await supabase
    .from("content_pieces")
    .insert({
      type: contentType ?? "reel",
      hook: json.hooks?.[0] ?? "",
      caption: json.caption ?? "",
      hashtags: json.hashtags ?? [],
      status: "draft",
      generated_by: "ai",
    })
    .select()
    .single()

  return NextResponse.json({ content: data, generated: json })
}
