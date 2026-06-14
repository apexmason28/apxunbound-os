import { NextRequest, NextResponse } from "next/server"
import { getIntelligence } from "@/lib/claude/client"

// General intelligence endpoint — Claude + web search for live market data
// Used by: competitor analysis, market research, creative strategy
export async function POST(req: NextRequest) {
  const { prompt, useWebSearch = true } = await req.json()
  if (!prompt) return NextResponse.json({ error: "prompt required" }, { status: 400 })

  const result = await getIntelligence(prompt, useWebSearch)
  return NextResponse.json({ result })
}
