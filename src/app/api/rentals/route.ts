import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Rental from '@/models/Rental';
import Workspace from '@/models/Workspace';

export async function GET() {
  try {
    await connectDB();
    const rentals = await Rental.find({})
      .populate('workspaceId')
      .sort({ createdAt: -1 });
    return NextResponse.json(rentals);
  } catch (error) {
    return NextResponse.json(
      { error: 'Fout bij ophalen verhuringen' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    const workspace = await Workspace.findById(body.workspaceId);
    if (!workspace) {
      return NextResponse.json({ error: 'Werkplek niet gevonden' }, { status: 404 });
    }

    let totalPrice = 0;
    switch (body.rentalType) {
      case 'day':
        totalPrice = workspace.pricePerDay;
        break;
      case 'week':
        totalPrice = workspace.pricePerWeek;
        break;
      case 'month':
        totalPrice = workspace.pricePerMonth;
        break;
      case 'subscription':
        totalPrice = workspace.subscriptionPrice;
        break;
    }

    const rental = await Rental.create({
      ...body,
      totalPrice,
    });

    return NextResponse.json(rental, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Fout bij aanmaken verhuring';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
