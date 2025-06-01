export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: "house" | "apartment" | "condo" | "townhouse" | "land";
  yearBuilt: number;
  features: string[];
  images: string[];
  isFeatured: boolean;
  status: "for-sale" | "for-rent" | "sold" | "pending";
  listedDate: string;
  agentId: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
  specialties: string[];
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  isFeatured: boolean;
  properties: string[]; // Array of property IDs
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  coverImage: string;
  publishedDate: string;
  category: string;
  tags: string[];
}

export type PropertyFilter = {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
  status?: string;
  location?: string;
};

export type SortOption = "price-asc" | "price-desc" | "date-asc" | "date-desc";
