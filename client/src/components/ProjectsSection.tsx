import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'KSA Work Law RAG',
      description: 'An intelligent Retrieval-Augmented Generation system for Saudi Arabian labor law compliance. Provides accurate legal information and guidance by combining document retrieval with large language models to help users understand their rights and obligations under KSA work regulations.',
      technologies: ['LLMs', 'RAG', 'Retrieval'],
      link: 'https://github.com/Osamhkk-Ai/KSA-Work-Law-RAG',
      image: '/project-ksa.png'
    },
    {
      title: 'VTAC – Football AI Assistant',
      description: 'An Agentic AI system designed for football analytics. Combines machine learning models with real-world use cases to provide actionable insights and assistance for football analysis.',
      technologies: ['Agentic AI', 'ML Models', 'Real Use-case'],
      link: '#', // Assuming no link provided, or keep existing if known. Using # as placeholder based on request "Update... ONLY the following".
      image: '/project-vtac.png'
    },
    {
      title: 'Landmark Classification',
      description: 'CNN-based image classification system for automatic landmark recognition using transfer learning and state-of-the-art computer vision techniques.',
      technologies: ['Computer Vision', 'Transfer Learning'],
      link: 'https://github.com/Osamhkk-Ai/Landmark-Classification-Tagging-for-Social-Media',
    },
    {
      title: 'Bike Sharing Demand Prediction',
      description: 'Machine learning regression model to predict bike-sharing demand based on weather conditions, time, and seasonal patterns. Demonstrates data analysis and business modeling skills.',
      technologies: ['Regression', 'Data Analysis', 'Business Modeling'],
      link: 'https://github.com/Osamhkk-Ai/Bike-Sharing-Demand',
    },
    {
      title: 'Text Translation & Sentiment Analysis',
      description: 'NLP project leveraging Transformer models for multilingual text translation and sentiment analysis.',
      technologies: ['Transformers', 'Hugging Face', 'NLP', 'Python'],
      link: 'https://github.com/Osamhkk-Ai/Osamhkk-Ai-Text-Translation-and-Sentiment-Analysis-using-Transformers',
    },
  ];

  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Innovative AI solutions that make a real-world impact
          </p>
        </div>

        {/* Featured Projects (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 justify-center max-w-5xl mx-auto">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              image={project.image}
              featured={true}
            />
          ))}
        </div>

        {/* Other Projects (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              hideImage={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}