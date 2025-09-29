"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? resolvedTheme : theme;

  const toggleTheme = () => {
    setTheme(current === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 cursor-pointer"
    >
      <span
        className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 ${
          current === "light" ? "translate-x-0" : "translate-x-6"
        }`}
      />
      {current === "light" ? (
        <Sun
          className={`absolute left-1 w-5 h-5 text-yellow-500 transition-opacity duration-300 ${
            current === "light" ? "opacity-100" : "opacity-0"
          }`}
        />
      ) : (
        <Moon
          className={`absolute right-1 w-5 h-5 text-blue-300 transition-opacity duration-300 ${
            current === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </button>
  );
}
