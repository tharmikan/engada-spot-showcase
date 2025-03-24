
import React from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import { ArrowRight } from "lucide-react";

const Index: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <Hero 
        title="Curated Collections For Refined Living"
        subtitle="Discover exceptional products that combine artistry, functionality, and timeless design."
        imageSrc="https://images.unsplash.com/photo-1507914997-140ea5c53af9?auto=format&fit=crop&q=80&w=1920"
        ctaLink="/products"
        ctaText="Explore Products"
      />
      
      {/* Featured Products */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Exceptional Quality</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2">Featured Collection</h2>
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
              className="inline-flex items-center px-6 py-3 border border-primary hover:bg-primary hover:text-white text-primary font-medium rounded-md transition-colors group"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-on-scroll">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-semibold">Committed to Quality and Craftsmanship</h2>
              <p className="text-muted-foreground">
                At Engada Spot, we believe in the beauty of thoughtfully designed products that enhance everyday living. Each item in our collection is selected for its exceptional craftsmanship, sustainable materials, and timeless appeal.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary font-medium hover:underline group"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800"
                alt="Our workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto container-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-primary-foreground/80 mb-8">
              Subscribe to receive updates on new collections, special offers, and design inspiration.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md bg-primary-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-md transition-colors hover:bg-accent/90"
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

export default Index;
