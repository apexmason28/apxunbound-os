import { cn } from "@/lib/utils/formatters"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger"
  size?: "sm" | "md" | "lg"
}

const variants = {
  primary: {
    className: "text-white font-semibold",
    style: { background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 20px -4px rgba(99,102,241,0.5)" },
  },
  secondary: {
    className: "text-zinc-200 font-medium hover:text-white",
    style: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" },
  },
  ghost: {
    className: "text-zinc-500 hover:text-zinc-200 hover:bg-white/5",
    style: {},
  },
  danger: {
    className: "text-white font-semibold",
    style: { background: "linear-gradient(135deg, #ef4444, #dc2626)", boxShadow: "0 0 20px -4px rgba(239,68,68,0.4)" },
  },
}

const sizes = {
  sm: "px-3 py-1.5 text-xs rounded-lg gap-1.5",
  md: "px-4 py-2 text-sm rounded-lg gap-2",
  lg: "px-6 py-3 text-sm rounded-xl gap-2",
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  style,
  ...props
}: ButtonProps) {
  const v = variants[variant]
  return (
    <button
      className={cn(
        "inline-flex items-center transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97]",
        v.className,
        sizes[size],
        className
      )}
      style={{ ...v.style, ...style }}
      {...props}
    />
  )
}
