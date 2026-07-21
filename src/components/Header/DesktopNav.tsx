"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MEGA_MENU_MAP,
  MEGA_MENU_ORDER,
  NAV_LABELS,
  NAV_HREFS,
} from "@/lib/navigation";
import type { MenuKey } from "@/lib/navigation";
import { ChevronDownIcon } from "@/components/icons/HeroIcons";
import { MegaMenu } from "./MegaMenu";

interface Props {
  openMenu: MenuKey | null;
  onMenuEnter: (key: MenuKey) => void;
  onMenuLeave: () => void;
}

export function DesktopNav({ openMenu, onMenuEnter, onMenuLeave }: Props) {
  const pathname = usePathname();

  return (
    <div
      className="relative hidden md:block"
      onMouseLeave={onMenuLeave}
    >
      <nav className="flex items-center" aria-label="Primary">
        {MEGA_MENU_ORDER.map((key) => {
          const isActive =
            openMenu === key ||
            pathname === NAV_HREFS[key] ||
            pathname.startsWith(NAV_HREFS[key] + "/");
          return (
            <div key={key} onMouseEnter={() => onMenuEnter(key)}>
              <Link
                href={NAV_HREFS[key]}
                aria-haspopup="true"
                aria-expanded={openMenu === key}
                className={navItemClass(isActive)}
              >
                {NAV_LABELS[key]}
                <ChevronDownIcon
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    openMenu === key ? "rotate-180" : ""
                  }`}
                />
              </Link>
            </div>
          );
        })}
      </nav>

      {openMenu && (
        <>
          {/* Transparent bridge fills the mt-1.5 gap so mouseleave doesn't fire mid-transit */}
          <div
            className="absolute left-0 right-0 top-full z-40 h-1.5"
            onMouseEnter={() => onMenuEnter(openMenu)}
            aria-hidden="true"
          />
          <MegaMenu
            config={MEGA_MENU_MAP[openMenu]}
            menuKey={openMenu}
            onClose={onMenuLeave}
            onMouseEnter={() => onMenuEnter(openMenu)}
          />
        </>
      )}
    </div>
  );
}

function navItemClass(isActive: boolean) {
  return [
    "flex h-10 items-center gap-1.5 border-b-2 px-3.5 text-nav transition-colors duration-150",
    isActive
      ? "border-cs-light-blue text-cs-light-blue font-medium"
      : "border-transparent text-cs-dark-blue hover:text-cs-light-blue",
  ].join(" ");
}
