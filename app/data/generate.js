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

// interface GenerateDataType {
//   id: number;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   iconBackground: string;
//   new: boolean;
// }

export const generateData = [
  {
    id: 1,
    title: "Image",
    description: "Generate images with custom styles in Flux and ideogram.",
    icon: <FaRegImage size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-gray-800 to-white",
    new: true,
  },
  {
    id: 2,
    title: "Video",
    description: "Generate videos with Haikuu, Pica, Runway, Luma, and more.",
    icon: <IoVideocam size={20} className="text-white" />,
    iconBackground: "bg-yellow-500",
    new: false,
  },
  {
    id: 3,
    title: "Realtime",
    description: "Realtime AI rendering on a canvass. Instant feedback loops.",
    icon: <GiPaintBrush size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-blue-500 to-blue-200",
    new: false,
  },
  {
    id: 4,
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    icon: <BiSolidMagicWand size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-black to-gray-300",
    new: true,
  },
  {
    id: 5,
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    icon: <FaDraftingCompass size={20} className="text-white" />,
    iconBackground: "bg-purple-800",
    new: true,
  },
  {
    id: 6,
    title: "Video Lipsync",
    description: "Lip sync and video to any audio.",
    icon: <GiMicrophone size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-black via-green-500 to-yellow-500",
    new: true,
  },
  {
    id: 7,
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    icon: <BsPersonArmsUp size={20} className="text-white" />,
    iconBackground: "bg-black",
    new: true,
  },
  {
    id: 8,
    title: "Train",
    description: "Teach Krea to replicate your style, product, or characters.",
    icon: <GiEnlightenment size={20} className="text-white" />,
    iconBackground: "bg-red-500",
    new: false,
  },
  {
    id: 9,
    title: "Translation",
    description:
      "Translate text, audio, or video subtitles into 50+ languages instantly.",
    icon: <MdTranslate size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-green-400 to-blue-300",
    new: true,
  },
  {
    id: 10,
    title: "Speech Synthesis",
    description:
      "Convert text to lifelike speech with multiple voices & tones.",
    icon: <RiSpeakLine size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-orange-400 to-yellow-200",
    new: false,
  },
  {
    id: 11,
    title: "Audio Generation",
    description:
      "Create custom sound effects, background scores, and voiceovers.",
    icon: <AiOutlineAudio size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-indigo-500 to-pink-300",
    new: false,
  },
  {
    id: 12,
    title: "Data Analysis",
    description:
      "Upload data sets and get real-time insights, charts, and reports.",
    icon: <FiDatabase size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-gray-700 to-gray-300",
    new: true,
  },
  {
    id: 13,
    title: "Search & Index",
    description: "Build RAG-powered search engines with automatic indexing.",
    icon: <FiSearch size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-red-500 to-yellow-200",
    new: true,
  },
  {
    id: 14,
    title: "Case Study Agent",
    description:
      "Analyze business cases, generate strategies, and suggest insights.",
    icon: <TbFileAnalytics size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-blue-700 to-sky-300",
    new: true,
  },
  {
    id: 15,
    title: "AI Recruiter",
    description:
      "Screen resumes, match candidates, and generate interview questions.",
    icon: <TbUserSearch size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-pink-600 to-purple-400",
    new: false,
  },
  {
    id: 16,
    title: "Workflow Automation",
    description:
      "Build agents that automate daily tasks & integrate with apps.",
    icon: <AiOutlineRobot size={20} className="text-white" />,
    iconBackground: "bg-gradient-to-b from-cyan-400 to-teal-200",
    new: true,
  },
];
