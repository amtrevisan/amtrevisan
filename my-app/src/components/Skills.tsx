import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C++", "C#", "JavaScript", "TypeScript", "Dart", "MATLAB"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["Flutter", "Unity", "React", "ROS", "Scikit-Learn", "Pandas", "Docker", "Linux"],
  },
  {
    category: "Development Practices",
    skills: ["Git", "CI/CD", "Agile/Scrum", "DevOps", "Bash Scripting", "LaTeX", "PostgreSQL", "Supabase"],
  },
  {
    category: "Specializations",
    skills: ["Machine Learning", "Computer Vision", "LiDAR", "Autonomous Systems", "Sensor Fusion", "Embedded Systems", "Data Analysis"],
  },
  {
    category: "Core CS",
    skills: ["Algorithms", "Data Structures", "Software Engineering", "System Design", "Graph Theory", "Coding Theory", "Combinatorics"],
  },
  {
    category: "Mathematics",
    skills: ["Calculus", "Linear Algebra", "Differential Equations", "Discrete Mathematics", "Error-Correcting Codes", "Cryptography"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-h2 font-display mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Technologies I work with and continue to learn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`card-project p-6 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-h3 font-display mb-4 text-gradient">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="tag hover:bg-primary/20 hover:text-primary hover:scale-110 transition-all cursor-pointer duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
