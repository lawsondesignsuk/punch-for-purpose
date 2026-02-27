import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.json();
  const { fullName, email } = body as { fullName?: string; email?: string };

  if (!fullName || !email) {
    return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!secretKey) {
    return NextResponse.json({ checkoutUrl: `${baseUrl}/fundraising-guide` });
  }

  const stripe = new Stripe(secretKey);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    customer_email: email,
    metadata: {
      fullName,
      source: "fighter_signup",
    },
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: 5000,
          product_data: {
            name: "Punch For Purpose Fighter Registration",
            description: "£50 registration fee including gear and onboarding.",
          },
        },
      },
    ],
    success_url: `${baseUrl}/fundraising-guide?status=success`,
    cancel_url: `${baseUrl}/sign-up?status=cancelled`,
  });

  return NextResponse.json({ checkoutUrl: session.url });
}
