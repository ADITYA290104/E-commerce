import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "@/assets/modex-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* About Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={logo} alt="ModeX" className="h-12 w-12" />
            <span className="text-2xl font-display font-bold text-gradient">ModeX</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            ModeX is a premium sports clothing brand dedicated to empowering athletes with cutting-edge 
            performance wear. We blend innovative technology with bold design to help you push your limits 
            and achieve greatness. From the gym to the streets, ModeX delivers style that performs.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-primary"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:glow-secondary"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-primary"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-all duration-300 hover:glow-secondary"
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ModeX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
