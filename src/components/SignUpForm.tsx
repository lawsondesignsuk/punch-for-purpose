"use client";

import { FormEvent, useState } from "react";

type ApiResponse = {
  checkoutUrl?: string;
  message?: string;
};

export default function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as ApiResponse;
      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.message || "Unable to continue to payment.");
      }
      window.location.href = data.checkoutUrl;
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-xl border border-white/10 bg-panel p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="fullName" required placeholder="Full Name" className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white" />
        <input name="email" required type="email" placeholder="Email" className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="phone" required placeholder="Phone" className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white" />
        <input name="city" required placeholder="City" className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white" />
      </div>
      <input
        name="fitnessExperience"
        required
        placeholder="Fitness experience"
        className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white"
      />
      <textarea
        name="whyJoin"
        required
        rows={3}
        placeholder="Why do you want to join?"
        className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white"
      />
      <input
        name="emergencyContact"
        required
        placeholder="Emergency contact"
        className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white"
      />
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button type="submit" disabled={loading} className="rounded-md bg-accent px-6 py-3 text-sm font-black text-white hover:opacity-90 disabled:opacity-60">
        {loading ? "Processing..." : "Pay £50 & Continue"}
      </button>
      <p className="text-xs text-white/60">You will receive a confirmation email and fundraising setup guidance after checkout.</p>
    </form>
  );
}
