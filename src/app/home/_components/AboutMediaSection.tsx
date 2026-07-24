"use client";

import React, { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function AboutMediaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoPinContainerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const statsWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardsSectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!videoPinContainerRef.current || !videoWrapperRef.current || !statsWrapperRef.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current, // Pin the top-level section right below the floating navbar so the entire section and footer below are cleanly spaced
            start: "top top+=100",
            end: "+=1400",
            scrub: 1.5,
            pin: true,
            pinSpacing: true,
          },
        });

        // STAGE 1: Right stats box stays right at its horizontal place, glides straight UP (y: -420), and disappears cleanly
        tl.to(
          statsWrapperRef.current,
          {
            y: -420,
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: "power2.inOut",
          },
          0
        );

        // Once the right box has gone up and disappeared completely at 1.2s, instantly hide its layout box
        // so it never shifts sideways while going up and never pushes the video sideways when zooming
        tl.set(
          statsWrapperRef.current,
          {
            display: "none",
          },
          1.2
        );

        // STAGE 2: After the right box went up and disappeared, left video zooms wide across 100% navbar width
        tl.to(
          videoWrapperRef.current,
          {
            width: "100%",
            height: "clamp(380px, 64vh, 620px)",
            y: 0,
            duration: 2.0,
            ease: "power3.inOut",
          },
          1.2
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  // Cinematic Float & Settle Entrance Animation
  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const wrappers = gsap.utils.toArray<HTMLElement>(".service-card-wrapper");
        if (wrappers.length < 6) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsSectionRef.current,
            start: "center center",
            end: "+=1500", // Lengthened slightly so the anticipation pause feels intentional
            scrub: 1,
            pin: true,
          }
        });

        // Personality: Unique start positions
        const startPositions = [
          { x: -350, y: -200, rot: -12, scale: 0.35 },
          { x: 40, y: -350, rot: 6, scale: 0.45 },
          { x: 300, y: -150, rot: 15, scale: 0.35 },
          { x: -300, y: 250, rot: -10, scale: 0.45 },
          { x: 0, y: 300, rot: 8, scale: 0.40 },
          { x: 250, y: -250, rot: -14, scale: 0.30 },
        ];

        // INITIAL STATE
        wrappers.forEach((wrapper, i) => {
          gsap.set(wrapper, {
            x: startPositions[i].x,
            y: startPositions[i].y,
            rotation: startPositions[i].rot,
            scale: startPositions[i].scale,
            opacity: 0,
          });
        });

        wrappers.forEach((wrapper, i) => {
          const baseStartTime = i * 0.12;

          // 1. Float for 200-300ms (Builds anticipation with a tiny drift)
          tl.to(wrapper, {
            opacity: 1,
            x: startPositions[i].x + (i % 2 === 0 ? 15 : -15),
            y: startPositions[i].y + (i % 2 === 0 ? -15 : 15),
            rotation: startPositions[i].rot + (i % 2 === 0 ? 2 : -2),
            ease: "sine.out",
            duration: 0.4,
          }, baseStartTime);

          const travelStart = baseStartTime + 0.4;

          // 4. Stagger the ending naturally so they don't all finish together
          const mainDuration = 1.2 + (i % 3) * 0.15;

          // 3. Add a slight drift (Curved path created by splitting X and Y easings)
          tl.to(wrapper, {
            x: i % 2 === 0 ? 4 : -4, // Stop 4px short for the tiny settle
            ease: "power2.inOut",
            duration: mainDuration,
          }, travelStart);

          tl.to(wrapper, {
            y: i % 2 === 0 ? -4 : 4,
            scale: 0.98,
            rotation: 0,
            ease: "expo.out",
            duration: mainDuration,
          }, travelStart);

          // 5. Add tiny weight at the end (Gentle settle, NO BOUNCE)
          tl.to(wrapper, {
            x: 0,
            y: 0,
            scale: 1,
            ease: "power1.inOut",
            duration: 0.5,
          }, travelStart + mainDuration - 0.2); // Overlap slightly with the end of travel
        });
      });

      return () => mm.revert();
    },
    { scope: cardsSectionRef }
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="relative z-20 bg-white pt-12 sm:pt-16 xl:pt-24 pb-12 lg:pb-64 xl:pb-80 min-h-0 lg:min-h-[700px] xl:min-h-[820px]"
      >
        {/* Exact navbar width container: w-[90%] xl:w-[82%] max-w-[1260px] mx-auto */}
        <div ref={videoPinContainerRef} className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">

          {/* Side-by-side resting layout: Both reduced equally (46% each) with a clean gap between, and EXACT SAME height (250px) */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-[6%] w-full">

            {/* Left Container: Video Format Card (Exact same resting height as right box: h-[200px]) */}
            <div
              ref={videoWrapperRef}
              className="w-full lg:w-[47%] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[200px] rounded-[32px] sm:rounded-[38px] overflow-hidden relative shadow-md bg-cs-ink/5 border border-cs-border shrink-0 flex items-center justify-center group"
            >
              {/* Background Video */}
              <video
                ref={videoRef}
                src="/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle Gradient Overlay for contrast and controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Pause / Play Glassmorphic Button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white hover:bg-white/40 hover:scale-110 transition-all shadow-lg"
              >
                {isPlaying ? (
                  /* Pause Icon (||) */
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                  </svg>
                ) : (
                  /* Play Icon (Triangle) */
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 16 16">
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63 1.693-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Right Container: Icon & Metrics Box (Exact same resting height as video: h-[200px]) */}
            <div
              ref={statsWrapperRef}
              className="w-full lg:w-[47%] h-auto sm:h-[195px] lg:h-[200px] rounded-[32px] sm:rounded-[38px] p-5 sm:p-6 border border-[#e2edff] bg-[#F5FAFF] flex flex-col sm:flex-row items-center gap-5 sm:gap-6 justify-between shrink-0 shadow-sm"
            >
              {/* Left Icon Box with gradient: linear-gradient(180deg, #0136A2 0%, #266DFB 100%) */}
              <div
                className="w-full aspect-[1/0.8] sm:aspect-auto sm:w-28 sm:h-28 lg:w-[132px] lg:h-[132px] rounded-[24px] sm:rounded-[30px] shrink-0 flex items-center justify-center shadow-md relative overflow-hidden"
                style={{ background: "linear-gradient(180deg, #0136A2 0%, #266DFB 100%)" }}
              >
                {/* Timer / Clock Icon from public folder */}
                <img
                  src="/timer.png"
                  alt="Alarm Timer Icon"
                  className="w-[65%] h-[65%] sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain filter drop-shadow-md"
                />
              </div>

              {/* Right Side Stats Columns */}
              <div className="flex flex-1 items-start sm:items-center justify-around gap-4 sm:gap-6 w-full px-2 sm:px-0 sm:pl-2 pt-2 sm:pt-0">
                {/* Stat 1: 96% Positive Feedback */}
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <span className="text-4xl sm:text-h3 font-display font-normal sm:font-medium text-cs-ink tracking-tight leading-none mb-1.5 sm:mb-2.5">
                    96%
                  </span>
                  <span className="font-paragraph font-light text-[10px] sm:text-base text-neutral-900 leading-[1.3] sm:leading-none uppercase w-[120px] sm:w-[147px]">
                    Positive Feedback<br />From Clients
                  </span>
                </div>

                {/* Subtle Vertical Divider */}
                <div className="w-[1px] h-12 bg-cs-border/60 hidden sm:block shrink-0" />

                {/* Stat 2: 98% Accurately Delivered */}
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <span className="text-4xl sm:text-h3 font-display font-normal sm:font-medium text-cs-ink tracking-tight leading-none mb-1.5 sm:mb-2.5">
                    98%
                  </span>
                  <span className="font-paragraph font-light text-[10px] sm:text-base text-neutral-900 leading-[1.3] sm:leading-none uppercase w-[120px] sm:w-[147px]">
                    Accurately<br />Delivered
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section ref={cardsSectionRef} className="relative z-20 bg-white pt-0 md:pt-8 lg:pt-48 pb-16 sm:pb-24 border-b border-cs-border">
        {/* Subtle divider line between sections */}
        <hr className="lg:hidden w-[90%] xl:w-[82%] max-w-[1260px] mx-auto border-t border-cs-border mb-6 md:mb-10 lg:mb-20" />
        <div className="w-[90%] xl:w-[82%] max-w-[1260px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 px-1 sm:px-0">
            {[
              { title: "Kiosk", subtitle: "DEVELOPMENT", image: "/tech_logo.png" },
              { title: "Backend", subtitle: "DEVELOPMENT", image: "/tech_logo.png" },
              { title: "Frontend", subtitle: "DEVELOPMENT", image: "/tech_logo.png" },
              { title: "Kiosk", subtitle: "DEVELOPMENT", image: "/tech_logo.png" },
              { title: "Backend", subtitle: "DEVELOPMENT", image: "/tech_logo.png" },
              { title: "Frontend", subtitle: "DEVELOPMENT", image: "/tech_logo.png" },
            ].map((service, index) => (
              <div key={index} className="service-card-wrapper">
                <div
                  className="bg-blue-50 rounded-[16px] sm:rounded-xxl p-3.5 sm:p-6 md:p-4 lg:p-6 flex flex-col justify-between h-[150px] sm:h-[300px] md:h-[180px] lg:h-[300px] hover:scale-[1.02] transition-transform duration-300 w-full"
                >
                  <div className="flex flex-col">
                    <h3 className="font-paragraph text-[16px] sm:text-[48px] md:text-[28px] lg:text-[48px] font-medium sm:font-normal leading-tight sm:leading-none text-neutral-1000">
                      {service.title}
                    </h3>
                    <p className="font-paragraph text-[10px] sm:text-[20px] md:text-[12px] lg:text-[20px] font-medium sm:font-normal leading-tight sm:leading-none sm:tracking-[0.1em] uppercase text-neutral-1000 mt-1 sm:mt-[14px] md:mt-2 lg:mt-[14px]">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="flex justify-center sm:justify-end mt-auto mb-2 sm:mb-0">
                    <img
                      src={service.image}
                      alt={`${service.title} logo`}
                      className="h-16 sm:h-[200px] md:h-[100px] lg:h-[200px] object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
