import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const notes = await prisma.note.findMany();
  return NextResponse.json(
    { notes: notes },
    {
      status: 200,
    },
  );
}

export async function POST(req: Request) {
  const note = await req.json();
  const createdNote = await prisma.note.create({ data: note });
  return NextResponse.json(createdNote, {
    status: 201,
  });
}
