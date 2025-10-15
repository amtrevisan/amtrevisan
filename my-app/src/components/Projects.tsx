import ProjectCard from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "La Liga Match Predictor",
    description:
      "A full-stack machine learning web app that predicts Spanish La Liga match outcomes using statistical modeling and real-time data. Built with Python (Random Forest Classifier with 300 trees) for the prediction engine and React + TypeScript for the frontend. Features automated prediction updates, performance tracking with historical accuracy metrics, and a clean responsive interface styled with Tailwind CSS. Improved match prediction accuracy from 33% → 60% through feature engineering with team form, goal statistics, and head-to-head history.",
    image: "/LaLigaDemo.gif",
    tags: [
      "Python",
      "Scikit-Learn",
      "React",
      "TypeScript",
      "Random Forest",
      "ML",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/AlexMoralesDev/LaLigaMatchPredictor",
    liveUrl: "https://laligapredictor.netlify.app",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-h2 font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-700 max-w-md ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
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
