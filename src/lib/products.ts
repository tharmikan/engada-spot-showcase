export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  description: string;
  featured: boolean;
  details: {
    dimensions?: string;
    materials?: string;
    colors?: string[];
    features?: string[];
  };
}

export const products: Product[] = [
  {
    id: "product-1",
    name: "Spot Cake",
    category: "Cakes",
    price: 4.99,
    imageSrc: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our signature spot cake is a local favorite, featuring a soft, spongy texture with subtle sweetness. Available in various flavors including Badam, Mango, and Rose Milk, each bite delivers a perfect balance of traditional tastes and comforting texture.",
    featured: true,
    details: {
      features: ["Freshly baked daily", "No artificial preservatives", "Signature recipe", "Perfect with tea"]
    }
  },
  {
    id: "product-2",
    name: "Masala Chai",
    category: "Tea",
    price: 2.99,
    imageSrc: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our authentic Masala Chai combines premium black tea with a perfect blend of aromatic spices including cardamom, cinnamon, ginger, and cloves. Brewed to perfection and served hot with just the right amount of sweetness for a truly comforting experience.",
    featured: true,
    details: {
      features: ["Traditional spice blend", "Premium black tea", "Brewed fresh", "Perfect strength"]
    }
  },
  {
    id: "product-3",
    name: "Egg Coffee",
    category: "Coffee",
    price: 3.99,
    imageSrc: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our specialty Egg Coffee is a delightful surprise for coffee enthusiasts. This unique beverage features rich, freshly brewed coffee topped with a creamy, custard-like layer made from whisked egg yolks and condensed milk, creating a luxurious treat that's both sweet and robust.",
    featured: true,
    details: {
      features: ["Signature recipe", "Creamy texture", "Rich flavor profile", "Freshly prepared"]
    }
  },
  {
    id: "product-4",
    name: "Artisanal Ceramic Vase",
    category: "Home Decor",
    price: 79.99,
    imageSrc: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our artisanal ceramic vase is a testament to skilled craftsmanship. Each piece is hand-thrown and features unique glazing techniques, resulting in a one-of-a-kind decorative accent. Whether displayed alone or filled with your favorite botanicals, this vase brings artistic elegance to any surface.",
    featured: false,
    details: {
      dimensions: "8\" diameter x 12\" height",
      materials: "Hand-thrown ceramic",
      colors: ["Matte White", "Sea Blue", "Terracotta"],
      features: ["Waterproof interior", "Handmade", "Unique glaze variations", "Stable base"]
    }
  },
  {
    id: "product-5",
    name: "Minimalist Table Lamp",
    category: "Lighting",
    price: 129.99,
    imageSrc: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our minimalist table lamp combines form and function in perfect harmony. The sleek design features clean lines and premium materials, casting a warm, ambient glow in any space. Ideal for bedside tables, desks, or accent tables, this lamp adds both light and style to your home.",
    featured: false,
    details: {
      dimensions: "12\" W x 12\" D x 18\" H",
      materials: "Brushed brass, marble base, linen shade",
      colors: ["Brass/White", "Black/White", "Copper/Beige"],
      features: ["Dimmable", "Energy-efficient LED compatible", "Touch control", "UL certified"]
    }
  },
  {
    id: "product-6",
    name: "Organic Cotton Throw",
    category: "Textiles",
    price: 89.99,
    imageSrc: "https://images.unsplash.com/photo-1584380178997-1a6e142ce98a?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our organic cotton throw is the perfect blend of sustainability and comfort. Crafted from 100% GOTS-certified organic cotton, this throw features a subtle herringbone pattern and fringed edges. Drape it over your sofa, bed, or favorite chair for an instant touch of texture and warmth.",
    featured: false,
    details: {
      dimensions: "50\" x 70\"",
      materials: "100% organic cotton",
      colors: ["Natural", "Sage", "Terracotta"],
      features: ["GOTS certified", "Hypoallergenic", "Machine washable", "Sustainably produced"]
    }
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(id: string, limit: number = 3): Product[] {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== id && p.category === product.category)
    .slice(0, limit);
}
