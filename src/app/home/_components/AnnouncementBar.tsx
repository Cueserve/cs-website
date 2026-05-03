import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="border-b border-cs-border-accent bg-cs-surface-accent py-2.5 text-center text-sm font-medium text-cs-ink">
      ✦&nbsp;&nbsp;Now accepting AI transformation engagements&nbsp;&nbsp;
      <Link
        href="/contact"
        className="font-semibold text-cs-light-blue underline underline-offset-2 hover:text-cs-light-blue-hover"
      >
        Book a free call →
      </Link>
    </div>
  );
}
