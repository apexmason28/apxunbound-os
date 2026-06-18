// TODO: pull content_pieces with status=scheduled, display calendar, allow publish via /api/instagram/schedule
export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Content Schedule</h2>
      <p className="text-zinc-500 text-sm">Calendar view of scheduled posts. Publish via Instagram Graph API.</p>
      {/* CalendarView component, post queue list */}
    </div>
  )
}
