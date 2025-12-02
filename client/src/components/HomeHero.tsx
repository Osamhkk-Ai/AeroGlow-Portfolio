import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-float">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent text-glow">
              Osama Alghamdi
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground/80">
            AI Engineer specializing in{' '}
            <span className="text-primary font-semibold">Generative Models</span> &{' '}
            <span className="text-primary font-semibold">Large Language Models</span>
          </p>
        </div>

        <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Exploring how intelligence can be created, aligned, and deployed to make life smarter.
          I build AI solutions that bridge cutting-edge technology with real-world impact—from
          preserving cultural heritage to enhancing accessibility.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="glow text-base px-8"
            data-testid="button-explore-work"
          >
            Explore My Work
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="text-base px-8 glass border-primary/30"
            data-testid="button-about-me"
          >
            About Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="text-base px-8 glass border-primary/30"
            data-testid="button-contact-me"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}