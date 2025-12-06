                        import { ExternalLink, Github } from "lucide-react";
import MacBook from "./MacBook";
import IPhone from "./iPhone";
import ServerCPU from "./ServerCPU";

const projects = [
  {
    id: 1,
    title: "LaLiga Match Predictor",
    skills: ["Python", "Scikit-Learn", "ML", "React", "TypeScript", "CSS", "SQL databases", "Pandas"],
    description: "Built a full-stack ML system using Python and scikit-learn for model development and data pipelines, leveraging pandas DataFrames for data cleaning, feature engineering, and analysis. Improved match prediction accuracy from 33% → 60% with a Random Forest model. Developed the front end in React, TypeScript, and TailwindCSS, with a PostgreSQL database, and fully deployed the platform.",
    imagePlaceholder: "LaLiga Predictor",
    projectLink: "#",
    githubLink: "#"
  },

  {
    id: 3,
    title: "Pronunciation Coach Application",
    skills: ["Flutter", "Dart", "PostgreSQL", "REST API", "DevOps", "SCRUM", "GIT"],
    description: "Led an 8-member team to build and deploy a full-stack cross-platform app using Flutter and Dart, following Scrum sprints and Git workflows. Designed the system architecture with a FastAPI backend, Supabase, and a PostgreSQL database. Developed and secured REST APIs with authentication, authorization, and rate limiting, ensuring reliable performance and scalable deployment.",
    imagePlaceholder: "Pronunciation Coach",
    projectLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Home Server",
    skills: ["Docker", "Linux", "Bash", "Networking"],
    description: "Built and maintain a headless Linux home server with Dockerized media services, secure network configuration, automated Bash scripts, and Pi-hole for ad filtering.",
    imagePlaceholder: "Home Server",
    projectLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "SeFueLaLuz",
    skills: ["Unity Game Engine", "C#"],
    description: "Solely designed and developed a complete Unity game in a one-week game jam, implementing all gameplay mechanics, enemy-chasing AI, and other systems entirely in C#.",
    imagePlaceholder: "SeFueLaLuz Game",
    projectLink: "#",
    githubLink: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      {projects.map((project, index) => {
        const globalIndex = index + 2;
        const isEven = globalIndex % 2 === 0;

        return (
          <div
            key={project.id}
            className={`relative min-h-screen md:h-screen flex flex-col md:flex-row overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}></div>
            </div>

            <div className={`relative z-10 w-full md:w-1/2 h-64 md:h-full border-b-2 md:border-b-0 border-accent/20 flex items-center justify-center ${
              isEven ? "md:border-l-2 md:order-2" : "md:border-r-2"
            }`}>
              {project.id === 1 ? (
                <MacBook />
              ) : project.id === 3 ? (
                <IPhone />
              ) : project.id === 4 ? (
                <ServerCPU />
              ) : (
                <span className="text-accent/50 text-lg md:text-xl font-medium">{project.imagePlaceholder}</span>
              )}
            </div>

            <div className={`relative z-10 w-full md:w-1/2 min-h-96 md:h-full flex flex-col ${
              project.id === 4 ? "justify-end" : "justify-center"
            } items-start px-6 md:px-16 py-8 md:py-0 ${
              isEven ? "md:order-1" : ""
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

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="backdrop-blur-sm bg-accent/20 border border-accent/30 px-4 py-2.5 flex items-center justify-center gap-2 transition-all hover:bg-accent/30 hover:border-accent/50 rounded-md"
                  >
                    <ExternalLink className="w-4 h-4 text-accent" />
                    <span className="text-accent text-sm font-medium">View Project</span>
                  </a>

                  {project.githubLink && project.githubLink !== "" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="backdrop-blur-sm bg-accent/20 border border-accent/30 px-4 py-2.5 flex items-center justify-center gap-2 transition-all hover:bg-accent/30 hover:border-accent/50 rounded-md"
                    >
                      <Github className="w-4 h-4 text-accent" />
                      <span className="text-accent text-sm font-medium">GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsSection;
