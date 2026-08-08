import { techStack, softSkillsData } from "@/data/portfolioData";

export default function InfiniteTicker() {
  const techString = techStack.join(" /// ");
  const softString = softSkillsData.join(" /// ");
  const tickerText = techString + "  [|||]  " + softString + "  [|||]  ";

  return (
    <div className="w-full bg-neo-green border-y-[3px] border-neo-border overflow-hidden flex whitespace-nowrap py-3 z-20 relative">
      <div className="animate-marquee whitespace-nowrap flex items-center shrink-0 min-w-full">
        <span className="text-black font-mono font-bold text-xl uppercase tracking-wider whitespace-pre">
          {tickerText}
        </span>
      </div>
      <div className="animate-marquee whitespace-nowrap flex items-center shrink-0 min-w-full">
        <span className="text-black font-mono font-bold text-xl uppercase tracking-wider whitespace-pre">
          {tickerText}
        </span>
      </div>
    </div>
  );
}
