
import React, { useState } from "react";
import { Eye, CupSoda, Coffee, Utensils, CakeSlice, IceCream } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  description?: string;
  details?: {
    features?: string[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  category, 
  price, 
  imageSrc,
  description,
  details
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  
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
    } else if (category.toLowerCase().includes('dessert')) {
      return <IceCream size={18} className="text-tea-green" />;
    }
    return null;
  };

  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDialog(true);
  };
  
  return (
    <>
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
          <button 
            onClick={handleViewDetails}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-tea-yellow text-tea-green font-medium rounded-md transition-transform duration-300 transform hover:scale-105"
          >
            <Eye size={16} />
            <span>View Details</span>
          </button>
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

      {/* Product Details Dialog - Improved for better positioning */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[600px] w-[95vw] my-8 max-h-[90vh] overflow-y-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <DialogHeader>
            <DialogTitle className="text-2xl text-tea-green">{name}</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            {/* Product Image */}
            <div className="aspect-square w-full max-w-md mx-auto rounded-md overflow-hidden">
              <img 
                src={`${imageSrc}?v=${id}`} 
                alt={name} 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Category and Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                {renderIcon()}
                <span className="ml-1">{category}</span>
              </div>
              <div className="font-semibold text-tea-green text-lg">Rs {price.toFixed(2)}</div>
            </div>
            
            {/* Description */}
            <div className="space-y-2">
              <h4 className="font-medium">How It's Made</h4>
              <p className="text-muted-foreground text-sm">
                {description || "Our master chefs carefully prepare this item using traditional techniques and the freshest ingredients to ensure an authentic and delightful experience."}
              </p>
            </div>
            
            {/* Features */}
            {details?.features && (
              <div className="space-y-2">
                <h4 className="font-medium">Special Features</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
