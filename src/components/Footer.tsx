
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Mail, Phone, Coffee, CupSoda } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-tea-green text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-tea-yellow rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/fc15208b-e0a1-43cb-aa71-427832095d2a.png" 
                  alt="Engada Spot Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-serif text-xl font-medium">Engada Spot</h3>
            </div>
            <p className="text-tea-yellow/90 max-w-xs">
              Serving aromatic teas, coffee delights, savory rolls, and sweet treats with love and passion.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-tea-yellow">Navigate</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/products" label="Menu" />
              <FooterLink to="/about" label="About" />
              <FooterLink to="/contact" label="Contact" />
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-tea-yellow">Contact</h4>
            <div className="space-y-2 text-primary-foreground/90">
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>hello@engadaspot.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-tea-yellow/20 text-center text-sm text-primary-foreground/70">
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
      className="w-8 h-8 flex items-center justify-center rounded-full bg-tea-yellow text-tea-green hover:bg-tea-yellow/80 transition-colors"
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
      className="text-primary-foreground/80 hover:text-tea-yellow transition-colors"
    >
      {label}
    </Link>
  );
};

export default Footer;
