import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === '/login';
  const token = request.cookies.get('token')?.value || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/login',
    '/bills/[company]/[id]',
    '/challans/[company]/[id]',
    '/companies/[company]/[id]',
    '/loading-slips/[company]/[id]',
    '/lrs/[company/[id]',
    '/vouchers/[company]/[id]',
    '/invoice/[company]/[id]/create',
  ],
};
