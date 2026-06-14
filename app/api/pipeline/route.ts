import { NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createServiceClient()

  const { data: leads } = await supabase
    .from("leads")
    .select("stage, deal_value, created_at")

  if (!leads) return NextResponse.json({ error: "No data" }, { status: 500 })

  const count = (stage: string) => leads.filter((l) => l.stage === stage).length
  const applied = count("applied") + count("qualified") + count("booked") + count("showed") + count("closed")
  const booked = count("booked") + count("showed") + count("closed")
  const showed = count("showed") + count("closed")
  const closed = count("closed")

  const showRate = booked > 0 ? (showed / booked) * 100 : 0
  const closeRate = showed > 0 ? (closed / showed) * 100 : 0

  const avgDeal = closed > 0
    ? leads.filter((l) => l.stage === "closed" && l.deal_value).reduce((s, l) => s + (l.deal_value ?? 0), 0) / closed
    : 0

  // CPBC requires ad spend data — TODO: join with ad_metrics
  const constraint = showRate < 50 ? "show rate" : closeRate < 25 ? "close rate" : applied === 0 ? "applications" : "none"

  return NextResponse.json({
    totalLeads: leads.length,
    applicationRate: leads.length > 0 ? (applied / leads.length) * 100 : 0,
    showRate,
    closeRate,
    avgDealValue: avgDeal,
    cpbc: 0, // TODO: ad_spend / bookings
    constraint,
    stageCounts: {
      new: count("new"),
      applied: count("applied"),
      qualified: count("qualified"),
      booked: count("booked"),
      showed: count("showed"),
      closed: count("closed"),
      lost: count("lost"),
    },
  })
}
