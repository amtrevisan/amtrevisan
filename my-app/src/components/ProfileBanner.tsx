import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ProfileBanner = () => {
  return (
    <section className="relative w-full h-screen flex bg-primary overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      {/* Profile Picture - Full Left Side */}
      <div className="relative z-10 w-1/2 h-full bg-secondary/30 border-r-2 border-accent/20 flex items-center justify-center">
        <img
          src="/ProfilePhoto.jpeg"
          alt="Alex Morales Trevisan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section - Full Right Side */}
      <div className="relative z-10 w-1/2 h-full flex flex-col justify-center px-16">
        <h1 className="text-7xl font-bold text-accent mb-6 tracking-tight leading-tight">
          Alex Morales<br />Trevisan
        </h1>

        {/* Location */}
        <div className="flex items-center gap-2 mb-8">
          <MapPin className="w-5 h-5 text-accent" />
          <span className="text-accent text-lg font-medium">Mayagüez, Puerto Rico</span>
          <img
            src="/Flag_of_Puerto_Rico.svg"
            alt="Puerto Rico Flag"
            className="w-6 h-4 inline-block ml-1"
          />
        </div>

        {/* Social Badges */}
        <div className="flex flex-wrap gap-3">
          {/* Email Badge */}
          <a 
            href="mailto:alex.morales8@upr.edu"
            className="backdrop-blur-sm bg-secondary/20 border border-accent/30 px-5 py-2.5 flex items-center gap-2.5 transition-all hover:bg-secondary/30 hover:border-accent/50"
          >
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium">alex.morales8@upr.edu</span>
          </a>

          {/* LinkedIn Badge */}
          <a
            href="https://www.linkedin.com/in/alex-morales-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-sm bg-secondary/20 border border-accent/30 p-3 flex items-center justify-center transition-all hover:bg-secondary/30 hover:border-accent/50 w-12 h-12"
          >
            <Linkedin className="w-5 h-5 text-accent" />
          </a>

          {/* GitHub Badge */}
          <a
            href="https://github.com/amtrevisan"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-sm bg-secondary/20 border border-accent/30 p-3 flex items-center justify-center transition-all hover:bg-secondary/30 hover:border-accent/50 w-12 h-12"
          >
            <Github className="w-5 h-5 text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileBanner;
