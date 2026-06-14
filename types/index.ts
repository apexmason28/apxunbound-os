// ─── KPI / Ads ───────────────────────────────────────────────────────────────

export type KPIStatus = "healthy" | "warning" | "kill"

export interface AdMetrics {
  campaignId: string
  campaignName: string
  adSetId?: string
  adSetName?: string
  spend: number
  impressions: number
  clicks: number
  linkClicks: number
  leads: number
  bookings: number
  cpm: number
  ctr: number
  cpc: number
  costPerLinkClick: number
  cpl: number
  cpbc: number
  roas: number
  createdAt: string
  hoursRunning: number
}

export interface KPIAlert {
  id: string
  metric: string
  value: number
  threshold: number
  multiplier: number
  action: "warn" | "kill"
  campaignId: string
  campaignName: string
  triggeredAt: string
  resolvedAt?: string
}

// ─── Instagram ───────────────────────────────────────────────────────────────

export interface InstagramAccount {
  id: string
  username: string
  name: string
  biography: string
  followersCount: number
  followingCount: number
  mediaCount: number
  profilePictureUrl: string
}

export interface InstagramPost {
  id: string
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | "REELS"
  mediaUrl: string
  permalink: string
  caption: string
  timestamp: string
  likeCount: number
  commentsCount: number
  reach?: number
  impressions?: number
  engagement?: number
  saved?: number
}

export interface AccountHealth {
  followersGrowth7d: number
  followersGrowth30d: number
  avgEngagementRate: number
  avgReach: number
  postsLast30d: number
  reelsAvgViews: number
  score: number // 0-100
}

export interface Competitor {
  id: string
  username: string
  followersCount: number
  avgEngagement: number
  postsPerWeek: number
  topContentTypes: string[]
  trackedSince: string
}

// ─── Pipeline / GHL ──────────────────────────────────────────────────────────

export type LeadStage =
  | "new"
  | "applied"
  | "qualified"
  | "booked"
  | "showed"
  | "closed"
  | "lost"

export interface Lead {
  id: string
  ghlContactId: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  stage: LeadStage
  source: string // ad campaign name
  applicationDate?: string
  bookDate?: string
  callDate?: string
  closedDate?: string
  dealValue?: number
  notes?: string
  createdAt: string
  updatedAt: string
}

export interface PipelineMetrics {
  totalLeads: number
  applicationRate: number
  qualifyRate: number
  showRate: number
  closeRate: number
  avgDealValue: number
  cpbc: number
  constraint: string // which stage has the biggest drop-off
}

// ─── Business Health ─────────────────────────────────────────────────────────

export interface RevenueMetrics {
  cashCollected: number
  revenueRecognized: number
  adSpend: number
  cashRoas: number
  revenueRoas: number
  period: "7d" | "30d" | "mtd" | "ytd"
}

// ─── Content OS ──────────────────────────────────────────────────────────────

export type ContentStatus = "draft" | "approved" | "scheduled" | "published" | "failed"
export type ContentType = "reel" | "carousel" | "single" | "story"

export interface ContentPiece {
  id: string
  type: ContentType
  hook: string
  caption: string
  hashtags: string[]
  mediaUrl?: string
  scheduledAt?: string
  publishedAt?: string
  status: ContentStatus
  instagramPostId?: string
  generatedBy: "ai" | "human"
  performanceScore?: number
  createdAt: string
}

// ─── Dinner Events ───────────────────────────────────────────────────────────

export type DinnerApplicationStatus = "pending" | "approved" | "waitlisted" | "declined" | "paid" | "attended" | "no-show"
export type UpsellStatus = "none" | "pitched" | "interested" | "converted"

export interface DinnerEvent {
  id: string
  title: string
  date: string
  venue: string
  city: string
  capacity: number
  ticketPrice: number
  attendeesConfirmed: number
  status: "planning" | "open" | "full" | "completed"
  createdAt: string
}

export interface DinnerApplication {
  id: string
  eventId: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  linkedinUrl?: string
  businessType: string
  annualRevenue: string
  whyAttend: string
  status: DinnerApplicationStatus
  paidAt?: string
  attendedAt?: string
  testimonialCaptured: boolean
  testimonialText?: string
  upsellStatus: UpsellStatus
  upsellProduct?: string
  upsellValue?: number
  createdAt: string
}

// ─── Shared ──────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  icon: string
  badge?: string | number
}
