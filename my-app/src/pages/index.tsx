import { Header } from "@/components/Header";
import { ProfileSection } from "@/components/ProfileSection";
import { ExperienceSection } from "@/components/ExperienceSection";

const Index = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <Header />
      <main>
        <ProfileSection onScrollToProjects={scrollToProjects} />
        <ExperienceSection />
      </main>
    </div>
  );
};

export default Index;
