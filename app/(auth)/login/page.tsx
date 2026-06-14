"use client"
// TODO: Supabase magic link or password auth
export default function LoginPage() {
  return (
    <div className="w-full max-w-sm space-y-6">
      <div className="text-center">
        <p className="text-xs font-semibold tracking-widest text-indigo-400 uppercase mb-1">APXUnbound</p>
        <h1 className="text-2xl font-bold text-white">Business OS</h1>
        <p className="text-sm text-zinc-500 mt-1">Internal access only</p>
      </div>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:border-indigo-500 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
        >
          Send Magic Link
        </button>
      </form>
    </div>
  )
}
