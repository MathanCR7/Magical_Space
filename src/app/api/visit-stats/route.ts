import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const [totalVisits, uniquePagesResult, recentVisits] = await prisma.$transaction([
      prisma.visitLog.count(),
      prisma.visitLog.findMany({
        select: { pageUrl: true },
        distinct: ['pageUrl'],
      }),
      prisma.visitLog.findMany({
        orderBy: { visitTime: 'desc' },
        take: 5,
      }),
    ]);

    const uniquePages = uniquePagesResult.length;

    return NextResponse.json({
      totalVisits,
      uniquePages,
      recentVisits,
    });
  } catch (error) {
    console.error('Failed to fetch visit stats:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';