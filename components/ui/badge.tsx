import { cn } from "@/lib/utils/formatters"
import { type KPIStatus } from "@/types"

const statusStyles: Record<KPIStatus, { className: string; dot: string }> = {
  healthy: {
    className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  warning: {
    className: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    dot: "bg-amber-400",
  },
  kill: {
    className: "bg-red-500/10 text-red-400 border-red-500/20",
    dot: "bg-red-400 pulse-dot",
  },
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: KPIStatus | "default"
  dot?: boolean
}

export function Badge({ className, variant = "default", dot = false, ...props }: BadgeProps) {
  const status = variant !== "default" ? statusStyles[variant] : null

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium tracking-wide",
        status
          ? status.className
          : "bg-white/5 text-zinc-400 border-white/10",
        className
      )}
    >
      {dot && status && (
        <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", status.dot)} />
      )}
      {props.children}
    </span>
  )
}
