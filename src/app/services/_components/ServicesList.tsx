"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  SparkIcon,
  ZapIcon,
  BarChart2Icon,
  MonitorIcon,
  ShieldIcon,
  LayersIcon,
  CheckIcon,
} from "@/components/icons/HeroIcons";

const SERVICES_DATA = [
  {
    id: "custom-software",
    label: "Custom Software",
    title: "Custom Software & Product Development",
    tagline:
      "High-performance, scalable software engineered for mission-critical enterprise scale.",
    description:
      "We build robust, full-cycle custom software solutions from scratch. Our senior delivery teams architect modular microservices, enterprise design systems, and cloud-native backends tailored to your exact business workflows.",
    capabilities: [
      "Enterprise Software Architecture",
      "Full-Stack Microservices",
      "Domain-Driven Design",
      "API & Platform Integration",
    ],
    icon: LayersIcon,
    image: "/service_items/custom_software.jpg",
  },
  {
    id: "mobile-web",
    label: "Mobile & Web Apps",
    title: "Mobile & Web Application Development",
    tagline:
      "Intuitive, blazing-fast web platforms and native mobile experiences.",
    description:
      "We architect and ship consumer-grade interfaces with enterprise-grade reliability across any technology stack. Every application is engineered for low-latency performance, high concurrency, and seamless multi-platform user engagement from day one.",
    capabilities: [
      "High-Performance Web Platforms",
      "iOS & Android Native Apps",
      "Progressive Web Apps (PWA)",
      "High-Concurrency UI/UX",
    ],
    icon: MonitorIcon,
    image: "/service_items/mobile_web.jpg",
  },
  {
    id: "legacy-modernization",
    label: "Modernization",
    title: "Legacy System Modernization & Migration",
    tagline:
      "Transforming monolithic legacy debt into agile, cloud-native microservices.",
    description:
      "We refactor outdated monolithic architectures without operational downtime. By systematically decoupling core services, migrating databases, and implementing zero-trust security, we future-proof your tech stack for rapid innovation.",
    capabilities: [
      "Monolith-to-Microservices Refactoring",
      "Zero-Downtime Cloud Migration",
      "Legacy Database Modernization",
      "Technical Debt Decoupling",
    ],
    icon: ShieldIcon,
    image: "/service_items/legacy_to_mordern.webp",
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    title: "AI-Powered Workflow & Process Automation",
    tagline:
      "Eliminating 50–70% of manual operational friction with intelligent automation.",
    description:
      "We embed custom AI pipelines directly into your daily enterprise workflows. From intelligent document processing and OCR to automated decision routing and predictive forecasting, our automation engines eliminate bottlenecks.",
    capabilities: [
      "Intelligent Document Processing",
      "Predictive Workflow Routing",
      "Automated Enterprise ETL/OCR",
      "Low-Latency Event Triggering",
    ],
    icon: ZapIcon,
    image: "/service_items/ai_ml.jpg",
  },
  {
    id: "ai-agents",
    label: "AI Agents",
    title: "AI Agent Development & Deployment",
    tagline:
      "Autonomous, role-based AI agents deployed for day-to-day business operations.",
    description:
      "Move beyond basic chatbots. We design, fine-tune, and deploy autonomous AI agents powered by custom LLMs and RAG architectures. These agents execute complex multi-step reasoning, integrate with your CRM/ERP, and operate securely within guardrails.",
    capabilities: [
      "Autonomous Multi-Agent Systems",
      "Custom LLM Fine-Tuning & RAG",
      "Enterprise ERP/CRM Integration",
      "Real-Time Governance & Guardrails",
    ],
    icon: SparkIcon,
    image: "/service_items/ai_agent_development.jpg",
  },
  {
    id: "data-engineering",
    label: "Data Analytics",
    title: "Data Engineering & Analytics Solutions",
    tagline:
      "Transforming raw pipelines into high-velocity, real-time decision engines.",
    description:
      "Data is the bedrock of modern enterprise AI. We design scalable lakehouses, real-time streaming pipelines, and automated ETL that ensure clean data, low-latency governance, and instant self-service analytics.",
    capabilities: [
      "Real-Time Streaming Pipelines",
      "Modern Data Lakehouse Design",
      "Automated ETL/ELT Integration",
      "Enterprise BI & Visualization",
    ],
    icon: BarChart2Icon,
    image: "/service_items/data_analytics.jpg",
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevSecOps",
    title: "Cloud Infrastructure & DevSecOps",
    tagline:
      "Resilient, automated, secure cloud ecosystems engineered for high availability and rapid scale.",
    description:
      "We modernize legacy infrastructure into cloud-native microservices with zero-trust security baked in from day zero. Our DevSecOps pipelines automate CI/CD and real-time security scanning, cutting deployment friction by 80%+.",
    capabilities: [
      "Multi-Cloud & Hybrid Architecture",
      "Kubernetes & Docker Orchestration",
      "Zero-Trust Security Pipelines",
      "Automated CI/CD Workflows",
    ],
    icon: ZapIcon,
    image: "/service_items/cloud_infra.webp",
  },
];

export function ServicesList() {
  const [activeId, setActiveId] = useState<string>("custom-software");
  const [parallaxOffsets, setParallaxOffsets] = useState<Record<string, number>>({});
  const [lineProgress, setLineProgress] = useState<number>(10);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const focusY = window.innerHeight * 0.38;
      let bestId = SERVICES_DATA[0].id;
      let minDistance = Infinity;
      const newOffsets: Record<string, number> = {};

      for (const service of SERVICES_DATA) {
        const el = document.getElementById(service.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const itemCenterY = rect.top + rect.height * 0.25;
          const distance = Math.abs(itemCenterY - focusY);
          if (distance < minDistance) {
            minDistance = distance;
            bestId = service.id;
          }

          // Calculate 5-10% vertical parallax shift for 3D window effect
          const viewportCenter = window.innerHeight * 0.5;
          const relativePos = (itemCenterY - viewportCenter) / window.innerHeight;
          const offset = Math.round(relativePos * 40);
          newOffsets[service.id] = Math.min(Math.max(offset, -28), 28);
        }
      }
      setActiveId(bestId);
      setParallaxOffsets(newOffsets);

      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const start = rect.top - windowHeight * 0.45;
        const total = rect.height - windowHeight * 0.2;
        const current = Math.min(Math.max(-start, 0), total);
        const pct = total > 0 ? Math.min(100, Math.max(0, (current / total) * 100)) : 0;
        setLineProgress(pct);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    const timer = setTimeout(handleScroll, 100);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const activeIndex = SERVICES_DATA.findIndex((s) => s.id === activeId);

  return (
    <section
      id="services"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-cs-light-blue) 25%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-page px-gutter">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-cs-light-blue">
            <span className="h-1.5 w-1.5 rounded-full bg-cs-light-blue" />
            Capabilities
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-cs-dark-blue md:text-5xl">
            Seven disciplines. One engineering standard.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cs-ink-muted md:text-lg max-w-[560px] mx-auto">
            Each capability is delivered by senior-heavy teams, engineered for
            production scale from day one.
          </p>
        </div>

        {/* Vertical stack */}
        <div ref={timelineRef} className="relative mt-20">
          {/* Vertical spine background track */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-16 top-0 bottom-0 hidden w-[2px] bg-cs-border/30 md:block"
          />
          {/* Active growing blue line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-16 top-0 hidden w-[2px] bg-gradient-to-b from-cs-dark-blue via-cs-light-blue to-[#2384c6] shadow-[0_0_10px_rgba(18,97,156,0.5)] transition-[height] duration-200 ease-out md:block"
            style={{ height: `${lineProgress}%` }}
          />

          <ol className="flex flex-col gap-24 md:gap-36">
            {SERVICES_DATA.map((service, index) => {
              const Icon = service.icon;
              const num = String(index + 1).padStart(2, "0");
              const isLast = index === SERVICES_DATA.length - 1;
              const isActive = activeId === service.id;
              const isCompleted = index < activeIndex;

              return (
                <li id={service.id} key={service.id} className="scroll-mt-44 relative md:pl-24">
                  {/* Spine node (desktop) */}
                  <div className="pointer-events-none absolute left-0 top-0 hidden items-center justify-between w-16 md:flex">
                    <span
                      className={`font-display tracking-tight transition-all duration-500 ${isActive
                        ? "text-3xl font-extrabold text-cs-light-blue scale-105"
                        : isCompleted
                          ? "text-2xl font-bold text-cs-dark-blue scale-100"
                          : "text-2xl font-bold text-cs-border/70 scale-100"
                        }`}
                    >
                      {num}
                    </span>
                    <span
                      className={`h-3 w-3 rounded-full transition-all duration-500 translate-x-[7px] mt-1.5 z-10 ${isActive
                        ? "bg-cs-light-blue border-2 border-white scale-125 shadow-[0_0_12px_rgba(18,97,156,0.9)]"
                        : isCompleted
                          ? "bg-cs-dark-blue border-2 border-cs-dark-blue scale-100 shadow-sm"
                          : "bg-white border-2 border-cs-border/80 scale-100"
                        }`}
                    />
                  </div>

                  <article
                    className={`group relative transition-all duration-500 ${isActive
                      ? "opacity-100 scale-100"
                      : "opacity-45 hover:opacity-90 scale-[0.985] blur-[0.2px]"
                      }`}
                  >
                    <div className="grid gap-8 md:grid-cols-[1fr_340px] items-start">
                      {/* Content */}
                      <div className="flex flex-col gap-6 py-0 pr-2 md:pr-6 max-w-[560px]">
                        <div>
                          <span className="font-mono text-xl font-bold text-cs-light-blue md:hidden block mb-1">
                            {num} //
                          </span>
                          <h3 className="font-display text-2xl font-bold leading-snug text-cs-dark-blue sm:text-3xl">
                            {service.title}
                          </h3>
                        </div>
                        <p className="font-mono text-xs tracking-wider text-cs-light-blue font-semibold">
                          {service.tagline}
                        </p>
                        <p className="text-base leading-relaxed text-cs-ink-muted">
                          {service.description}
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {service.capabilities.map((cap, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2.5 text-sm font-medium text-cs-ink"
                            >
                              <span className="flex h-4 w-4 shrink-0 items-center justify-center text-cs-light-blue">
                                <CheckIcon className="h-3 w-3" />
                              </span>
                              <span className="text-sm font-medium text-cs-ink">
                                {cap}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Visual */}
                      <div
                        className={`relative min-h-[240px] overflow-hidden rounded-2xl transition-all duration-500 md:min-h-full ${isActive
                          ? "shadow-cs-xl bg-cs-surface-dark"
                          : "shadow-cs-md bg-cs-surface-dark"
                          } group-hover:-translate-y-1 group-hover:shadow-cs-xl`}
                      >
                        <div
                          className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out group-hover:scale-105"
                          style={{
                            transform: `translateY(${parallaxOffsets[service.id] || 0}px) scale(1.15)`,
                          }}
                        >
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(min-width: 768px) 340px, 100vw"
                            className="object-cover opacity-90"
                          />
                        </div>
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(150deg, color-mix(in oklab, var(--color-cs-dark-blue) 60%, transparent) 0%, transparent 55%)",
                          }}
                        />

                        {/* Floating label */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 px-2 py-1">
                          <span className="flex h-6 w-6 items-center justify-center text-cs-light-blue-soft">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-xs font-semibold text-cs-surface drop-shadow-md">
                            {service.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
