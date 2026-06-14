import { Card, CardTitle, CardValue } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils/formatters"
import { type KPIStatus } from "@/types"

interface KPICardProps {
  label: string
  value: string
  status?: KPIStatus
  subtext?: string
  target?: string
  className?: string
}

export function KPICard({ label, value, status, subtext, target, className }: KPICardProps) {
  return (
    <Card className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-start justify-between">
        <CardTitle>{label}</CardTitle>
        {status && <Badge variant={status}>{status.toUpperCase()}</Badge>}
      </div>
      <CardValue>{value}</CardValue>
      {(subtext || target) && (
        <p className="text-xs text-zinc-500">
          {subtext}
          {target && <span className="ml-1 text-zinc-600">target: {target}</span>}
        </p>
      )}
    </Card>
  )
}
