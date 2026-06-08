import Link from "next/link";
import { Logo } from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SERVICES = [
  "GenAI Integration",
  "Agentic AI",
  "Workflow Automation",
  "Data Systems",
  "Web & Mobile",
];

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cueserve" },
  { label: "Email", href: "mailto:hello@cueserve.com" },
];

export function Footer() {
  return (
    <footer className="bg-cs-bg-subtle px-8 pb-6 pt-14 text-cs-text-secondary border-t border-cs-border">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-9 w-auto" variant="default" />
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-cs-text-muted">
              Your AI-first technology partner — delivering real outcomes through GenAI,
              Agentic AI, and workflow automation.
            </p>
            <div className="mt-5 flex gap-4">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs text-cs-text-faint transition-colors hover:text-cs-text-heading"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn heading="Quick Links">
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cs-text-secondary transition-colors hover:text-cs-text-heading"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn heading="Services">
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-cs-text-secondary">
                  {s}
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn heading="Contact Us">
            <address className="flex flex-col gap-2.5 text-sm not-italic text-cs-text-secondary">
              <span className="leading-relaxed">
                5, Punit Colony, Sindhwaimata Road,
                <br />
                Pratapnagar, Vadodara — Gujarat
              </span>
              <a
                href="mailto:hello@cueserve.com"
                className="text-cs-light-blue hover:underline"
              >
                hello@cueserve.com
              </a>
              <a href="tel:+918000299993" className="hover:text-cs-text-heading">
                +91 80002 99993
              </a>
            </address>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cs-border pt-5 text-xs text-cs-text-faint md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Cueserve. All rights reserved.</span>
          <span className="text-cs-text-faint">Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.08em] text-cs-text-heading">
        {heading}
      </div>
      {children}
    </div>
  );
}
