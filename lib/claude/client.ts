import Anthropic from "@anthropic-ai/sdk"

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function getIntelligence(prompt: string, useWebSearch = true) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tools: any[] = useWebSearch
    ? [{ type: "web_search_20250305", name: "web_search", max_uses: 5 }]
    : []

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2048,
    tools,
    messages: [{ role: "user", content: prompt }],
  })

  return response.content
    .filter((b) => b.type === "text")
    .map((b) => (b as Anthropic.TextBlock).text)
    .join("\n")
}

export async function generateContent(prompt: string) {
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 4096,
    messages: [{ role: "user", content: prompt }],
    system:
      "You are a high-performance content strategist for APXUnbound, a mindset coaching brand for 6-7 figure entrepreneurs. Ozzie Blessed is the coach. Write content that speaks to people who are winning financially but stuck internally. Tone: direct, confident, no fluff.",
  })

  return (response.content[0] as Anthropic.TextBlock).text
}
