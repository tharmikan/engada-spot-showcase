
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium">Engada Spot</h3>
            <p className="text-muted-foreground max-w-xs">
              Curating exceptional products with meticulous attention to detail and quality.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Navigate</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/products" label="Products" />
              <FooterLink to="/about" label="About" />
              <FooterLink to="/contact" label="Contact" />
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>contact@engadaspot.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Engada Spot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href}
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-background text-muted-foreground hover:text-primary hover:bg-background/80 transition-colors"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => {
  return (
    <Link 
      to={to}
      className="text-muted-foreground hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );
};

export default Footer;
