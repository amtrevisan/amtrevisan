import projectsData from "@/content/projects.json";
import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = projectsData.experiences;

  return (
    <section
      id="experience"
      className="min-h-screen snap-start flex items-center justify-center px-4 py-16"
    >
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold neon-text mb-4 animate-neon-write">
            Experience
          </h2>
          <p className="text-muted-foreground">
            Building the future, one project at a time
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="neon-border rounded bg-panel/50 backdrop-blur-sm p-6 md:p-8 hover:bg-panel/70 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-primary/10 border border-primary/30">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-lg text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {new Date(exp.startDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}{" "}
                      -{" "}
                      {exp.endDate === "Present"
                        ? "Present"
                        : new Date(exp.endDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-foreground/80"
                      >
                        <span className="text-primary mt-1.5 text-xs">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-sm bg-secondary/50 text-secondary-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
