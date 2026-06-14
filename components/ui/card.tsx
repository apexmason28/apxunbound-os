import { cn } from "@/lib/utils/formatters"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("rounded-xl border border-white/10 bg-white/5 p-6", className)}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={cn("mb-4 flex items-center justify-between", className)} {...props} />
}

export function CardTitle({ className, ...props }: CardProps) {
  return <h3 className={cn("text-sm font-medium text-zinc-400", className)} {...props} />
}

export function CardValue({ className, ...props }: CardProps) {
  return <p className={cn("text-3xl font-bold text-white", className)} {...props} />
}
