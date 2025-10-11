import ProjectCard from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Pronunciation Coach App",
    description: "Led an 8-member team to build a full-stack cross-platform mobile application. Streamlined Git workflows and sprint planning using Agile methodologies to deliver on schedule.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    tags: ["Flutter", "Full-Stack", "Git", "CI/CD", "Agile"],
    githubUrl: "https://github.com/AlexMoralesDev",
    liveUrl: "#",
  },
  {
    title: "LaLiga Match Predictor",
    description: "Developed a machine learning model trained on 500+ historical matches, achieving approximately 65% accuracy in predicting match outcomes using Python.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop",
    tags: ["Python", "Machine Learning", "Data Analysis", "Pandas"],
    githubUrl: "https://github.com/AlexMoralesDev",
    liveUrl: "#",
  },
  {
    title: "Se Fue La Luz",
    description: "Designed and developed a complete Unity game during a one-week game jam. Independently handled gameplay mechanics, UI design, and final polish.",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=400&fit=crop",
    tags: ["C#", "Unity", "Game Development", "Game Jam"],
    githubUrl: "https://github.com/AlexMoralesDev",
    liveUrl: "#",
  },
  {
    title: "DiamondSeats",
    description: "Built a comprehensive Java application managing 2,000+ seats with dynamic pricing algorithms and real-time reservation tracking system.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=400&fit=crop",
    tags: ["Java", "Data Structures", "Algorithms", "System Design"],
    githubUrl: "https://github.com/AlexMoralesDev",
    liveUrl: "#",
  },
  {
    title: "LIDRON Autonomous Drone",
    description: "Contributing to autonomous drone development with focus on LiDAR-based landing. Applying computer vision and sensor fusion for real-time environmental mapping.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=400&fit=crop",
    tags: ["Computer Vision", "LiDAR", "Autonomous Systems", "Python"],
    githubUrl: "https://github.com/AlexMoralesDev",
    liveUrl: "#",
  },
  {
    title: "NSF REU Research",
    description: "Conducted mathematical research in coding theory and combinatorics. Designed algorithms and analyzed data structures for error-correcting codes and cryptography applications.",
    image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=800&h=400&fit=crop",
    tags: ["Python", "Algorithms", "Graph Theory", "Research"],
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
