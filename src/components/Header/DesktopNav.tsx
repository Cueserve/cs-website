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
            openMenu === key || pathname.startsWith(NAV_HREFS[key]);
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
        <MegaMenu
          config={MEGA_MENU_MAP[openMenu]}
          isOpen={true}
          onClose={onMenuLeave}
        />
      )}
    </div>
  );
}

function navItemClass(isActive: boolean) {
  return [
    "flex h-14 items-center gap-1 border-b-2 px-3.5 text-sm font-bold transition-colors duration-150",
    isActive
      ? "border-cs-light-blue text-cs-light-blue"
      : "border-transparent text-cs-dark-blue hover:text-cs-light-blue",
  ].join(" ");
}
