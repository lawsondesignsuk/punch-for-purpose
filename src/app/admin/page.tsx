import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Admin Placeholder | Punch For Purpose",
  description: "Placeholder admin area for event management, ticket status, participant export, and payment tracking.",
};

const adminItems = ["Add and edit events", "Mark ticket inventory as sold out", "Export participant list", "Track signup and ticket payments"];

export default function AdminPage() {
  return (
    <>
      <PageHero title="Admin Placeholder" subtitle="Future dashboard structure for operations and event controls." />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl rounded-xl border border-white/10 bg-panel p-6">
          <ul className="space-y-3 text-sm text-white/80">
            {adminItems.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
