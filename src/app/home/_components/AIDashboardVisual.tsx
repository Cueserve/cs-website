"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PersonIcon, CheckIcon, PulseIcon } from "@/components/icons/HeroIcons";

type TaskStatus = "done" | "active" | "pending";

export function AIDashboardVisual() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick((x) => (x + 1) % 3), 2200);
    return () => clearInterval(t);
  }, []);

  const tasks: { name: string; status: TaskStatus }[] = [
    { name: "Automate Invoicing", status: "done" },
    { name: "Deploy RAG Pipeline", status: tick === 0 ? "active" : "done" },
    { name: "Integrate CRM Agent", status: tick <= 1 ? "pending" : "active" },
  ];

  return (
    <div className="relative h-[460px] w-[460px] max-w-full font-primary">
      <div
        className="absolute left-1/2 top-1/2 z-[1] h-[320px] w-[320px]"
        style={{ transform: "translate(-50%, -52%)" }}
      >
        <Image
          src="/hero-illustration.svg"
          alt="AI-powered solutions illustration"
          width={398}
          height={397}
          priority
          unoptimized
          className="h-full w-full object-contain"
        />
      </div>

      {/* Floating task list (top-left) */}
      <div
        className="absolute -left-[10px] top-[30px] z-[3] min-w-[200px] rounded-2xl border border-cs-border bg-cs-bg-card p-4 shadow-cs-xl"
        style={{ animation: "var(--animate-cs-float-a)" }}
      >
        <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-cs-text-faint">
          AI Tasks
        </div>
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <TaskRow key={task.name} task={task} />
          ))}
        </div>
      </div>

      {/* Floating chatbot (top-right) */}
      <div
        className="absolute -right-[10px] top-[50px] z-[3] w-[170px] rounded-2xl border border-cs-border bg-cs-bg-card px-3.5 py-3 shadow-cs-xl"
        style={{ animation: "var(--animate-cs-float-b)" }}
      >
        <div className="mb-2.5 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-cs-light-blue" />
          <span className="font-display text-xs font-semibold text-cs-text-heading">AI Chatbot</span>
          <div className="ml-auto flex gap-[3px]">
            <div className="h-[3px] w-[3px] rounded-full bg-cs-border-strong" />
            <div className="h-[3px] w-[3px] rounded-full bg-cs-border-strong" />
            <div className="h-[3px] w-[3px] rounded-full bg-cs-border-strong" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          {[80, 60, 90, 50].map((w, i) => (
            <div
              key={i}
              className={`h-2 rounded-full ${i % 2 === 0 ? "bg-cs-bg-accent self-start" : "bg-cs-bg-page self-end"}`}
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>

      {/* Floating stat pill (bottom-left) */}
      <div
        className="absolute bottom-[120px] left-[40px] z-[3] flex items-center gap-2.5 rounded-xl bg-cs-accent px-4 py-2.5 shadow-cs-glow"
        style={{ animation: "var(--animate-cs-float-slow)" }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cs-light-blue/30">
          <PulseIcon className="h-4 w-4 text-white" />
        </div>
        <div>
          <div className="font-display text-base font-bold leading-none text-white">68%</div>
          <div className="mt-0.5 text-[10px] text-white/60">Cost Reduced</div>
        </div>
      </div>

      {/* Floating dashboard mini (bottom-right) */}
      <div
        className="absolute bottom-[100px] left-[325px] z-[3] w-[190px] rounded-2xl border border-cs-border bg-cs-bg-card px-3.5 py-3 shadow-cs-xl"
        style={{ animation: "var(--animate-cs-float-c)" }}
      >
        <div className="mb-2 h-2 w-full rounded bg-cs-accent" />
        <div className="mb-1.5 grid grid-cols-2 gap-[5px]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`rounded p-1.5 ${
                i === 0
                  ? "border border-cs-border-accent bg-cs-bg-accent"
                  : "border border-cs-border bg-cs-bg-page"
              }`}
            >
              <div
                className={`mb-1 h-[5px] rounded ${i === 0 ? "bg-cs-light-blue" : "bg-cs-border-strong"}`}
                style={{ width: "70%" }}
              />
              <div className="h-1 rounded bg-cs-border" style={{ width: "90%" }} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5 rounded bg-cs-bg-page px-2 py-1.5">
          <div className="flex flex-col gap-[3px]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-cs-light-blue" : "bg-cs-border-strong"}`}
              />
            ))}
          </div>
          <div className="flex-1">
            <div className="mb-[3px] h-1 rounded bg-cs-border-strong" style={{ width: "60%" }} />
            <div className="mb-[3px] h-1 rounded bg-cs-border" style={{ width: "80%" }} />
            <div className="h-1 rounded bg-cs-border" style={{ width: "50%" }} />
          </div>
          <div className="whitespace-nowrap text-[9px] font-semibold text-cs-light-blue">Saved</div>
        </div>
      </div>
    </div>
  );
}

function TaskRow({ task }: { task: { name: string; status: TaskStatus } }) {
  const ringColor =
    task.status === "done"
      ? "border-cs-border-accent bg-cs-bg-accent"
      : task.status === "active"
        ? "border-cs-accent bg-cs-accent"
        : "border-cs-border bg-cs-bg-page";
  const personColor =
    task.status === "active" ? "text-white" : "text-cs-text-faint";

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-[1.5px] ${ringColor}`}
      >
        <PersonIcon className={`h-3 w-3 ${personColor}`} />
      </div>
      <span
        className={`flex-1 text-xs ${
          task.status === "active" ? "font-semibold text-cs-text-heading" : "text-cs-text-muted"
        }`}
      >
        {task.name}
      </span>
      {task.status === "done" && (
        <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-cs-success">
          <CheckIcon className="h-2.5 w-2.5 text-white" />
        </div>
      )}
      {task.status === "active" && (
        <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-cs-light-blue">
          <div className="h-1.5 w-1.5 rounded-full bg-cs-bg-card" />
        </div>
      )}
      {task.status === "pending" && (
        <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-[1.5px] border-cs-border-strong bg-cs-bg-page">
          <div className="h-[5px] w-[5px] rounded-full bg-cs-text-ghost" />
        </div>
      )}
    </div>
  );
}
