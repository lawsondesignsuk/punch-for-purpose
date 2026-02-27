import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ | Punch For Purpose",
  description: "Frequently asked questions about training, safety, fundraising, and fight-night operations.",
};

const faqs = [
  {
    q: "Do I need boxing experience?",
    a: "No. The training programme is designed for beginners and progressively builds skill and confidence.",
  },
  {
    q: "Is it safe?",
    a: "Yes. Coaching is safety-first, medical protocols are in place, and event-day support includes trained professionals.",
  },
  {
    q: "What if I cannot raise money?",
    a: "You get fundraising templates, guidance, and support to increase your chances of hitting your target.",
  },
  {
    q: "How are opponents matched?",
    a: "Fighters are matched based on weight class, ability, and coach assessment.",
  },
  {
    q: "Is medical support provided?",
    a: "Yes. Ringside medics and event-day medical checks are part of our standard event setup.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know before you commit to fight night." />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-white/10 bg-panel p-5">
                <summary className="cursor-pointer text-base font-black text-white">{faq.q}</summary>
                <p className="mt-3 text-sm text-white/75">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
