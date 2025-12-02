import StarField from '@/components/StarField';
import ThemeToggle from '@/components/ThemeToggle';
import MouseGlow from '@/components/MouseGlow';
import FloatingCharacter from '@/components/FloatingCharacter';
import HomeHero from '@/components/HomeHero';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import CertificationsSection from '@/components/CertificationsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import GlassNav from '@/components/ui/navigation-menu';

export default function Portfolio() {
  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <StarField />
      <FloatingCharacter />
      <MouseGlow />
      <ThemeToggle />
      <GlassNav />

      {/* Main Content */}
      <div className="relative z-10">
        <HomeHero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <CertificationsSection />
        <SkillsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 px-6 text-center text-foreground/60 border-t border-border/30 relative z-20">
          <p>© 2025 Osama Alghamdi. Built with passion and AI.</p>
        </footer>
      </div>
    </div>
  );
}
