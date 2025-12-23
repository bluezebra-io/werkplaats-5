import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Workspace from '@/models/Workspace';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const workspace = await Workspace.findById(id);
    if (!workspace) {
      return NextResponse.json({ error: 'Werkplek niet gevonden' }, { status: 404 });
    }
    return NextResponse.json(workspace);
  } catch (error) {
    return NextResponse.json({ error: 'Fout bij ophalen' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();
    const workspace = await Workspace.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!workspace) {
      return NextResponse.json({ error: 'Werkplek niet gevonden' }, { status: 404 });
    }
    return NextResponse.json(workspace);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Fout bij updaten';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const { id } = await params;
    const workspace = await Workspace.findByIdAndDelete(id);
    if (!workspace) {
      return NextResponse.json({ error: 'Werkplek niet gevonden' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Werkplek verwijderd' });
  } catch (error) {
    return NextResponse.json({ error: 'Fout bij verwijderen' }, { status: 500 });
  }
}
