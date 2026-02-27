import type { Metadata } from "next";
import Container from "@/components/Container";
import EventCard from "@/components/EventCard";
import PageHero from "@/components/PageHero";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Upcoming Charity Boxing Events UK | Punch For Purpose",
  description: "Browse upcoming Punch For Purpose events across UK cities. Register as a fighter or buy tickets for fight night.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero title="Upcoming Events" subtitle="Choose your city, lock in your date, and get ready for a purpose-driven fight night." />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
