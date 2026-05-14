"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { MenuKey } from "@/lib/navigation";

export interface HeaderState {
  scrolled: boolean;
  mobileNavOpen: boolean;
  openMenu: MenuKey | null;
  openMobileMenu: MenuKey | null;
  openDesktopMenu: (key: MenuKey) => void;
  closeDesktopMenu: () => void;
  toggleMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileAccordion: (key: MenuKey) => void;
}

export function useHeaderState(): HeaderState {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<MenuKey | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openDesktopMenu = useCallback((key: MenuKey) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenMenu(key);
  }, []);

  const closeDesktopMenu = useCallback(() => {
    closeTimerRef.current = setTimeout(() => setOpenMenu(null), 80);
  }, []);

  const toggleMobileNav = useCallback(() => setMobileNavOpen((o) => !o), []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
    setOpenMobileMenu(null);
  }, []);

  const toggleMobileAccordion = useCallback((key: MenuKey) => {
    setOpenMobileMenu((prev) => (prev === key ? null : key));
  }, []);

  return {
    scrolled,
    mobileNavOpen,
    openMenu,
    openMobileMenu,
    openDesktopMenu,
    closeDesktopMenu,
    toggleMobileNav,
    closeMobileNav,
    toggleMobileAccordion,
  };
}
