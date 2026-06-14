import { NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createServiceClient()
  const { data, error } = await supabase
    .from("kpi_alerts")
    .select("*")
    .eq("acknowledged", false)
    .order("triggered_at", { ascending: false })
    .limit(50)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function PATCH(req: NextRequest) {
  const { id } = await req.json()
  const supabase = await createServiceClient()
  const { error } = await supabase
    .from("kpi_alerts")
    .update({ acknowledged: true, resolved_at: new Date().toISOString() })
    .eq("id", id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
