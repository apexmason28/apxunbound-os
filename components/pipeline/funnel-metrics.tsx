import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPercent, formatCurrency } from "@/lib/utils/formatters"
import { KPI_THRESHOLDS } from "@/lib/meta/kpi-thresholds"
import { type PipelineMetrics } from "@/types"

interface FunnelMetricsProps {
  metrics: PipelineMetrics
}

export function FunnelMetrics({ metrics }: FunnelMetricsProps) {
  const showStatus = metrics.showRate >= KPI_THRESHOLDS.showRate.min ? "healthy" : "warning"
  const closeStatus = metrics.closeRate >= KPI_THRESHOLDS.closeRate.min ? "healthy" : "warning"
  const cpbcStatus =
    metrics.cpbc <= KPI_THRESHOLDS.cpbc.max
      ? metrics.cpbc <= KPI_THRESHOLDS.cpbc.min
        ? "warning"
        : "healthy"
      : "kill"

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <Card>
        <p className="text-xs text-zinc-500 mb-1">Show Rate</p>
        <div className="flex items-end gap-2">
          <p className="text-2xl font-bold text-white">{formatPercent(metrics.showRate)}</p>
          <Badge variant={showStatus} className="mb-0.5">{showStatus}</Badge>
        </div>
        <p className="text-xs text-zinc-600 mt-1">target: 50%+</p>
      </Card>

      <Card>
        <p className="text-xs text-zinc-500 mb-1">Close Rate</p>
        <div className="flex items-end gap-2">
          <p className="text-2xl font-bold text-white">{formatPercent(metrics.closeRate)}</p>
          <Badge variant={closeStatus} className="mb-0.5">{closeStatus}</Badge>
        </div>
        <p className="text-xs text-zinc-600 mt-1">target: 25%+</p>
      </Card>

      <Card>
        <p className="text-xs text-zinc-500 mb-1">CPBC</p>
        <div className="flex items-end gap-2">
          <p className="text-2xl font-bold text-white">{formatCurrency(metrics.cpbc)}</p>
          <Badge variant={cpbcStatus} className="mb-0.5">{cpbcStatus}</Badge>
        </div>
        <p className="text-xs text-zinc-600 mt-1">target: $100–$250</p>
      </Card>

      <Card>
        <p className="text-xs text-zinc-500 mb-1">Constraint</p>
        <p className="text-lg font-bold text-amber-400 capitalize">{metrics.constraint}</p>
        <p className="text-xs text-zinc-600 mt-1">biggest drop-off stage</p>
      </Card>
    </div>
  )
}
