"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn, brutalSpring } from "@/lib/utils";

import Image from "next/image";

type AccentColor = "green" | "pink" | "yellow" | "transparent";

interface TerminalCardProps {
  children?: ReactNode;
  headerTitle?: string;
  accentColor?: AccentColor;
  isInteractive?: boolean;
  className?: string;
  // Dynamic Props
  contentTitle?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  imageSrc?: string;
  tags?: readonly string[];
  link?: string;
  linkLabel?: string;
  imagePriority?: boolean;
}

const accentMap: Record<
  AccentColor,
  { border: string; shadow: string; headerBg: string; dot: string; hoverInvert: string; textClass: string }
> = {
  green: {
    border: "border-neo-green",
    shadow: "shadow-brutal-green",
    headerBg: "bg-neo-green",
    dot: "bg-neo-green",
    hoverInvert: "hover:bg-neo-green hover:text-black hover:shadow-brutal-active",
    textClass: "text-neo-green",
  },
  pink: {
    border: "border-neo-pink",
    shadow: "shadow-brutal-pink",
    headerBg: "bg-neo-pink",
    dot: "bg-neo-pink",
    hoverInvert: "hover:bg-neo-pink hover:text-black hover:shadow-brutal-active",
    textClass: "text-neo-pink",
  },
  yellow: {
    border: "border-neo-yellow",
    shadow: "shadow-brutal-yellow",
    headerBg: "bg-neo-yellow",
    dot: "bg-neo-yellow",
    hoverInvert: "hover:bg-neo-yellow hover:text-black hover:shadow-brutal-active",
    textClass: "text-neo-yellow",
  },
  transparent: {
    border: "border-[#333333]",
    shadow: "shadow-[4px_4px_0px_0px_#000]",
    headerBg: "bg-[#333333]",
    dot: "bg-neo-white",
    hoverInvert: "hover:bg-[#333333] hover:text-neo-white hover:shadow-brutal-active",
    textClass: "text-neo-white",
  },
};

export default function TerminalCard({
  children,
  headerTitle,
  accentColor = "green",
  isInteractive = false,
  className,
  contentTitle,
  subtitle,
  date,
  description,
  imageSrc,
  tags,
  link,
  linkLabel,
  imagePriority = false,
}: TerminalCardProps) {
  const accent = accentMap[accentColor];

  // Static baseline classes
  const cardClasses = cn(
    "bg-[#1A1A1A] border-2 overflow-hidden transition-all duration-75 ease-out flex flex-col h-full",
    accent.border,
    accent.shadow,
    className
  );

  // Dynamic interactive wrapper classes (group + hover logic)
  const interactiveClasses = isInteractive
    ? cn(
        "cursor-pointer group",
        accent.hoverInvert,
        // Force children (tags, icons, text, borders) to turn black on hover for contrast
        "[&_*]:transition-colors [&_*]:duration-75 ease-out",
        "[&_*]:group-hover:text-black [&_*]:group-hover:border-black"
      )
    : "";

  const renderContent = () => {
    if (children) return children;

    return (
      <>
        {/* Image Block */}
        {imageSrc !== undefined && (
          <div className="relative w-full h-48 md:h-56 bg-neo-bg border-[2px] border-neo-border mb-4 overflow-hidden transition-colors duration-75 ease-out md:group-hover:border-black flex items-center justify-center">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={contentTitle || "Image"}
                fill
                priority={imagePriority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center z-10 transition-all duration-300"
              />
            ) : (
              <span className="text-gray-600 text-sm tracking-widest absolute z-0">[ IMAGE_UNAVAILABLE ]</span>
            )}
          </div>
        )}

        {/* Content Block */}
        <div className="flex-1 flex flex-col">
          {contentTitle && (
            <h3 className="font-mono text-base md:text-xl text-neo-white font-bold mb-2 transition-colors duration-75 ease-out md:group-hover:text-black">
              {contentTitle}
            </h3>
          )}
          {subtitle && (
            <div className={cn("font-mono text-sm my-2 transition-colors duration-75 ease-out md:group-hover:text-black", accent.textClass)}>
              {subtitle}
            </div>
          )}
          {date && (
            <div className="font-mono text-xs text-neo-white/50 mb-4 transition-colors duration-75 ease-out md:group-hover:text-black">
              [ {date} ]
            </div>
          )}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] md:text-xs px-2 py-1 bg-[#222222] text-neo-white/70 border border-[#333333] transition-colors duration-75 ease-out md:group-hover:bg-transparent md:group-hover:border-black md:group-hover:text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          {description && (
            <p className="font-sans text-sm text-neo-white/70 leading-relaxed transition-colors duration-75 ease-out md:group-hover:text-black">
              {description}
            </p>
          )}
        </div>

        {/* Link Block */}
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-block mt-4 font-mono text-xs px-4 py-2 border-[3px] font-bold tracking-wider uppercase bg-transparent transition-colors duration-75 ease-out md:group-hover:border-black md:group-hover:text-black md:hover:!bg-black",
              accent.border,
              accent.textClass,
              `md:hover:!${accent.textClass}`
            )}
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ x: 2, y: 2 }}
            transition={brutalSpring}
          >
            {">"} {linkLabel || "VIEW_SOURCE"}
          </motion.a>
        )}
      </>
    );
  };

  // Static card — no motion wrapper
  if (!isInteractive) {
    return (
      <div className={cardClasses}>
        {headerTitle && <CardHeader title={headerTitle} accent={accent} />}
        <div className="p-4 md:p-6 flex-1 flex flex-col">{renderContent()}</div>
      </div>
    );
  }

  // Interactive card — Framer Motion with brutalSpring and hover inversion
  return (
    <motion.div
      className={cn(cardClasses, interactiveClasses)}
      whileHover={{ x: -4, y: -4 }}
      whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px #000" }}
      transition={brutalSpring}
    >
      {headerTitle && <CardHeader title={headerTitle} accent={accent} />}
      <div className="p-4 md:p-6 flex-1 flex flex-col">{renderContent()}</div>
    </motion.div>
  );
}

function CardHeader({ title, accent }: { title: string; accent: typeof accentMap[AccentColor] }) {
  return (
    <div className={cn("flex items-center gap-2 px-4 py-2 border-b-2 bg-[#121212] transition-colors duration-75 ease-out group-hover:bg-transparent group-hover:border-black", accent.border)}>
      {/* Terminal window dots */}
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "w-3 h-3 border-[2px] border-neo-border transition-colors duration-75 ease-out",
              i === 0
                ? cn(accent.dot, "group-hover:bg-black group-hover:border-black")
                : "bg-[#333333] group-hover:bg-transparent group-hover:border-black"
            )}
          />
        ))}
      </div>
      <span className="font-mono text-xs text-neo-white tracking-wider uppercase ml-2 transition-colors duration-75 ease-out group-hover:text-black">
        {title}
      </span>
    </div>
  );
}
