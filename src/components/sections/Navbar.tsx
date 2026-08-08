"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn, brutalSpring } from "@/lib/utils";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ACHIEVEMENTS", href: "#achievement" },
  { label: "CONTACT", href: "#contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 border-b-[3px] border-neo-green bg-neo-bg/95",
        scrolled && "bg-neo-bg"
      )}
    >
      <div className="mx-auto max-w-7xl w-full flex items-center justify-between relative px-4 md:px-8 h-16">

        {/* Mobile Hamburger (Left) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 border-2 border-neo-green"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span
            className={cn(
              "w-5 h-0.5 bg-neo-green transition-transform duration-100",
              mobileOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-neo-green transition-opacity duration-100",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "w-5 h-0.5 bg-neo-green transition-transform duration-100",
              mobileOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-neo-white px-4 py-2 border-2 border-transparent hover:border-neo-green hover:text-neo-green transition-colors duration-100"
              whileHover={{ y: -2 }}
              whileTap={{ y: 2 }}
              transition={brutalSpring}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA DOWNLOAD CV (Right) */}
        <motion.button
          onClick={() => alert('CV is being compiled. Coming soon!')}
          className="ml-auto font-mono bg-neo-green text-black border-2 border-black shadow-brutal-green font-bold tracking-wider uppercase text-xs px-3 py-1.5 md:text-sm md:px-5 md:py-2"
          whileHover={{ x: -2, y: -2 }}
          transition={brutalSpring}
          onTouchStart={() => {}}
        >
          download_cv
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden border-t-2 border-neo-green bg-neo-bg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={brutalSpring}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-mono text-sm text-neo-white px-6 py-4 border-b border-[#333333] hover:bg-neo-card hover:text-neo-green transition-colors duration-100"
            >
              {`> ${link.label}`}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
