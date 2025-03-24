
import React from "react";
import { ArrowRight, CupSoda } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  ctaLink: string;
  ctaText: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  imageSrc, 
  ctaLink, 
  ctaText 
}) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-tea-green/30 z-10"></div>
        <img 
          src={imageSrc} 
          alt="Hero background" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
            {subtitle}
          </p>
          <Link
            to={ctaLink}
            className="inline-flex items-center px-8 py-3 text-base font-medium text-tea-green bg-tea-yellow hover:bg-tea-yellow/90 rounded-md transition-colors group"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
