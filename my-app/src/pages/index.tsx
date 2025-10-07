import Hero from "@/components/Hero";
import About from "@/components/About";
const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* This is a minimal Index.tsx file that only renders the Hero component.
        Components like CursorBubbles, About, Projects, Skills, Experience, and Contact 
        as well as the footer from the original file have been removed.
      */}
      <div className="relative z-10">
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default Index;
