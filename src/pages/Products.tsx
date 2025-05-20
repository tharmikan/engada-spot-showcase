import React, { useState, useEffect } from "react";
import { products } from "@/lib/products";
import CategoryFilter from "@/components/products/CategoryFilter";
import SortOptions from "@/components/products/SortOptions";
import ProductsGrid from "@/components/products/ProductsGrid";
import TeaBenefits from "@/components/products/TeaBenefits";
import { ProductType } from "@/types/product";

const Products: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [categoryType, setCategoryType] = useState<"drink" | "bite" | null>(null);
  const [renderKey, setRenderKey] = useState<number>(0);
  
  // Categorize products into "To Drink" and "To Bite"
  const drinkCategories = ["Masala chai", "Cardamon chai", "Milk coffee", "Egg coffee", "Ginger plain tea"];
  
  // Fixed category names to match exactly with the product data and added "Desserts"
  const biteCategories = [
    "Chicken Rolls", 
    "Fish Rolls", 
    "Vegetable Rolls", 
    "Casava chips", 
    "Cakes", 
    "Cutlet",
    "Desserts"
  ];
  
  // Handle category change
  const handleCategoryChange = (category: string | null, type: "drink" | "bite" | null) => {
    console.log("Category changed:", { category, type });
    setSelectedCategory(category);
    setCategoryType(type);
    setRenderKey(prev => prev + 1); // Force re-render
  };

  useEffect(() => {
    console.log("Filtering products with:", { categoryType, selectedCategory, sortOption });
    let result = [...products];
    
    // Apply category type filter first (To Drink or To Bite)
    if (categoryType) {
      const relevantCategories = categoryType === "drink" ? drinkCategories : biteCategories;
      result = result.filter((product) => relevantCategories.includes(product.category));
    }
    
    // Apply specific category filter
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
    
    console.log("Filtered products:", result);
    setFilteredProducts(result);
  }, [categoryType, selectedCategory, sortOption]);
  
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
          <CategoryFilter 
            isCategoryOpen={isCategoryOpen} 
            setIsCategoryOpen={setIsCategoryOpen}
            categoryType={categoryType}
            setCategoryType={(type) => handleCategoryChange(null, type)}
            selectedCategory={selectedCategory}
            setSelectedCategory={(category) => handleCategoryChange(category, categoryType)}
            drinkCategories={drinkCategories}
            biteCategories={biteCategories}
          />
          
          <SortOptions 
            isSortOpen={isSortOpen}
            setIsSortOpen={setIsSortOpen}
            sortOption={sortOption}
            setSortOption={(sort) => {
              setSortOption(sort);
              setRenderKey(prev => prev + 1); // Force re-render on sort change
            }}
          />
        </div>
        
        <ProductsGrid 
          key={`grid-${renderKey}-${categoryType || "all"}-${selectedCategory || "all"}-${sortOption}`}
          filteredProducts={filteredProducts}
          categoryType={categoryType}
          selectedCategory={selectedCategory}
        />
        
        <TeaBenefits />
      </div>
    </div>
  );
};

export default Products;
