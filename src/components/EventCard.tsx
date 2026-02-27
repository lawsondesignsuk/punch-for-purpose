import Link from "next/link";
import { EventRecord } from "@/types/event";
import { formatEventDate } from "@/lib/format";

type EventCardProps = {
  event: EventRecord;
};

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="rounded-xl border border-white/10 bg-panel p-6">
      <p className="text-xs font-bold uppercase tracking-wider text-accent">{event.city}</p>
      <h3 className="mt-2 text-xl font-black text-white">{event.name}</h3>
      <p className="mt-2 text-sm text-white/70">{formatEventDate(event.dateISO)}</p>
      <p className="text-sm text-white/70">{event.venue}</p>
      <p className="mt-3 text-sm font-semibold text-white">{event.ticketsAvailable ? "Tickets Available" : "Sold Out"}</p>
      <div className="mt-5 flex gap-3">
        <Link href={`/events/${event.slug}`} className="rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white hover:border-accent hover:text-accent">
          Event Details
        </Link>
        <Link href="/sign-up" className="rounded-md bg-accent px-4 py-2 text-sm font-bold text-white hover:opacity-90">
          Register
        </Link>
      </div>
    </article>
  );
}
