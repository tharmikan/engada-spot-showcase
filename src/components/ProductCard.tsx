
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

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
  
  return (
    <div 
      className="group relative overflow-hidden rounded-md animate-on-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={imageSrc} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          loading="lazy"
        />
      </div>
      
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link 
          to={`/product/${id}`}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-primary font-medium rounded-md transition-transform duration-300 transform hover:scale-105"
        >
          <Eye size={16} />
          <span>View Details</span>
        </Link>
      </div>
      
      {/* Product Info */}
      <div className="pt-4 pb-2 space-y-1">
        <div className="text-xs text-muted-foreground">{category}</div>
        <h3 className="font-medium text-base sm:text-lg leading-tight">{name}</h3>
        <div className="font-semibold">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
