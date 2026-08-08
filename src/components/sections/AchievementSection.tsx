import { brutalSpring } from "@/lib/utils";
import TerminalCard from "@/components/ui/TerminalCard";
import { achievementsData } from "@/data/portfolioData";
import { FadeUpContainer, FadeUpItem } from "@/components/ui/MotionWrapper";

export default function AchievementSection() {
  return (
    <section id="achievement" className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="font-mono text-neo-green text-sm">
          <span className="text-neo-pink">{'>'}</span> ls achievements/
        </h2>
      </div>

      <FadeUpContainer
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {achievementsData.map((item, index) => (
          <FadeUpItem
            key={item.title}
          >
            <TerminalCard
              headerTitle={`CERT_${item.issuer.toUpperCase().replace(/\s+/g, "_")}.log`}
              accentColor={item.accent}
              isInteractive={true}
              contentTitle={item.title}
              description={item.desc}
              imageSrc={item.image}
              imagePriority={true}
            />
          </FadeUpItem>
        ))}
      </FadeUpContainer>
    </section>
  );
}
