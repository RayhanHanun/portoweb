import TerminalCard from "@/components/ui/TerminalCard";
import { experienceData } from "@/data/portfolioData";
import { FadeUpContainer, FadeUpItem } from "@/components/ui/MotionWrapper";

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 md:px-8 lg:px-8 py-12 lg:py-20 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="font-mono text-neo-green text-sm">
          <span className="text-neo-pink">{'>'}</span> ls experience/
        </h2>
      </div>

      <FadeUpContainer
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6"
      >
        {experienceData.map((exp) => (
          <FadeUpItem
            key={exp.company}
          >
            <TerminalCard
              headerTitle={`${exp.company.toUpperCase().replace(/\s+/g, "_")}.log`}
              accentColor={exp.accent as "green" | "pink" | "yellow"}
              isInteractive={true}
              contentTitle={exp.title}
              subtitle={exp.company}
              date={exp.duration}
              description={exp.desc}
            />
          </FadeUpItem>
        ))}
      </FadeUpContainer>
    </section>
  );
}
