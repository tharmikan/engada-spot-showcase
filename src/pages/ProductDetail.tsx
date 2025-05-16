
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getProductById, getRelatedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageKey, setImageKey] = useState(Date.now());
  
  const product = id ? getProductById(id) : undefined;
  const relatedProducts = id ? getRelatedProducts(id) : [];
  
  // Reset image cache when product ID changes
  useEffect(() => {
    setIsImageLoaded(false);
    setImageKey(Date.now());
  }, [id]);
  
  useEffect(() => {
    // Redirect if product not found
    if (!product && id) {
      navigate("/products", { replace: true });
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  
  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart`);
  };
  
  return (
    <div className="pt-20 md:pt-28">
      {/* Back Button */}
      <div className="container mx-auto container-padding mb-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
      </div>
      
      {/* Product Details */}
      <section className="container mx-auto container-padding mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image with cache-busting */}
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              </div>
            )}
            <img 
              src={`${product.imageSrc}?v=${imageKey}`}
              alt={product.name} 
              className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>
          
          {/* Product Info */}
          <div className="flex flex-col">
            <div className="space-y-4">
              <div className="text-sm font-medium text-muted-foreground">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-semibold">{product.name}</h1>
              <div className="text-2xl font-semibold">${product.price.toFixed(2)}</div>
              
              <div className="pt-4">
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              
              <div className="pt-4 space-y-4">
                {product.details.dimensions && (
                  <div>
                    <div className="font-medium mb-1">Dimensions</div>
                    <div className="text-muted-foreground">{product.details.dimensions}</div>
                  </div>
                )}
                
                {product.details.materials && (
                  <div>
                    <div className="font-medium mb-1">Materials</div>
                    <div className="text-muted-foreground">{product.details.materials}</div>
                  </div>
                )}
                
                {product.details.colors && (
                  <div>
                    <div className="font-medium mb-1">Colors</div>
                    <div className="flex flex-wrap gap-2">
                      {product.details.colors.map((color) => (
                        <div 
                          key={color} 
                          className="rounded-full px-3 py-1 text-xs bg-muted text-muted-foreground"
                        >
                          {color}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.details.features && (
                  <div>
                    <div className="font-medium mb-1">Features</div>
                    <ul className="space-y-1 text-muted-foreground">
                      {product.details.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-secondary">
          <div className="container mx-auto container-padding">
            <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">You May Also Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={`${product.id}-${Date.now()}`} // Add unique key with timestamp
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  imageSrc={product.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
