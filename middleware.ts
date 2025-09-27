import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: ['/'],
  ignoredRoutes: ['/api/webhooks(.*)'],
  afterAuth: (auth, req) => {
    // Handle successful authentication redirects
    if (auth.isSignedIn && req.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    
    // Allow the request to continue
    return NextResponse.next();
  },
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
