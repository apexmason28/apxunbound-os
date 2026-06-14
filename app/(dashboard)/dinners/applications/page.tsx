// TODO: fetch dinner_applications with event join, filter by status
export default function DinnerApplicationsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Applications</h2>
      <p className="text-zinc-500 text-sm">Review applicants. Approve, waitlist, or decline. Track upsells.</p>
      {/* Filter: all events / specific event, status filter */}
      {/* ApplicantRow table: name, business, revenue, status, upsell, actions */}
    </div>
  )
}
