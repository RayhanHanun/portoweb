"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { brutalSpring } from "@/lib/utils";
import { profileData } from "@/data/portfolioData";
import InfiniteTicker from "@/components/ui/InfiniteTicker";

export default function HeroSection() {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 md:px-8 py-20"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center -mt-20">
        {/* Left — Terminal Text Block */}
        <div>
          {/* Terminal prompt line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm text-neo-green/60 mb-4"
          >
            user@portfolio:~$
          </motion.div>

          {/* Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-mono text-xl md:text-3xl lg:text-4xl text-neo-green min-h-[3em] leading-tight"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="font-sans text-neo-white/70 text-base md:text-lg mt-6 max-w-xl"
          >
            {profileData.role}
          </motion.p>

          {/* CTA Buttons Group */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onTouchStart={() => {}}
              className="bg-neo-green text-black border-[3px] border-neo-border px-6 py-3 font-mono font-bold text-sm uppercase shadow-brutal-active md:hover:bg-black md:hover:text-neo-green md:hover:translate-x-[4px] md:hover:translate-y-[4px] md:hover:shadow-none active:bg-black active:text-neo-green transition-all duration-200"
              whileHover={{ x: -4, y: -4, boxShadow: "4px 4px 0px 0px #000" }}
              transition={{ duration: 0.3, delay: 1.3 }}
            >
              ./ABOUT_ME.SH
            </motion.a>

            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onTouchStart={() => {}}
              className="bg-neo-pink text-black border-[3px] border-neo-border px-6 py-3 font-mono font-bold text-sm uppercase shadow-brutal-active md:hover:bg-black md:hover:text-neo-pink md:hover:translate-x-[4px] md:hover:translate-y-[4px] md:hover:shadow-none active:bg-black active:text-neo-pink transition-all duration-200"
              whileHover={{ x: -4, y: -4, boxShadow: "4px 4px 0px 0px #000" }}
              transition={{ duration: 0.3, delay: 1.5 }}
            >
              ./DEPLOY_PROJECTS.EXE
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onTouchStart={() => {}}
              className="bg-neo-yellow text-black border-[3px] border-neo-border px-6 py-3 font-mono font-bold text-sm uppercase shadow-brutal-active md:hover:bg-black md:hover:text-neo-yellow md:hover:translate-x-[4px] md:hover:translate-y-[4px] md:hover:shadow-none active:bg-black active:text-neo-yellow transition-all duration-200"
              whileHover={{ x: -4, y: -4, boxShadow: "4px 4px 0px 0px #000" }}
              transition={{ duration: 0.3, delay: 1.7 }}
            >
              ./PING_CONTACT.SH
            </motion.a>
          </div>
        </div>

        {/* Right — Profile Visual (Glitch) */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={brutalSpring}
        >
          <motion.div
            className="relative w-[280px] h-[350px] md:w-[320px] md:h-[420px] flex items-end justify-center group"
            whileHover={{ x: -4, y: -4 }}
            initial={{ opacity: 0, scale: 0.6, x: 100, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 15, 
              delay: 1.9 
            }}
            onClick={() => setIsTouched(!isTouched)}
            onMouseLeave={() => setIsTouched(false)}
          >
            {/* Tilted Brutalist Backdrop */}
            <div className={`absolute top-20 bottom-2 left-6 right-6 md:top-28 md:bottom-0 md:left-8 md:right-8 bg-neo-yellow border-[4px] border-neo-green z-0 transition-transform duration-500 shadow-[12px_12px_0px_0px_#00FF41] ${isTouched ? 'rotate-0' : '-rotate-3 md:group-hover:rotate-0'}`}></div>

            <Image
              src="/images/profile-cutout.png"
              alt="Rayhan Hanun Profile"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              className={`absolute top-6 md:top-10 -right-2 md:-right-12 border-[3px] border-black px-3 py-1 z-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300 ${isTouched ? 'bg-neo-pink' : 'bg-neo-yellow md:group-hover:bg-neo-pink'}`}
            >
              <span className="font-mono text-black font-bold text-xs md:text-sm whitespace-nowrap">
                [ STATUS: ONLINE ]
              </span>
            </motion.div>

            {/* Floating Node 2: Bottom Left */}
            <motion.div 
              animate={{ y: [8, -8, 8] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className={`absolute bottom-8 md:bottom-24 -left-2 md:-left-16 scale-90 md:scale-100 origin-bottom-left border-[3px] border-black px-3 py-1 z-30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors duration-300 ${isTouched ? 'bg-neo-green' : 'bg-white md:group-hover:bg-neo-green'}`}
            >
              <span className="font-mono text-black font-bold text-xs md:text-sm whitespace-nowrap">
                &lt; UPTIME: 99.9% &gt;
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 font-mono text-xs text-neo-green/40"
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
