"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type GalleryItem = {
  id: number;
  title?: string;
  author?: string;
  image?: string; // path inside /public or external URL
};

const galleryData: GalleryItem[] = [
  { id: 1, title: "Autumn Hills", author: "A. Krea", image: "/image/mobbin.png" },
  { id: 2, title: "Studio Portrait", author: "Studio X", image: "/makeup 1.webp" },
  { id: 3, title: "Product Mockup", author: "Designer", image: "/makeup 2.webp" },
  { id: 4, title: "Abstract Colors", author: "Artbot" },
  { id: 5, title: "City Lights", author: "Night Owl", image: "/image/krea logo.png" },
  { id: 6, title: "Minimal UI", author: "UX Lab" },
  { id: 7, title: "Landscape", author: "Field", image: "/image/krea white.png" },
  { id: 8, title: "Character Study", author: "Illustrator" },
  { id: 9, title: "Macro Study", author: "Micro" },
  { id: 10, title: "Motion Blur", author: "Film" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="px-6 w-full mt-10">
      <div className="flex items-center justify-between w-full mb-2">
        <h1 className="font-semibold">Gallery</h1>

        <div
          className="flex items-center flex-row space-x-1 text-sm text-blue-600 cursor-pointer hover:underline"
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowDown
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
          <h6>Show all</h6>
        </div>
      </div>

      <div className="my-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {(open ? galleryData : galleryData.slice(0, 8)).map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-transparent hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <div className="relative w-full h-40 sm:h-44 md:h-48">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title ?? `gallery-${item.id}`}
                  fill
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    No preview
                  </div>
                </div>
              )}
            </div>

            <div className="p-3">
              <h3 className="text-sm font-semibold text-[--color-foreground]">{item.title}</h3>
              <p className="text-[10px] text-gray-600 dark:text-gray-400 mt-1">{item.author}</p>
            </div>

            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] rounded-xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] sm:h-[75vh]">
              {selected.image ? (
                <Image
                  src={selected.image}
                  alt={selected.title ?? "selected"}
                  fill
                  className="object-contain bg-black"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/90">No preview available</div>
              )}
            </div>

            <div className="p-4 bg-gradient-to-t from-black/70 to-transparent text-white flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{selected.title}</h4>
                <p className="text-sm text-gray-300">{selected.author}</p>
              </div>
              <button
                className="text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-lg"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
