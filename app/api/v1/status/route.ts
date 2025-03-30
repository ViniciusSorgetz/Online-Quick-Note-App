import { NextResponse } from "next/server";

export async function GET() {
  const esquecida = "teste";
  return NextResponse.json(
    { message: "hello" },
    {
      status: 200,
    },
  );
}
