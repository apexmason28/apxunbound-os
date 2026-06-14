// Public-facing application page
// Ad → this page → GHL → setter qualifies → book call
// TODO: POST submits to GHL via /api/webhooks/ghl or GHL embed
export default function ApplyPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase">APXUnbound</p>
        <h1 className="text-3xl font-bold text-white">
          Identify & Eliminate Your #1 Mental Block
        </h1>
        <p className="text-zinc-400">
          In a single session — or you don't pay.
        </p>
      </div>

      {/* Application form: name, email, phone, business type, annual revenue, what's blocking you */}
      {/* On submit: create GHL contact + tag "applied", redirect to /book or confirmation */}
    </div>
  )
}
