import { FaRegImage } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { GiPaintBrush, GiMicrophone, GiEnlightenment } from "react-icons/gi";
import { BiSolidMagicWand } from "react-icons/bi";
import { FaDraftingCompass } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { MdTranslate } from "react-icons/md";
import { AiOutlineAudio, AiOutlineRobot } from "react-icons/ai";
import { FiDatabase, FiSearch } from "react-icons/fi";
import { TbFileAnalytics, TbUserSearch } from "react-icons/tb";
import { RiSpeakLine } from "react-icons/ri";
import React from "react";

export interface GenerateDataType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBackground: string;
  new: boolean;
}

export interface GalleryDataType {
  id: number;
  title: string;
  author: string;
  image: string;
}

export const generateData: GenerateDataType[] = [
  {
    id: 1,
    title: "Image",
    description: "Generate images with custom styles in Flux and ideogram.",
    icon: React.createElement(FaRegImage, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-gray-800 to-gray-400",
    new: true,
  },
  {
    id: 2,
    title: "Video",
    description: "Generate videos with Haikuu, Pica, Runway, Luma, and more.",
    icon: React.createElement(IoVideocam, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-yellow-500",
    new: false,
  },
  {
    id: 3,
    title: "Realtime",
    description: "Realtime AI rendering on a canvass. Instant feedback loops.",
    icon: React.createElement(GiPaintBrush, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-blue-500 to-blue-200",
    new: false,
  },
  {
    id: 4,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    icon: React.createElement(BiSolidMagicWand, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-black to-gray-400",
    new: true,
  },
  {
    id: 5,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    icon: React.createElement(FaDraftingCompass, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-purple-800",
    new: true,
  },
  {
    id: 6,
    title: "Video Lipsync",
    description: "Lip sync and video to any audio. Create talking heads.",
    icon: React.createElement(GiMicrophone, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-black via-green-500 to-yellow-500",
    new: true,
  },
  {
    id: 7,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: React.createElement(BsPersonArmsUp, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-black",
    new: true,
  },
  {
    id: 8,
    title: "Train",
    description: "Teach Krea to replicate your style, product, or characters.",
    icon: React.createElement(GiEnlightenment, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-red-500",
    new: false,
  },
  {
    id: 9,
    title: "Translation",
    description:
      "Translate text, audio, or video subtitles into 50+ languages instantly.",
    icon: React.createElement(MdTranslate, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-green-400 to-blue-300",
    new: true,
  },
  {
    id: 10,
    title: "Speech Synthesis",
    description:
      "Convert text to lifelike speech with multiple voices & tones.",
    icon: React.createElement(RiSpeakLine, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-orange-400 to-yellow-200",
    new: false,
  },
  {
    id: 11,
    title: "Audio Generation",
    description:
      "Create custom sound effects, background scores, and voiceovers.",
    icon: React.createElement(AiOutlineAudio, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-indigo-500 to-pink-300",
    new: false,
  },
  {
    id: 12,
    title: "Data Analysis",
    description:
      "Upload data sets and get real-time insights, charts, and reports.",
    icon: React.createElement(FiDatabase, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-gray-700 to-gray-300",
    new: true,
  },
  {
    id: 13,
    title: "Search & Index",
    description: "Build RAG-powered search engines with automatic indexing.",
    icon: React.createElement(FiSearch, { size: 20, className: "text-white" }),
    iconBackground: "bg-gradient-to-b from-red-500 to-yellow-200",
    new: true,
  },
  {
    id: 14,
    title: "Case Study Agent",
    description:
      "Analyze business cases, generate strategies, and suggest insights.",
    icon: React.createElement(TbFileAnalytics, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-blue-700 to-sky-300",
    new: true,
  },
  {
    id: 15,
    title: "AI Recruiter",
    description:
      "Screen resumes, match candidates, and generate interview questions.",
    icon: React.createElement(TbUserSearch, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-pink-600 to-purple-400",
    new: false,
  },
  {
    id: 16,
    title: "Workflow Automation",
    description:
      "Build agents that automate daily tasks & integrate with apps.",
    icon: React.createElement(AiOutlineRobot, {
      size: 20,
      className: "text-white",
    }),
    iconBackground: "bg-gradient-to-b from-cyan-400 to-teal-200",
    new: true,
  },
];

export const galleryData: GalleryDataType[] = [
  {
    id: 1,
    title: "Autumn Hills",
    author: "A. Krea",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Studio Portrait",
    author: "Studio X",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Product Mockup",
    author: "Designer",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Abstract Colors",
    author: "Artbot",
    image:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=600&fit=crop",
  },
  {
    id: 5,
    title: "City Lights",
    author: "Night Owl",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Minimal UI",
    author: "UX Lab",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Landscape",
    author: "Field",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Character Study",
    author: "Illustrator",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=600&fit=crop",
  },
  {
    id: 9,
    title: "Macro Study",
    author: "Micro",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop",
  },
  {
    id: 10,
    title: "Motion Blur",
    author: "Film",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop",
  },
];
