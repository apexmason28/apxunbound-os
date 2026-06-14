// TODO: Claude API generates ad copy variants — hooks, body, CTA — for given offer/angle
export default function CreativePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Creative Engine</h2>
      <p className="text-zinc-500 text-sm">
        Generate ad copy for Ozzie's offer. Input: angle/pain point. Output: hook, body, CTA variants.
      </p>
      {/* Prompt form → /api/ads/creative → Claude → output cards */}
    </div>
  )
}
