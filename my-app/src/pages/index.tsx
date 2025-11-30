import { useState, useEffect } from "react";
import ProfileBanner from "@/components/ProfileBanner";
import StickyNavigation from "@/components/StickyNavigation";
import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ProjectsSection from "@/components/ProjectsSection";
import PlantSeparator from "@/components/PlantSeparator";

const Index = () => {
  const [activeSection, setActiveSection] = useState("About");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experiences", "projects"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-primary min-h-screen">
      <ProfileBanner />
      <StickyNavigation onNavigate={handleNavigate} activeSection={activeSection} />
      <PlantSeparator />
      <AboutSection />
      <PlantSeparator />
      <ExperiencesSection />
      <PlantSeparator />
      <ProjectsSection />
    </div>
  );
};

export default Index;
