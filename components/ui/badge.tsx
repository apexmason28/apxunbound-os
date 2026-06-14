import { cn } from "@/lib/utils/formatters"
import { type KPIStatus } from "@/types"

const statusStyles: Record<KPIStatus, string> = {
  healthy: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  warning: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  kill: "bg-red-500/20 text-red-400 border-red-500/30",
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: KPIStatus | "default"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
        variant !== "default" ? statusStyles[variant] : "bg-white/10 text-zinc-300 border-white/20",
        className
      )}
      {...props}
    />
  )
}
