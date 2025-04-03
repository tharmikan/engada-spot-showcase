
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Check, ChevronDown, CupSoda } from "lucide-react";

const Products: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  const categories = Array.from(new Set(products.map((product) => product.category)));
  
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter((product) => product.category === selectedCategory);
    }
    
    // Apply sorting
    switch (sortOption) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "nameAsc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
      default:
        // Assume the products are already in "newest" order in the data
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortOption]);
  
  return (
    <div className="pt-20 md:pt-28 pb-20">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">Our Tea Collection</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover our carefully selected range of premium teas and accompaniments from around the world, each with its own unique character and flavor profile.
          </p>
        </div>
        
        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center space-x-1 text-sm px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors"
            >
              <CupSoda size={16} className="mr-1" />
              <span>{selectedCategory || "All Tea Types"}</span>
              <ChevronDown size={16} className={`transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isCategoryOpen && (
              <div className="absolute z-10 mt-1 w-48 bg-card rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      setIsCategoryOpen(false);
                    }}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-muted/50"
                  >
                    <span>All Tea Types</span>
                    {selectedCategory === null && <Check size={16} />}
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsCategoryOpen(false);
                      }}
                      className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-muted/50"
                    >
                      <span>{category}</span>
                      {selectedCategory === category && <Check size={16} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center space-x-1 text-sm px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors"
            >
              <span>
                {sortOption === "newest" && "Newest Arrivals"}
                {sortOption === "priceAsc" && "Price: Low to High"}
                {sortOption === "priceDesc" && "Price: High to Low"}
                {sortOption === "nameAsc" && "Name: A to Z"}
              </span>
              <ChevronDown size={16} className={`transition-transform ${isSortOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isSortOpen && (
              <div className="absolute right-0 z-10 mt-1 w-48 bg-card rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {[
                    { id: "newest", label: "Newest Arrivals" },
                    { id: "priceAsc", label: "Price: Low to High" },
                    { id: "priceDesc", label: "Price: High to Low" },
                    { id: "nameAsc", label: "Name: A to Z" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortOption(option.id);
                        setIsSortOpen(false);
                      }}
                      className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-muted/50"
                    >
                      <span>{option.label}</span>
                      {sortOption === option.id && <Check size={16} />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mb-8 text-sm text-muted-foreground">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
          {selectedCategory && ` in ${selectedCategory}`}
        </div>
        
        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No teas found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProducts.map((product) => (
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
        )}
        
        {/* Tea Benefits Banner */}
        <div className="mt-20 p-8 bg-secondary rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">The Benefits of Tea</h2>
            <p className="text-muted-foreground mt-2">Discover why tea has been cherished for centuries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-md shadow-sm">
              <h3 className="font-medium text-lg mb-2">Wellness & Antioxidants</h3>
              <p className="text-muted-foreground text-sm">Tea is rich in antioxidants that help your body fight free radicals and boost your immune system.</p>
            </div>
            
            <div className="bg-background p-6 rounded-md shadow-sm">
              <h3 className="font-medium text-lg mb-2">Calm & Focus</h3>
              <p className="text-muted-foreground text-sm">The L-theanine in tea promotes relaxation while maintaining alertness and mental clarity.</p>
            </div>
            
            <div className="bg-background p-6 rounded-md shadow-sm">
              <h3 className="font-medium text-lg mb-2">Cultural Tradition</h3>
              <p className="text-muted-foreground text-sm">Tea ceremonies and rituals connect us to centuries of cultural heritage and mindful practices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
