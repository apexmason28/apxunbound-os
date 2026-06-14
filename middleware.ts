import { NextRequest, NextResponse } from "next/server"

const PUBLIC_PATHS = ["/login", "/apply", "/book", "/thank-you"]

function isPublic(path: string) {
  return (
    PUBLIC_PATHS.some((p) => path === p || path.startsWith(p + "/")) ||
    path.startsWith("/api/webhooks") ||
    path.startsWith("/api/auth") ||
    path.startsWith("/api/ghl/apply")
  )
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (isPublic(pathname)) return NextResponse.next()

  const token = req.cookies.get("apx_auth")?.value
  const expected = Buffer.from(process.env.DASHBOARD_PASSWORD ?? "").toString("base64")

  if (!token || token !== expected) {
    const url = new URL("/login", req.url)
    if (pathname !== "/") url.searchParams.set("from", pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
