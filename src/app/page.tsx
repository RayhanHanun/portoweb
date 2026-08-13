import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementSection from "@/components/sections/AchievementSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import AITerminal from "@/components/AITerminal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementSection />
      <ContactSection />
      <AITerminal />
      
      {/* Footer stamp */}
      <footer className="pb-12 text-center font-mono text-xs text-neo-green/60">
        user@portfolio:~$ SYSTEM_ONLINE // SECURE_BUILD // {new Date().getFullYear()}
      </footer>
    </>
  );
}
