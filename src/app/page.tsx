import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/events";

const steps = [
  {
    title: "Sign Up (£50)",
    description: "Secure your place and receive gloves and training gear.",
  },
  {
    title: "8 Weeks Free Training",
    description: "Build confidence with coached sessions and beginner-friendly progression.",
  },
  {
    title: "Raise for Charity",
    description: "Launch your GoFundMe and rally your network behind your cause.",
  },
  {
    title: "Fight Night",
    description: "Step under the lights in front of friends, family, and the city.",
  },
  {
    title: "Invite Your Crowd",
    description: "Sell tickets and bring serious atmosphere to your walkout.",
  },
];

const testimonials = [
  {
    quote: "I lost 9kg, raised over £2,000, and proved to myself I can do hard things.",
    author: "Sophie, Manchester Fighter",
  },
  {
    quote: "The coaching was elite. Fight night felt genuinely professional.",
    author: "Aaron, Birmingham Fighter",
  },
  {
    quote: "Best challenge I have ever done. Massive charity impact and huge confidence boost.",
    author: "Jade, London Fighter",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(225,6,0,0.35),_transparent_50%)]" />
        <div className="absolute inset-0 -z-10 noise" />
        <Container className="text-center">
          <p className="mb-3 inline-block rounded-full border border-accent/50 bg-accent/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Limited Spaces • UK Charity Fight Nights
          </p>
          <h1 className="mx-auto max-w-5xl font-[var(--font-oswald)] text-5xl font-black uppercase leading-tight text-white sm:text-7xl">
            Step Into The Ring. Fight For A Cause.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-white/85 sm:text-xl">
            8 weeks free training. Raise money for charity. Experience fight night with high-energy coaching from elite professionals.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/sign-up" className="rounded-md bg-accent px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-glow hover:opacity-90">
              Sign Up Now
            </Link>
            <Link href="/events" className="rounded-md border border-white/25 px-8 py-4 text-sm font-black uppercase tracking-wide text-white hover:border-accent hover:text-accent">
              View Upcoming Events
            </Link>
          </div>
          <div className="mt-10 flex justify-center">
            <a href="#how-it-works" className="animate-bounce rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-widest text-white/70">
              Scroll
            </a>
          </div>
        </Container>
      </section>

      <AnimatedSection id="how-it-works" className="py-16 sm:py-20">
        <Container>
          <h2 className="font-[var(--font-oswald)] text-4xl font-black uppercase text-white">How It Works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-xl border border-white/10 bg-panel p-5">
                <p className="text-sm font-black uppercase tracking-wider text-accent">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-16 sm:py-20">
        <Container>
          <h2 className="font-[var(--font-oswald)] text-4xl font-black uppercase text-white">Train With Champions</h2>
          <p className="mt-3 max-w-3xl text-white/75">Train with real professionals: Mikey McKinson and Lucas Ballingall, with coaching built for first-time fighters.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-panel p-6">
              <h3 className="text-2xl font-black text-white">Mikey McKinson</h3>
              <p className="mt-2 text-sm text-white/70">Professional boxing standout known for elite ring IQ, sharp footwork, and world-level experience.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>Pro-level tactical coaching</li>
                <li>Fight prep mindset sessions</li>
                <li>Technical sparring guidance</li>
              </ul>
            </article>
            <article className="rounded-xl border border-white/10 bg-panel p-6">
              <h3 className="text-2xl font-black text-white">Lucas Ballingall</h3>
              <p className="mt-2 text-sm text-white/70">High-performance coach focused on conditioning, fundamentals, and safe, confidence-first progression.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>Beginner-safe coaching systems</li>
                <li>Conditioning and pad-work blocks</li>
                <li>Fight-night readiness protocols</li>
              </ul>
            </article>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-[var(--font-oswald)] text-4xl font-black uppercase text-white">Upcoming Events</h2>
            <Link href="/events" className="text-sm font-bold uppercase tracking-wider text-accent">
              See all events
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-16 sm:py-20">
        <Container className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-[var(--font-oswald)] text-4xl font-black uppercase text-white">Why Punch For Purpose</h2>
            <ul className="mt-6 space-y-4 text-sm text-white/80 sm:text-base">
              <li>Real charity impact across UK communities</li>
              <li>Fitness transformation and confidence growth</li>
              <li>Purpose-driven challenge with team support</li>
              <li>Life-changing event atmosphere and accountability</li>
            </ul>
          </div>
          <div className="grid gap-4">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="rounded-xl border border-white/10 bg-panel p-5">
                <p className="text-sm text-white/90">“{item.quote}”</p>
                <footer className="mt-2 text-xs font-bold uppercase tracking-wide text-accent">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-16 sm:py-20">
        <Container>
          <h2 className="font-[var(--font-oswald)] text-4xl font-black uppercase text-white">Transformation Stories</h2>
          <p className="mt-3 text-white/70">Before and after placeholders ready for real participant uploads.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((slot) => (
              <div key={slot} className="rounded-xl border border-dashed border-white/25 bg-white/5 p-8 text-center text-sm text-white/70">
                Before / After Image Placeholder {slot}
              </div>
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-2xl bg-accent-gradient p-8 text-center shadow-glow sm:p-12">
            <h2 className="font-[var(--font-oswald)] text-4xl font-black uppercase text-white sm:text-5xl">Are You Ready To Step Into The Ring?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/90">Spaces fill quickly. Secure your place now and start training for a purpose-driven fight night.</p>
            <Link href="/sign-up" className="mt-8 inline-block rounded-md bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-black hover:opacity-90">
              Join The Next Event
            </Link>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div className="rounded-xl border border-white/10 bg-panel p-6">
            <h3 className="text-xl font-black text-white">Stay Fight-Night Ready</h3>
            <p className="mt-2 text-sm text-white/70">Get event drops, training updates, and limited-space alerts first.</p>
            <form action="/api/newsletter" method="post" className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white"
              />
              <button type="submit" className="rounded-md bg-accent px-5 py-3 text-sm font-black text-white hover:opacity-90">
                Join Newsletter
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
