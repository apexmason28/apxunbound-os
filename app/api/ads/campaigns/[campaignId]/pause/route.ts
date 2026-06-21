import { NextResponse } from "next/server"
import { pauseCampaign } from "@/lib/meta/client"
import { createServiceClient } from "@/lib/supabase/server"

export async function POST(_req: Request, { params }: { params: Promise<{ campaignId: string }> }) {
  const { campaignId } = await params

  try {
    const result = await pauseCampaign(campaignId)

    const supabase = await createServiceClient()
    await supabase
      .from("kpi_alerts")
      .update({ resolved_at: new Date().toISOString(), acknowledged: true })
      .eq("campaign_id", campaignId)
      .is("resolved_at", null)

    return NextResponse.json({ ok: true, result })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
