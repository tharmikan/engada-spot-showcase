
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
    name: "Handcrafted Wooden Bowl",
    category: "Home Decor",
    price: 49.99,
    imageSrc: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our handcrafted wooden bowl combines natural beauty with functional design. Each piece is meticulously carved from sustainable wood, showcasing the unique grain patterns and organic textures of the material. Perfect as a centerpiece or for serving, this bowl adds warmth and character to any space.",
    featured: true,
    details: {
      dimensions: "12\" diameter x 4\" height",
      materials: "Sustainable acacia wood",
      colors: ["Natural", "Walnut stain", "Ebony"],
      features: ["Food safe", "Hand wash only", "Unique grain patterns", "Ethically sourced materials"]
    }
  },
  {
    id: "product-2",
    name: "Modern Accent Chair",
    category: "Furniture",
    price: 299.99,
    imageSrc: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our modern accent chair combines comfort with contemporary design. The sleek silhouette features clean lines and minimalist details, while the plush cushioning provides exceptional comfort. The perfect statement piece for any living space, bedroom, or reading nook.",
    featured: true,
    details: {
      dimensions: "30\" W x 32\" D x 34\" H",
      materials: "Solid wood frame, high-density foam, premium upholstery",
      colors: ["Cream", "Gray", "Dusty Blue"],
      features: ["Sturdy construction", "Stain-resistant fabric", "Non-marking feet", "Easy assembly"]
    }
  },
  {
    id: "product-3",
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
    id: "product-4",
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
    id: "product-5",
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
  },
  {
    id: "product-6",
    name: "Handwoven Basket Set",
    category: "Storage",
    price: 119.99,
    imageSrc: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our handwoven basket set brings artisanal craftsmanship and practical storage to your home. Each set includes three nesting baskets in different sizes, perfect for organizing everything from blankets to small items. The natural materials and intricate weaving create texture and visual interest in any room.",
    featured: true,
    details: {
      dimensions: "Large: 18\" D x 12\" H, Medium: 15\" D x 10\" H, Small: 12\" D x 8\" H",
      materials: "Sustainable seagrass with cotton accents",
      colors: ["Natural/White", "Natural/Black"],
      features: ["Handwoven", "Sturdy construction", "Nesting design", "Fair trade"]
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
