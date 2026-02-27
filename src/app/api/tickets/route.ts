import { NextResponse } from "next/server";
import Stripe from "stripe";

const TICKET_PRICE_PENCE = 2500;

export async function POST(request: Request) {
  const body = await request.json();
  const { eventId, quantity, email } = body as { eventId?: string; quantity?: string; email?: string };

  if (!eventId || !quantity || !email) {
    return NextResponse.json({ message: "Missing required fields." }, { status: 400 });
  }

  const parsedQuantity = Number(quantity);
  if (Number.isNaN(parsedQuantity) || parsedQuantity < 1 || parsedQuantity > 10) {
    return NextResponse.json({ message: "Invalid ticket quantity." }, { status: 400 });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!secretKey) {
    return NextResponse.json({ checkoutUrl: `${baseUrl}/tickets?status=success&mock=1` });
  }

  const stripe = new Stripe(secretKey);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    customer_email: email,
    metadata: {
      eventId,
      quantity: String(parsedQuantity),
      source: "ticket_purchase",
    },
    line_items: [
      {
        quantity: parsedQuantity,
        price_data: {
          currency: "gbp",
          unit_amount: TICKET_PRICE_PENCE,
          product_data: {
            name: "Punch For Purpose Ticket",
            description: "General admission ticket.",
          },
        },
      },
    ],
    success_url: `${baseUrl}/tickets?status=success`,
    cancel_url: `${baseUrl}/tickets?status=cancelled`,
  });

  return NextResponse.json({ checkoutUrl: session.url });
}
