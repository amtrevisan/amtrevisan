import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Third-year CS Student & Developer at UPR Mayagüez";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-18">
      {/* Animated background gradient with parallax */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />

      {/* Multiple floating elements with different animations */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <h1 className="text-h1 md:text-8xl font-display mb-6">
          Hi, I'm <span className="text-gradient">Alex Morales</span>
        </h1>

        <div className="h-12 mb-8">
          <p className="text-2xl md:text-3xl text-text-secondary font-body">
            {text}
            <span className="animate-glow">|</span>
          </p>
        </div>

        <p className="text-body text-text-secondary mb-12 max-w-2xl mx-auto">
          Third-year Computer Science student with hands-on experience in collaborative software projects. 
          Open to a range of software roles, with particular interest in machine learning, embedded systems, 
          and web or app development. Skilled in applying programming fundamentals to build efficient, 
          reliable solutions in team settings.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            variant="primary"
            size="lg"
            className="gap-2 hover:scale-105 transition-transform relative overflow-hidden group"
            onClick={() =>
              window.open("https://github.com/AlexMoralesDev", "_blank")
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Github className="w-5 h-5 relative z-10" />
            <span className="relative z-10">GitHub</span>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 hover:scale-105 transition-transform"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/alex-morales-dev/",
                "_blank",
              )
            }
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="gap-2 hover:scale-105 transition-transform"
            onClick={() =>
              (window.location.href = "mailto:alex.morales8@upr.edu")
            }
          >
            <Mail className="w-5 h-5" />
            Contact
          </Button>
        </div>

        <button
          onClick={scrollToProjects}
          className="animate-bounce-subtle text-text-secondary hover:text-primary transition-colors"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
