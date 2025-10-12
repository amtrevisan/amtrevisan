import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Code2,
    title: "Research Experience",
    description:
      "LIDRON Research Team member developing LiDAR-based autonomous landing algorithms in ROS and Python for real-time perception, mapping, and navigation on Raspberry Pi powered drones",
  },
  {
    icon: Rocket,
    title: "Team Leadership",
    description:
      "Led 8-member team to deliver full-stack cross-platform app using Flutter and Dart, enabling 100% of planned features to be deployed on schedule through Scrum sprints and DevOps practices",
  },
  {
    icon: Users,
    title: "Diverse Projects",
    description:
      "From ML prediction models (33% → 60% accuracy improvement) to Unity game development, always exploring new technologies and applying programming fundamentals",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <h2 className="text-h2 font-display mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className={`card-project p-8 mb-12 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <p className="text-body text-text-secondary leading-relaxed mb-4">
              I'm a third-year Computer Science and Engineering student at the University
              of Puerto Rico, Mayagüez Campus with a GPA of 3.0. Currently working with the LIDRON
              Research Team on autonomous drone development, focusing on
              LiDAR-based autonomous landing capabilities, computer vision
              techniques, and embedded systems integration.
            </p>
            <p className="text-body text-text-secondary leading-relaxed">
              My experience spans from leading full-stack mobile development
              teams to conducting mathematical research in coding theory with
              the NSF Research Experience for Undergraduates program. I'm
              passionate about applying theoretical CS concepts to solve
              real-world problems, whether through machine learning, web
              development, or autonomous systems. I'm open to a range of software roles,
              with particular interest in machine learning, embedded systems, and web or app development.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={highlight.title}
                  className={`card-project p-6 text-center hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-h3 font-display mb-2">{highlight.title}</h3>
                  <p className="text-body-sm text-text-secondary">
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
