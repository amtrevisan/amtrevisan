import LogoLoop from "./LogoLoop";

const skills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", alt: "Unity" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg", alt: "MATLAB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "Linux" }
];

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-[70vh] bg-secondary flex items-center py-16 px-8 overflow-hidden w-full">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-accent mb-12 tracking-tight text-center">About Me</h2>

        {/* Skills Loop */}
        <div className="mb-16">
          <LogoLoop
            logos={skills}
            speed={40}
            logoHeight={48}
            gap={60}
            pauseOnHover={true}
            className="w-full [&_img]:filter [&_img]:sepia [&_img]:hue-rotate-[25deg] [&_img]:saturate-[0.8] [&_img]:brightness-[0.9]"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-xl text-muted-foreground leading-relaxed">
            I am a third year Computer Science and Engineering student at the University of Puerto Rico Mayagüez. I am born and raised here in Puerto Rico and I speak Spanish, English, and Portuguese fluently.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I love building mobile and web apps and I am currently looking for software engineering internship opportunities to expand my skillset in all areas. I have worked with several programming languages, tools, and frameworks that you can explore throughout the rest of this portfolio.
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Outside of tech I like watching mind bending movies, listening to rock music, skateboarding, and spending time in nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
