import { NextRequest, NextResponse } from "next/server"
import { generateContent } from "@/lib/claude/client"

export async function POST(req: NextRequest) {
  const { angle, painPoint, offerType } = await req.json()

  const prompt = `Generate Meta ad creative for APXUnbound.

Offer: ${offerType ?? "High-ticket 1:1 coaching ($12k–$20k / 3 months)"}
Core promise: "We'll identify and eliminate the exact mental block holding you back in a single session — or you don't pay."
Angle / pain point: ${angle ?? painPoint ?? "winning financially but stuck internally"}

Output 3 variations, each with:
- HOOK (first 3 seconds of video / first line of ad — pattern interrupt)
- BODY (2–3 sentences, problem → mechanism → outcome)
- CTA (specific, single action)

Format as JSON: { variations: [{ hook, body, cta }] }`

  const text = await generateContent(prompt)

  try {
    const json = JSON.parse(text.match(/\{[\s\S]*\}/)?.[0] ?? "{}")
    return NextResponse.json(json)
  } catch {
    return NextResponse.json({ raw: text })
  }
}
