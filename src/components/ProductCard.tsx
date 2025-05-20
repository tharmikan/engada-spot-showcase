
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, CupSoda, Coffee, Utensils, CakeSlice } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  category, 
  price, 
  imageSrc 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Choose icon based on category
  const renderIcon = () => {
    if (category.toLowerCase().includes('tea') || category.toLowerCase().includes('chai')) {
      return <CupSoda size={18} className="text-tea-green" />;
    } else if (category.toLowerCase().includes('coffee')) {
      return <Coffee size={18} className="text-tea-green" />;
    } else if (category.toLowerCase().includes('cake')) {
      return <CakeSlice size={18} className="text-tea-green" />;
    } else if (category.toLowerCase().includes('roll')) {
      return <Utensils size={18} className="text-tea-green" />;
    }
    return null;
  };
  
  return (
    <div 
      className="group relative overflow-hidden rounded-lg animate-on-scroll border border-tea-yellow/20 bg-white shadow-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with random query param to prevent caching */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={`${imageSrc}?v=${id}`}
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          loading="lazy"
        />
      </div>
      
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-tea-green/70 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link 
          to={`/product/${id}`}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-tea-yellow text-tea-green font-medium rounded-md transition-transform duration-300 transform hover:scale-105"
        >
          <Eye size={16} />
          <span>View Details</span>
        </Link>
      </div>
      
      {/* Product Info */}
      <div className="pt-4 pb-2 space-y-1 px-3">
        <div className="flex items-center text-xs text-muted-foreground">
          {renderIcon()}
          <span className="ml-1">{category}</span>
        </div>
        <h3 className="font-medium text-base sm:text-lg leading-tight text-tea-green">{name}</h3>
        <div className="font-semibold text-tea-green">Rs {price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
