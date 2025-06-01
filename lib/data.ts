import { Agent, BlogPost, Property, PropertyFilter, SortOption } from "./types";

// Mock data for properties
export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Luxury Villa with Ocean View",
    description:
      "This stunning modern villa offers breathtaking ocean views and luxurious living spaces. Featuring an open floor plan, high ceilings, and floor-to-ceiling windows that flood the home with natural light. The gourmet kitchen includes top-of-the-line appliances and a large island perfect for entertaining. The primary suite boasts a spa-like bathroom and private balcony overlooking the ocean.",
    price: 1250000,
    address: "123 Oceanview Drive",
    city: "Malibu",
    state: "CA",
    zipCode: "90265",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    propertyType: "house",
    yearBuilt: 2018,
    features: ["Ocean View", "Swimming Pool", "Smart Home", "Home Theater", "Wine Cellar", "Gourmet Kitchen"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    ],
    isFeatured: true,
    status: "for-sale",
    listedDate: "2025-05-15",
    agentId: "1",
    location: {
      lat: 34.0259,
      lng: -118.7798,
    },
  },
  {
    id: "2",
    title: "Downtown Luxury Apartment",
    description:
      "Experience urban living at its finest in this luxury apartment located in the heart of downtown. This modern unit features high-end finishes, an open concept layout, and floor-to-ceiling windows offering spectacular city views. The building offers premium amenities including a rooftop pool, fitness center, and 24-hour concierge service.",
    price: 750000,
    address: "456 City Center Blvd",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90017",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1500,
    propertyType: "apartment",
    yearBuilt: 2020,
    features: ["City View", "Concierge", "Fitness Center", "Rooftop Pool", "Pet Friendly", "Smart Home"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    ],
    isFeatured: true,
    status: "for-sale",
    listedDate: "2025-05-20",
    agentId: "2",
    location: {
      lat: 34.0522,
      lng: -118.2437,
    },
  },
  {
    id: "3",
    title: "Charming Suburban Family Home",
    description:
      "This charming family home is nestled in a quiet, family-friendly neighborhood with excellent schools. The spacious backyard features a covered patio perfect for outdoor entertaining. Inside, you'll find a welcoming living room with a fireplace, updated kitchen with stainless steel appliances, and a finished basement that can serve as a playroom or home office.",
    price: 650000,
    address: "789 Maple Street",
    city: "Pasadena",
    state: "CA",
    zipCode: "91101",
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2400,
    propertyType: "house",
    yearBuilt: 2005,
    features: ["Backyard", "Fireplace", "Finished Basement", "Garage", "Updated Kitchen", "Quiet Neighborhood"],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&h=600&fit=crop",
    ],
    isFeatured: true,
    status: "for-sale",
    listedDate: "2025-05-18",
    agentId: "3",
    location: {
      lat: 34.1478,
      lng: -118.1445,
    },
  },
  {
    id: "4",
    title: "Waterfront Condo with Marina Views",
    description:
      "Enjoy spectacular marina views from this luxurious waterfront condo. This beautifully updated unit features an open floor plan, gourmet kitchen with quartz countertops, and a spacious balcony perfect for watching sunsets over the water. The complex offers resort-style amenities including a pool, spa, and private dock access.",
    price: 875000,
    address: "321 Harbor Drive",
    city: "Marina del Rey",
    state: "CA",
    zipCode: "90292",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1800,
    propertyType: "condo",
    yearBuilt: 2010,
    features: ["Waterfront", "Balcony", "Pool", "Spa", "Dock Access", "Gated Community"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7?w=800&h=600&fit=crop",
    ],
    isFeatured: false,
    status: "for-sale",
    listedDate: "2025-05-22",
    agentId: "1",
    location: {
      lat: 33.9802,
      lng: -118.4517,
    },
  },
  {
    id: "5",
    title: "Modern Townhouse in Trendy Neighborhood",
    description:
      "This stylish townhouse is located in one of the city's most vibrant neighborhoods, walking distance to trendy restaurants, shops, and parks. The property features an open concept main floor, a rooftop deck with city views, and a private garage. High-end finishes throughout include hardwood floors, quartz countertops, and designer lighting fixtures.",
    price: 550000,
    address: "555 Urban Lane",
    city: "Silver Lake",
    state: "CA",
    zipCode: "90026",
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1700,
    propertyType: "townhouse",
    yearBuilt: 2017,
    features: ["Rooftop Deck", "Private Garage", "Hardwood Floors", "Walk Score 95", "Energy Efficient", "Smart Home"],
    images: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    ],
    isFeatured: false,
    status: "for-rent",
    listedDate: "2025-05-10",
    agentId: "2",
    location: {
      lat: 34.0827,
      lng: -118.2707,
    },
  },
  {
    id: "6",
    title: "Luxury Beachfront Property",
    description:
      "Experience the ultimate in coastal living with this exceptional beachfront property. Fall asleep to the sound of waves and wake up to panoramic ocean views. This architectural masterpiece features walls of glass, multiple outdoor living spaces, and direct beach access. The gourmet kitchen, spa-like bathrooms, and smart home technology offer the perfect blend of luxury and comfort.",
    price: 3500000,
    address: "999 Beachfront Avenue",
    city: "Santa Monica",
    state: "CA",
    zipCode: "90402",
    bedrooms: 5,
    bathrooms: 5.5,
    squareFeet: 4500,
    propertyType: "house",
    yearBuilt: 2015,
    features: ["Beachfront", "Panoramic Views", "Infinity Pool", "Home Gym", "Wine Cellar", "Smart Home"],
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
    isFeatured: true,
    status: "for-sale",
    listedDate: "2025-05-05",
    agentId: "3",
    location: {
      lat: 34.0195,
      lng: -118.4912,
    },
  },
];

// Mock data for agents
export const agents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@realestate.com",
    phone: "(310) 555-1234",
    photo: "https://images.unsplash.com/photo-1616776005756-4dca36124bf9?w=400&h=400&fit=crop&crop=face",
    bio: "With over 15 years of experience in luxury real estate, Sarah specializes in high-end properties in coastal communities. Her extensive network and negotiation skills have helped clients achieve their real estate goals with exceptional results. Sarah is known for her personalized approach and unwavering commitment to client satisfaction.",
    specialties: ["Luxury Homes", "Waterfront Properties", "Investment Properties"],
    socialMedia: {
      facebook: "https://facebook.com/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      instagram: "https://instagram.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson",
    },
    isFeatured: true,
    properties: ["1", "4"],
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    email: "michael.rodriguez@realestate.com",
    phone: "(310) 555-5678",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Michael brings a wealth of knowledge in urban real estate markets, specializing in condos and apartments in metropolitan areas. His background in architecture gives him a unique perspective on property value and potential. Michael is dedicated to helping first-time buyers navigate the complexities of urban real estate.",
    specialties: ["Urban Properties", "First-Time Buyers", "Condos & Apartments"],
    socialMedia: {
      facebook: "https://facebook.com/michaelrodriguez",
      twitter: "https://twitter.com/michaelrodriguez",
      instagram: "https://instagram.com/michaelrodriguez",
      linkedin: "https://linkedin.com/in/michaelrodriguez",
    },
    isFeatured: true,
    properties: ["2", "5"],
  },
  {
    id: "3",
    name: "Emily Chen",
    email: "emily.chen@realestate.com",
    phone: "(310) 555-9012",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Emily specializes in luxury estates and investment properties throughout Southern California. With a background in finance, she provides valuable insights on property investment and wealth building through real estate. Emily's client-focused approach and attention to detail have earned her a reputation for excellence in the industry.",
    specialties: ["Luxury Estates", "Investment Properties", "International Clients"],
    socialMedia: {
      facebook: "https://facebook.com/emilychen",
      twitter: "https://twitter.com/emilychen",
      instagram: "https://instagram.com/emilychen",
      linkedin: "https://linkedin.com/in/emilychen",
    },
    isFeatured: true,
    properties: ["3", "6"],
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david.wilson@realestate.com",
    phone: "(310) 555-3456",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "David has built his reputation on helping families find their perfect homes in suburban communities. His knowledge of school districts, community amenities, and family-friendly neighborhoods makes him an invaluable resource for relocating families. David prides himself on building lasting relationships with his clients.",
    specialties: ["Family Homes", "Suburban Properties", "Relocation Services"],
    socialMedia: {
      facebook: "https://facebook.com/davidwilson",
      twitter: "https://twitter.com/davidwilson",
      instagram: "https://instagram.com/davidwilson",
      linkedin: "https://linkedin.com/in/davidwilson",
    },
    isFeatured: false,
    properties: [],
  },
];

// Mock data for blog posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "home-buying-tips-for-first-time-buyers",
    title: "Essential Home Buying Tips for First-Time Buyers",
    excerpt: "Navigating the real estate market as a first-time buyer can be overwhelming. Here are our top tips to make the process smoother and more successful.",
    content: `# Essential Home Buying Tips for First-Time Buyers

Buying your first home is an exciting milestone, but it can also feel overwhelming. The real estate market can be complex, and there are many factors to consider before making such a significant investment. Here's a comprehensive guide to help first-time buyers navigate the process with confidence.

## 1. Get Your Finances in Order

Before you start looking at properties, it's crucial to understand your financial situation:

- **Check your credit score**: A higher credit score can help you secure better mortgage rates
- **Calculate your budget**: Use the 28/36 rule - housing costs shouldn't exceed 28% of your gross monthly income
- **Save for a down payment**: While some loans allow as little as 3% down, having 20% helps avoid PMI
- **Factor in closing costs**: Budget an additional 2-5% of the home's purchase price

## 2. Get Pre-approved for a Mortgage

Getting pre-approved shows sellers you're serious and helps you understand your price range. Shop around with multiple lenders to find the best rates and terms.

## 3. Find the Right Real Estate Agent

A good agent will:
- Understand your needs and budget
- Have knowledge of the local market
- Guide you through the buying process
- Negotiate on your behalf

## 4. Consider the Total Cost of Homeownership

Beyond the mortgage payment, factor in:
- Property taxes
- Homeowners insurance
- HOA fees
- Maintenance and repairs
- Utilities

## 5. Don't Skip the Home Inspection

A professional home inspection can reveal potential issues that might cost thousands later. Never waive this contingency unless absolutely necessary.

Remember, buying a home is a marathon, not a sprint. Take your time, do your research, and don't be afraid to ask questions along the way.`,
    author: "Michael Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    publishedDate: "2025-05-20",
    category: "Buying",
    tags: ["First-Time Buyers", "Home Buying Tips", "Mortgages", "Real Estate"],
  },
  {
    id: "2",
    slug: "interior-design-trends-2025",
    title: "Top Interior Design Trends for 2025",
    excerpt: "Discover the latest interior design trends that are shaping homes in 2025, from sustainable materials to smart home integration.",
    content: `# Top Interior Design Trends for 2025

As we move through 2025, interior design continues to evolve, reflecting our changing lifestyles and values. This year's trends emphasize sustainability, comfort, and technology integration. Here are the top trends shaping homes this year.

## 1. Sustainable and Natural Materials

Eco-consciousness is driving design choices:
- **Reclaimed wood** for flooring and accent walls
- **Bamboo** as a versatile, fast-growing alternative
- **Cork flooring** for its antimicrobial properties
- **Recycled glass** countertops and tiles

## 2. Warm Earth Tones

Move over stark whites - warm, earthy colors are taking center stage:
- Terracotta and rust oranges
- Deep forest greens
- Rich chocolate browns
- Warm beiges and creams

## 3. Smart Home Integration

Technology seamlessly blends with design:
- Hidden charging stations in furniture
- Smart mirrors in bathrooms
- Integrated sound systems
- Automated lighting that adjusts throughout the day

## 4. Curved and Organic Shapes

Soft, curved lines are replacing sharp angles:
- Rounded furniture edges
- Arched doorways and windows
- Circular and oval mirrors
- Flowing, organic sculptures

## 5. Multi-Functional Spaces

With hybrid work continuing, homes need to serve multiple purposes:
- Murphy beds in home offices
- Kitchen islands that double as workspaces
- Outdoor rooms with weather protection
- Flexible furniture arrangements

## 6. Textural Variety

Rich textures add depth and interest:
- Bouclé upholstery
- Natural stone walls
- Woven grass cloth wallpaper
- Mixed metal finishes

These trends reflect our desire for homes that are not only beautiful but also functional, sustainable, and adaptable to our evolving needs.`,
    author: "Emily Chen",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop",
    publishedDate: "2025-05-25",
    category: "Design",
    tags: ["Interior Design", "Trends", "Smart Home", "Sustainability"],
  },
];

export function filterProperties(filters: PropertyFilter): Property[] {
  return properties.filter((property) => {
    // Check location (assuming it matches city or state)
    if (filters.location && !property.city.toLowerCase().includes(filters.location.toLowerCase()) && !property.state.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Check property type
    if (filters.propertyType && property.propertyType !== filters.propertyType) {
      return false;
    }

    // Check status
    if (filters.status && property.status !== filters.status) {
      return false;
    }

    // Check price range
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }

    // Check bedrooms
    if (filters.bedrooms && property.bedrooms !== filters.bedrooms) {
      return false;
    }

    // Check bathrooms
    if (filters.bathrooms && property.bathrooms !== filters.bathrooms) {
      return false;
    }

    return true;
  });
}

export function sortProperties(propertiesToSort: Property[], sortOption: SortOption): Property[] {
  return [...propertiesToSort].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "date-asc":
        return new Date(a.listedDate).getTime() - new Date(b.listedDate).getTime();
      case "date-desc":
        return new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime();
      default:
        return 0;
    }
  });
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find((property) => property.id === id);
}

export function getAgentById(id: string): Agent | undefined {
  return agents.find((agent) => agent.id === id);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()).slice(0, limit);
}

export function getFeaturedAgents(): Agent[] {
  return agents.filter((agent) => agent.isFeatured);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((property) => property.isFeatured);
}
