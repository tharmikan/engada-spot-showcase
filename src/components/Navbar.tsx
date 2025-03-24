
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glassmorphism py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-xl font-semibold tracking-tight">Engada Spot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <NavLink to="/" label="Home" />
            <NavLink to="/products" label="Products" />
            <NavLink to="/about" label="About" />
            <NavLink to="/contact" label="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-50 bg-background pt-16 px-4 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 items-center text-lg font-medium">
          <NavLink to="/" label="Home" mobile />
          <NavLink to="/products" label="Products" mobile />
          <NavLink to="/about" label="About" mobile />
          <NavLink to="/contact" label="Contact" mobile />
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label, mobile }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                  (to !== "/" && location.pathname.startsWith(to));
  
  return (
    <Link 
      to={to} 
      className={`
        relative transition-all duration-300 
        ${mobile ? "text-xl py-4" : ""}
        ${isActive 
          ? "text-primary font-medium" 
          : "text-muted-foreground hover:text-primary"
        }
      `}
    >
      {label}
      <span 
        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
          isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
        }`}
      ></span>
    </Link>
  );
};

export default Navbar;
