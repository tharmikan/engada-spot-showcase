
import { ProductType } from "@/types/product";

// Original products array but we'll filter out home decor items when exporting
const allProducts: ProductType[] = [
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
    category: "Masala chai",
    price: 200, // Updated price to 200 Rs
    imageSrc: "/lovable-uploads/7e91d90d-f1b1-4107-a4c5-e41d41dd9abb.png", // Now using Milk Coffee image
    description: "Our authentic Masala Chai combines premium black tea with a perfect blend of aromatic spices including cardamom, cinnamon, ginger, and cloves. Brewed to perfection and served hot with just the right amount of sweetness for a truly comforting experience.",
    featured: true,
    details: {
      features: ["Traditional spice blend", "Premium black tea", "Brewed fresh", "Perfect strength"]
    }
  },
  {
    id: "product-3",
    name: "Egg Coffee",
    category: "Egg coffee",
    price: 150, // Updated price to 150 Rs
    imageSrc: "/lovable-uploads/a86e72b8-53f1-4931-8640-bcbe00830696.png", // First uploaded image (egg coffee)
    description: "Our specialty Egg Coffee is a delightful surprise for coffee enthusiasts. This unique beverage features rich, freshly brewed coffee topped with a creamy, custard-like layer made from whisked egg yolks and condensed milk, creating a luxurious treat that's both sweet and robust.",
    featured: true,
    details: {
      features: ["Signature recipe", "Creamy texture", "Rich flavor profile", "Freshly prepared"]
    }
  },
  {
    id: "product-4",
    name: "Fish Rolls",
    category: "Fish Rolls",
    price: 100,
    imageSrc: "/lovable-uploads/52df5f5f-ad49-4abf-b70c-c0ce12f499b3.png",
    description: "Our delicious Fish Rolls are carefully prepared with fresh fish fillings, wrapped in a crispy golden coating, and served hot for a satisfying snack or accompaniment to your favorite tea.",
    featured: true,
    details: {
      features: ["Made fresh daily", "Crispy exterior", "Aromatic spices", "Premium fish filling"]
    }
  },
  {
    id: "product-5",
    name: "Chicken Rolls",
    category: "Chicken Rolls",
    price: 100,
    imageSrc: "/lovable-uploads/5257e0e9-eb38-4e90-9ed6-aadd2c6dbb2a.png",
    description: "Our tasty Chicken Rolls feature tender chicken pieces with aromatic spices, wrapped in a crispy golden coating. Perfect for a satisfying snack or as an accompaniment to your favorite tea.",
    featured: true,
    details: {
      features: ["Made fresh daily", "Crispy exterior", "Premium chicken filling", "Perfect blend of spices"]
    }
  },
  {
    id: "product-6",
    name: "Vegetable Rolls",
    category: "Vegetable Rolls",
    price: 80,
    imageSrc: "/lovable-uploads/0a45cb8e-1148-4ea1-a83d-a1aaefef8253.png",
    description: "Our Vegetable Rolls combine a medley of fresh vegetables and aromatic spices, wrapped in a crispy golden coating. A delicious vegetarian option that pairs perfectly with your favorite tea.",
    featured: true,
    details: {
      features: ["Made fresh daily", "Crispy exterior", "Fresh vegetable filling", "Aromatic spices"]
    }
  },
  {
    id: "product-7",
    name: "Cassava Chips",
    category: "Casava chips",
    price: 100,
    imageSrc: "/lovable-uploads/cee28ed1-c76a-4322-8be8-a1c2f711d1ae.png",
    description: "Our crispy Cassava Chips are made from fresh cassava roots, thinly sliced and perfectly fried to a golden crunch. Served with a delicious dipping sauce, these chips make for an irresistible snack that pairs wonderfully with our beverages.",
    featured: true,
    details: {
      features: ["Made from fresh cassava", "Perfectly crispy", "Low oil content", "Great with dips"]
    }
  },
  {
    id: "product-8",
    name: "Cardamon Chai",
    category: "Cardamon chai",
    price: 150, // Set price to 150 Rs
    imageSrc: "/lovable-uploads/d30d27fa-d5f4-4c90-bc7d-b0ec4aa7dc60.png", // Second uploaded image
    description: "Our aromatic Cardamon Chai is a delicate blend of premium tea leaves and freshly ground cardamon, creating a fragrant and soothing beverage. Served in traditional clay cups for an authentic experience.",
    featured: true,
    details: {
      features: ["Premium cardamon blend", "Freshly brewed", "Aromatic flavor", "Traditional recipe"]
    }
  },
  {
    id: "product-9",
    name: "Milk Coffee",
    category: "Milk coffee",
    price: 100, // Set price to 100 Rs
    imageSrc: "/lovable-uploads/5fd739d2-838b-479c-ac3f-8d1be592c9d4.png", // Now using Masala Chai image
    description: "Our rich and creamy Milk Coffee is made with freshly brewed coffee and topped with the perfect amount of creamy milk. Served in traditional clay cups for an authentic experience.",
    featured: true,
    details: {
      features: ["Rich flavor", "Creamy texture", "Freshly brewed", "Perfect milk-to-coffee ratio"]
    }
  },
  {
    id: "product-13",
    name: "Ginger Plain Tea",
    category: "Ginger plain tea",
    price: 60, // Set price to 60 Rs
    imageSrc: "/lovable-uploads/cd12bf26-6cc9-4873-bc3a-03c81a2e7f2f.png", // Second uploaded image (ginger tea)
    description: "Our Ginger Plain Tea offers a perfect balance of fresh ginger and premium tea leaves, creating a warming beverage that soothes the senses. Each cup is brewed to perfection with hints of lemon and mint for a refreshing finish.",
    featured: true,
    details: {
      features: ["Fresh ginger infusion", "Soothing properties", "Natural ingredients", "Perfect winter warmer"]
    }
  },
  {
    id: "product-14",
    name: "Badam Spot Cake",
    category: "Cakes",
    price: 300,
    imageSrc: "/lovable-uploads/a2a2f17c-3c3b-4482-b46e-a8338e7235ba.png",
    description: "Our Badam Spot Cake is a delicious almond-flavored treat, topped with a rich frosting and garnished with crushed pistachios and rose petals. Served in a pool of sweet syrup, it offers a perfect balance of nutty flavors and delicate sweetness.",
    featured: true,
    details: {
      features: ["Almond flavored", "Handcrafted decoration", "Rich texture", "Traditional recipe with modern twist"]
    }
  },
  {
    id: "product-15",
    name: "Rose Milk Spot Cake",
    category: "Cakes",
    price: 300,
    imageSrc: "/lovable-uploads/5402885c-e6b8-48df-9b68-1f9216c40f33.png",
    description: "Our Rose Milk Spot Cake features a vibrant pink sponge infused with rose essence, topped with creamy white frosting and garnished with crushed pistachios. Served with a drizzle of rose milk syrup for an extra touch of indulgence.",
    featured: true,
    details: {
      features: ["Rose flavored", "Vibrant color", "Creamy frosting", "Garnished with pistachios"]
    }
  },
  {
    id: "product-16",
    name: "Mango Spot Cake",
    category: "Cakes",
    price: 300,
    imageSrc: "/lovable-uploads/6779a2cb-14ac-4f66-a4bc-6eb191e064a0.png",
    description: "Our Mango Spot Cake combines the tropical sweetness of ripe mangoes with a light, fluffy sponge. Topped with smooth cream frosting and fresh mango slices, this dessert brings the taste of summer to your table year-round.",
    featured: true,
    details: {
      features: ["Fresh mango flavor", "Light sponge texture", "Cream frosting", "Seasonal favorite"]
    }
  },
  {
    id: "product-17",
    name: "Sorkkam",
    category: "Desserts",
    price: 500,
    imageSrc: "/lovable-uploads/0f910aac-2070-45b3-96d2-50a5e016f10d.png",
    description: "Sorkkam is our premium chocolate dessert featuring a warm, rich chocolate cake with a molten center. Served with vanilla ice cream and topped with a decadent chocolate sauce, this indulgent treat provides the perfect balance of temperatures and textures.",
    featured: true,
    details: {
      features: ["Molten chocolate center", "Warm served", "Premium cocoa", "Indulgent dessert experience"]
    }
  },
  {
    id: "product-10",
    name: "Artisanal Ceramic Vase",
    category: "Home Decor",
    price: 79.99,
    imageSrc: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=800&h=800",
    description: "Our artisanal ceramic vase is a testament to skilled craftsmanship. Each piece is hand-thrown and features unique glazing techniques, resulting in a one-of-a-kind decorative accent. Whether displayed alone or filled with your favorite botanicals, this vase brings artistic elegance to any surface.",
    featured: false,
    details: {
      dimensions: "8\" diameter x 12\" height",
      materials: ["Hand-thrown ceramic"],
      colors: ["Matte White", "Sea Blue", "Terracotta"],
      features: ["Waterproof interior", "Handmade", "Unique glaze variations", "Stable base"]
    }
  },
  {
    id: "product-11",
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
    id: "product-12",
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

// Export only tea-related products (excluding home decor items)
export const products: ProductType[] = allProducts.filter(product => 
  !["Home Decor", "Lighting", "Textiles"].includes(product.category)
);

export function getFeaturedProducts(): ProductType[] {
  return products.filter(product => product.featured);
}

export function getProductById(id: string): ProductType | undefined {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(id: string, limit: number = 3): ProductType[] {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== id && p.category === product.category)
    .slice(0, limit);
}
