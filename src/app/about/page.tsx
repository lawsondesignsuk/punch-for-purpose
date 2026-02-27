import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Punch For Purpose",
  description: "Discover the mission behind Punch For Purpose and how charity-focused boxing events transform lives and communities.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Punch For Purpose" subtitle="Built to challenge people, raise funds, and create meaningful local impact." />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-6">
          <article className="rounded-xl border border-white/10 bg-panel p-6">
            <h2 className="text-2xl font-black text-white">Mission</h2>
            <p className="mt-3 text-white/80">Punch For Purpose helps everyday people train like fighters, raise money for charity, and experience the confidence that comes from doing something hard for a bigger reason.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-panel p-6">
            <h2 className="text-2xl font-black text-white">Founders & Story</h2>
            <p className="mt-3 text-white/80">The brand was created to blend elite fight coaching with measurable social impact, building city-by-city events that put charity and community at the center of the experience.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-panel p-6">
            <h2 className="text-2xl font-black text-white">Long-Term Vision</h2>
            <p className="mt-3 text-white/80">Scale to multiple UK cities, add charity partners by event, launch fighter profiles, sponsorships, merchandise, and performance-led fundraising leaderboards.</p>
          </article>
        </Container>
      </section>
    </>
  );
}
