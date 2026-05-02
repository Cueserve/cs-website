"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-cs-border transition-all duration-200",
        scrolled
          ? "bg-cs-surface/95 shadow-cs-sm backdrop-blur-md"
          : "bg-cs-surface",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-8">
        <Link href="/" className="flex items-center" aria-label="Cueserve home">
          <Logo className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "border-b-2 py-1 text-sm font-medium transition-colors duration-200",
                  active
                    ? "border-cs-light-blue text-cs-dark-blue"
                    : "border-transparent text-cs-ink-subtle hover:text-cs-dark-blue",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded bg-cs-dark-blue px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-cs-dark-blue-hover md:inline-flex"
          >
            Talk to Us
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded text-cs-dark-blue md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </>
              ) : (
                <>
                  <line x1={3} y1={6} x2={21} y2={6} />
                  <line x1={3} y1={12} x2={21} y2={12} />
                  <line x1={3} y1={18} x2={21} y2={18} />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-cs-border bg-cs-surface md:hidden"
          aria-label="Mobile primary"
        >
          <ul className="mx-auto flex max-w-[1200px] flex-col gap-1 px-8 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "block rounded px-2 py-2 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-cs-surface-tint text-cs-dark-blue"
                      : "text-cs-ink-subtle hover:bg-cs-surface-tint hover:text-cs-dark-blue",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded bg-cs-dark-blue px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Talk to Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
