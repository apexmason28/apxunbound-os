-- APXUnbound OS — Supabase Schema
-- Run in Supabase SQL editor

-- ─── Extensions ──────────────────────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ─── Leads / Pipeline ────────────────────────────────────────────────────────
create table leads (
  id uuid primary key default uuid_generate_v4(),
  ghl_contact_id text unique,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  stage text not null default 'new'
    check (stage in ('new','applied','qualified','booked','showed','closed','lost')),
  source text,
  application_date timestamptz,
  book_date timestamptz,
  call_date timestamptz,
  closed_date timestamptz,
  deal_value numeric(10,2),
  notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index leads_stage_idx on leads(stage);
create index leads_ghl_idx on leads(ghl_contact_id);

-- ─── Ad Metrics (cached from Meta API) ───────────────────────────────────────
create table ad_metrics (
  id uuid primary key default uuid_generate_v4(),
  campaign_id text not null,
  campaign_name text,
  ad_set_id text,
  ad_set_name text,
  date date not null,
  spend numeric(10,2),
  impressions integer,
  clicks integer,
  link_clicks integer,
  leads integer default 0,
  bookings integer default 0,
  cpm numeric(8,2),
  ctr numeric(6,4),
  cpc numeric(8,2),
  cost_per_link_click numeric(8,2),
  cpl numeric(8,2),
  cpbc numeric(8,2),
  roas numeric(8,4),
  hours_running numeric(6,2) default 0,
  created_at timestamptz default now(),
  unique(campaign_id, ad_set_id, date)
);

create index ad_metrics_campaign_idx on ad_metrics(campaign_id, date desc);

-- ─── KPI Alerts ──────────────────────────────────────────────────────────────
create table kpi_alerts (
  id uuid primary key default uuid_generate_v4(),
  metric text not null,
  value numeric(10,4),
  threshold numeric(10,4),
  multiplier numeric(4,2),
  action text not null check (action in ('warn','kill')),
  campaign_id text,
  campaign_name text,
  triggered_at timestamptz default now(),
  resolved_at timestamptz,
  acknowledged boolean default false
);

-- ─── Instagram Posts (cached) ─────────────────────────────────────────────────
create table instagram_posts (
  id text primary key, -- Instagram media ID
  media_type text,
  media_url text,
  permalink text,
  caption text,
  timestamp timestamptz,
  like_count integer,
  comments_count integer,
  reach integer,
  impressions integer,
  engagement numeric(8,4),
  saved integer,
  synced_at timestamptz default now()
);

-- ─── Competitors ─────────────────────────────────────────────────────────────
create table competitors (
  id uuid primary key default uuid_generate_v4(),
  username text unique not null,
  display_name text,
  followers_count integer,
  avg_engagement numeric(8,4),
  posts_per_week numeric(4,2),
  top_content_types text[],
  notes text,
  tracked_since timestamptz default now(),
  last_checked timestamptz
);

-- ─── Content OS ──────────────────────────────────────────────────────────────
create table content_pieces (
  id uuid primary key default uuid_generate_v4(),
  type text not null check (type in ('reel','carousel','single','story')),
  hook text,
  caption text,
  hashtags text[],
  media_url text,
  scheduled_at timestamptz,
  published_at timestamptz,
  status text not null default 'draft'
    check (status in ('draft','approved','scheduled','published','failed')),
  instagram_post_id text,
  generated_by text default 'ai' check (generated_by in ('ai','human')),
  performance_score numeric(5,2),
  created_at timestamptz default now()
);

create index content_status_idx on content_pieces(status, scheduled_at);

-- ─── Dinner Events ───────────────────────────────────────────────────────────
create table dinner_events (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  event_date timestamptz not null,
  venue text,
  city text default 'Los Angeles',
  capacity integer default 12,
  ticket_price numeric(8,2),
  attendees_confirmed integer default 0,
  status text default 'planning'
    check (status in ('planning','open','full','completed')),
  created_at timestamptz default now()
);

create table dinner_applications (
  id uuid primary key default uuid_generate_v4(),
  event_id uuid references dinner_events(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  linkedin_url text,
  business_type text,
  annual_revenue text,
  why_attend text,
  status text default 'pending'
    check (status in ('pending','approved','waitlisted','declined','paid','attended','no-show')),
  paid_at timestamptz,
  attended_at timestamptz,
  testimonial_captured boolean default false,
  testimonial_text text,
  upsell_status text default 'none'
    check (upsell_status in ('none','pitched','interested','converted')),
  upsell_product text,
  upsell_value numeric(10,2),
  created_at timestamptz default now()
);

create index dinner_app_event_idx on dinner_applications(event_id, status);
create index dinner_app_email_idx on dinner_applications(email);

-- ─── Revenue Snapshots ───────────────────────────────────────────────────────
create table revenue_snapshots (
  id uuid primary key default uuid_generate_v4(),
  period_start date not null,
  period_end date not null,
  cash_collected numeric(10,2) default 0,
  revenue_recognized numeric(10,2) default 0,
  ad_spend numeric(10,2) default 0,
  cash_roas numeric(8,4),
  revenue_roas numeric(8,4),
  created_at timestamptz default now()
);

-- ─── RLS (enable, no policies yet — add per-user auth later) ────────────────
alter table leads enable row level security;
alter table ad_metrics enable row level security;
alter table kpi_alerts enable row level security;
alter table instagram_posts enable row level security;
alter table competitors enable row level security;
alter table content_pieces enable row level security;
alter table dinner_events enable row level security;
alter table dinner_applications enable row level security;
alter table revenue_snapshots enable row level security;

-- Service role bypasses RLS by default — no policies needed for internal use.
