"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/tickets", label: "Tickets" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/sign-up", label: "Sign Up" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-black tracking-wider text-white">
          PUNCH <span className="text-accent">FOR PURPOSE</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-white/90 transition hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
          <span className="mt-1.5 block h-0.5 w-5 bg-white" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-panel p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
