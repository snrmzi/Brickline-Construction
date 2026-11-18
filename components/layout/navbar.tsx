"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white">
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-heading text-2xl font-bold uppercase tracking-wide"
        >
          Brick<span className="text-accent">line</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 md:inline-block"
        >
          Get a Free Quote
        </Link>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="block text-2xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/90"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-accent px-4 py-3 text-center font-semibold text-white"
            >
              Get a Free Quote
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}