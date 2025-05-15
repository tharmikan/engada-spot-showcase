
import React from "react";
import { Check, ChevronDown, CupSoda } from "lucide-react";

interface CategoryFilterProps {
  isCategoryOpen: boolean;
  setIsCategoryOpen: (isOpen: boolean) => void;
  categoryType: "drink" | "bite" | null;
  setCategoryType: (type: "drink" | "bite" | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  drinkCategories: string[];
  biteCategories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  isCategoryOpen,
  setIsCategoryOpen,
  categoryType,
  setCategoryType,
  selectedCategory,
  setSelectedCategory,
  drinkCategories,
  biteCategories,
}) => {
  return (
    <div className="relative">
      <button
        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        className="flex items-center space-x-1 text-sm px-4 py-2 border rounded-md hover:bg-muted/50 transition-colors"
      >
        <CupSoda size={16} className="mr-1" />
        <span>
          {categoryType === "drink" ? "To Drink" : 
           categoryType === "bite" ? "To Bite" : 
           selectedCategory || "All Products"}
        </span>
        <ChevronDown size={16} className={`transition-transform ${isCategoryOpen ? "rotate-180" : ""}`} />
      </button>
      
      {isCategoryOpen && (
        <div className="absolute z-10 mt-1 w-64 bg-card rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setCategoryType(null);
                setIsCategoryOpen(false);
              }}
              className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-muted/50"
            >
              <span>All Products</span>
              {categoryType === null && selectedCategory === null && <Check size={16} />}
            </button>
            
            {/* To Drink category */}
            <button
              onClick={() => {
                setCategoryType("drink");
                setSelectedCategory(null);
                setIsCategoryOpen(false);
              }}
              className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-muted/50 font-medium"
            >
              <span>To Drink</span>
              {categoryType === "drink" && selectedCategory === null && <Check size={16} />}
            </button>
            
            {/* Drink subcategories */}
            {drinkCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setCategoryType("drink");
                  setSelectedCategory(category);
                  setIsCategoryOpen(false);
                }}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-muted/50 pl-8"
              >
                <span>{category}</span>
                {categoryType === "drink" && selectedCategory === category && <Check size={16} />}
              </button>
            ))}
            
            {/* To Bite category */}
            <button
              onClick={() => {
                setCategoryType("bite");
                setSelectedCategory(null);
                setIsCategoryOpen(false);
              }}
              className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-muted/50 font-medium"
            >
              <span>To Bite</span>
              {categoryType === "bite" && selectedCategory === null && <Check size={16} />}
            </button>
            
            {/* Bite subcategories */}
            {biteCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setCategoryType("bite");
                  setSelectedCategory(category);
                  setIsCategoryOpen(false);
                }}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-left hover:bg-muted/50 pl-8"
              >
                <span>{category}</span>
                {categoryType === "bite" && selectedCategory === category && <Check size={16} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
