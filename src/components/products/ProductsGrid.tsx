
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
  console.log("ProductsGrid rendering with:", { filteredProducts, categoryType, selectedCategory });
  
  return (
    <div className="mb-12">
      {/* Results Count */}
      <div className="mb-8 text-sm text-muted-foreground">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        {categoryType && ` in ${categoryType === "drink" ? "To Drink" : "To Bite"} category`}
        {selectedCategory && ` (${selectedCategory})`}
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
              key={`${product.id}-${categoryType}-${selectedCategory}`}
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
  );
};

export default ProductsGrid;
