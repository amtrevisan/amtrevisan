import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";

const Footer = () => {
  const [typingText, setTypingText] = useState("");
  const fullText = "Built with ❤️ and clean commits.";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-primary text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-body-sm text-background/80">
              © 2024 Alex Morales Trevisan | B.S. Computer Science & Engineering, UPR Mayagüez
            </p>
          </div>

          {/* Center - Typing animation */}
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-caption text-background/90">
              {typingText}
              {isTyping && <span className="animate-glow">|</span>}
            </span>
          </div>

          {/* Right side - Social links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/AlexMoralesDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-accent hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/alex-morales-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-accent hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:alex.morales8@upr.edu"
              className="text-background/80 hover:text-accent hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom border with accent */}
        <div className="mt-6 pt-4 border-t border-background/20">
          <div className="flex items-center justify-center gap-2 text-caption text-background/60">
            <Heart className="w-3 h-3 text-accent animate-pulse" />
            <span>Made with passion for clean code and beautiful design</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
