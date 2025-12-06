import NSFPoster from "./NSFPoster";
import LidronDrone from "./LidronDrone";

const experiences = [
  {
    id: 1,
    title: "Researcher",
    company: "Team Lidron",
    period: "August 2025 - Present",
    skills: ["Python", "C++", "ROS", "RaspberryPI", "Embedded Systems"],
    description: "Contributing to the development of autonomous landing solutions for LiDAR-equipped drones, focusing on perception, control, and navigation systems. Designing and implementing software modules using Python and ROS (Robot Operating System) for real-time sensor data processing and system integration. Working with embedded systems to ensure reliable communication and performance between onboard sensors and flight controllers. Collaborating with a multidisciplinary team to test, validate, and optimize landing algorithms in both simulated and real-world environments.",
    imagePlaceholder: "/Lidron.png",
    projectLink: "https://www.uprm.edu/cps-iot/lidron/"
  },
  {
    id: 2,
    title: "NSF Research Experience for Undergraduates",
    company: "University of Puerto Rico Mayagüez",
    period: "May - August 2023",
    skills: ["Research", "Data Analysis", "Academic Writing", "Python", "Machine Learning"],
    description: "Participated in the National Science Foundation Research Experience for Undergraduates program focused on Communication and Computation Theory. Conducted advanced research in signal processing and communication systems, developing algorithms for error correction and data transmission optimization. Analyzed complex datasets and presented findings at academic conferences.",
    imagePlaceholder: "NSFPoster"
  }
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="relative">
      {experiences.map((exp, index) => {
        const globalIndex = index;
        const isEven = globalIndex % 2 === 0;

        return (
          <div
            key={exp.id}
            className={`relative min-h-screen md:h-screen flex flex-col md:flex-row overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}></div>
            </div>

            <div className={`relative z-10 w-full md:w-1/2 h-64 md:h-full border-b-2 md:border-b-0 border-accent/20 flex items-center justify-center ${
              isEven ? "md:border-l-2 md:order-2" : "md:border-r-2"
            }`}>
              {exp.imagePlaceholder === '/Lidron.png' ? (
                <LidronDrone />
              ) : exp.imagePlaceholder === 'NSFPoster' ? (
                <NSFPoster />
              ) : exp.imagePlaceholder.startsWith('/') ? (
                exp.imagePlaceholder.endsWith('.pdf') ? (
                  <embed
                    src={exp.imagePlaceholder}
                    type="application/pdf"
                    width="80%"
                    height="80%"
                    className="rounded-lg"
                  />
                ) : (
                  <img
                    src={exp.imagePlaceholder}
                    alt={`${exp.title} - ${exp.company}`}
                    className="w-4/5 h-4/5 object-contain rounded-lg"
                  />
                )
              ) : (
                <span className="text-accent/50 text-lg md:text-xl font-medium">{exp.imagePlaceholder}</span>
              )}
            </div>

            <div className={`relative z-10 w-full md:w-1/2 min-h-96 md:h-full flex flex-col justify-center items-start px-6 md:px-16 py-8 md:py-0 ${
              isEven ? "md:order-1" : ""
            }`}>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-2xl md:text-4xl font-bold text-accent mb-2 md:mb-3">{exp.title}</h3>
                  <p className="text-lg md:text-xl text-muted-foreground mb-1 md:mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 md:px-3 py-1 md:py-1.5 bg-secondary/30 border border-accent/20 text-accent text-xs md:text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ExperiencesSection;
