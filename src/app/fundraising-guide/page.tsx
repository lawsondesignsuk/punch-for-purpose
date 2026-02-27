import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Fundraising Guide | Punch For Purpose",
  description: "Get started with your Punch For Purpose fundraising strategy and launch your GoFundMe campaign.",
};

export default function FundraisingGuidePage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl rounded-2xl border border-white/10 bg-panel p-8 text-center">
        <h1 className="font-[var(--font-oswald)] text-4xl font-black uppercase text-white">You Are In. Let’s Raise Big.</h1>
        <p className="mt-4 text-white/80">Next step: launch your GoFundMe, share your story, and build momentum with our templates and promo scripts.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="https://www.gofundme.com" target="_blank" rel="noreferrer" className="rounded-md bg-accent px-6 py-3 text-sm font-black text-white hover:opacity-90">
            Start GoFundMe
          </a>
          <Link href="/events" className="rounded-md border border-white/25 px-6 py-3 text-sm font-black text-white hover:border-accent hover:text-accent">
            View Events
          </Link>
        </div>
      </Container>
    </section>
  );
}
