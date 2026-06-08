const CLIENTS = [
  "Supermechanic",
  "SchoolSaamaan",
  "Apollon",
  "SuperSmart",
  "Yelow",
  "Fizyou",
  "NewChapter",
  "HobbyDistrict",
];

export function ClientsStrip() {
  return (
    <section className="border-y border-cs-border bg-cs-bg-card px-8 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-10 gap-y-4">
        <div className="shrink-0 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.09em] text-cs-text-faint">
          Trusted By
        </div>
        <div className="hidden h-7 w-px bg-cs-border md:block" />
        <div className="flex flex-wrap items-center gap-x-9 gap-y-3">
          {CLIENTS.map((c) => (
            <span
              key={c}
              className="font-display text-sm font-semibold tracking-tight text-cs-text-ghost"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
