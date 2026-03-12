import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { code } = await req.json();

  const normalized = code?.trim().toLowerCase();

  const validCodes =
    process.env.DEMO_CODES?.split(",").map(c => c.trim()) || [];

  const demoUrl = process.env.DEMO_URL;

  if (!validCodes.includes(normalized) || !demoUrl) {
    return NextResponse.json(
      { success: false },
      { status: 401 }
    );
  }

  return NextResponse.redirect(demoUrl);
}