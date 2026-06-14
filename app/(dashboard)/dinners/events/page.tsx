// TODO: fetch dinner_events from Supabase ordered by event_date
export default function DinnerEventsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Dinner Events</h2>
        <a href="/dinners/events/new" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
          + New Event
        </a>
      </div>
      {/* Event cards: date, venue, capacity fill, status, link to /dinners/[id] */}
    </div>
  )
}
