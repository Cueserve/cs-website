"use client";

import Image from "next/image";
import {
  SparkIcon,
  ZapIcon,
  BarChart2Icon,
  MonitorIcon,
  ShieldIcon,
  LayersIcon,
  ArrowRightIcon,
  CheckIcon,
} from "@/components/icons/HeroIcons";

const SERVICES_DATA = [
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    tagline: "Building autonomous systems and predictive models that surpass traditional software capabilities.",
    description:
      "We develop next-generation AI-native architectures tailored for complex enterprise workflows. From custom Large Language Model (LLM) fine-tuning and retrieval-augmented generation (RAG) to predictive data analytics, our AI solutions eliminate manual bottlenecks and unlock actionable business intelligence.",
    capabilities: ["Custom LLMs & RAG Engines", "Predictive Analytics & Forecasting", "Computer Vision & Processing", "Conversational AI & NLP"],
    icon: SparkIcon,
    image: "/service_items/ai_ml.avif",
    gradient: "from-[#0c385a] via-[#12619c] to-[#2384c6]",
    accentBg: "bg-[#f0f8ff]",
    borderColor: "border-[#bce2f7]",
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure & DevSecOps",
    tagline: "Resilient, automated, and secure cloud ecosystems engineered for high availability and rapid scaling.",
    description:
      "We modernize legacy infrastructures into cloud-native microservices with zero-trust security baked in from day zero. Our DevSecOps pipelines automate continuous delivery, continuous integration, and real-time security scanning, reducing deployment friction by over 80%.",
    capabilities: ["Multi-Cloud & Hybrid Architecture", "Kubernetes & Docker Orchestration", "Zero-Trust Security Pipelines", "Automated CI/CD Workflows"],
    icon: ZapIcon,
    image: "/service_items/cloud_infra.jpg",
    gradient: "from-[#12619c] via-[#2384c6] to-[#63bceb]",
    accentBg: "bg-[#f4fafc]",
    borderColor: "border-[#cce9fa]",
  },
  {
    id: "data-engineering",
    title: "Data Analytics & Engineering",
    tagline: "Transforming raw data pipelines into high-velocity, real-time decision-making engines.",
    description:
      "Data is the foundational bedrock of modern enterprise AI. We design scalable data lakehouses, real-time streaming pipelines, and automated ETL workflows that ensure data cleanliness, low-latency governance, and instant self-service analytics across your entire organization.",
    capabilities: ["Real-Time Streaming Pipelines", "Modern Data Lakehouse Design", "Automated ETL/ELT Integration", "Enterprise BI & Visualizations"],
    icon: BarChart2Icon,
    image: "/service_items/data_analytics.webp",
    gradient: "from-[#0c385a] via-[#1e71b1] to-[#63bceb]",
    accentBg: "bg-[#ebf4fb]",
    borderColor: "border-[#bce2f7]",
  },
  {
    id: "iot-smart-tech",
    title: "IoT & Smart Technologies",
    tagline: "Bridging the physical and digital worlds with intelligent edge computing and real-time telemetry.",
    description:
      "From industrial IoT sensors to connected enterprise devices, we engineer end-to-end edge computing ecosystems. Our solutions capture low-latency device telemetry, perform edge AI inferencing locally, and securely transmit insights to centralized cloud command centers.",
    capabilities: ["Edge AI & Local Inferencing", "Sensor Telemetry & IoT Gateways", "Industrial Automation Systems", "Custom Firmware & Protocol Design"],
    icon: MonitorIcon,
    image: "/service_items/iot.jpg",
    gradient: "from-[#165180] via-[#2384c6] to-[#63bceb]",
    accentBg: "bg-[#f0f8ff]",
    borderColor: "border-[#cce9fa]",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Risk Management",
    tagline: "Proactive autonomous threat defense and compliance for mission-critical enterprise platforms.",
    description:
      "In an era of sophisticated digital threats, static defense is obsolete. We implement autonomous threat detection, post-quantum encryption protocols, and continuous vulnerability monitoring that safeguard intellectual property while maintaining strict SOC2, HIPAA, and ISO compliance.",
    capabilities: ["Autonomous Threat Detection", "SOC2, HIPAA & ISO Compliance", "Zero-Trust Access Control (IAM)", "Continuous Vulnerability Audits"],
    icon: ShieldIcon,
    image: "/service_items/cyber_security.jpg",
    gradient: "from-[#0c385a] via-[#12619c] to-[#2384c6]",
    accentBg: "bg-[#f4fafc]",
    borderColor: "border-[#bce2f7]",
  },
  {
    id: "custom-dev",
    title: "Custom Web & Mobile Application Development",
    tagline: "High-performance, AI-infused custom software engineered precisely for your operational scale.",
    description:
      "We build intuitive, blazing-fast web applications and native mobile experiences that delight users and scale effortlessly. Utilizing Next.js, React, and modern microservice architectures, our senior-heavy engineering teams deliver production-grade software on accelerated timelines.",
    capabilities: ["Next.js & React Web Platforms", "Cross-Platform iOS & Android Apps", "Scalable API & Microservices", "Enterprise Design System UI/UX"],
    icon: LayersIcon,
    image: "/service_items/mobile_web.avif",
    gradient: "from-[#12619c] via-[#2384c6] to-[#63bceb]",
    accentBg: "bg-[#ebf4fb]",
    borderColor: "border-[#cce9fa]",
  },
];

export function ServicesList() {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 space-y-16 sm:space-y-28">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 1;
          const { Icon = service.icon } = service as any;

          return (
            <section
              key={service.id}
              id={service.id}
              className="scroll-mt-28 relative rounded-[32px] border border-cs-border bg-gradient-to-b from-white to-cs-surface-tint shadow-cs-md transition-all duration-300 hover:shadow-cs-lg overflow-hidden group"
            >
              {/* Top ambient glow */}
              <div
                className={`absolute -top-24 ${
                  isEven ? "-left-24" : "-right-24"
                } w-[300px] h-[300px] bg-gradient-to-br ${service.gradient} opacity-[0.08] rounded-full blur-3xl pointer-events-none`}
              />

              <div className="grid lg:grid-cols-12 min-h-[500px] relative z-10">
                
                {/* Text Column - gets generous padding */}
                <div className={`lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center space-y-5 sm:space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  
                  {/* Badge */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-1.5 border border-cs-border shadow-cs-sm">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#EBF4FB] text-cs-light-blue">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cs-dark-blue">
                        Capability 0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Heading */}
                  <h2 className="text-[24px] sm:text-4xl md:text-5xl font-display font-bold text-cs-dark-blue leading-[1.15] tracking-[-0.02em]">
                    {service.title}
                  </h2>

                  {/* Tagline */}
                  <p className="text-[13px] sm:text-lg font-semibold text-cs-dark-blue/90 leading-snug">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[11.5px] sm:text-base text-cs-ink-muted leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capabilities Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 rounded-xl bg-white/80 p-2.5 border border-cs-border/60 shadow-cs-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cs-light-blue/10 text-cs-light-blue">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-cs-dark-blue">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Full-Height Image Column - edge to edge! */}
                <div className={`lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden ${isEven ? "lg:order-1 border-b lg:border-b-0 lg:border-r border-cs-border" : "lg:order-2 border-t lg:border-t-0 lg:border-l border-cs-border"}`}>
                  <Image
                    src={(service as any).image || "/service_bg.png"}
                    alt={service.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
