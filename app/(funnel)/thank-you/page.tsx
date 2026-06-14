export default function ThankYouPage() {
  return (
    <div className="space-y-6 text-center">
      <div className="text-5xl">✓</div>
      <h1 className="text-3xl font-bold text-white">You're Booked.</h1>
      <p className="text-zinc-400">
        Check your email for confirmation. Donnie will see you on the call.
      </p>
      <p className="text-sm text-zinc-600">
        In the meantime, join the free community →{" "}
        <a href="#" className="text-indigo-400 underline">Skool</a>
      </p>
    </div>
  )
}
