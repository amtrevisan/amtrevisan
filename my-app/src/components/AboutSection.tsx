const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen bg-secondary flex items-center py-16 px-16 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-accent mb-8 tracking-tight">About Me</h2>
        <div className="space-y-5">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a passionate professional dedicated to creating meaningful experiences through thoughtful design 
            and innovative solutions. With a deep commitment to excellence and continuous learning, I strive to 
            push boundaries and deliver exceptional results.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines technical expertise with creative problem-solving, always keeping the end user 
            at the center of everything I do. I believe in the power of collaboration and the importance of 
            building systems that are both beautiful and functional.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not working, I enjoy exploring new technologies, contributing to open-source projects, 
            and staying up-to-date with the latest industry trends and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
