export interface Venue {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: {
    district: string;
    city: string;
    address: string;
  };
  capacity: {
    min: number;
    max: number;
  };
  area: number; // m²
  priceFrom: number;
  images: {
    hero: string;
    gallery: string[];
    thumbnail: string;
  };
  description: {
    short: string;
    full: string;
  };
  features: string[];
  amenities: {
    icon: string;
    name: string;
  }[];
  availability: 'available' | 'limited' | 'unavailable';
  featured: boolean;
  type: 'wedding' | 'corporate' | 'social' | 'all';
  interior: {
    description: string;
    highlights: string[];
  };
}

export interface Review {
  id: number;
  text: string;
  author: string;
  type: string;
}

export type Category = 'all' | 'wedding' | 'corporate' | 'social';