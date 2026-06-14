// Dinner event booking page — GHL embed drops in below the header
// To wire: paste your GHL calendar embed inside <GHLEmbed /> or replace the placeholder div
export default function BookPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
          APXUnbound
        </p>
        <h1 className="text-3xl font-bold text-white leading-tight">
          Reserve Your Seat
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Pick the dinner that works for you. Spots are first-come, first-served —
          we keep the table tight by design.
        </p>
      </div>

      {/* What to expect */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          What you're signing up for
        </p>
        <div className="space-y-3">
          {[
            {
              icon: "◈",
              label: "The dinner",
              detail: "3-hour founder dinner in LA — intimate, no slides, no pitches.",
            },
            {
              icon: "◉",
              label: "The table",
              detail: "10–12 operators at $500k–$10M+. Curated by Ozzie personally.",
            },
            {
              icon: "◑",
              label: "The outcome",
              detail: "Leave with at least one actionable insight or your seat fee is refunded.",
            },
          ].map(({ icon, label, detail }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="text-indigo-400 text-base mt-0.5 shrink-0">{icon}</span>
              <div>
                <p className="text-sm font-medium text-white">{label}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GHL Embed */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
        {/*
          ─── GHL CALENDAR EMBED ───────────────────────────────────────────
          Replace this placeholder with your GHL calendar embed code.
          Example:
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/YOUR_CALENDAR_ID"
            style={{ width: "100%", border: "none", overflow: "hidden" }}
            scrolling="no"
            id="YOUR_CALENDAR_ID_iframe"
          />
          <script src="https://link.msgsndr.com/js/form_embed.js" type="text/javascript" />
          ──────────────────────────────────────────────────────────────────
        */}
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center space-y-3">
          <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-lg text-indigo-400">
            ◎
          </div>
          <p className="text-sm font-medium text-white">Calendar coming soon</p>
          <p className="text-xs text-zinc-600 max-w-xs">
            GHL booking embed will appear here once connected.
            Paste your iframe or script tag above this placeholder.
          </p>
        </div>
      </div>

      {/* Urgency / Social proof */}
      <div className="flex items-center justify-center gap-2 text-xs text-zinc-600">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
        Only a few seats remain per dinner. No waitlist.
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-zinc-700">
        APXUnbound LLC · Questions? Text{" "}
        <a href="sms:+10000000000" className="text-zinc-500 hover:text-zinc-400 transition-colors">
          the team
        </a>
        .
      </p>
    </div>
  )
}
