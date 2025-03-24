
import React from "react";

const About: React.FC = () => {
  return (
    <div className="pt-20 md:pt-28 pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&q=80&w=1920"
            alt="Our workshop" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-white/90 max-w-xl">
            Crafting exceptional experiences through thoughtful design and quality products.
          </p>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-semibold">Curating Quality for Intentional Living</h2>
              <p className="text-muted-foreground">
                At Engada Spot, our mission is to bring thoughtfully designed products into homes that value quality, craftsmanship, and timeless aesthetics. We believe that the objects we surround ourselves with should not only be beautiful, but also functional and made to last.
              </p>
              <p className="text-muted-foreground">
                Each product in our collection is selected with care, considering its design integrity, the materials used, and the story behind its creation. We partner with artisans and manufacturers who share our commitment to ethical production and sustainable practices.
              </p>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&q=80&w=800"
                alt="Craftsman at work"
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
              title="Quality Craftsmanship" 
              description="We believe in products that are built to last, created with skill and attention to detail."
            />
            <ValueCard 
              title="Thoughtful Design" 
              description="Every product we offer balances form and function, enhancing both aesthetics and everyday living."
            />
            <ValueCard 
              title="Sustainable Practices" 
              description="We prioritize materials and processes that minimize environmental impact and promote ethical production."
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
              Our passionate team brings diverse expertise in design, craftsmanship, and curation to create a unique shopping experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              name="Alexandra Wright"
              role="Founder & Creative Director"
              imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember 
              name="David Chen"
              role="Product Curator"
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
            />
            <TeamMember 
              name="Mia Johnson"
              role="Artisan Relations"
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
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-background rounded-lg shadow-sm animate-on-scroll">
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
