export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent AI solutions
          </p>
        </div>

        <div className="glass-strong p-8 lg:p-12 rounded-3xl">
          <div className="space-y-8">
            {/* AI & Machine Learning */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wider flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                AI & Machine Learning
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Large Language Models', 'Generative AI', 'Deep Learning', 'Neural Networks', 'GANs', 'Transformers', 'RAG Systems'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium glass rounded-full glow-sm hover-elevate transition-all duration-300"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wider flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium glass rounded-full glow-sm hover-elevate transition-all duration-300"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wider flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Specializations
              </h3>
              <div className="flex flex-wrap gap-3">
                {['NLP', 'Computer Vision', 'Sentiment Analysis', 'Object Detection', 'Image Classification', 'Text Translation'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium glass rounded-full glow-sm hover-elevate transition-all duration-300"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming & Tools */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 uppercase tracking-wider flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Programming & Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Jupyter', 'Git', 'Docker', 'SQL', 'HTML/CSS', 'Data Analysis', 'Model Deployment'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium glass rounded-full glow-sm hover-elevate transition-all duration-300"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
