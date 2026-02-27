import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SignUpForm from "@/components/SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up | Punch For Purpose",
  description: "Register for Punch For Purpose, complete your £50 signup, and start your 8-week charity boxing journey.",
};

export default function SignUpPage() {
  return (
    <>
      <PageHero title="Sign Up" subtitle="Pay £50, claim your gear, and begin your 8-week transformation." />
      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="mb-5 rounded-lg border border-accent/40 bg-accent/10 p-4 text-sm text-white">Limited spaces available for upcoming city events.</div>
          <SignUpForm />
        </Container>
      </section>
    </>
  );
}
