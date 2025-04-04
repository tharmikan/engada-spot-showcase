
import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    // Animation for value cards
    const valueCards = document.querySelectorAll('.value-card');
    
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
    
    valueCards.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 md:pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=1920"
            alt="Tea preparation" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-white/90 max-w-xl">
            Brewing exceptional experiences through traditional tea culture and quality ingredients.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-semibold">Curating Quality Teas for Authentic Enjoyment</h2>
              <p className="text-muted-foreground">
                At Engada Spot, our mission is to bring thoughtfully selected teas into the lives of those who value quality, tradition, and authentic flavors. We believe that every cup of tea should not only be delicious but also a moment of tranquility and connection.
              </p>
              <p className="text-muted-foreground">
                Each tea in our collection is selected with care, considering its origin, the quality of leaves, and the story behind its production. We partner with tea gardens and suppliers who share our commitment to ethical sourcing and sustainable practices.
              </p>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800"
                alt="Tea plantation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">What Drives Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              title="Authentic Flavors" 
              description="We preserve traditional brewing methods and source genuine ingredients to deliver the most authentic tea experience."
              index={0}
            />
            <ValueCard 
              title="Heritage & Culture" 
              description="Our teas celebrate rich cultural traditions, connecting you to centuries of tea wisdom with every sip."
              index={1}
            />
            <ValueCard 
              title="Sustainable Sourcing" 
              description="We prioritize tea gardens and suppliers that implement ethical practices and environmentally conscious production methods."
              index={2}
            />
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">The People Behind Engada Spot</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Our passionate team brings diverse expertise in tea selection, brewing techniques, and cultural knowledge to create a unique tea experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Karikalan Rishivarman"
              role="Founder"
              imageSrc="/lovable-uploads/79c92899-48d4-41c0-b027-9b53d28f840d.png"
            />
            <TeamMember 
              name="Alexandra Wright"
              role="Founder & Tea Specialist"
              imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember 
              name="David Chen"
              role="Tea Sourcing Expert"
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember 
              name="Mia Johnson"
              role="Master Brewer"
              imageSrc="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400&h=400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
  index: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, index }) => {
  return (
    <div 
      className="value-card p-6 bg-background rounded-lg shadow-sm opacity-0 translate-y-8 transition-all duration-700 ease-out"
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      <h3 className="font-serif text-xl font-medium mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageSrc }) => {
  return (
    <div className="flex flex-col items-center animate-on-scroll">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-serif text-xl font-medium">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </div>
  );
};

export default About;
