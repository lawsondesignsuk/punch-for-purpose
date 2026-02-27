import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-panel py-10">
      <Container className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold text-white">Punch For Purpose</h3>
          <p className="mt-2 text-sm text-white/70">Fight for a cause. Transform your body. Raise funds. Build community.</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/events" className="hover:text-accent">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="hover:text-accent">
                Join as a Fighter
              </Link>
            </li>
            <li>
              <Link href="/tickets" className="hover:text-accent">
                Buy Tickets
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Newsletter</h4>
          <form action="/api/newsletter" method="post" className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-md border border-white/20 bg-background px-4 py-2 text-sm text-white placeholder:text-white/50"
            />
            <button type="submit" className="rounded-md bg-accent px-4 py-2 text-sm font-bold text-white hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </footer>
  );
}
