"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

export const MotionA = motion.a;

export function FadeUpContainer({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeUpItem({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100, damping: 12 },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
