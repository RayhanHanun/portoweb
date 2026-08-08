import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Fungsi untuk menggabungkan class Tailwind secara dinamis tanpa bentrok
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}