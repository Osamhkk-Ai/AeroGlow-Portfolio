import ProjectCard from './ProjectCard';

export default function AchievementsSection() {
  const achievements = [
    {
      title: 'Selected to Present V-TAC at a National MCIT Event',
      description: 'Our V-TAC project was chosen by the Saudi Digital Academy and invited by the Ministry of Communications and Information Technology to represent the academy during the national WTISD event. Selected from many projects, V-TAC was showcased in front of industry leaders and decision-makers — a recognition of its impact and the quality of our work.',
      image: '/achievement-vtac-new.png',
    },
    {
      title: '3rd Place – AgentX National Hackathon',
      description: 'Achieved 3rd place in the AgentX Hackathon among 1,000+ participants and 243 teams across Saudi Arabia. Our team “SABEQ” built a fully functional AI Agent designed to solve real-world problems during an intensive one-week challenge.',
      image: '/achievement-agentx-new.png',
    },
    {
      title: 'Top 10 Performer – SDA × Le Wagon Data & AI Bootcamp',
      description: 'Recognized among the Top 10 performers of the Saudi Digital Academy × Le Wagon Data & AI Bootcamp.',
      image: '/achievement-top10-new.png',
    },
  ];

  return (
    <section id="achievements" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="text-primary text-glow">Achievements</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Recognition of impact and excellence in the field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            // No link provided to hide the button
            // No technologies provided
            />
          ))}
        </div>
      </div>
    </section>
  );
}
