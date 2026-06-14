import { NextRequest, NextResponse } from "next/server"

// Meta Ads webhook — lead form submissions, campaign events
// Used to update lead count on ad_metrics without polling
export async function POST(req: NextRequest) {
  const body = await req.json()

  // Verify hub challenge (Meta webhook verification)
  if (body["hub.mode"] === "subscribe") {
    return new NextResponse(body["hub.challenge"], { status: 200 })
  }

  // TODO: handle lead form submission events, update ad_metrics.leads count
  console.log("Meta webhook:", JSON.stringify(body).slice(0, 200))

  return NextResponse.json({ ok: true })
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const challenge = searchParams.get("hub.challenge")
  if (challenge) return new NextResponse(challenge, { status: 200 })
  return NextResponse.json({ ok: true })
}
