import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C++", "C#", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Tools",
    skills: ["Flutter", "Unity", "React", "Git", "CI/CD", "Agile/Scrum"],
  },
  {
    category: "Specializations",
    skills: ["Machine Learning", "Computer Vision", "LiDAR", "Autonomous Systems", "Sensor Fusion"],
  },
  {
    category: "Core CS",
    skills: ["Algorithms", "Data Structures", "Software Engineering", "System Design", "Graph Theory"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with and continue to learn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`glass-card p-6 rounded-lg hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="glass-card hover:glow-primary hover:scale-110 hover:bg-primary/20 transition-all cursor-pointer text-sm px-3 py-1 duration-300"
                  >
                    {skill}
                  </Badge>
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
