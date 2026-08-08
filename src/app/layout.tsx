import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import CursorSpotlight from "@/components/ui/CursorSpotlight";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rayhan Hanun | Fullstack Developer & Systems Analyst",
  description:
    "Portfolio of Rayhan Hanun — Full-Stack Developer specializing in AI Applications, Systems Analysis, and IoT/Robotics.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${firaCode.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorSpotlight />
        <Navbar />
        {/* pt-16 offset for fixed navbar height, relative z-10 to stay above spotlight */}
        <main className="relative z-10 pt-16 flex-1">{children}</main>
      </body>
    </html>
  );
}