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

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="relative hidden md:block">
      <nav className="flex items-center" aria-label="Primary">
        {MEGA_MENU_ORDER.map((key) => {
          const isActive =
            pathname === NAV_HREFS[key] ||
            pathname.startsWith(NAV_HREFS[key] + "/");
          return (
            <div key={key}>
              <Link
                href={NAV_HREFS[key]}
                className={navItemClass(isActive)}
              >
                {NAV_LABELS[key]}
              </Link>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

function navItemClass(isActive: boolean) {
  return [
    "flex h-10 items-center gap-1.5 border-b-2 px-3.5 text-nav transition-colors duration-150",
    isActive
      ? "border-brand-default text-brand-default font-medium"
      : "border-transparent text-neutral-900 hover:text-brand-default",
  ].join(" ");
}
