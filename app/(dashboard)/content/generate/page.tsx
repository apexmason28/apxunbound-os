"use client"
// TODO: form → POST /api/content/generate → Claude → save to content_pieces → display result
export default function GenerateContentPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Generate Content</h2>
      <p className="text-zinc-500 text-sm">
        Input a topic/angle. Claude generates 3 reel hooks, a carousel outline, and caption with hashtags.
        Saves to Content OS for review.
      </p>
      {/* Form: content type, angle/topic, tone notes → submit → loading → output cards */}
    </div>
  )
}
