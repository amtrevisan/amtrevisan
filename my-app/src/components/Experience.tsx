import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    title: "LIDRON Research Team Member",
    organization: "University of Puerto Rico, Mayagüez",
    period: "August 2024 - Present",
    description: [
      "Contributing to autonomous drone development with focus on LiDAR-based autonomous landing capabilities",
      "Applying computer vision and sensor fusion techniques for real-time environmental mapping",
      "Collaborating on algorithm development for autonomous navigation and landing systems"
    ],
  },
  {
    title: "NSF Research Experience for Undergraduates",
    organization: "National Science Foundation",
    period: "May - August 2023",
    description: [
      "Conducted mathematical research in coding theory and combinatorics",
      "Collaborated with faculty mentors to design algorithms and analyze data structures",
      "Developed analytical skills through projects in graph theory and error-correcting codes"
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4">
            Research & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in computer science and research
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title}
              className={`glass-card p-8 hover:scale-102 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.organization}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}

          {/* Education Card */}
          <Card
            className={`glass-card p-8 hover:scale-102 hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gradient mb-2">B.S. in Computer Science and Engineering</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>University of Puerto Rico, Mayagüez Campus</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Expected Graduation: 2028</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
