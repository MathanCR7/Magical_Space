import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (adminPassword) {
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');

      if (pwd === adminPassword) {
        return NextResponse.next();
      }
    }
  } else {
    console.warn("ADMIN_PASSWORD is not set. Admin routes are not protected.");
    return NextResponse.next();
  }
  
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ['/admin/:path*', '/api/visit-stats'],
};