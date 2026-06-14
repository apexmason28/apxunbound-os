import { NextRequest, NextResponse } from "next/server"
import { createServiceClient } from "@/lib/supabase/server"

// GHL sends contact.created, opportunity.status_changed, appointment.scheduled, etc.
export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-webhook-secret")
  if (secret !== process.env.GHL_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const payload = await req.json()
  const supabase = await createServiceClient()

  const { type, contact, opportunity } = payload

  if (type === "contact.created" || type === "contact.updated") {
    await supabase.from("leads").upsert(
      {
        ghl_contact_id: contact.id,
        first_name: contact.firstName,
        last_name: contact.lastName,
        email: contact.email,
        phone: contact.phone,
        stage: contact.tags?.includes("closed") ? "closed" : "applied",
        source: contact.source,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "ghl_contact_id" }
    )
  }

  if (type === "opportunity.status_changed") {
    const stageMap: Record<string, string> = {
      "New Lead": "new",
      "Applied": "applied",
      "Qualified": "qualified",
      "Booked": "booked",
      "Showed": "showed",
      "Closed Won": "closed",
      "Closed Lost": "lost",
    }

    await supabase
      .from("leads")
      .update({
        stage: stageMap[opportunity.status] ?? "new",
        updated_at: new Date().toISOString(),
      })
      .eq("ghl_contact_id", opportunity.contactId)
  }

  return NextResponse.json({ ok: true })
}
