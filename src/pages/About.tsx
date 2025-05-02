
import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            src="/lovable-uploads/b92768fd-1558-46ff-b3fa-cdee4b182308.png"
            alt="Engada Spot tea venue" 
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
      
      {/* Video Showcase Section - With Tabs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Experience</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">Discover Engada Spot</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Take a virtual tour through our tea culture and experience what makes Engada Spot special.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="main-video" className="w-full">
              <div className="flex justify-center mb-6">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="main-video">Overview</TabsTrigger>
                  <TabsTrigger value="tea-process">Tea Process</TabsTrigger>
                  <TabsTrigger value="tea-culture">Tea Culture</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="main-video" className="mt-0">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    className="w-full h-full"
                    style={{ minHeight: "500px" }}
                    src="https://www.youtube.com/embed/6dDnBWBqqA0" 
                    title="Engada Spot Tea Experience"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </TabsContent>
              
              <TabsContent value="tea-process" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg animate-side-float">
                    <iframe 
                      className="w-full h-full"
                      style={{ minHeight: "300px" }}
                      src="https://www.youtube.com/embed/8xo12I4sJco" 
                      title="Tea Processing at Engada Spot"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg animate-wave-motion">
                    <iframe 
                      className="w-full h-full"
                      style={{ minHeight: "300px" }}
                      src="https://www.youtube.com/embed/1Ay4j0DJntM" 
                      title="Tea Culture at Engada Spot"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="tea-culture" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg animate-pulse-grow order-last md:order-first">
                    <iframe 
                      className="w-full h-full"
                      style={{ minHeight: "300px" }}
                      src="https://www.youtube.com/embed/1Ay4j0DJntM" 
                      title="Tea Culture at Engada Spot"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="space-y-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-serif font-semibold">Authentic Tea Culture</h3>
                    <p className="text-muted-foreground">
                      Our approach to tea is deeply rooted in cultural tradition and authenticity. We believe that understanding the culture behind tea enhances the drinking experience and connects you to a rich heritage spanning generations.
                    </p>
                    <p className="text-muted-foreground">
                      Every cup tells a story of cultural exchange, tradition, and the unique elements that make each tea variety special to its region of origin.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Team Section - Fixed visibility */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">The People Behind Engada Spot</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Our passionate team brings diverse expertise in tea selection, brewing techniques, and cultural knowledge to create a unique tea experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <TeamMember 
              name="Karikalan Rishivarman"
              role="Founder"
              imageSrc="/lovable-uploads/79c92899-48d4-41c0-b027-9b53d28f840d.png"
            />
            <TeamMember 
              name="Ramsunthar Kantharuban"
              role="Founder"
              imageSrc="/lovable-uploads/d9883bad-36de-4191-a6a2-3a077d376274.png"
            />
            <TeamMember 
              name="Sivarathihan Sivajeevan"
              role="Editor"
              imageSrc="/lovable-uploads/969c7c6c-6745-419d-8652-53c50758085c.png"
            />
            <TeamMember 
              name="Sanju Sri"
              role="Visual Stylist & Event Planner"
              imageSrc="/lovable-uploads/b0e2ad26-8c0c-499e-9c7c-22c483b7fdc3.png"
            />
            <TeamMember 
              name="K.Tharmikan"
              role="Social Media Coordinator"
              imageSrc="/lovable-uploads/76b749a4-f3d9-417d-876b-ed78be23e6cd.png"
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
    <div className="flex flex-col items-center text-center animate-on-scroll">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-serif text-xl font-medium max-w-full">{name}</h3>
      <p className="text-muted-foreground max-w-full">{role}</p>
    </div>
  );
};

export default About;
