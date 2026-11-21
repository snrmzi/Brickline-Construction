"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/estimate", label: "Estimate" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white">
      <nav
        className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-heading text-2xl font-bold uppercase tracking-wide"
        >
          Brick<span className="text-accent">line</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`border-b-2 pb-1 text-sm font-medium transition ${
                  isActive(l.href)
                    ? "border-accent text-white"
                    : "border-transparent text-white/75 hover:text-white"
                }`}
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
          Get a free quote
        </Link>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="block text-2xl leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`block py-3 ${
                  isActive(l.href) ? "text-accent" : "text-white/90"
                }`}
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
              Get a free quote
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
