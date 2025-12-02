import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    skills: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
    description: "A full-stack e-commerce platform with real-time inventory management, secure payment processing, and advanced analytics dashboard. Built with scalability in mind to handle thousands of concurrent users. Features include product recommendations, wishlist functionality, and multi-language support.",
    imagePlaceholder: "Project Image 1",
    projectLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    skills: ["TypeScript", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    description: "An interactive data visualization tool that transforms complex datasets into meaningful insights. Implemented custom charts and graphs with real-time updates. Integrated with multiple data sources and provides exportable reports in various formats.",
    imagePlaceholder: "Project Image 2",
    projectLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    skills: ["React Native", "Redux", "Firebase", "Healthcare APIs"],
    description: "A cross-platform mobile application for fitness tracking and workout planning. Features include personalized workout recommendations, progress tracking, social sharing, and integration with wearable devices. Achieved 4.8-star rating with over 10,000 downloads.",
    imagePlaceholder: "Project Image 3",
    projectLink: "#",
    githubLink: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      {/* Section Header */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-accent mb-4 tracking-tight">PROJECTS</h2>
        <div className="w-24 h-1 bg-accent/50 mx-auto"></div>
      </div>

      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`relative min-h-screen md:h-screen flex flex-col md:flex-row overflow-hidden ${
            index % 2 === 0 ? "bg-secondary" : "bg-primary"
          }`}
        >
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}></div>
          </div>

          {/* Image Section - Full width on mobile, half on desktop */}
          <div className={`relative z-10 w-full md:w-1/2 h-64 md:h-full bg-secondary/30 border-b-2 md:border-b-0 border-accent/20 md:border-r-2 flex items-center justify-center ${
            index % 2 === 0 ? "md:border-r-2" : "md:border-l-2 md:order-2"
          }`}>
            <span className="text-accent/50 text-lg md:text-xl font-medium">{project.imagePlaceholder}</span>
          </div>

          {/* Content Section - Full width on mobile, half on desktop */}
          <div className={`relative z-10 w-full md:w-1/2 min-h-96 md:h-full flex flex-col justify-center px-6 md:px-16 py-8 md:py-0 ${
            index % 2 === 0 ? "" : "md:order-1"
          }`}>
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-4xl font-bold text-accent">{project.title}</h3>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 md:px-3 py-1 md:py-1.5 bg-secondary/30 border border-accent/20 text-accent text-xs md:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Project Links */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm bg-accent/20 border border-accent/30 px-4 py-2.5 flex items-center justify-center gap-2 transition-all hover:bg-accent/30 hover:border-accent/50"
                >
                  <ExternalLink className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-medium">View Project</span>
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="backdrop-blur-sm bg-accent/20 border border-accent/30 px-4 py-2.5 flex items-center justify-center gap-2 transition-all hover:bg-accent/30 hover:border-accent/50"
                >
                  <Github className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;
