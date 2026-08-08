import TerminalCard from "@/components/ui/TerminalCard";
import { projectsData } from "@/data/portfolioData";
import { FadeUpContainer, FadeUpItem } from "@/components/ui/MotionWrapper";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 md:px-8 lg:px-8 py-12 lg:py-20 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="font-mono text-neo-green text-sm">
          <span className="text-neo-pink">{'>'}</span> ls projects/
        </h2>
      </div>

      {/* CSS Grid — lg:grid-cols-2 per build_plan Sprint 5 */}
      <FadeUpContainer
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6"
      >
        {projectsData.map((project) => (
          <FadeUpItem
            key={project.title}
          >
            <TerminalCard
              headerTitle={`${project.title.toUpperCase().replace(/\s+/g, "_")}.exe`}
              accentColor={project.accent}
              isInteractive={true}
              contentTitle={project.title}
              description={project.desc}
              imageSrc={project.image}
              tags={project.tags}
              link={project.link}
              linkLabel="LAUNCH_URL"
            />
          </FadeUpItem>
        ))}
      </FadeUpContainer>
    </section>
  );
}
