
import React from "react";
import ProductCard from "@/components/ProductCard";
import { ProductType } from "@/types/product";

interface ProductsGridProps {
  filteredProducts: ProductType[];
  categoryType: "drink" | "bite" | null;
  selectedCategory: string | null;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ 
  filteredProducts, 
  categoryType, 
  selectedCategory 
}) => {
  return (
    <div className="mb-12">
      {/* Results Count */}
      <div className="mb-8 text-sm text-muted-foreground">
        Showing all {filteredProducts.length} products
      </div>
      
      {/* Products Grid */}
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
    </div>
  );
};

export default ProductsGrid;
