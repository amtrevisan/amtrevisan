import { Header } from "@/components/Header";
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
        <ExperienceSection />
      </main>
    </div>
  );
};

export default Index;
