import { FunnelMetrics } from "@/components/pipeline/funnel-metrics"

// TODO: fetch real metrics from GHL via /api/pipeline
const MOCK_METRICS = {
  totalLeads: 0,
  applicationRate: 0,
  qualifyRate: 0,
  showRate: 0,
  closeRate: 0,
  avgDealValue: 0,
  cpbc: 0,
  constraint: "—",
}

export default function PipelinePage() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Sales Pipeline</h2>
      <FunnelMetrics metrics={MOCK_METRICS} />
      {/* Kanban / stage count view, lead table with stage badges */}
    </div>
  )
}
