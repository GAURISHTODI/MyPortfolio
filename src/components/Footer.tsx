import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 backdrop-blur-xl border-t border-glass-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-black mb-2">Gaurish Todi</h3>
            <p className="text-muted-foreground text-sm">
              CSE Student & Developer<br />
              Building tomorrow's solutions today
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 hover:shadow-accent smooth-transition hover:scale-110"
            >
              <Github className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 hover:shadow-accent smooth-transition hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-foreground" />
            </a>
            <a 
              href="mailto:gaurish.todi@example.com"
              className="glass-card p-3 hover:shadow-accent smooth-transition hover:scale-110"
            >
              <Mail className="h-5 w-5 text-foreground" />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> by Gaurish Todi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;