const experiences = [
  {
    id: 1,
    title: "LIDRON Research Team member",
    company: "University of Puerto Rico Mayagüez",
    period: "August 2025 - Present",
    skills: ["C++", "ROS", "RaspberryPI", "Embedded Systems"],
    description: "Developing an autonomous landing algorithm using ROS2, with C++ for flight control and landing logic and Python for a reinforcement learning model. Collecting and cleaning sensor data, including LiDAR point clouds, from onboard microcontrollers to train the RL model, integrating embedded systems and sensors for real-time perception, mapping, and control.",
    imagePlaceholder: "/Lidron.png",
    projectLink: "https://www.uprm.edu/cps-iot/lidron/"
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Tech Innovation Corp",
    period: "2021 - Present",
    skills: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    description: "Leading the development of scalable web applications and mentoring junior developers. Architected and implemented a microservices infrastructure that improved system reliability by 40%. Collaborated with cross-functional teams to deliver high-impact features.",
    imagePlaceholder: "Experience Image 2"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Digital Solutions Inc",
    period: "2019 - 2021",
    skills: ["JavaScript", "Python", "Django", "React", "Docker"],
    description: "Developed and maintained multiple client-facing applications serving thousands of users. Implemented CI/CD pipelines that reduced deployment time by 60%. Worked closely with designers to create intuitive user interfaces.",
    imagePlaceholder: "Experience Image 3"
  },
  {
    id: 4,
    title: "Junior Developer",
    company: "Startup Ventures",
    period: "2018 - 2019",
    skills: ["HTML", "CSS", "JavaScript", "Git", "Agile"],
    description: "Contributed to the development of the company's core product from the ground up. Participated in daily stand-ups and sprint planning sessions. Gained valuable experience in full software development lifecycle.",
    imagePlaceholder: "Experience Image 4"
  }
];

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="relative">
      {/* Section Header */}
      <div className="text-center py-12">
        <h2 className="text-4xl font-bold text-accent mb-4 tracking-tight">EXPERIENCES</h2>
        <div className="w-24 h-1 bg-accent/50 mx-auto"></div>
      </div>

      {experiences.map((exp, index) => (
        <div 
          key={exp.id}
          className={`relative h-screen flex overflow-hidden ${
            index % 2 === 0 ? "bg-primary" : "bg-secondary"
          }`}
        >
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}></div>
          </div>

          {/* Image Section - Full Half */}
          <div className={`relative z-10 w-1/2 h-full bg-secondary/30 border-accent/20 flex items-center justify-center ${
            index % 2 === 0 ? "border-r-2" : "border-l-2 order-2"
          }`}>
            {exp.imagePlaceholder.startsWith('/') ? (
              <img
                src={exp.imagePlaceholder}
                alt={`${exp.title} - ${exp.company}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-accent/50 text-xl font-medium">{exp.imagePlaceholder}</span>
            )}
          </div>

          {/* Content Section - Full Half */}
          <div className={`relative z-10 w-1/2 h-full flex flex-col justify-center px-16 ${
            index % 2 === 0 ? "" : "order-1"
          }`}>
            <div className="space-y-4">
              <div>
                <h3 className="text-4xl font-bold text-accent mb-2">{exp.title}</h3>
                <p className="text-xl text-muted-foreground">{exp.company}</p>
                <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/30 border border-accent/20 text-accent text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperiencesSection;
