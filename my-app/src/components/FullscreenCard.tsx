import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  shortDescription: string;
  roles: string[];
  technologies: string[];
  date: string;
  liveUrl?: string;
  repoUrl?: string;
  colorAccent: string;
}

interface FullscreenCardProps {
  data: ProjectItem;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}

export const FullscreenCard = ({
  data,
  index,
  isActive,
  onActivate,
}: FullscreenCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isActive]);

  const accentColor = data.colorAccent.replace("neon", "neon-");

  const isEven = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      id={`project-${data.id}`}
      className={`min-h-screen snap-start flex items-center justify-center px-4 md:px-8 py-8 transition-all duration-700 ${
        isActive ? "opacity-100 scale-100" : "opacity-60 scale-95"
      }`}
      onClick={!isActive ? onActivate : undefined}
      role="article"
      aria-label={data.title}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onActivate();
        }
      }}
    >
      <div className="max-w-6xl w-full">
        <div
          className={`neon-border rounded bg-panel/50 backdrop-blur-sm p-6 md:p-10 transition-all duration-500 cursor-pointer hover:bg-panel/70 ${
            isActive ? "ring-2 ring-primary/50" : ""
          }`}
          style={{
            borderColor: `hsl(var(--${accentColor}) / 0.75)`,
          }}
        >
          {/* Alternating layout */}
          <div
            className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12`}
          >
            {/* Image/Visual placeholder - alternates sides */}
            <div className="flex-shrink-0 md:w-80">
              <div
                className="w-full aspect-video rounded neon-border flex items-center justify-center"
                style={{
                  borderColor: `hsl(var(--${accentColor}) / 0.5)`,
                  backgroundColor: `hsl(var(--${accentColor}) / 0.05)`,
                }}
              >
                <div className="text-center space-y-2 p-6">
                  <div
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl font-bold"
                    style={{
                      color: `hsl(var(--${accentColor}))`,
                      border: `2px solid hsl(var(--${accentColor}) / 0.5)`,
                    }}
                  >
                    {data.title.charAt(0)}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Project Visual
                  </p>
                </div>
              </div>
            </div>

            {/* Content - alternates sides */}
            <div className="flex-1 space-y-5">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-1 h-12 rounded-full"
                    style={{ backgroundColor: `hsl(var(--${accentColor}))` }}
                  />
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight animate-neon-write">
                      {data.title}
                    </h3>
                    <p className="text-base text-muted-foreground mt-1">
                      {data.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {data.roles.map((role) => (
                      <span
                        key={role}
                        className="px-2 py-1 text-xs font-medium rounded border"
                        style={{
                          borderColor: `hsl(var(--${accentColor}) / 0.5)`,
                          color: `hsl(var(--${accentColor}))`,
                          backgroundColor: `hsl(var(--${accentColor}) / 0.1)`,
                        }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {new Date(data.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                  {isActive ? data.description : data.shortDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-semibold text-muted-foreground mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-sm bg-secondary/50 text-secondary-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                {data.liveUrl && (
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="neon-border hover:bg-primary/10"
                  >
                    <a
                      href={data.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </Button>
                )}
                {data.repoUrl && (
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="neon-border hover:bg-primary/10"
                  >
                    <a
                      href={data.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
