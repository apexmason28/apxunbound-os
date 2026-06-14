import { cn } from "@/lib/utils/formatters"
import { type KPIStatus } from "@/types"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface KPICardProps {
  label: string
  value: string
  status?: KPIStatus
  subtext?: string
  target?: string
  trend?: "up" | "down" | "flat"
  trendValue?: string
  className?: string
}

const statusConfig: Record<KPIStatus, { border: string; glow: string; dot: string; label: string }> = {
  healthy: {
    border: "rgba(16,185,129,0.2)",
    glow: "0 0 24px -6px rgba(16,185,129,0.25)",
    dot: "bg-emerald-400",
    label: "Healthy",
  },
  warning: {
    border: "rgba(245,158,11,0.2)",
    glow: "0 0 24px -6px rgba(245,158,11,0.25)",
    dot: "bg-amber-400",
    label: "Warning",
  },
  kill: {
    border: "rgba(239,68,68,0.25)",
    glow: "0 0 24px -6px rgba(239,68,68,0.3)",
    dot: "bg-red-400 pulse-dot",
    label: "Kill",
  },
}

const trendConfig = {
  up: { icon: TrendingUp, color: "text-emerald-400" },
  down: { icon: TrendingDown, color: "text-red-400" },
  flat: { icon: Minus, color: "text-zinc-500" },
}

export function KPICard({ label, value, status, subtext, target, trend, trendValue, className }: KPICardProps) {
  const sc = status ? statusConfig[status] : null
  const tc = trend ? trendConfig[trend] : null
  const TrendIcon = tc?.icon

  return (
    <div
      className={cn("rounded-xl p-5 flex flex-col gap-3 transition-all duration-200", className)}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${sc?.border ?? "rgba(255,255,255,0.07)"}`,
        boxShadow: sc?.glow ?? "none",
      }}
    >
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium tracking-wide uppercase" style={{ color: "rgba(255,255,255,0.38)" }}>
          {label}
        </p>
        {sc && (
          <div className="flex items-center gap-1.5">
            <span className={cn("h-1.5 w-1.5 rounded-full", sc.dot)} />
            <span className={cn(
              "text-[10px] font-semibold tracking-wide",
              status === "healthy" ? "text-emerald-400" : status === "warning" ? "text-amber-400" : "text-red-400"
            )}>
              {sc.label}
            </span>
          </div>
        )}
      </div>

      <p className="text-3xl font-bold text-white tracking-tight leading-none">{value}</p>

      {(subtext || target || (TrendIcon && trendValue)) && (
        <div className="flex items-center justify-between mt-auto pt-1">
          <p className="text-xs text-zinc-600">
            {subtext}
            {target && <span className="ml-1">· target: <span className="text-zinc-500">{target}</span></span>}
          </p>
          {TrendIcon && trendValue && (
            <div className={cn("flex items-center gap-1 text-xs font-medium", tc?.color)}>
              <TrendIcon size={12} />
              {trendValue}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
