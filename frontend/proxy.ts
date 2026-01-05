import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
  const authToken = request.cookies.get('authToken')?.value
  const { pathname } = request.nextUrl

  const isAuthPage = pathname === '/login' || pathname === '/signup'

  // Logged-in user visiting login/signup
  if (isAuthPage && authToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Not logged in, trying to access protected page
  if (!isAuthPage && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Allow request
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|api).*)',
  ],
}
