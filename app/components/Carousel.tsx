"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  cta?: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    image: "/makeup 1.webp",
    cta: "Try WAN 2.2",
  },
  {
    id: 2,
    title: "Open Source Model",
    description:
      "We’re making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Images.",
    image: "/makeup 2.webp",
    cta: "Explore",
  },
  {
    id: 3,
    title: "Video Generation",
    description: "Generate creative videos with AI.",
    image: "/makeup 1.webp",
    cta: "Get Started",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // autoplay every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    const newIndex = (current - 1 + slides.length) % slides.length;
    setCurrent(newIndex);
    document
      .getElementById(`slide-${newIndex}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    const newIndex = (current + 1) % slides.length;
    setCurrent(newIndex);
    document
      .getElementById(`slide-${newIndex}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDotClick = (index: number) => {
    setCurrent(index);
    document
      .getElementById(`slide-${index}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide-${index}`}
            className="flex-shrink-0 w-full snap-center relative"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col justify-center items-start p-8 text-white">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="mt-2 max-w-lg">{slide.description}</p>
                {slide.cta && (
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200">
                    {slide.cta}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <div className="absolute top-1/2 right-4 flex flex-col space-y-2 -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="bg-white/80 hover:bg-white text-black rounded-full p-2 shadow"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="bg-white/80 hover:bg-white text-black rounded-full p-2 shadow"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
