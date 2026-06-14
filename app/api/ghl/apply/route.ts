import { NextRequest, NextResponse } from "next/server"

const GHL_BASE = "https://services.leadconnectorhq.com"
const LOCATION_ID = process.env.GHL_LOCATION_ID!

export async function POST(req: NextRequest) {
  const GHL_API_KEY = process.env.GHL_API_KEY
  if (!GHL_API_KEY || !LOCATION_ID) {
    // GHL not configured yet — accept the submission, log it, return success
    // so the funnel still works during development
    const body = await req.json()
    console.log("[apply] GHL not configured — submission:", body)
    return NextResponse.json({ ok: true, dev: true })
  }

  let body: {
    firstName: string
    lastName: string
    email: string
    phone: string
    businessRole: string
    revenue: string
    constraint: string
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { firstName, lastName, email, phone, businessRole, revenue, constraint } = body

  if (!firstName || !lastName || !email || !phone || !businessRole || !revenue || !constraint) {
    return NextResponse.json({ error: "All fields are required." }, { status: 422 })
  }

  // Upsert contact in GHL
  const ghlRes = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GHL_API_KEY}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify({
      locationId: LOCATION_ID,
      firstName,
      lastName,
      email,
      phone,
      tags: ["dinner-applicant"],
      customFields: [
        { key: "business_role", field_value: businessRole },
        { key: "annual_revenue", field_value: revenue },
        { key: "growth_constraint", field_value: constraint },
      ],
    }),
  })

  if (!ghlRes.ok) {
    const text = await ghlRes.text()
    console.error("[apply] GHL upsert failed:", text)
    return NextResponse.json(
      { error: "Could not save your application. Please try again." },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
