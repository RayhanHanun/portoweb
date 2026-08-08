import { brutalSpring } from "@/lib/utils";
import TerminalCard from "@/components/ui/TerminalCard";
import {
  academicData,
  experienceData,
  techStack,
  focusAreas,
  softSkillsData,
} from "@/data/portfolioData";
import { FadeUpContainer, FadeUpItem } from "@/components/ui/MotionWrapper";

export default function AboutSection() {
  return (
    <section id="about" className="px-4 md:px-8 py-20 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="font-mono text-neo-green text-sm mb-8">
        <span className="text-neo-pink">{">"}</span> cat about.md
      </div>

      {/* ========== BENTO BOX — CSS Grid ONLY, NO Flexbox wrapper ========== */}
      <FadeUpContainer
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* ── Quote Block ── col-span full */}
        <FadeUpItem
          className="col-span-1 lg:col-span-3"
        >
          <TerminalCard headerTitle="EXECUTIVE_SUMMARY.log" accentColor="green" isInteractive={true}>
            <p className="font-mono text-2xl md:text-3xl lg:text-4xl text-neo-green leading-tight group-hover:text-black transition-colors duration-200">
              &quot;Building systems that bridge hardware and software to create innovative and scalable digital solutions.&quot;
            </p>
          </TerminalCard>
        </FadeUpItem>

        {/* ── Academic ── col-span 1 */}
        <FadeUpItem
          className="col-span-1"
        >
          <TerminalCard headerTitle="EDUCATION.log" accentColor="pink" isInteractive={true} className="h-full">
            <div className="space-y-4">
              {academicData.map((edu) => (
                <div key={edu.institution}>
                  <h3 className="font-mono text-sm text-neo-pink font-bold group-hover:text-black transition-colors duration-200">
                    {edu.institution}
                  </h3>
                  <p className="font-sans text-neo-white text-sm mt-1 group-hover:text-black transition-colors duration-200">
                    {edu.degree}
                  </p>
                  <span className="font-mono text-xs text-neo-white/50 group-hover:text-black transition-colors duration-200">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </TerminalCard>
        </FadeUpItem>

        {/* ── Tech Stack ── col-span 1 */}
        <FadeUpItem
          className="col-span-1"
        >
          <TerminalCard headerTitle="TECH_STACK.config" accentColor="green" isInteractive={true} className="h-full">
            <div className="grid grid-cols-2 gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 border-2 border-neo-green text-neo-green text-center group-hover:border-black group-hover:text-black transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </TerminalCard>
        </FadeUpItem>

        {/* ── Soft Skills ── col-span 1 */}
        <FadeUpItem
          className="col-span-1"
        >
          <TerminalCard headerTitle="SOFT_SKILLS.config" accentColor="pink" isInteractive={true} className="h-full">
            <div className="grid grid-cols-2 gap-2">
              {softSkillsData.map((skill) => (
                <span
                  key={skill}
                  className="col-span-1 font-mono text-xs px-3 py-1.5 border-2 border-neo-pink text-neo-pink text-center group-hover:border-black group-hover:text-black transition-colors duration-200 w-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </TerminalCard>
        </FadeUpItem>

        {/* ── Focus Areas ── col-span full */}
        <FadeUpItem
          className="col-span-1 lg:col-span-3"
        >
          <TerminalCard headerTitle="FOCUS_AREAS.sys" accentColor="yellow" isInteractive={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="font-mono text-xs md:text-sm px-4 py-3 border-2 border-neo-yellow text-neo-yellow text-center group-hover:border-black group-hover:text-black transition-colors duration-200"
                >
                  {"> "}{area}
                </div>
              ))}
            </div>
          </TerminalCard>
        </FadeUpItem>

      </FadeUpContainer>
    </section>
  );
}
