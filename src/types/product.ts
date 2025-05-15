
export interface ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  imageSrc: string;
  description?: string;
  featured?: boolean;
  details?: {
    features?: string[];
    dimensions?: string;
    weight?: string;
    materials?: string[];
    origin?: string;
  };
}
