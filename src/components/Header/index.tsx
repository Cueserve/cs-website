"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { RollingButton } from "@/components/RollingButton";
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
    <header className="fixed top-2 sm:top-3 xl:top-[clamp(0.75rem,2vh,1.25rem)] left-0 right-0 z-50 w-full pointer-events-none transition-all duration-300">
      <div
        className={[
          "pointer-events-auto mx-auto w-[90%] xl:w-[82%] max-w-[1260px] rounded-full border border-[#D1E0FF] transition-all duration-300 pl-6 pr-[10px] py-2 sm:py-2.5 xl:py-[clamp(0.5rem,1.2vh,0.625rem)] flex items-center justify-between shadow-md",
          scrolled
            ? "bg-white/95 backdrop-blur-md"
            : "bg-white/92 backdrop-blur-md",
        ].join(" ")}
      >
        {/* Logo — far left inside white navbar */}
        <Link
          href="/"
          aria-label="Cueserve home"
          className="shrink-0 flex items-center"
        >
          <Logo className="h-[24px] w-auto" />
        </Link>

        {/* Center Nav Links inside white navbar */}
        <div className="hidden xl:flex items-center">
          <DesktopNav
            openMenu={openMenu}
            onMenuEnter={openDesktopMenu}
            onMenuLeave={closeDesktopMenu}
          />
        </div>

        {/* Right Action Area (CTA + Mobile Hamburger) */}
        <div className="flex items-center gap-3">
          <RollingButton
            variant="primary"
            text="Contact Us"
            href="/contact"
            className="hidden xl:inline-flex shrink-0 !py-1 !pl-5 !pr-1"
          />

          {/* Hamburger — mobile and tablet (< 1280px) */}
          <button
            type="button"
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileNavOpen}
            onClick={toggleMobileNav}
            className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded text-neutral-900 xl:hidden"
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
