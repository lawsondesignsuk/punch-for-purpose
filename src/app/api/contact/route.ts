import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  if (!name || !email || !message) {
    return NextResponse.redirect(new URL("/?contact=error", request.url), { status: 303 });
  }

  return NextResponse.redirect(new URL("/?contact=sent", request.url), { status: 303 });
}
