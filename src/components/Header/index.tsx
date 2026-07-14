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
    <header className="fixed top-3 sm:top-4 md:top-5 left-0 right-0 z-50 w-full pointer-events-none transition-all duration-300">
      <div
        className={[
          "pointer-events-auto mx-auto w-[90%] xl:w-[82%] max-w-[1260px] rounded-full border transition-all duration-300 px-6 sm:px-9 py-2 sm:py-2.5 flex items-center justify-between shadow-md",
          scrolled
            ? "bg-white/95 border-[#cbd5e1]/80 backdrop-blur-md"
            : "bg-white/92 border-[#cbd5e1]/65 backdrop-blur-md",
        ].join(" ")}
      >
        {/* Logo — far left inside white navbar */}
        <Link
          href="/"
          aria-label="Cueserve home"
          className="shrink-0 flex items-center"
        >
          <Logo className="h-8 sm:h-9 w-auto" />
        </Link>

        {/* Center Nav Links inside white navbar */}
        <div className="hidden md:flex items-center">
          <DesktopNav
            openMenu={openMenu}
            onMenuEnter={openDesktopMenu}
            onMenuLeave={closeDesktopMenu}
          />
        </div>

        {/* Right Action Area (CTA + Mobile Hamburger) */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-cs-dark-blue px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#09355E] hover:shadow-md md:inline-flex items-center shrink-0"
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
