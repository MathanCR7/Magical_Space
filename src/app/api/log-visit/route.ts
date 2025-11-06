import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { pageUrl } = await req.json();

    if (!pageUrl) {
      return NextResponse.json({ success: false, message: 'pageUrl is required' }, { status: 400 });
    }

    const headersList = req.headers;
    
    // FIX: Removed the problematic 'req.ip' and rely on the header.
    // The 'x-forwarded-for' header is the standard way to get the client IP.
    const ip = headersList.get('x-forwarded-for') ?? 'IP Not Found';
    const userAgent = headersList.get('user-agent');
    const referrer = headersList.get('referer');

    await prisma.visitLog.create({
      data: {
        pageUrl: pageUrl,
        ipAddress: ip,
        userAgent: userAgent,
        referrer: referrer,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to log visit:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}