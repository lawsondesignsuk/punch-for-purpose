import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TicketForm from "@/components/TicketForm";

export const metadata: Metadata = {
  title: "Buy Tickets | Punch For Purpose",
  description: "Buy Punch For Purpose event tickets, receive confirmation by email, and get your QR code details.",
};

export default function TicketsPage() {
  return (
    <>
      <PageHero title="Ticket Purchase" subtitle="Select your event, choose quantity, and complete checkout securely." />
      <section className="py-16 sm:py-20">
        <Container className="max-w-2xl">
          <TicketForm />
        </Container>
      </section>
    </>
  );
}
