"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useHeaderState } from "./useHeaderState";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const {
    scrolled,
    mobileNavOpen,
    openMenu,
    openMobileMenu,
    openDesktopMenu,
    closeDesktopMenu,
    toggleMobileNav,
    closeMobileNav,
    toggleMobileAccordion,
  } = useHeaderState();

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-cs-border transition-all duration-200",
        scrolled
          ? "bg-cs-bg-card/95 shadow-cs-sm backdrop-blur-md"
          : "bg-cs-bg-card",
      ].join(" ")}
    >
      <div className="flex h-14 w-full items-center px-8">
        {/* Logo — far left */}
        <Link href="/" aria-label="Cueserve home">
          <Logo className="h-9 w-auto" />
        </Link>

        {/* Spacer pushes nav + CTA to the right */}
        <div className="flex-1" />

        {/* Desktop nav — hidden on mobile */}
        <DesktopNav
          openMenu={openMenu}
          onMenuEnter={openDesktopMenu}
          onMenuLeave={closeDesktopMenu}
        />

        {/* Theme Toggle */}
        <div className="ml-5 flex items-center">
          <ThemeToggle />
        </div>

        {/* CTA — desktop only, far right */}
        <Link
          href="/contact"
          className="ml-5 hidden rounded bg-cs-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-cs-accent-hover md:inline-flex"
        >
          Talk to Us
        </Link>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileNavOpen}
          onClick={toggleMobileNav}
          className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded text-cs-text-heading md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            {mobileNavOpen ? (
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

      {/* Mobile accordion nav */}
      <MobileMenu
        mobileNavOpen={mobileNavOpen}
        openMobileMenu={openMobileMenu}
        onAccordionToggle={toggleMobileAccordion}
        onCloseNav={closeMobileNav}
      />
    </header>
  );
}
