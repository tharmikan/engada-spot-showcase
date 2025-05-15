
import React, { useEffect } from "react";

const TeaBenefits: React.FC = () => {
  useEffect(() => {
    // Animation for tea benefits cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Apply continuous animation classes with delay based on index
          const animations = ['animate-side-float', 'animate-wave-motion', 'animate-pulse-grow'];
          const animationClass = animations[index % animations.length];
          
          // Add animation with delay to create a staggered effect
          setTimeout(() => {
            entry.target.classList.add(animationClass);
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });
    
    benefitCards.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="mt-20 p-8 bg-secondary rounded-lg">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">The Benefits of Tea</h2>
        <p className="text-muted-foreground mt-2">Discover why tea has been cherished for centuries</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="benefit-card bg-background p-6 rounded-md shadow-sm opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h3 className="font-medium text-lg mb-2">Wellness & Antioxidants</h3>
          <p className="text-muted-foreground text-sm">Tea is rich in antioxidants that help your body fight free radicals and boost your immune system.</p>
        </div>
        
        <div className="benefit-card bg-background p-6 rounded-md shadow-sm opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h3 className="font-medium text-lg mb-2">Calm & Focus</h3>
          <p className="text-muted-foreground text-sm">The L-theanine in tea promotes relaxation while maintaining alertness and mental clarity.</p>
        </div>
        
        <div className="benefit-card bg-background p-6 rounded-md shadow-sm opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <h3 className="font-medium text-lg mb-2">Cultural Tradition</h3>
          <p className="text-muted-foreground text-sm">Tea ceremonies and rituals connect us to centuries of cultural heritage and mindful practices.</p>
        </div>
      </div>
    </div>
  );
};

export default TeaBenefits;
