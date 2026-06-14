import { cn } from "@/lib/utils/formatters"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "indigo" | "emerald" | "amber" | "red" | "violet"
}

export function Card({ className, glow, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-5 transition-all duration-200",
        glow && `glow-${glow}`,
        className
      )}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4 flex items-center justify-between", className)} {...props} />
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xs font-medium tracking-wide uppercase", className)}
      style={{ color: "rgba(255,255,255,0.4)" }}
      {...props}
    />
  )
}

export function CardValue({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-3xl font-bold text-white tracking-tight", className)} {...props} />
  )
}
