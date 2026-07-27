"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRightIcon, CheckIcon, SendIcon } from "@/components/icons/HeroIcons";

type Feature = {
  id: string;
  tab: string;
  title: string;
  desc: string;
  bullets: string[];
  tag: string;
};

const FEATURES: Feature[] = [
  {
    id: "genai",
    tab: "GenAI",
    title: "Large Language Model Integration",
    desc: "Embed production-grade AI directly into your products and workflows — with custom fine-tuning, retrieval-augmented generation, and enterprise guardrails built in.",
    bullets: [
      "Custom LLM fine-tuning on your domain data",
      "RAG pipelines for accurate, grounded responses",
      "Enterprise guardrails & compliance controls",
      "Streaming APIs, embeddings & vector search",
    ],
    tag: "GenAI Integration",
  },
  {
    id: "agentic",
    tab: "Agentic AI",
    title: "Autonomous Agents for Complex Tasks",
    desc: "Deploy AI agents that reason, plan, and execute multi-step tasks independently — from research and code generation to data operations and decision-making.",
    bullets: [
      "Multi-agent orchestration frameworks",
      "Tool-use: browse, search, write, execute code",
      "Human-in-the-loop checkpoints",
      "Observability, logging & rollback controls",
    ],
    tag: "Agentic AI",
  },
  {
    id: "automation",
    tab: "Automation",
    title: "End-to-End Workflow Automation",
    desc: "Connect your systems, eliminate manual bottlenecks, and unlock measurable efficiency gains with AI-driven process automation built for your specific operations.",
    bullets: [
      "Process mapping & intelligent trigger design",
      "Cross-system API integrations",
      "Automated exception handling & escalation",
      "Real-time monitoring dashboards",
    ],
    tag: "Workflow Automation",
  },
  {
    id: "data",
    tab: "Data Systems",
    title: "Analytics, Dashboards & Intelligence",
    desc: "Turn raw data into decisions. We build analytics pipelines, operational dashboards, and intelligence layers that scale with your business and surface what matters.",
    bullets: [
      "Data warehouse design & ETL pipelines",
      "Real-time analytics & BI dashboards",
      "Predictive models & anomaly detection",
      "Self-serve reporting for non-technical teams",
    ],
    tag: "Data Systems",
  },
  {
    id: "web",
    tab: "Web & Mobile",
    title: "Modern Web & Mobile Applications",
    desc: "From marketing sites to full SaaS products and cross-platform mobile apps — clean code, great UX, and ongoing maintenance support baked in from day one.",
    bullets: [
      "Responsive web apps & marketing sites",
      "Cross-platform mobile (React Native / Flutter)",
      "Performance-first architecture",
      "24×7 maintenance & iteration support",
    ],
    tag: "Web & Mobile",
  },
];

export function FeaturesSection() {
  const [active, setActive] = useState(0);
  const f = FEATURES[active];

  return (
    <section className="bg-cs-surface-tint px-8 py-24">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-12 text-center">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-cs-light-blue">
            What We Do
          </div>
          <h2 className="mb-3.5 font-display text-4xl font-bold tracking-[-0.025em] text-cs-dark-blue">
            One Partner. Every AI Need.
          </h2>
          <p className="mx-auto max-w-[520px] text-[17px] leading-[1.65] text-cs-ink-muted">
            From language models to agentic pipelines to the web product people use — we ship it all.
          </p>
        </header>

        <div className="mx-auto mb-10 flex w-fit flex-wrap justify-center gap-1.5 rounded-xl border border-cs-border bg-white p-1.5 shadow-cs-sm">
          {FEATURES.map((feat, i) => (
            <button
              key={feat.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={[
                "rounded-lg px-5 py-2.5 text-sm font-medium transition-colors",
                active === i
                  ? "bg-cs-dark-blue text-white"
                  : "bg-transparent text-cs-ink-muted hover:text-cs-dark-blue",
              ].join(" ")}
            >
              {feat.tab}
            </button>
          ))}
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-cs-border bg-white shadow-cs-lg lg:grid-cols-2">
          <div className="border-b border-cs-border p-10 lg:border-b-0 lg:border-r lg:px-11 lg:py-12">
            <span className="mb-4 inline-block rounded bg-cs-surface-accent px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em] text-cs-light-blue">
              {f.tag}
            </span>
            <h3 className="mb-4 font-display text-[26px] font-bold leading-[1.25] tracking-[-0.02em] text-cs-dark-blue">
              {f.title}
            </h3>
            <p className="mb-7 text-base leading-[1.7] text-cs-ink-muted">
              {f.desc}
            </p>
            <ul className="flex flex-col gap-3">
              {f.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-cs-border-accent bg-cs-surface-accent">
                    <CheckIcon className="h-2.5 w-2.5 text-cs-light-blue" />
                  </span>
                  <span className="text-sm leading-[1.55] text-cs-ink">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1.5 rounded-md bg-cs-dark-blue px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-cs-dark-blue-hover"
            >
              Start a Project
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="flex items-center justify-center bg-cs-surface-subtle p-10 lg:px-11 lg:py-12">
            <div className="w-full max-w-[380px]">
              <FeatureVisual id={f.id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ id }: { id: string }) {
  switch (id) {
    case "genai":
      return <GenAIVisual />;
    case "agentic":
      return <AgenticVisual />;
    case "automation":
      return <AutomationVisual />;
    case "data":
      return <DataVisual />;
    case "web":
      return <WebVisual />;
    default:
      return null;
  }
}

function VisualShell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-cs-border bg-cs-surface-tint p-5">
      <div className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-cs-ink-faint">
        {label}
      </div>
      {children}
    </div>
  );
}

function GenAIVisual() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 4), 1600);
    return () => clearInterval(t);
  }, []);

  const msgs: { role: "user" | "ai"; text: string }[] = [
    { role: "user", text: "Summarise Q3 revenue by region" },
    { role: "ai", text: "Analysing your data warehouse…" },
    { role: "ai", text: "APAC: ₹4.2Cr ↑18% | EU: €1.8M ↑6% | US: $3.1M ↑22%" },
    { role: "user", text: "Which region needs attention?" },
  ];

  return (
    <VisualShell label="AI Chat Interface">
      <div className="flex flex-col gap-2.5">
        {msgs.slice(0, step + 1).map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={[
                "max-w-[80%] px-3 py-2 text-xs leading-[1.5]",
                m.role === "user"
                  ? "rounded-[12px_12px_2px_12px] bg-cs-dark-blue text-white"
                  : "rounded-[12px_12px_12px_2px] border border-cs-border bg-white text-cs-ink shadow-cs-sm",
              ].join(" ")}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <div className="flex-1 rounded-lg border border-cs-border-strong bg-white px-3 py-2 text-xs text-cs-ink-trace">
          Ask anything about your data…
        </div>
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-cs-light-blue">
          <SendIcon className="h-3.5 w-3.5 text-white" />
        </div>
      </div>
    </VisualShell>
  );
}

function AgenticVisual() {
  type Node = { label: string; x: number; y: number; main?: boolean; out?: boolean };
  const nodes: Node[] = [
    { label: "Orchestrator", x: 50, y: 10, main: true },
    { label: "Research Agent", x: 10, y: 55 },
    { label: "Code Agent", x: 50, y: 55 },
    { label: "Data Agent", x: 90, y: 55 },
    { label: "Output", x: 50, y: 90, out: true },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
    [2, 4],
    [3, 4],
  ];

  return (
    <VisualShell label="Agent Topology">
      <div className="relative h-[180px]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {edges.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y + 5}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="var(--color-cs-border-strong)"
              strokeWidth={0.8}
              strokeDasharray="2,2"
            />
          ))}
        </svg>
        {nodes.map((n) => (
          <div
            key={n.label}
            className={[
              "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg px-2.5 py-1 text-[11px] font-semibold shadow-cs-sm",
              n.main
                ? "border-[1.5px] border-cs-dark-blue bg-cs-dark-blue text-white"
                : n.out
                  ? "border-[1.5px] border-cs-success bg-cs-success text-white"
                  : "border-[1.5px] border-cs-border-strong bg-white text-cs-ink",
            ].join(" ")}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            {n.label}
          </div>
        ))}
      </div>
    </VisualShell>
  );
}

function AutomationVisual() {
  const steps = ["Trigger", "Validate", "Transform", "Route", "Notify"];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 1200);
    return () => clearInterval(t);
  }, [steps.length]);

  return (
    <VisualShell label="Workflow Pipeline">
      <div className="mb-5 flex items-center">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <div className="flex flex-1 flex-col items-center gap-1.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
                  i <= active ? "bg-cs-dark-blue" : "bg-cs-border"
                }`}
              >
                {i < active ? (
                  <CheckIcon className="h-3.5 w-3.5 text-white" />
                ) : (
                  <div
                    className={`h-2 w-2 rounded-full ${
                      i === active ? "bg-cs-light-blue" : "bg-cs-ink-trace"
                    }`}
                  />
                )}
              </div>
              <span
                className={`text-center text-[10px] ${
                  i === active
                    ? "font-semibold text-cs-dark-blue"
                    : i < active
                      ? "text-cs-dark-blue"
                      : "text-cs-ink-faint"
                }`}
              >
                {s}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mb-5 h-px flex-[0.4] transition-colors duration-300 ${
                  i < active ? "bg-cs-dark-blue" : "bg-cs-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-cs-border bg-white px-3.5 py-3">
        <div className="mb-1 text-xs font-semibold text-cs-light-blue">
          Processing: {steps[active]}
        </div>
        <div className="text-xs text-cs-ink-faint">
          12,840 records handled · 0 errors · avg 1.2ms/record
        </div>
      </div>
    </VisualShell>
  );
}

function DataVisual() {
  const bars = [42, 68, 55, 80, 63, 90, 74];
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const highlight = 5;

  return (
    <div className="rounded-xl border border-cs-border bg-cs-surface-tint p-5">
      <div className="mb-3.5 flex items-center justify-between">
        <div className="text-[11px] font-semibold uppercase tracking-[0.07em] text-cs-ink-faint">
          Weekly Performance
        </div>
        <div className="text-xs font-semibold text-cs-success">↑ 18.4%</div>
      </div>
      <div className="mb-2 flex h-[90px] items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex h-full flex-1 flex-col items-center justify-end">
            <div
              className={`w-full rounded-t-[3px] transition-[height] duration-500 ${
                i === highlight ? "bg-cs-light-blue" : "bg-cs-border-strong"
              }`}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-1.5">
        {labels.map((l, i) => (
          <div
            key={l}
            className={`flex-1 text-center text-[10px] ${
              i === highlight ? "font-semibold text-cs-light-blue" : "text-cs-ink-trace"
            }`}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="overflow-hidden rounded-xl border border-cs-border bg-cs-surface-tint">
      <div className="flex items-center gap-2 bg-cs-border px-3 py-2">
        <div className="flex gap-1.5">
          {[
            "var(--color-cs-error)",
            "var(--color-cs-warning)",
            "var(--color-cs-success)",
          ].map((c) => (
            <div key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />
          ))}
        </div>
        <div className="flex-1 rounded bg-white px-2 py-0.5 text-[11px] text-cs-ink-trace">
          https://yourproduct.app
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2.5 flex items-center justify-between rounded-md bg-cs-dark-blue px-3.5 py-2.5">
          <div className="h-1.5 w-12 rounded bg-white/40" />
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-1.5 w-6 rounded bg-white/25" />
            ))}
          </div>
          <div className="rounded bg-cs-light-blue px-2.5 py-1 text-[10px] font-semibold text-white">
            Get Started
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-cs-border bg-white p-2.5">
              <div className="mb-1.5 h-1 rounded bg-cs-border-strong" style={{ width: "60%" }} />
              <div className="mb-1 h-1 rounded bg-cs-border" style={{ width: "80%" }} />
              <div className="h-1 rounded bg-cs-border" style={{ width: "50%" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
