// TODO: paginated lead table from Supabase, synced from GHL webhooks
export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Leads</h2>
      <p className="text-zinc-500 text-sm">All contacts synced from GHL. Filter by stage, source, date.</p>
      {/* Filter bar, sortable leads table */}
    </div>
  )
}
