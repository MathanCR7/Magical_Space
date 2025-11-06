import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, requirementType, floorplan, details } = body;

    // Basic validation
    if (!name || !email || !phone || !requirementType || !floorplan) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    await prisma.quoteRequest.create({
      data: {
        name,
        email,
        phone,
        requirementType,
        floorplan,
        details, // This will store the JSON object with the checklist items
      },
    });

    return NextResponse.json({ success: true, message: 'Quote request submitted successfully.' });
  } catch (error) {
    console.error('Failed to create quote request:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}