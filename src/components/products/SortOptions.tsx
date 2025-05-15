
import React from "react";
import { Check, ChevronDown } from "lucide-react";

interface SortOptionsProps {
  isSortOpen: boolean;
  setIsSortOpen: (isOpen: boolean) => void;
  sortOption: string;
  setSortOption: (option: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  isSortOpen,
  setIsSortOpen,
  sortOption,
  setSortOption,
}) => {
  return (
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
  );
};

export default SortOptions;
