import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Contact API is working!",
  });
}

export async function POST(request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: "Form submitted successfully!",
    data: body,
  });
}