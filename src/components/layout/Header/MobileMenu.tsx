import Link from "next/link";
import {
  MEGA_MENU_MAP,
  MEGA_MENU_ORDER,
  NAV_LABELS,
} from "@/lib/navigation";
import type { MenuKey } from "@/lib/navigation";


interface Props {
  mobileNavOpen: boolean;
  openMobileMenu: MenuKey | null;
  onAccordionToggle: (key: MenuKey) => void;
  onCloseNav: () => void;
}

export function MobileMenu({
  mobileNavOpen,
  openMobileMenu,
  onAccordionToggle,
  onCloseNav,
}: Props) {
  return (
    <nav
      className="xl:hidden pb-4 pt-2"
      aria-label="Mobile primary"
    >
      <ul className="mx-auto flex w-full flex-col gap-2 px-6">
        {MEGA_MENU_ORDER.map((key) => {
          // Define top-level routes for each section
          const routes: Record<MenuKey, string> = {
            about: "/about",
            services: "/services",
            solutions: "/services",
            ourWork: "/projects",
          };

          return (
            <li key={key} className="w-full">
              <Link
                href={routes[key]}
                onClick={onCloseNav}
                className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left text-xl font-paragraph font-normal transition-all duration-300 text-cs-ink hover:bg-[#f4f8ff] hover:text-brand-default"
              >
                {NAV_LABELS[key]}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
