import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How It Works | Punch For Purpose",
  description: "Learn how Punch For Purpose works from registration to fight night: training, fundraising, and event-day experience.",
};

const sections = [
  {
    title: "Section 1 – Registration",
    body: "Pay the £50 registration fee, receive gloves and gear, and secure your place in your chosen city event.",
    bullets: ["£50 fee", "Gloves and starter gear included", "Onboarding and schedule access"],
  },
  {
    title: "Section 2 – Training",
    body: "Train for 8 weeks in group sessions, guided by coaches with a safety-first structure suitable for beginners.",
    bullets: ["8-week programme", "Group sessions", "Safety-first coaching", "Beginner-friendly"],
  },
  {
    title: "Section 3 – Fundraising",
    body: "Set up a GoFundMe page, choose your charity route, and use our templates to drive donations.",
    bullets: ["GoFundMe setup", "Raise for chosen charity", "Leaderboard-ready structure"],
  },
  {
    title: "Section 4 – Fight Night",
    body: "Walkout music, lights, referee, official matchups, and a professional atmosphere in front of your supporters.",
    bullets: ["Walkout music", "Professional event production", "Referee and ringside medical support"],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero title="How It Works" subtitle="A clear path from signup to stepping through the ropes on fight night." />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-5">
          {sections.map((section) => (
            <article key={section.title} className="rounded-xl border border-white/10 bg-panel p-6">
              <h2 className="text-2xl font-black text-white">{section.title}</h2>
              <p className="mt-3 text-white/80">{section.body}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
