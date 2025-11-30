import LogoLoop from "./LogoLoop";

const skills = [
  { node: "JavaScript", title: "JavaScript" },
  { node: "TypeScript", title: "TypeScript" },
  { node: "Python", title: "Python" },
  { node: "C++", title: "C++" },
  { node: "Java", title: "Java" },
  { node: "React", title: "React" },
  { node: "Flutter", title: "Flutter" },
  { node: "Node.js", title: "Node.js" },
  { node: "PostgreSQL", title: "PostgreSQL" },
  { node: "MongoDB", title: "MongoDB" },
  { node: "Docker", title: "Docker" },
  { node: "Git", title: "Git" },
  { node: "Unity", title: "Unity" },
  { node: "MATLAB", title: "MATLAB" },
  { node: "ROS", title: "ROS" },
  { node: "Linux", title: "Linux" }
];

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen bg-secondary flex items-center py-16 px-16 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold text-accent mb-12 tracking-tight">About</h2>

        {/* Skills Loop */}
        <div className="mb-12">
          <LogoLoop
            logos={skills}
            speed={80}
            logoHeight={24}
            gap={40}
            pauseOnHover={true}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-accent mb-4">ALEX MORALES TREVISAN</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Third-year Computer Science student with hands-on experience in collaborative software projects. Open to a range of software roles, with particular interest in machine learning, embedded systems, and web or app development. Skilled in applying programming fundamentals to build efficient, reliable solutions in team settings.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent mb-3">EDUCATION</h3>
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-accent">University of Puerto Rico, Mayagüez Campus</h4>
                <p className="text-muted-foreground">B.S. in Computer Science and Engineering</p>
                <p className="text-muted-foreground">Expected Graduation Date: May 2028</p>
                <p className="text-muted-foreground">GPA: 3.0</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent mb-3">Courses</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground"><strong>Programming:</strong> Data Structures and Algorithms, Object-Oriented Programming, Programming Languages</p>
                <p className="text-muted-foreground"><strong>Math:</strong> Calculus I - III, Linear Algebra, Differential equations</p>
                <p className="text-muted-foreground">Built Java and C++ projects with Git, Agile, and Scrum practices focused on efficient, team-based software development.</p>
                <p className="text-muted-foreground">Applied mathematical concepts to model systems, analyze data, and build strong foundations for software simulation and computational environments.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-3">EXPERIENCE</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-accent">LIDRON Research Team member</h4>
                  <p className="text-sm text-muted-foreground">August 2025 - Present</p>
                  <p className="text-muted-foreground mt-2">Developing an autonomous landing algorithm using ROS2, with C++ for flight control and landing logic and Python for a reinforcement learning model. Collecting and cleaning sensor data, including LiDAR point clouds, from onboard microcontrollers to train the RL model, integrating embedded systems and sensors for real-time perception, mapping, and control.</p>
                  <p className="text-sm text-muted-foreground mt-1"><strong>Skills:</strong> C++, ROS, RaspberryPI, Embedded Systems</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-accent">NSF Research Experience for Undergraduates</h4>
                  <p className="text-sm text-muted-foreground">May - August 2023</p>
                  <p className="text-muted-foreground mt-2">Conducted mathematical research in coding theory and combinatorics, applying discrete mathematics to solve theoretical and computational problems. Collaborated with faculty mentors and peers to design algorithms and analyze data structures. Developed analytical and problem-solving skills through projects in graph theory and error-correcting codes, relevant to software reliability and cryptography.</p>
                  <p className="text-sm text-muted-foreground mt-1"><strong>Skills:</strong> MATLAB, LATEX</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-accent mb-3">TECHNICAL PROJECTS</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-accent">Pronunciation Coach Application</h4>
                  <p className="text-muted-foreground mt-2">Led an 8-member team to build and deploy a full-stack cross-platform app using Flutter and Dart, following Scrum sprints and Git workflows. Designed the system architecture with a FastAPI backend, Supabase, and a PostgreSQL database. Developed and secured REST APIs with authentication, authorization, and rate limiting, ensuring reliable performance and scalable deployment.</p>
                  <p className="text-sm text-muted-foreground mt-1"><strong>Skills:</strong> Flutter, Dart, PostgreSQL, REST API, DevOps, SCRUM, GIT</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-accent">LaLiga Match Predictor</h4>
                  <p className="text-muted-foreground mt-2">Built a full-stack ML system using Python and scikit-learn for model development and data pipelines, leveraging pandas DataFrames for data cleaning, feature engineering, and analysis. Improved match prediction accuracy from 33% → 60% with a Random Forest model. Developed the front end in React, TypeScript, and TailwindCSS, with a PostgreSQL database, and fully deployed the platform.</p>
                  <p className="text-sm text-muted-foreground mt-1"><strong>Skills:</strong> Python, Sickit-Learn, ML, React, TypeScript, CSS, SQL databases, Pandas</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-accent">Home Server</h4>
                  <p className="text-muted-foreground mt-2">Built and maintain a headless Linux home server with Dockerized media services, secure network configuration, automated Bash scripts, and Pi-hole for ad filtering.</p>
                  <p className="text-sm text-muted-foreground mt-1"><strong>Skills:</strong> Docker, Linux, Bash, Networking</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-accent">SeFueLaLuz</h4>
                  <p className="text-muted-foreground mt-2">Solely designed and developed a complete Unity game in a one-week game jam, implementing all gameplay mechanics, enemy-chasing AI, and other systems entirely in C#.</p>
                  <p className="text-sm text-muted-foreground mt-1"><strong>Skills:</strong> Unity Game Engine, C#</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-accent/20">
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <span><strong>Email:</strong> alex.morales8@upr.edu</span>
            <span><strong>Phone:</strong> (787) 231 - 3640</span>
            <span><strong>GitHub:</strong> <a href="https://github.com/amtrevisan" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">amtrevisan</a></span>
            <span><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/alex-morales-dev/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">alex-morales-dev</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
