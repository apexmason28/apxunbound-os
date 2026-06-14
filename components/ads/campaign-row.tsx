import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatCurrency, formatPercent } from "@/lib/utils/formatters"
import { evaluateKPI } from "@/lib/meta/kpi-thresholds"
import { type AdMetrics } from "@/types"

interface CampaignRowProps {
  metrics: AdMetrics
  onPause?: (id: string) => void
}

export function CampaignRow({ metrics, onPause }: CampaignRowProps) {
  const cpmStatus = evaluateKPI("cpm", metrics.cpm, metrics.hoursRunning)
  const ctrStatus = evaluateKPI("ctr", metrics.ctr * 100)
  const cplStatus = metrics.cpl ? evaluateKPI("cpl", metrics.cpl) : undefined

  const worstStatus = [cpmStatus, ctrStatus, cplStatus].includes("kill")
    ? "kill"
    : [cpmStatus, ctrStatus, cplStatus].includes("warning")
    ? "warning"
    : "healthy"

  return (
    <tr className="border-b border-white/5 hover:bg-white/5">
      <td className="px-4 py-3">
        <p className="text-sm font-medium text-white">{metrics.campaignName}</p>
        <p className="text-xs text-zinc-500">{metrics.hoursRunning}h running</p>
      </td>
      <td className="px-4 py-3 text-sm text-zinc-300">{formatCurrency(metrics.spend)}</td>
      <td className="px-4 py-3">
        <Badge variant={cpmStatus}>${metrics.cpm.toFixed(0)}</Badge>
      </td>
      <td className="px-4 py-3">
        <Badge variant={ctrStatus}>{formatPercent(metrics.ctr * 100)}</Badge>
      </td>
      <td className="px-4 py-3 text-sm text-zinc-300">{formatCurrency(metrics.cpc)}</td>
      <td className="px-4 py-3">
        {cplStatus && metrics.cpl && (
          <Badge variant={cplStatus}>{formatCurrency(metrics.cpl)}</Badge>
        )}
      </td>
      <td className="px-4 py-3">
        <Badge variant={worstStatus}>{worstStatus.toUpperCase()}</Badge>
      </td>
      <td className="px-4 py-3">
        {worstStatus === "kill" && onPause && (
          <Button variant="danger" size="sm" onClick={() => onPause(metrics.campaignId)}>
            Kill
          </Button>
        )}
      </td>
    </tr>
  )
}
