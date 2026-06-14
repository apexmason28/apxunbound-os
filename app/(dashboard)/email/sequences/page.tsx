export default function SequencesPage() {
  const steps = [
    { timing: "Immediate",  subject: "Access Granted",                     type: "access",  note: "Send VSL link + PS: Book your call now" },
    { timing: "+3 hours",   subject: "Reminder: Your access is waiting",   type: "access",  note: "Same email as #1" },
    { timing: "+21 hours",  subject: "Last chance to access this",         type: "access",  note: "Same email as #1" },
    { timing: "+1 day",     subject: "Direct Offer 1",                     type: "offer",   note: "Outcome-based subject. Direct CTA to book." },
    { timing: "+1 day",     subject: "Direct Offer 2",                     type: "offer",   note: "FWD format — from a team member" },
    { timing: "+1 day",     subject: "Last chance — Direct Offer 3",       type: "offer",   note: "FWD format — urgency close" },
    { timing: "Day 7",      subject: "Testimonial #1",                     type: "proof",   note: "Lesson + client win woven in naturally" },
    { timing: "Day 8",      subject: "Testimonial #2",                     type: "proof",   note: "Screenshot with play button → funnel" },
    { timing: "Day 9",      subject: "Testimonial #3",                     type: "proof",   note: "Case study format" },
    { timing: "Day 10",     subject: "Testimonial #4",                     type: "proof",   note: "Video or screenshot" },
    { timing: "Day 11",     subject: "YouTube / Value #1 + PS: Book",      type: "content", note: "Pure value, book call in PS only" },
    { timing: "Day 12",     subject: "YouTube / Value #2 + PS: Book",      type: "content", note: "Pure value, book call in PS only" },
    { timing: "Day 13",     subject: "YouTube / Value #3 + PS: Book",      type: "content", note: "Pure value, book call in PS only" },
    { timing: "Day 14",     subject: "YouTube / Value #4 + PS: Book",      type: "content", note: "Pure value, book call in PS only" },
    { timing: "Day 15",     subject: "YouTube / Value #5 + PS: Book",      type: "content", note: "Transition to broadcast list after this" },
  ]

  const typeStyle: Record<string, { bg: string; text: string; border: string; label: string }> = {
    access:  { bg: "rgba(99,102,241,0.1)",   text: "#818cf8", border: "rgba(99,102,241,0.2)",  label: "Access" },
    offer:   { bg: "rgba(16,185,129,0.1)",   text: "#34d399", border: "rgba(16,185,129,0.2)",  label: "Direct Offer" },
    proof:   { bg: "rgba(245,158,11,0.1)",   text: "#fbbf24", border: "rgba(245,158,11,0.2)",  label: "Proof" },
    content: { bg: "rgba(168,85,247,0.1)",   text: "#c084fc", border: "rgba(168,85,247,0.2)",  label: "Value" },
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-indigo-400 mb-1">Email Marketing</p>
        <h1 className="text-3xl font-bold text-white tracking-tight">Autoresponder Sequence</h1>
        <p className="text-sm text-zinc-500 mt-1">15-email new lead sequence. Day 15 → transitions to daily broadcast list.</p>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
        <div className="grid grid-cols-[80px_1fr_140px_140px] px-5 py-3 border-b border-white/[0.05]">
          {["Timing", "Subject / Email", "Type", "Note"].map(h => (
            <p key={h} className="text-[10px] font-bold tracking-[0.12em] uppercase text-zinc-700">{h}</p>
          ))}
        </div>
        {steps.map(({ timing, subject, type, note }, i) => {
          const s = typeStyle[type]
          return (
            <div
              key={i}
              className="grid grid-cols-[80px_1fr_140px_140px] px-5 py-3.5 hover:bg-white/[0.02] transition-colors items-start gap-4"
              style={i < steps.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,0.04)" } : {}}
            >
              <p className="text-[11px] font-mono text-zinc-600">{timing}</p>
              <p className="text-xs font-medium text-zinc-200">{subject}</p>
              <span
                className="text-[10px] font-semibold rounded-full px-2 py-0.5 w-fit"
                style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}
              >
                {s.label}
              </span>
              <p className="text-[11px] text-zinc-600 leading-relaxed">{note}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
