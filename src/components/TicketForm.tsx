"use client";

import { FormEvent, useState } from "react";
import { events } from "@/lib/events";

type ApiResponse = {
  checkoutUrl?: string;
  message?: string;
};

export default function TicketForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/tickets", {
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
      <select name="eventId" required className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white">
        <option value="">Select Event</option>
        {events.map((event) => (
          <option key={event.id} value={event.id}>
            {event.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        min={1}
        max={10}
        name="quantity"
        required
        placeholder="Ticket quantity"
        className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white"
      />
      <input name="email" required type="email" placeholder="Email for tickets" className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white" />
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button type="submit" disabled={loading} className="rounded-md bg-accent px-6 py-3 text-sm font-black text-white hover:opacity-90 disabled:opacity-60">
        {loading ? "Processing..." : "Continue to Stripe"}
      </button>
      <p className="text-xs text-white/60">Confirmation email and QR code details are sent after payment.</p>
    </form>
  );
}
