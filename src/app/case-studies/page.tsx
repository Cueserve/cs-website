export { metadata } from "./metadata";

export default function CaseStudiesIndexPage() {
  return (
    <main className="flex-1 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-6xl tracking-wide text-cs-text-heading">
          CASE STUDIES
        </h1>
        <p className="mt-4 text-cs-text-heading/70">
          Studies will appear here once MDX content lands in <code>src/content/case-studies/</code>.
        </p>
      </div>
    </main>
  );
}
