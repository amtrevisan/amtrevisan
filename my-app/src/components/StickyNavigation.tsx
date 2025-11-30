import { useState, useEffect } from "react";

interface StickyNavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const StickyNavigation = ({ onNavigate, activeSection }: StickyNavigationProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["About", "Experiences", "Projects"];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isSticky ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-center gap-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => onNavigate(section)}
              className={`px-8 py-3 text-sm font-medium tracking-wide transition-all ${
                activeSection === section
                  ? "bg-accent text-primary"
                  : "bg-secondary/30 text-accent border border-accent/20 hover:bg-secondary/50 hover:border-accent/40"
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default StickyNavigation;
