export const KPI_THRESHOLDS = {
  cpm: {
    min: 30,
    max: 90,
    killMultiplier: 3,
    killAfterHours: 6,
  },
  ctr: {
    min: 1, // %
    max: 3, // %
  },
  cpc: {
    min: 2,
    max: 5,
  },
  costPerLinkClick: {
    min: 5,
    max: 10,
    killMultiplier: 3,
    killAfterHours: 48,
  },
  optinRate: {
    min: 15, // %
  },
  cpl: {
    min: 30,
    max: 60,
    killMultiplier: 2,
  },
  cpbc: {
    min: 100,
    max: 250,
    killMultiplier: 2,
  },
  showRate: {
    min: 50, // % — B2C
  },
  closeRate: {
    min: 25, // %
  },
  cashRoas: {
    min: 2, // 2:1
  },
  revenueRoas: {
    min: 5, // 5:1
  },
} as const

export type KPIKey = keyof typeof KPI_THRESHOLDS

export function evaluateKPI(key: KPIKey, value: number, hoursRunning = 0) {
  const threshold = KPI_THRESHOLDS[key]

  if ("killMultiplier" in threshold) {
    const killHoursCheck =
      !("killAfterHours" in threshold) || hoursRunning >= threshold.killAfterHours
    if (killHoursCheck && value >= threshold.max * threshold.killMultiplier) {
      return "kill" as const
    }
  }

  if ("max" in threshold && value > threshold.max) return "warning" as const
  if ("min" in threshold && value < threshold.min) return "warning" as const

  return "healthy" as const
}
