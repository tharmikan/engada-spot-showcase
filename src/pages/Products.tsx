import React, { useState, useEffect } from "react";
import { products } from "@/lib/products";
import ProductsGrid from "@/components/products/ProductsGrid";
import TeaBenefits from "@/components/products/TeaBenefits";
import { ProductType } from "@/types/product";

const Products: React.FC = () => {
  // We'll keep all products visible without filtering
  const [displayedProducts, setDisplayedProducts] = useState<ProductType[]>(products);
  
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
        
        {/* All Products - No Filtering */}
        <ProductsGrid 
          filteredProducts={displayedProducts}
          categoryType={null}
          selectedCategory={null}
        />
        
        <TeaBenefits />
      </div>
    </div>
  );
};

export default Products;
