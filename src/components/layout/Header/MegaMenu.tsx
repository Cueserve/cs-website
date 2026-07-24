import Link from "next/link";
import type { MegaMenuConfig, MenuKey } from "@/lib/navigation";
import { DropdownPanel } from "./DropdownPanel";
import { HireDevelopersCard } from "@/components/ui/HireDevelopersCard";

interface Props {
  config: MegaMenuConfig;
  menuKey: MenuKey;
  onClose: () => void;
  onMouseEnter?: () => void;
}

export function MegaMenu({ config, menuKey, onClose, onMouseEnter }: Props) {
  return (
    <DropdownPanel
      isOpen={true}
      onClose={onClose}
      onMouseEnter={onMouseEnter}
      className={`absolute top-full right-0 z-40 mt-1.5 max-w-[calc(100vw-2rem)] overflow-hidden rounded-[14px] border border-cs-border bg-white ${menuKey === "services" ? "w-[1040px]" : "w-[920px]"}`}
      style={{
        boxShadow:
          "0 8px 32px rgba(12,56,90,0.10), 0 2px 8px rgba(12,56,90,0.06)",
      }}
    >
      {/* 3-column body */}
      <div className="flex min-h-[220px]">
        {/* Left — Showcase */}
        <div className={`border-r border-cs-border p-5 ${menuKey === "services" ? "flex-[0_0_44%]" : "flex-[0_0_38%]"}`}>
          <PanelTitle>{config.leftTitle}</PanelTitle>
          <ul className="space-y-1">
            {config.showcaseItems.map(({ Icon, title, description }) => (
              <li
                key={title}
                className="flex cursor-default items-start gap-2.5 rounded-xl p-2 hover:bg-cs-surface-tint"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#EBF4FB]">
                  <Icon className="h-4 w-4 text-cs-light-blue" />
                </div>
                <div>
                  <p className="text-xs font-bold text-cs-dark-blue">{title}</p>
                  <p className="text-[10px] leading-snug text-cs-ink-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          {menuKey === "services" && (
            <div className="mt-4">
              <HireDevelopersCard variant="full" href="/services" onClick={onClose} />
            </div>
          )}
        </div>

        {/* Center — SubMenu links */}
        <div className="flex-[0_0_28%] border-r border-cs-border p-5">
          <PanelTitle>{config.centerTitle}</PanelTitle>
          <ul className="space-y-0.5">
            {config.subMenuLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="block rounded-lg px-2 py-1.5 text-xs text-cs-ink-subtle transition-colors hover:bg-cs-surface-tint hover:text-cs-dark-blue"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Static Info */}
        <div className="flex-1 bg-cs-surface p-5">
          <PanelTitle>{config.rightTitle}</PanelTitle>
          <ul className="space-y-1.5">
            {config.staticInfoCards.map(({ heading, body, href }) => {
              const cardClass =
                "block rounded-lg border border-cs-border bg-white p-2.5 transition-colors" +
                (href ? " hover:border-cs-light-blue hover:bg-cs-surface-tint" : "");
              const content = (
                <>
                  <p className="text-[11px] font-bold text-cs-dark-blue">{heading}</p>
                  <p className="text-[10px] leading-snug text-cs-ink-muted">{body}</p>
                </>
              );
              return (
                <li key={heading}>
                  {href ? (
                    <Link href={href} onClick={onClose} className={cardClass}>
                      {content}
                    </Link>
                  ) : (
                    <div className={cardClass}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between border-t border-cs-border bg-cs-surface px-5 py-3">
        <div>
          <p className="text-[11px] font-bold text-cs-dark-blue">
            {config.footer.punchline}
          </p>
          <p className="text-[10px] text-cs-ink-muted">
            {config.footer.description}
          </p>
        </div>
        <Link
          href={config.footer.ctaHref}
          onClick={onClose}
          className="ml-4 shrink-0 rounded-md bg-cs-dark-blue px-4 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-cs-dark-blue-hover"
        >
          {config.footer.ctaLabel}
        </Link>
      </div>
    </DropdownPanel>
  );
}

function PanelTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3.5 inline-block border-b-2 border-cs-light-blue pb-2 text-[11px] font-bold text-cs-dark-blue">
      {children}
    </span>
  );
}
