import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = form.get("email");

  if (!email) {
    return NextResponse.redirect(new URL("/?newsletter=error", request.url), { status: 303 });
  }

  return NextResponse.redirect(new URL("/?newsletter=success", request.url), { status: 303 });
}
