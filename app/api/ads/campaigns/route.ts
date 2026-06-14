import { NextResponse } from "next/server"
import { getCampaigns } from "@/lib/meta/client"
import { createServiceClient } from "@/lib/supabase/server"
import { evaluateKPI } from "@/lib/meta/kpi-thresholds"

// Returns campaigns with KPI status. Caches result in Supabase for 5min.
export async function GET() {
  try {
    const supabase = await createServiceClient()

    // Check Supabase cache (ad_metrics updated within 5min)
    const { data: cached } = await supabase
      .from("ad_metrics")
      .select("*")
      .gte("created_at", new Date(Date.now() - 5 * 60 * 1000).toISOString())
      .order("created_at", { ascending: false })

    if (cached && cached.length > 0) {
      return NextResponse.json({ source: "cache", data: cached })
    }

    // Fetch fresh from Meta
    const raw = await getCampaigns()

    // TODO: parse Meta response, compute derived KPIs, upsert to ad_metrics, fire KPI alerts
    // evaluateKPI("cpm", cpm, hoursRunning) → "healthy" | "warning" | "kill"

    return NextResponse.json({ source: "meta", data: raw })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
