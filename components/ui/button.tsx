import { cn } from "@/lib/utils/formatters"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger"
  size?: "sm" | "md" | "lg"
}

const variants = {
  primary: "bg-indigo-600 hover:bg-indigo-500 text-white",
  secondary: "bg-white/10 hover:bg-white/15 text-white border border-white/20",
  ghost: "hover:bg-white/10 text-zinc-400 hover:text-white",
  danger: "bg-red-600 hover:bg-red-500 text-white",
}

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-lg font-medium transition-colors disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
