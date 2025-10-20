import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Name */}
        <button
          onClick={() => scrollToSection("profile")}
          className="text-lg font-semibold tracking-wider neon-text hover:opacity-80 transition-opacity"
        >
          AMT
        </button>

        {/* Navigation links - always visible */}
        <div className="flex items-center gap-6">
          {[
            { id: "profile", label: "Profile" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-2 transition-colors hover:text-primary"
              aria-label={`Go to ${section.label}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-all group-hover:animate-neon-pulse" />
              <span className="text-sm font-medium text-foreground/70 group-hover:text-primary transition-colors">
                {section.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};
