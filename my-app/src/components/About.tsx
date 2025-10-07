import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Code2,
    title: "Research Experience",
    description:
      "Working on autonomous drones with LiDAR and computer vision, plus NSF research in coding theory",
  },
  {
    icon: Rocket,
    title: "Team Leadership",
    description:
      "Led 8-member team in full-stack development with Agile methodologies and CI/CD",
  },
  {
    icon: Users,
    title: "Diverse Projects",
    description:
      "From ML prediction models to Unity games, always exploring new technologies",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <h2 className="text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className={`glass-card p-8 mb-12 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a Computer Science and Engineering student at the University
              of Puerto Rico, Mayagüez Campus. Currently working with the LIDRON
              Research Team on autonomous drone development, focusing on
              LiDAR-based autonomous landing capabilities and computer vision
              techniques.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience spans from leading full-stack mobile development
              teams to conducting mathematical research in coding theory with
              the NSF Research Experience for Undergraduates program. I'm
              passionate about applying theoretical CS concepts to solve
              real-world problems, whether through machine learning, web
              development, or autonomous systems.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={highlight.title}
                  className={`glass-card p-6 text-center hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:glow-primary ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
