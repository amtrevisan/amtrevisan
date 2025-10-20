import { Card } from "@/components/ui/card";
import { BookOpen, Code, Calculator } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const courseCategories = [
  {
    icon: Code,
    title: "Programming",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming", 
      "Programming Languages"
    ],
    description: "Built Java and C++ projects with Git, Agile, and Scrum practices focused on efficient, team-based software development."
  },
  {
    icon: Calculator,
    title: "Mathematics",
    courses: [
      "Calculus I - III",
      "Linear Algebra",
      "Differential Equations"
    ],
    description: "Applied mathematical concepts to model systems, analyze data, and build strong foundations for software simulation and computational environments."
  }
];

const Courses = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="courses" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-h2 font-display mb-4">
            Academic <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Relevant coursework that has shaped my technical foundation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courseCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className={`card-project p-6 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-h3 font-display text-gradient">{category.title}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-body-sm font-medium text-text-primary mb-2">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.courses.map((course, courseIndex) => (
                      <span key={courseIndex} className="tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-body-sm text-text-secondary">
                  {category.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;

