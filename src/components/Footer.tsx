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
    <footer className="bg-cs-surface-dark px-8 pb-12 pt-20 sm:pt-24 sm:pb-14 text-white/60">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 md:grid-cols-[2.2fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="h-9 w-auto" variant="inverse" />
            <p className="mt-4 max-w-[290px] text-sm leading-relaxed text-white/55 font-normal">
              Your AI-first technology partner — delivering real outcomes through GenAI,
              Agentic AI, and workflow automation.
            </p>
            <div className="mt-6 flex gap-5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs font-medium text-white/50 transition-all duration-200 hover:text-cs-light-blue hover:translate-x-0.5 inline-block"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn heading="Quick Links">
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="inline-block text-sm text-white/60 transition-all duration-200 hover:text-cs-light-blue hover:translate-x-0.5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn heading="Services">
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-white/60 transition-all duration-200 hover:text-white/80 hover:translate-x-0.5 cursor-default inline-block">
                  {s}
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn heading="Contact Us">
            <address className="flex flex-col gap-3 text-sm not-italic text-white/60">
              <span className="leading-relaxed">
                5, Punit Colony, Sindhwaimata Road,
                <br />
                Pratapnagar, Vadodara — Gujarat
              </span>
              <div>
                <a
                  href="mailto:hello@cueserve.com"
                  className="inline-block text-cs-light-blue transition-all duration-200 hover:text-white hover:translate-x-0.5"
                >
                  hello@cueserve.com
                </a>
              </div>
              <div>
                <a href="tel:+918000299993" className="inline-block text-white/60 transition-all duration-200 hover:text-white hover:translate-x-0.5">
                  +91 80002 99993
                </a>
              </div>
            </address>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Cueserve. All rights reserved.</span>
          <span className="text-white/30">Privacy Policy · Terms of Service</span>
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
      <div className="mb-4 font-display text-xs font-bold uppercase tracking-[0.1em] text-white">
        {heading}
      </div>
      {children}
    </div>
  );
}
