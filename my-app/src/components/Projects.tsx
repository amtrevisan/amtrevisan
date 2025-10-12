import ProjectCard from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "LaLiga Match Predictor",
    description: "Built a full-stack ML system using Python and scikit-learn for model development and data pipelines, leveraging pandas DataFrames for data cleaning, feature engineering, and analysis. Improved match prediction accuracy from 33% → 60% with a Random Forest model. Developed the front end in React, TypeScript, and TailwindCSS, with a PostgreSQL database, and fully deployed the platform.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
    tags: ["Python", "Scikit-Learn", "React", "TypeScript", "PostgreSQL", "ML"],
    githubUrl: "https://github.com/AlexMoralesDev",
    liveUrl: "#",
  },
  {
    title: "Pronunciation Coach Application",
    description: "Led an 8-member team to deliver a full-stack cross-platform app using Flutter and Dart, enabling 100% of planned features to be deployed on schedule by implementing Scrum sprints and streamlined Git workflows and DevOps practices. Managed a Supabase backend, PostgreSQL database, secure authentication, and responsive front-end development.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    tags: ["Flutter", "Dart", "Full-Stack", "SCRUM", "DevOps", "Supabase"],
    githubUrl: "https://github.com/AlexMoralesDev",
    liveUrl: "#",
  },
  {
    title: "Home Server",
    description: "Built and maintain a personal home server using a headless Linux distribution, deploying media services in Docker containers and managing operations with Bash scripting.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["Docker", "Linux", "Bash", "DevOps", "System Administration"],
    githubUrl: "https://github.com/AlexMoralesDev",
    liveUrl: "#",
  },
  {
    title: "Se Fue La Luz",
    description: "Solely designed and developed a complete Unity game in a one-week game jam, implementing all gameplay mechanics, enemy-chasing AI, and other systems entirely in C#.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=400&fit=crop",
    tags: ["Unity", "C#", "Game Development", "Game Jam", "AI"],
    githubUrl: "https://github.com/AlexMoralesDev",
    liveUrl: "#",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-h2 font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
