import { NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createServiceClient()
  const { data } = await supabase
    .from("dinner_events")
    .select("*, dinner_applications(count)")
    .order("event_date", { ascending: true })
  return NextResponse.json(data ?? [])
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const supabase = await createServiceClient()
  const { data, error } = await supabase
    .from("dinner_events")
    .insert(body)
    .select()
    .single()
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json(data, { status: 201 })
}
