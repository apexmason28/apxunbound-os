const GHL_BASE = "https://services.leadconnectorhq.com"
const GHL_API_KEY = process.env.GHL_API_KEY!
const LOCATION_ID = process.env.GHL_LOCATION_ID!

const headers = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  "Content-Type": "application/json",
  Version: "2021-07-28",
}

async function ghlFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${GHL_BASE}${path}`, {
    ...options,
    headers: { ...headers, ...options?.headers },
    next: { revalidate: 60 },
  })
  if (!res.ok) throw new Error(`GHL API error: ${res.status} ${await res.text()}`)
  return res.json()
}

export async function getContacts(params: { stage?: string; limit?: number } = {}) {
  const qs = new URLSearchParams({
    locationId: LOCATION_ID,
    limit: String(params.limit ?? 100),
    ...(params.stage && { stage: params.stage }),
  })
  return ghlFetch(`/contacts/?${qs}`)
}

export async function getContact(contactId: string) {
  return ghlFetch(`/contacts/${contactId}`)
}

export async function updateContactStage(contactId: string, stage: string) {
  return ghlFetch(`/contacts/${contactId}`, {
    method: "PUT",
    body: JSON.stringify({ customField: { stage } }),
  })
}

export async function getPipelineOpportunities(pipelineId: string) {
  const qs = new URLSearchParams({ location_id: LOCATION_ID, pipeline_id: pipelineId })
  return ghlFetch(`/opportunities/search?${qs}`)
}
