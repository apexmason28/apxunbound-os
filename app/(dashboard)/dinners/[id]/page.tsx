// TODO: fetch single dinner_event + its applications
export default async function DinnerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Dinner Event — {id}</h2>
      {/* Event header: date, venue, ticket price, capacity, status */}
      {/* Attendee list with status badges, check-in toggle */}
      {/* Testimonial capture form for attended guests */}
      {/* Upsell tracking: pitched → interested → converted */}
    </div>
  )
}
