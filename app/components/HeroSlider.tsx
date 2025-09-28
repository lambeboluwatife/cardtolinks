"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";

type Slide = {
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const AUTOPLAY_MS = 4500;

  useMemo(() => {
    slideRefs.current = slides.map(() => null);
  }, [slides]);

  const goTo = React.useCallback(
    (index: number) => {
      const idx = (index + slides.length) % slides.length;
      const el = slideRefs.current[idx];
      if (el && containerRef.current) {
        el.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
        setActive(idx);
      }
    },
    [slides.length]
  );

  const next = React.useCallback(() => {
    goTo((active + 1) % slides.length);
  }, [active, slides.length, goTo]);

  const prev = React.useCallback(() => {
    goTo((active - 1 + slides.length) % slides.length);
  }, [active, slides.length, goTo]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const t = setInterval(() => next(), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [active, isPaused, slides.length, next]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let raf = 0;

    function onScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        let bestIdx = 0;
        let bestDist = Infinity;
        slideRefs.current.forEach((s, i) => {
          if (!s) return;
          const r = s.getBoundingClientRect();
          const scx = r.left + r.width / 2;
          const dist = Math.abs(cx - scx);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = i;
          }
        });
        if (bestIdx !== active) setActive(bestIdx);
      });
    }

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active, slides.length]);

  // keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, next, prev]);

  if (!slides || slides.length === 0) return null;

  return (
    <div className="w-full">
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative"
      >
        <div
          ref={containerRef}
          className="overflow-x-hidden no-scrollbar py-6"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
          aria-roledescription="carousel"
        >
          <div
            className="flex items-center gap-4 sm:gap-6 md:gap-8"
            style={{
              paddingLeft: "max(16px, 2vw)",
              paddingRight: "max(16px, 10vw)",
            }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) slideRefs.current[i] = el;
                }}
                className="flex-shrink-0 scroll-snap-center w-[85vw] sm:w-[75vw] md:w-[60vw] max-w-[800px]"
                tabIndex={0}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                onClick={() => goTo(i)}
              >
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl h-[200px] sm:h-[280px] md:h-[400px] group cursor-pointer">
                  <Image
                    src={s.image || "/images/placeholder.png"}
                    alt={s.title ?? `slide-${i}`}
                    fill
                    priority={i === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 900px"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center mb-8 md:mb-0 z-10">
                    {s.title && (
                      <h3 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-7xl font-extrabold drop-shadow-lg text-center px-4">
                        {s.title}
                      </h3>
                    )}
                  </div>

                  {(s.subtitle || s.ctaText) && (
                    <div className="absolute left-4 right-4 bottom-3 sm:left-6 sm:right-6 sm:bottom-4 md:left-8 md:right-8 md:bottom-8 z-10">
                      {s.subtitle && (
                        <p className="text-white/90 text-xs sm:text-sm md:text-lg font-semibold leading-relaxed drop-shadow-md">
                          {s.subtitle}
                        </p>
                      )}

                      {s.ctaText && (
                        <div className="flex items-start justify-between w-full mt-2">
                          <h6 className="text-white text-[10px] sm:text-xs font-medium leading-tight drop-shadow-md my-1 sm:my-2 w-[60%]">
                            {s.description}
                          </h6>
                          <span className="text-[10px] sm:text-xs bg-white px-4 sm:px-6 py-2 sm:py-3 text-black rounded-full cursor-pointer font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                            {s.ctaText}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-1 pointer-events-none z-20">
          <div className="flex items-center justify-end w-full px-2 sm:px-4 md:px-6 pointer-events-auto gap-1 sm:gap-2">
            <button
              onClick={prev}
              className="bg-gray-200 hover:bg-white p-1 cursor-pointer rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-110"
              aria-label="Previous slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={next}
              className="bg-gray-200 hover:bg-white p-1 cursor-pointer rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-110"
              aria-label="Next slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-2 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 border ${
                i === active
                  ? "bg-gray-800 border-gray-800 scale-110"
                  : "bg-gray-400 border-gray-400 hover:bg-gray-600 hover:border-gray-600"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
