
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Check, ChevronDown } from "lucide-react";

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
          <h1 className="text-3xl md:text-4xl font-semibold">Our Products</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore our curated collection of thoughtfully designed products for your home and lifestyle.
          </p>
        </div>
        
        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center space-x-1 text-sm px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors"
            >
              <span>{selectedCategory || "All Categories"}</span>
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
                    <span>All Categories</span>
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
                {sortOption === "newest" && "Newest"}
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
                    { id: "newest", label: "Newest" },
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
            <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
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
      </div>
    </div>
  );
};

export default Products;
