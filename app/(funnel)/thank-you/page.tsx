export default function ThankYouPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">
          APXUnbound
        </p>

        {/* Check mark */}
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-2xl text-emerald-400">
            ✓
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white">You're In.</h1>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Your seat is confirmed. Check your email for details —
          we'll also text you a reminder 48 hours before the dinner.
        </p>
      </div>

      {/* What happens next */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-5">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
          What happens next
        </p>
        <div className="space-y-4">
          {[
            {
              step: "1",
              title: "Check your email",
              detail:
                "Confirmation + dinner address sent to your inbox within 5 minutes. Check spam if you don't see it.",
            },
            {
              step: "2",
              title: "Save the date",
              detail:
                "Add the dinner to your calendar. Doors open 30 minutes early — grab a drink and settle in.",
            },
            {
              step: "3",
              title: "Come ready to go deep",
              detail:
                "No pitching. No posturing. Just honest conversation about what's actually working at the table.",
            },
          ].map(({ step, title, detail }) => (
            <div key={step} className="flex items-start gap-4">
              <div className="shrink-0 h-6 w-6 rounded-full border border-indigo-500/40 bg-indigo-500/10 flex items-center justify-center text-xs font-bold text-indigo-400">
                {step}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{title}</p>
                <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skool CTA */}
      <div className="rounded-2xl border border-purple-500/20 bg-purple-500/[0.05] p-5 text-center space-y-3">
        <p className="text-xs font-semibold tracking-widest text-purple-400 uppercase">
          While you wait
        </p>
        <p className="text-sm text-zinc-300">
          Join 2,000+ operators in the free APXUnbound community on Skool.
          Real conversations, real frameworks — no fluff.
        </p>
        <a
          href="#"
          className="inline-block rounded-lg border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 px-5 py-2 text-sm font-medium text-purple-300 transition-colors"
        >
          Join Skool (free) →
        </a>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-zinc-700">
        APXUnbound LLC · See you at the table.
      </p>
    </div>
  )
}
