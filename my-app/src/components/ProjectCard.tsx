import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="card-project overflow-hidden group cursor-pointer relative"
      style={{
        transform: isHovered
          ? "rotateX(5deg) rotateY(5deg) translateY(-10px)"
          : "rotateX(0deg) rotateY(0deg) translateY(0)",
        transformStyle: "preserve-3d",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-h3 font-display mb-2 text-gradient">{title}</h3>
        <p className="text-body-sm text-text-secondary mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {githubUrl && (
            <Button
              variant="secondary"
              size="sm"
              className="gap-2"
              onClick={() => window.open(githubUrl, "_blank")}
            >
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="primary"
              size="sm"
              className="gap-2"
              onClick={() => window.open(liveUrl, "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
