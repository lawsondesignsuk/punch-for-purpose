import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CountdownTimer from "@/components/CountdownTimer";
import { events, getEventBySlug } from "@/lib/events";
import { formatEventDate } from "@/lib/format";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) {
    return { title: "Event Not Found | Punch For Purpose" };
  }
  return {
    title: `${event.name} | Punch For Purpose`,
    description: `${event.name} at ${event.venue}. Register for the event or secure your tickets today.`,
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <section className="bg-accent-gradient py-20">
        <Container>
          <p className="text-sm font-bold uppercase tracking-wider text-white/90">{event.city}</p>
          <h1 className="mt-2 max-w-4xl font-[var(--font-oswald)] text-4xl font-black uppercase text-white sm:text-6xl">{event.name}</h1>
          <p className="mt-4 max-w-2xl text-white/90">{event.heroCopy}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-panel p-6">
            <h2 className="text-2xl font-black text-white">Event Details</h2>
            <p className="mt-3 text-white/80">Date: {formatEventDate(event.dateISO)}</p>
            <p className="text-white/80">Venue: {event.venue}</p>
            <p className="mt-3 text-white/80">Charity Partner: {event.charityPartner}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/sign-up" className="rounded-md bg-accent px-5 py-3 text-sm font-black text-white hover:opacity-90">
                Register as Fighter
              </Link>
              <Link href="/tickets" className="rounded-md border border-white/25 px-5 py-3 text-sm font-black text-white hover:border-accent hover:text-accent">
                Buy Tickets
              </Link>
            </div>
          </article>

          <article className="rounded-xl border border-white/10 bg-panel p-6">
            <h2 className="text-2xl font-black text-white">Countdown to Fight Night</h2>
            <p className="mt-2 text-sm text-white/70">Limited spaces remain for fighters in this city.</p>
            <div className="mt-5">
              <CountdownTimer targetDate={event.dateISO} />
            </div>
          </article>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-xl border border-white/10 bg-panel p-6">
            <h2 className="text-2xl font-black text-white">FAQs</h2>
            <div className="mt-5 space-y-4">
              {event.faq.map((item) => (
                <details key={item.question} className="rounded-md border border-white/10 bg-white/5 p-4">
                  <summary className="cursor-pointer text-sm font-bold text-white">{item.question}</summary>
                  <p className="mt-2 text-sm text-white/75">{item.answer}</p>
                </details>
              ))}
            </div>
          </article>

          <article className="rounded-xl border border-white/10 bg-panel p-6">
            <h2 className="text-2xl font-black text-white">Charity Partner</h2>
            <p className="mt-3 text-sm text-white/80">
              This event supports <span className="font-bold text-white">{event.charityPartner}</span>. Each fighter is guided to build a fundraising campaign and maximize local impact.
            </p>
            <p className="mt-4 text-sm text-white/70">Fundraising toolkit and campaign templates are provided after registration.</p>
          </article>
        </Container>
      </section>
    </>
  );
}
