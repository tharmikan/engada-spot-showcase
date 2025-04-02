
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, Coffee, CupSoda } from "lucide-react";

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
              <SocialLink 
                href="https://www.tiktok.com/@engada_spot?_t=ZS-8vC2Kr3K2Ce&_r=1" 
                icon={<TikTokIcon size={18} />} 
                label="TikTok" 
              />
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
                <span>engadaspot@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+94774466452</span>
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

// Custom TikTok icon since it's not available in lucide-react
const TikTokIcon: React.FC<{ size?: number }> = ({ size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.166v13.95c0 1.208-.985 2.19-2.19 2.19-1.208 0-2.19-.982-2.19-2.19s.982-2.19 2.19-2.19c.084 0 .166.006.25.015v-3.192a5.39 5.39 0 0 0-.25-.006c-2.982 0-5.398 2.415-5.398 5.397s2.416 5.398 5.398 5.398 5.398-2.416 5.398-5.398V8.865a8.605 8.605 0 0 0 4.829 1.472v-3.22a4.793 4.793 0 0 1-1.101-.431z" 
        fill="currentColor" 
      />
    </svg>
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
