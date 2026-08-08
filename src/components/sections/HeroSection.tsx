"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { brutalSpring } from "@/lib/utils";
import { profileData } from "@/data/portfolioData";
import InfiniteTicker from "@/components/ui/InfiniteTicker";

export default function HeroSection() {
  const [isTouched, setIsTouched] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check initial screen size and listen for resizes
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDesktop(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handler);
    
    setMounted(true);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-x-hidden min-h-[70vh] lg:min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 md:px-8 lg:px-8 py-12 lg:py-20"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center lg:-mt-20">
        {/* Left — Terminal Text Block (order-2 mobile, order-1 desktop) */}
        <div className="order-2 lg:order-1 text-center lg:text-left w-full">
          {/* Terminal prompt line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: isDesktop ? 0.2 : 0.6 }}
            className="font-mono text-sm text-neo-green/60 mb-4"
          >
            user@portfolio:~$
          </motion.div>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: isDesktop ? 0.6 : 1.0 }}
            className="font-mono text-2xl sm:text-3xl lg:text-4xl text-neo-green min-h-[3em] leading-tight break-words"
          >
            <TypeAnimation
              sequence={profileData.heroTypingSequence as unknown as (string | number)[]}
              wrapper="span"
              speed={70}
              repeat={Infinity}
              cursor={true}
            />
          </motion.div>

          {/* Static subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: isDesktop ? 1.0 : 1.4 }}
            className="font-sans text-neo-white/70 text-base md:text-lg mt-6 max-w-xl mx-auto lg:mx-0"
          >
            {profileData.role}
          </motion.p>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start mt-8">
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              onTouchStart={() => {}}
              className="bg-neo-green text-black border-[3px] border-neo-border px-6 py-3 font-mono font-bold text-sm uppercase text-center shadow-brutal-active md:hover:bg-black md:hover:text-neo-green md:hover:translate-x-[4px] md:hover:translate-y-[4px] md:hover:shadow-none active:bg-black active:text-neo-green transition-all duration-200"
              whileHover={{ x: -4, y: -4, boxShadow: "4px 4px 0px 0px #000" }}
              transition={{ duration: 0.3, delay: isDesktop ? 1.3 : 1.7 }}
            >
              ./ABOUT_ME.SH
            </motion.a>

            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              onTouchStart={() => {}}
              className="bg-neo-pink text-black border-[3px] border-neo-border px-6 py-3 font-mono font-bold text-sm uppercase text-center shadow-brutal-active md:hover:bg-black md:hover:text-neo-pink md:hover:translate-x-[4px] md:hover:translate-y-[4px] md:hover:shadow-none active:bg-black active:text-neo-pink transition-all duration-200"
              whileHover={{ x: -4, y: -4, boxShadow: "4px 4px 0px 0px #000" }}
              transition={{ duration: 0.3, delay: isDesktop ? 1.5 : 1.9 }}
            >
              ./DEPLOY_PROJECTS.EXE
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              onTouchStart={() => {}}
              className="bg-neo-yellow text-black border-[3px] border-neo-border px-6 py-3 font-mono font-bold text-sm uppercase text-center shadow-brutal-active md:hover:bg-black md:hover:text-neo-yellow md:hover:translate-x-[4px] md:hover:translate-y-[4px] md:hover:shadow-none active:bg-black active:text-neo-yellow transition-all duration-200"
              whileHover={{ x: -4, y: -4, boxShadow: "4px 4px 0px 0px #000" }}
              transition={{ duration: 0.3, delay: isDesktop ? 1.7 : 2.1 }}
            >
              ./PING_CONTACT.SH
            </motion.a>
          </div>
        </div>

        {/* Right — Profile Visual (order-1 mobile, order-2 desktop) */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end mt-6 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={brutalSpring}
        >
          <motion.div
            className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-none lg:w-[320px] lg:h-[420px] aspect-[3/4] lg:aspect-auto group"
            whileHover={{ x: -4, y: -4 }}
            initial={{ opacity: 0, scale: 0.6, x: 100, rotate: 15 }}
            animate={mounted ? { opacity: 1, scale: 1, x: 0, rotate: 0 } : { opacity: 0, scale: 0.6, x: 100, rotate: 15 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 15, 
              delay: isDesktop ? 1.9 : 0.2 
            }}
            onClick={() => setIsTouched(!isTouched)}
            onMouseLeave={() => setIsTouched(false)}
          >
            {/* Tilted Brutalist Backdrop */}
            <div className={`absolute inset-4 sm:inset-6 lg:top-28 lg:bottom-0 lg:left-8 lg:right-8 bg-neo-yellow border-[4px] border-neo-green z-0 transition-transform duration-500 shadow-[6px_6px_0px_0px_#00FF41] lg:shadow-[12px_12px_0px_0px_#00FF41] ${isTouched ? 'rotate-0' : '-rotate-3 md:group-hover:rotate-0'}`}></div>

            <Image
              src="/images/profile-cutout.png"
              alt="Rayhan Hanun Profile"
              fill
              sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 320px"
              className={`z-10 object-contain object-bottom brightness-125 contrast-125 saturate-[1.15] transition-all duration-300 ${isTouched ? 'grayscale-0' : 'grayscale md:group-hover:grayscale-0'}`}
              priority={true}
            />
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10 z-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.15) 2px, rgba(0,255,65,0.15) 4px)",
              }}
            />

            {/* Floating Node 1: Top Right */}
            <motion.div 
              animate={{ y: [-8, 8, -8] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -top-3 -right-2 sm:-top-4 sm:-right-4 lg:top-10 lg:-right-12 border-[3px] border-black px-2 sm:px-3 py-1 z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300 ${isTouched ? 'bg-neo-pink' : 'bg-neo-yellow md:group-hover:bg-neo-pink'}`}
            >
              <span className="font-mono text-black font-bold text-[10px] sm:text-xs lg:text-sm whitespace-nowrap">
                [ STATUS: ONLINE ]
              </span>
            </motion.div>

            {/* Floating Node 2: Bottom Left */}
            <motion.div 
              animate={{ y: [8, -8, 8] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 lg:bottom-24 lg:-left-16 scale-90 lg:scale-100 origin-bottom-left border-[3px] border-black px-2 sm:px-3 py-1 z-30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300 ${isTouched ? 'bg-neo-green' : 'bg-white md:group-hover:bg-neo-green'}`}
            >
              <span className="font-mono text-black font-bold text-[10px] sm:text-xs lg:text-sm whitespace-nowrap">
                &lt; UPTIME: 99.9% &gt;
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="font-mono text-xs text-neo-green/40 mt-12 mb-16 lg:mt-0 lg:mb-0 lg:absolute lg:bottom-24"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        [ SCROLL TO CONTINUE ]
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full z-30">
        <InfiniteTicker />
      </div>
    </section>
  );
}
