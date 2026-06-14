// High-ticket DSL route: Ad → this page directly → Calendly/GHL booking embed → Thank You
// No optin. No application. Straight to book.
export default function BookPage() {
  return (
    <div className="space-y-6 text-center">
      <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">APXUnbound</p>
      <h1 className="text-3xl font-bold text-white">Book Your Strategy Call</h1>
      <p className="text-zinc-400 text-sm">
        30 minutes with Donnie. We'll find your exact constraint — and tell you exactly how we fix it.
      </p>
      {/* GHL / Calendly booking embed */}
    </div>
  )
}
