import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import StickerPeel from './StickerPeel';
import LogoLoop from "./LogoLoop";

const skills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", alt: "Flutter" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", alt: "Unity" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "Linux" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", alt: "FastAPI" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase" }
];

const ProfileBanner = () => {
  return (
    <section id="profile" className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden items-stretch">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className={`relative z-10 w-full md:w-1/2 h-64 md:h-full border-b-2 md:border-b-0 border-accent/20 flex items-center justify-center ${
        false ? "md:border-l-2 md:order-2" : "md:border-r-2"
      }`}>
        <img
          src="/ProfilePhoto.jpeg"
          alt="Alex Morales Trevisan"
          className="w-4/5 h-4/5 object-cover object-[50%_30%] rounded-lg"
        />
      </div>

      <div className="hidden md:block absolute inset-0 pointer-events-none z-50">
        <StickerPeel
          className="absolute top-[10vh] left-1/2 -translate-x-1/2 pointer-events-auto"
          imageSrc="/Flag_of_Puerto_Rico.svg"
          width={130}
          rotate={0}
          peelBackHoverPct={25}
          peelBackActivePct={40}
          peelDirection={320}
        />

        <StickerPeel
          className="absolute top-[60vh] left-1/2 -translate-x-1/2 pointer-events-auto"
          imageSrc="/coqui.svg"
          width={130}
          rotate={0}
          peelBackHoverPct={30}
          peelBackActivePct={45}
          peelDirection={320}
        />
      </div>

      <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-start md:items-center px-8 md:px-16 pt-16">
        <h1 className="text-4xl md:text-7xl font-bold text-accent mb-4 md:mb-6 tracking-tight leading-tight">
          Alex Morales<br />Trevisan
        </h1>

        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          <span className="text-accent text-base md:text-lg font-medium">Mayagüez, Puerto Rico</span>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-3">
          <a href="mailto:alex.morales8@upr.edu" className="backdrop-blur-sm bg-secondary/20 border border-accent/30 px-3 md:px-5 py-2 md:py-2.5 flex items-center gap-2 md:gap-2.5 transition-all hover:bg-secondary/30 hover:border-accent/50 text-xs md:text-sm rounded-md">
            <Mail className="w-3 h-3 md:w-4 md:h-4 text-accent" />
            <span className="text-accent font-medium">alex.morales8@upr.edu</span>
          </a>

          <a href="https://www.linkedin.com/in/alex-morales-dev/" target="_blank" rel="noopener noreferrer" className="backdrop-blur-sm bg-secondary/20 border border-accent/30 p-2 md:p-3 flex items-center justify-center transition-all hover:bg-secondary/30 hover:border-accent/50 w-10 h-10 md:w-12 md:h-12 rounded-md">
            <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          </a>

          <a href="https://github.com/amtrevisan" target="_blank" rel="noopener noreferrer" className="backdrop-blur-sm bg-secondary/20 border border-accent/30 p-2 md:p-3 flex items-center justify-center transition-all hover:bg-secondary/30 hover:border-accent/50 w-10 h-10 md:w-12 md:h-12 rounded-md">
            <Github className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          </a>
        </div>

        <div className="w-full mt-8 mb-8">
          <LogoLoop
            logos={skills}
            speed={40}
            logoHeight={32}
            gap={40}
            pauseOnHover={true}
            className="w-full"
          />
        </div>

        <div className="max-w-2xl text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a third year Computer Science and Engineering student at the University of Puerto Rico Mayagüez. I am born and raised here in Puerto Rico and I speak Spanish, English, and Portuguese fluently. I love building mobile and web apps and I am currently looking for software engineering internship opportunities to expand my skillset in all areas. I have worked with several programming languages, tools, and frameworks that you can explore throughout the rest of this portfolio. Outside of tech I like watching mind bending movies, listening to rock music, skateboarding, and spending time in nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileBanner;
