import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="border-b border-cs-border bg-cs-bg-accent py-2.5 text-center text-sm font-medium text-cs-text-heading">
      ✦&nbsp;&nbsp;Now accepting AI transformation engagements&nbsp;&nbsp;
      <Link
        href="/contact"
        className="font-semibold text-cs-accent underline underline-offset-2 hover:text-cs-accent-hover"
      >
        Book a free call →
      </Link>
    </div>
  );
}
