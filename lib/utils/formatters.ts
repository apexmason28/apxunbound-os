import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number, compact = false): string {
  if (compact && value >= 1000) {
    return `$${(value / 1000).toFixed(1)}k`
  }
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value)
}

export function formatPercent(value: number, decimals = 1): string {
  return `${value.toFixed(decimals)}%`
}

export function formatROAS(value: number): string {
  return `${value.toFixed(2)}x`
}

export function formatNumber(value: number, compact = false): string {
  if (compact && value >= 1000) {
    return `${(value / 1000).toFixed(1)}k`
  }
  return new Intl.NumberFormat("en-US").format(value)
}
