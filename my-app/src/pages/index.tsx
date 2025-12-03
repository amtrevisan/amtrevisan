import { useState, useEffect } from "react";
import ProfileBanner from "@/components/ProfileBanner";
import LiquidGlassNav from "@/components/LiquidGlassNav";
import ExperiencesSection from "@/components/ExperiencesSection";
import ProjectsSection from "@/components/ProjectsSection";


const Index = () => {
  const [activeSection, setActiveSection] = useState("Profile");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["profile", "experiences", "projects"];
      const scrollPosition = window.scrollY + 150; // Adjusted offset

      // Find which section we're currently in
      let currentSection = "Profile"; // Default

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            currentSection = section.charAt(0).toUpperCase() + section.slice(1);
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: 'Profile', link: '#profile' },
    { label: 'Experiences', link: '#experiences' },
    { label: 'Projects', link: '#projects' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Add more padding for fixed nav bar */}
      <div style={{ paddingTop: '120px' }}>
        {/* Profile Banner */}
        <div id="profile">
          <ProfileBanner />
        </div>

        {/* Liquid Glass Navigation Bar */}
        <LiquidGlassNav items={navItems} activeSection={activeSection} />

        <div id="experiences">
          <ExperiencesSection />
        </div>

        <div id="projects">
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
