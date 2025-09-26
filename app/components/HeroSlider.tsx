// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// type Slide = {
//   image: string;
//   title?: string;
//   subtitle?: string;
//   ctaText?: string;
//   ctaHref?: string;
// };

// export default function HeroSlider({ slides }: { slides: Slide[] }) {
//   return (
//    <div className="w-full">
//       <div className="relative">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           centeredSlides={true}
//           slidesPerView={1.12}
//           spaceBetween={2}
//           loop={true}
//           autoplay={{ 
//             delay: 4500, 
//             disableOnInteraction: true 
//           }}
//           navigation={{
//             nextEl: ".hero-next",
//             prevEl: ".hero-prev",
//           }}
//           pagination={{
//             el: ".hero-pagination",
//             clickable: true,
//             bulletClass: "swiper-pagination-bullet inline-block w-2 h-2 rounded-full bg-white/60 mx-1 cursor-pointer transition-all duration-200",
//             bulletActiveClass: "swiper-pagination-bullet-active bg-white w-2.5 h-2.5",
//           }}
//           className="overflow-hidden bg-red-900"
//         breakpoints={{
//   320: { slidesPerView: 1.02, spaceBetween: 1 },
//   640: { slidesPerView: 1.05, spaceBetween: 2 },
//   768: { slidesPerView: 1.1, spaceBetween: 2 },
//   1024: { slidesPerView: 1.18, spaceBetween: 3 },
//   1280: { slidesPerView: 1.22, spaceBetween: 4 },
//           }}
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index} className="flex justify-start">
//               <div className="relative rounded-2xl overflow-hidden w-[94%] md:w-[86%] lg:w-[80%] h-[240px] md:h-[400px] group cursor-pointer">
//                 <div 
//                   className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
//                   style={{ 
//                     backgroundImage: `url(${slide.image})`,
//                   }}
//                 />
                
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
                
//                 <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 max-w-[70%] z-10">
//                   {slide.title && (
//                     <h3 className="text-white text-xl md:text-4xl font-extrabold mb-2 drop-shadow-lg">
//                       {slide.title}
//                     </h3>
//                   )}
//                   {slide.subtitle && (
//                     <p className="mt-2 text-white/90 text-sm md:text-base leading-relaxed drop-shadow-md">
//                       {slide.subtitle}
//                     </p>
//                   )}
//                   {slide.ctaText && (
//                     <a
//                       href={slide.ctaHref ?? "#"}
//                       className="inline-block mt-4 px-6 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
//                     >
//                       {slide.ctaText}
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons - Positioned outside the image area */}
//         <div className="absolute inset-x-0 bottom-2 pointer-events-none z-20">
//           <div className="flex items-center justify-end w-full px-2 md:px-6 pointer-events-auto gap-1">
//             <button
//               className="hero-prev bg-gray-200 hover:bg-white p-1 cursor-pointer rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-110"
//               aria-label="Previous slide"
//             >
//               <svg 
//                 width="20" 
//                 height="20" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 className="text-gray-800"
//               >
//                 <path
//                   d="M15 6L9 12L15 18"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             <button
//               className="hero-next bg-gray-200 hover:bg-white p-1 cursor-pointer rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-110"
//               aria-label="Next slide"
//             >
//               <svg 
//                 width="20" 
//                 height="20" 
//                 viewBox="0 0 24 24" 
//                 fill="none" 
//                 className="text-gray-800"
//               >
//                 <path
//                   d="M9 6L15 12L9 18"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Pagination Container - Centered below the slider */}
//         <div className="hero-pagination flex justify-center mt-6 space-x-2"></div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

type Slide = {
  image: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<HTMLDivElement[]>([]);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const AUTOPLAY_MS = 4500;

  useMemo(() => {
    slideRefs.current = slides.map(() => null);
  }, [slides]);

  function goTo(index: number) {
    const idx = (index + slides.length) % slides.length;
    const el = slideRefs.current[idx];
    if (el && containerRef.current) {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActive(idx);
    }
  }

  function next() {
    goTo((active + 1) % slides.length);
  }
  function prev() {
    goTo((active - 1 + slides.length) % slides.length);
  }

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const t = setInterval(() => next(), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [active, isPaused, slides.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let raf = 0;

    function onScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
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
  }, [active]);

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
            className="flex items-center gap-8"
            style={{
              paddingLeft: "2vw",
              paddingRight: "10vw",
            }}
          >
            {slides.map((s, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) slideRefs.current[i] = el;
                }}
                className="flex-shrink-0 scroll-snap-center"
                style={{
                  width: "60vw",
                  maxWidth: "800px",
                }}
                tabIndex={0}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                onClick={() => goTo(i)}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[240px] md:h-[400px] group cursor-pointer">
                  <img
                    src={s.image}
                    alt={s.title ?? `slide-${i}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/placeholder.png";
                    }}
                    style={{ display: "block" }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

                  <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 max-w-[70%] z-10">
                    {s.title && (
                      <h3 className="text-white text-xl md:text-4xl font-extrabold mb-2 drop-shadow-lg">
                        {s.title}
                      </h3>
                    )}
                    {s.subtitle && (
                      <p className="mt-2 text-white/90 text-sm md:text-base leading-relaxed drop-shadow-md">
                        {s.subtitle}
                      </p>
                    )}
                    {s.ctaText && (
                      <a
                        href={s.ctaHref ?? "#"}
                        className="inline-block mt-4 px-6 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                      >
                        {s.ctaText}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next Buttons - vertically centered outside the card */}
            <div className="absolute inset-x-0 bottom-1 pointer-events-none z-20">
                  <div className="flex items-center justify-end w-full px-2 md:px-6 pointer-events-auto gap-1">
          <button
            onClick={prev}
            className="bg-gray-200 hover:bg-white p-1 cursor-pointer rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-110"
            aria-label="Previous slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 6L9 12L15 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

           <button
            onClick={next}
            className="bg-gray-200 hover:bg-white p-1 cursor-pointer rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-110"
            aria-label="Next slide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
            </div>

        {/* Pagination dots below the slider */}
         <div className="flex justify-center mt-2 gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 border ${
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
