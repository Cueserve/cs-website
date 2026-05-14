import Link from "next/link";
import {
  MEGA_MENU_MAP,
  MEGA_MENU_ORDER,
  NAV_LABELS,
} from "@/lib/navigation";
import type { MenuKey } from "@/lib/navigation";
import { ChevronDownIcon } from "@/components/icons/HeroIcons";

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
  if (!mobileNavOpen) return null;

  return (
    <nav
      className="border-t border-cs-border bg-cs-surface md:hidden"
      aria-label="Mobile primary"
    >
      <ul className="mx-auto flex max-w-[1200px] flex-col gap-1 px-8 py-4">
        {MEGA_MENU_ORDER.map((key) => {
          const isOpen = openMobileMenu === key;
          const { subMenuLinks } = MEGA_MENU_MAP[key];
          return (
            <li key={key} className="space-y-1">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => onAccordionToggle(key)}
                className={[
                  "flex w-full items-center justify-between rounded px-2 py-2 text-left text-sm font-medium transition-colors",
                  isOpen
                    ? "bg-cs-surface-tint text-cs-dark-blue"
                    : "text-cs-ink-subtle hover:bg-cs-surface-tint hover:text-cs-dark-blue",
                ].join(" ")}
              >
                {NAV_LABELS[key]}
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <ul className="space-y-0.5 rounded-3xl border border-cs-border bg-white p-3">
                  {subMenuLinks.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        onClick={onCloseNav}
                        className="block rounded-2xl px-3 py-2 text-sm text-cs-ink-subtle transition-colors hover:bg-cs-surface-tint hover:text-cs-dark-blue"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}

        <li className="pt-2">
          <Link
            href="/contact"
            onClick={onCloseNav}
            className="block w-full rounded bg-cs-dark-blue px-4 py-2.5 text-center text-sm font-medium text-white"
          >
            Talk to Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
