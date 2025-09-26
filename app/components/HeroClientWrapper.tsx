"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("./HeroSlider"), { ssr: false });

// const slides = [
//   {
//     image: "/makeup 1.webp",
//     title: "WAN 2.2 Image generation",
//     subtitle:
//       "Generate complex images with the brand new and powerful WAN 2.2 model.",
//     ctaText: "Try WAN 2.2",
//   },
//   {
//     image: "/makeup 2.webp",
//     title: "Open Source Model — FLUX.1",
//     subtitle: "We're making the weights available to the community.",
//     ctaText: "Read More",
//   },
//   {
//     image: "/makeup 1.webp",
//     title: "Krea Tools & Gallery",
//     subtitle: "Curated models and gallery examples to explore.",
//     ctaText: "Explore Gallery",
//   },
// ];

const slides = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    ctaText: "Try WAN 2.2",
    ctaHref: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&h=600&fit=crop",
    title: "FLUX.1 Krea",
    subtitle: "We're ready to live website to our FLUX1 Krea model talent. Evolve, Download and run our model weights, read the technical report, or generate art it in Krea Images",
    ctaText: "Open Source",
    ctaHref: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop",
    title: "AI Revolution",
    subtitle: "The future of artificial intelligence is here with breakthrough models",
    ctaText: "Learn More",
    ctaHref: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&sat=-100",
    title: "Next Generation",
    subtitle: "Pushing the boundaries of what's possible with AI technology",
    ctaText: "Get Started",
    ctaHref: "#"
  }
];

export default function HeroClientWrapper() {
  return <HeroSlider slides={slides} />;
}
