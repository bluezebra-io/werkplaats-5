import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Workspace from '@/models/Workspace';

export async function GET() {
  try {
    await connectDB();
    const workspaces = await Workspace.find({}).sort({ createdAt: -1 });
    return NextResponse.json(workspaces);
  } catch (error) {
    return NextResponse.json(
      { error: 'Fout bij ophalen werkplekken' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const workspace = await Workspace.create(body);
    return NextResponse.json(workspace, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Fout bij aanmaken werkplek';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
