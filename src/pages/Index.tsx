
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import { ArrowRight, CupSoda, Coffee, Utensils, CakeSlice, Soup } from "lucide-react";

const Index: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  useEffect(() => {
    // Animation for category cards
    const cards = document.querySelectorAll('.category-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Staggered animation delay based on index
          setTimeout(() => {
            entry.target.classList.add('animate-slide-in');
          }, index * 150);
        }
      });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero 
        title="Premium Tea & Snacks"
        subtitle="Experience the perfect blend of traditional flavors and traditional comfort at Engada Spot."
        imageSrc="https://images.unsplash.com/photo-1547825407-2d060104b7f8?auto=format&fit=crop&q=80&w=1920"
        ctaLink="/products"
        ctaText="Explore Our Menu"
      />
      
      {/* Opening Hours Banner */}
      <div className="bg-tea-green text-white py-3 text-center">
        <p className="text-lg font-medium">Open Daily from 4:00 PM - 12:00 PM</p>
      </div>
      
      {/* Categories Section */}
      <section className="py-12 md:py-20 bg-tea-yellow/20 overflow-hidden">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <CategoryCard 
              title="Tea Varieties" 
              icon={<CupSoda className="h-8 w-8" />} 
              description="Masala Chai, Cardamom Chai, Ginger Plain Tea"
              index={0}
            />
            <CategoryCard 
              title="Rolls Varieties" 
              icon={<Utensils className="h-8 w-8" />}
              description="Vegetable, Chicken, Fish Rolls"
              index={1}
            />
            <CategoryCard 
              title="Spot Cake Varieties" 
              icon={<CakeSlice className="h-8 w-8" />}
              description="Badam, Mango, Rose Milk Flavors"
              index={2}
            />
            <CategoryCard 
              title="Chips Varieties" 
              icon={<Soup className="h-8 w-8" />}
              description="Cassava Chips & More"
              index={3}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Specialty Items</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 text-tea-green">Customer Favorites</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                imageSrc={product.imageSrc}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center px-6 py-3 border border-tea-green hover:bg-tea-green hover:text-white text-tea-green font-medium rounded-md transition-colors group"
            >
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="section-padding bg-tea-pattern-bg">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-tea-green">A Cozy Spot for Tea Lovers</h2>
              <p className="text-muted-foreground">
                At Engada Spot, we're passionate about crafting the perfect cup. Our journey began with a simple love for traditional teas and has blossomed into a haven for those seeking quality brews and delicious bites in a warm, welcoming atmosphere.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-tea-green font-medium hover:underline group"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&q=80&w=800"
                alt="Our tea shop interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section-padding bg-tea-green text-primary-foreground">
        <div className="container mx-auto container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Tea Community</h2>
            <p className="text-primary-foreground/80 mb-8">
              Subscribe to receive updates on seasonal specials, events, and exclusive offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-white text-tea-green focus:outline-none focus:ring-2 focus:ring-tea-yellow"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-tea-yellow text-tea-green font-medium rounded-md transition-colors hover:bg-tea-yellow/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, icon, description, index }) => {
  return (
    <div 
      className={`category-card flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm 
        border border-tea-yellow/10 hover:border-tea-yellow/60 transition-all duration-300 
        hover:shadow-md hover:shadow-tea-yellow/20 hover:-translate-y-2 transform-gpu 
        animate-float cursor-pointer group opacity-0 -translate-x-full`}
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="mb-4 text-tea-green group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-medium text-tea-green mb-1 group-hover:text-tea-green/90">{title}</h3>
      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/90">{description}</p>
    </div>
  );
};

export default Index;
