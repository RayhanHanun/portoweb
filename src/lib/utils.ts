import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ponytail: brutalSpring is the single physics config for all Framer Motion animations.
// Upgrade path: add variants (brutalSpringLight, brutalSpringHeavy) when needed.
export const brutalSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
  bounce: 0.4,
};
