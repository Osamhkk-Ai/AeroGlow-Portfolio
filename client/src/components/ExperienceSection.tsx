import ProjectCard from './ProjectCard';

export default function ExperienceSection() {
    const experience = {
        title: 'Data Engineering Intern — Saudi National Bank (SNB)',
        description: `Finance Department — Enterprise Data Management Division
Jun 2024 – Jul 2024 — Jeddah

Worked within the Finance Department as part of the Enterprise Data Management division, supporting financial data processing and reporting. Analyzed over 1M+ financial records using SQL and Python, and developed several reports and dashboards that improved data visibility, reporting accuracy, and decision support for finance leaders.`,
        image: '/experience-snb.png',
    };

    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                        <span className="text-primary text-glow">Experience</span>
                    </h2>
                    <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                        Professional journey and contributions
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <ProjectCard
                        title={experience.title}
                        description={experience.description}
                        image={experience.image}
                    // No link provided
                    />
                </div>
            </div>
        </section>
    );
}
