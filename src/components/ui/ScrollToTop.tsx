"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup memory
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center bg-[#00FF41] border-2 border-black shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer"
      aria-label="Scroll to top"
    >
      <span className="font-mono text-lg sm:text-xl font-black text-black leading-none">
        ^
      </span>
    </button>
  );
}
