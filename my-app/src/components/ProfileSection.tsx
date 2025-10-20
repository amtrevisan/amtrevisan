import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileSectionProps {
  onScrollToProjects: () => void;
}

export const ProfileSection = ({ onScrollToProjects }: ProfileSectionProps) => {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center snap-start px-4 md:px-8"
    >
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 animate-slide-up-fade">
          {/* Avatar with neon rim - LEFT SIDE */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden neon-border relative animate-neon-pulse">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20" />
              <div className="absolute inset-4 rounded-full bg-panel flex items-center justify-center text-8xl md:text-9xl font-bold text-primary">
                A
              </div>
            </div>
          </div>

          {/* Text content - RIGHT SIDE */}
          <div className="flex-1 space-y-6 text-left">
            {/* Name and headline */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight overflow-hidden">
                <span className="light-cycle-write inline-block">
                  Alex Morales Trevisan
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
                ML Engineer & Game Developer
              </p>
            </div>

            {/* About */}
            <div className="max-w-2xl">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Building intelligent systems that learn and adapt. Specializing
                in reinforcement learning, autonomous robotics, and game AI.
                Currently exploring the intersection of simulation and
                real-world deployment.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                onClick={onScrollToProjects}
                size="lg"
                className="group neon-border bg-transparent hover:bg-primary/10 text-primary hover:text-primary transition-all duration-300"
              >
                View Projects
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
