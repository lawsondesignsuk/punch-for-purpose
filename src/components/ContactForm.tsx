export default function ContactForm() {
  return (
    <form action="/api/contact" method="post" className="grid gap-4 rounded-xl border border-white/10 bg-panel p-6">
      <h3 className="text-xl font-black text-white">Contact Us</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white placeholder:text-white/50"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white placeholder:text-white/50"
        />
      </div>
      <textarea
        name="message"
        required
        placeholder="How can we help?"
        rows={4}
        className="rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white placeholder:text-white/50"
      />
      <button type="submit" className="w-full rounded-md bg-accent px-6 py-3 text-sm font-black text-white hover:opacity-90 sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
