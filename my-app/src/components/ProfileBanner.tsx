import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import StickerPeel from './StickerPeel';

const ProfileBanner = () => {
  return (
    <section id="profile" className="relative w-full h-screen flex flex-col md:flex-row bg-primary overflow-hidden items-stretch">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23C2A84A" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      {/* Profile Picture - Top on mobile, left on desktop */}
      <div className="relative z-10 w-full md:w-1/2 h-80 md:h-[85vh] bg-secondary/30 border-b-2 md:border-b-0 md:border-r-2 border-accent/20 flex items-start md:items-center justify-center md:justify-start pt-8 md:pt-0 overflow-hidden">
        <img
          src="/ProfilePhoto.jpeg"
          alt="Alex Morales Trevisan"
          className="w-full h-full object-cover object-[50%_30%]"
        />

        {/* Mobile Stickers - Different positioning for mobile */}
        {/* Puerto Rico Flag - Mobile: Top Left */}
        <div className="absolute top-4 left-4 z-20 md:hidden">
          <StickerPeel
            imageSrc="/Flag_of_Puerto_Rico.svg"
            width={48}
            rotate={-15}
            peelBackHoverPct={15}
            peelBackActivePct={30}
            shadowIntensity={0.4}
            lightingIntensity={0.05}
            initialPosition={{ x: 0, y: 0 }}
          />
        </div>
        {/* Coqui Sticker - Mobile: Top Right */}
        <div className="absolute top-4 right-4 z-20 md:hidden">
          <StickerPeel
            imageSrc="/coqui.svg"
            width={64}
            rotate={20}
            peelBackHoverPct={15}
            peelBackActivePct={30}
            shadowIntensity={0.4}
            lightingIntensity={0.05}
            initialPosition={{ x: 0, y: 0 }}
          />
        </div>
      </div>

      {/* Desktop stickers - top and bottom, center horizontally */}
      {/* Top sticker */}
      <div className="hidden md:block absolute top-[10%] left-1/2 -translate-x-1/2 z-20">
        <StickerPeel
          imageSrc="/Flag_of_Puerto_Rico.svg"
          width={80}
          rotate={-10}
          peelBackHoverPct={20}
          peelBackActivePct={40}
          shadowIntensity={0.6}
          lightingIntensity={0.1}
          initialPosition={{ x: 0, y: 0 }}
        />
      </div>
      {/* Bottom sticker */}
      <div className="hidden md:block absolute bottom-[20%] left-1/2 -translate-x-1/2 z-20">
        <StickerPeel
          imageSrc="/coqui.svg"
          width={96}
          rotate={15}
          peelBackHoverPct={20}
          peelBackActivePct={40}
          shadowIntensity={0.6}
          lightingIntensity={0.1}
          initialPosition={{ x: 0, y: 0 }}
        />
      </div>

      {/* Info Section - Bottom on mobile, right on desktop */}
      <div className="relative z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-start md:items-center px-8 md:px-16">
        <h1 className="text-4xl md:text-7xl font-bold text-accent mb-4 md:mb-6 tracking-tight leading-tight">
          Alex Morales<br />Trevisan
        </h1>

        {/* Location */}
        <div className="flex items-center gap-2 mb-6 md:mb-8">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          <span className="text-accent text-base md:text-lg font-medium">Mayagüez, Puerto Rico</span>
        </div>

        {/* Social Badges */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {/* Email Badge */}
          <a
            href="mailto:alex.morales8@upr.edu"
            className="backdrop-blur-sm bg-secondary/20 border border-accent/30 px-3 md:px-5 py-2 md:py-2.5 flex items-center gap-2 md:gap-2.5 transition-all hover:bg-secondary/30 hover:border-accent/50 text-xs md:text-sm"
          >
            <Mail className="w-3 h-3 md:w-4 md:h-4 text-accent" />
            <span className="text-accent font-medium">alex.morales8@upr.edu</span>
          </a>

          {/* LinkedIn Badge */}
          <a
            href="https://www.linkedin.com/in/alex-morales-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-sm bg-secondary/20 border border-accent/30 p-2 md:p-3 flex items-center justify-center transition-all hover:bg-secondary/30 hover:border-accent/50 w-10 h-10 md:w-12 md:h-12"
          >
            <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          </a>

          {/* GitHub Badge */}
          <a
            href="https://github.com/amtrevisan"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-sm bg-secondary/20 border border-accent/30 p-2 md:p-3 flex items-center justify-center transition-all hover:bg-secondary/30 hover:border-accent/50 w-10 h-10 md:w-12 md:h-12"
          >
            <Github className="w-4 h-4 md:w-5 md:h-5 text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileBanner;
