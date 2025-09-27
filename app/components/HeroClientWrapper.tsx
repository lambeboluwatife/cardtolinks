"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("./HeroSlider"), { ssr: false });

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    ctaText: "Try WAN 2.2",
    ctaHref: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1200&h=600&fit=crop",
    title: "Open Source",
    subtitle: "FLUX.1 Krea",
    description:
      "We're ready to live website to our FLUX1 Krea model talent. Evolve, Download and run our model weights, read the technical report, or generate art it in Krea Images",
    ctaText: "Open Source",
    ctaHref: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=600&fit=crop",
    title: "AI Revolution",
    subtitle: "Transforming Tomorrow Today",
    description:
      "The future of artificial intelligence is here with breakthrough models",
    ctaText: "Learn More",
    ctaHref: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&sat=-100",
    title: "Next Generation",
    subtitle: "Advanced AI Solutions",
    description: "Pushing the boundaries of what's possible with AI technology",
    ctaText: "Get Started",
    ctaHref: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=1200&h=600&fit=crop",
    title: "AI Research Lab",
    subtitle: "Innovating for the Future",
    description: "Join our community of researchers pushing AI boundaries",
    ctaText: "Join Research",
    ctaHref: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    title: "Machine Learning Hub",
    subtitle: "Learn, Build, Deploy",
    description: "Access our comprehensive ML resources and training materials",
    ctaText: "Start Learning",
    ctaHref: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=600&fit=crop",
    title: "AI Ethics Initiative",
    subtitle: "Responsible AI Development",
    description: "Exploring responsible AI development and implementation",
    ctaText: "Learn About Ethics",
    ctaHref: "#",
  },
];

export default function HeroClientWrapper() {
  return <HeroSlider slides={slides} />;
}
