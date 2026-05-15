"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { useHeaderState } from "./useHeaderState";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

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
        "sticky top-0 z-50 border-b border-cs-border transition-all duration-500",
        scrolled
          ? "bg-cs-surface/80 shadow-cs-md backdrop-blur-xl"
          : "bg-cs-surface/40 backdrop-blur-lg",
      ].join(" ")}
    >
      <div className="mx-auto flex h-14 max-w-[1270px] items-center px-8">
        {/* Logo — far left */}
        <Link href="/" aria-label="Cueserve home">
          <Logo className="h-7 w-auto" />
        </Link>

        {/* Spacer pushes nav + CTA to the right */}
        <div className="flex-1" />

        {/* Desktop nav — hidden on mobile */}
        <DesktopNav
          openMenu={openMenu}
          onMenuEnter={openDesktopMenu}
          onMenuLeave={closeDesktopMenu}
        />

        {/* CTA — desktop only, far right */}
        <Link
          href="/contact"
          className="ml-5 hidden rounded bg-cs-dark-blue px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-cs-dark-blue-hover md:inline-flex"
        >
          Talk to Us
        </Link>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileNavOpen}
          onClick={toggleMobileNav}
          className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded text-cs-dark-blue md:hidden"
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
