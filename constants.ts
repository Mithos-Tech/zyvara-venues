import { Venue, Review } from './types';
import { Users, Wifi, Car, Music, Utensils, Maximize, Sun, Wind } from 'lucide-react';

// ==========================================
// IMAGE CONFIGURATION
// ==========================================

// Mapping strict 1 image per venue to ensure consistency in Detail View
// OPTIMIZATION: f_auto,q_auto injected for Next-Gen formats and smart compression
export const VENUES: Venue[] = [
  {
    id: '1',
    slug: 'avantage-hall',
    name: 'Avantage Hall',
    tagline: 'Industrial soul, minimalist heart',
    location: {
      district: 'San Isidro',
      city: 'Lima',
      address: 'Av. Conquistadores 456'
    },
    capacity: { min: 100, max: 150 },
    area: 300,
    priceFrom: 8000,
    images: {
      hero: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_01_y62tb9.webp',
      gallery: ['https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_01_y62tb9.webp'],
      thumbnail: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_01_y62tb9.webp'
    },
    description: {
      short: 'Luxury industrial loft featuring soaring ceilings and abundant natural light.',
      full: 'A contemporary loft where industrial architecture meets modern elegance. Featuring 5-meter high ceilings and floor-to-ceiling windows that bathe the space in natural light, this venue offers a minimalist canvas for your vision. Curated Scandinavian furniture is included to create a sophisticated, turnkey atmosphere.'
    },
    features: [
      'Professional Chef\'s Kitchen',
      'Bose Premium Sound System',
      'Customizable LED Ambiance',
      'Curated Scandinavian Furniture',
      'Private Lounge Area',
      'Luxury Restrooms'
    ],
    amenities: [
      { icon: 'Users', name: '150 Guests' },
      { icon: 'Maximize', name: '300 m²' },
      { icon: 'Wifi', name: 'High-Speed WiFi' },
      { icon: 'Car', name: 'Valet Parking' }
    ],
    availability: 'available',
    featured: true,
    type: 'all',
    interior: {
      description: 'The interior boasts a neutral palette with copper and wood accents. Polished concrete floors and textured white walls provide a gallery-like backdrop.',
      highlights: [
        'Modern Black Steel Fireplace',
        'Danish Design Pendant Lights',
        'White Leather Poufs',
        'Panoramic Window Views'
      ]
    }
  },
  {
    id: '2',
    slug: 'grace',
    name: 'Grace',
    tagline: 'Classic elegance redefined',
    location: {
      district: 'Miraflores',
      city: 'Lima',
      address: 'Av. Larco 789'
    },
    capacity: { min: 80, max: 120 },
    area: 250,
    priceFrom: 10000,
    images: {
      hero: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_02_iavrrg.webp',
      gallery: ['https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_02_iavrrg.webp'],
      thumbnail: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_02_iavrrg.webp'
    },
    description: {
      short: 'A timeless salon featuring modern accents and crystal chandeliers.',
      full: 'Grace is the embodiment of timeless sophistication. Its cream-paneled walls and stunning crystal chandeliers create a dreamlike atmosphere, perfect for intimate weddings and gala dinners where detail is paramount.'
    },
    features: ['Crystal Chandeliers', 'Marble Dance Floor', 'Bridal Suite'],
    amenities: [
        { icon: 'Users', name: '120 Guests' },
        { icon: 'Music', name: 'Acoustic Perfection' }
    ],
    availability: 'limited',
    featured: true,
    type: 'wedding',
    interior: {
      description: 'Gold and cream tones dominate this vaulted space, creating a warm, regal glow.',
      highlights: ['Classic Moldings', 'Chevron Wood Flooring', 'Antique Mirrors']
    }
  },
  {
    id: '3',
    slug: 'secret',
    name: 'Secret',
    tagline: 'Hidden warmth and intimacy',
    location: {
      district: 'Barranco',
      city: 'Lima',
      address: 'Jr. Colina 234'
    },
    capacity: { min: 50, max: 80 },
    area: 180,
    priceFrom: 6000,
    images: {
      hero: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_03_ppixss.webp',
      gallery: ['https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_03_ppixss.webp'],
      thumbnail: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_03_ppixss.webp'
    },
    description: {
      short: 'A secret garden sanctuary in the heart of Barranco.',
      full: 'Hidden behind a discreet facade, Secret reveals an interior courtyard lush with vegetation and restored Republican architecture. An intimate escape from the city.'
    },
    features: ['Private Garden', 'Cocktail Bar', 'Fairy Lights'],
    amenities: [
        { icon: 'Wind', name: 'Open Air' },
        { icon: 'Utensils', name: 'In-house Catering' }
    ],
    availability: 'available',
    featured: false,
    type: 'social',
    interior: {
      description: 'A seamless fusion of living nature and colonial architecture.',
      highlights: ['Living Green Wall', 'Original Tile Flooring', 'Retractable Roof']
    }
  },
  {
    id: '4',
    slug: 'luna',
    name: 'Luna',
    tagline: 'Views that touch the sky',
    location: {
      district: 'San Isidro',
      city: 'Lima',
      address: 'Av. Pardo y Aliaga 555'
    },
    capacity: { min: 150, max: 250 },
    area: 400,
    priceFrom: 15000,
    images: {
      hero: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_04_mj18y8.webp',
      gallery: ['https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_04_mj18y8.webp'],
      thumbnail: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_04_mj18y8.webp'
    },
    description: {
      short: 'Exclusive rooftop with 360° city views.',
      full: 'Located on the 25th floor, Luna offers an unparalleled experience under the stars. Modern design in glass and steel creates an invisible boundary between you and the skyline.'
    },
    features: ['Panoramic Views', 'Helipad Access', 'Private Elevator'],
    amenities: [{ icon: 'Sun', name: 'Sunset View' }, { icon: 'Users', name: '250 Guests' }],
    availability: 'available',
    featured: true,
    type: 'corporate',
    interior: {
      description: 'Pure minimalism with invisible glass barriers.',
      highlights: ['Infinite LED Bar', 'Sunken Lounge Pit', 'Frameless Glass Walls']
    }
  },
  {
    id: '5',
    slug: 'soleil',
    name: 'Soleil',
    tagline: 'Nature and light',
    location: {
      district: 'Cieneguilla',
      city: 'Lima',
      address: 'Carr. Cieneguilla km 12'
    },
    capacity: { min: 200, max: 500 },
    area: 2000,
    priceFrom: 12000,
    images: {
      hero: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_05_op2orb.webp',
      gallery: ['https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_05_op2orb.webp'],
      thumbnail: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_05_op2orb.webp'
    },
    description: {
      short: 'Modern hacienda surrounded by infinite gardens.',
      full: 'Escape the city to this oasis of tranquility. Soleil combines traditional hacienda structure with modern luxury finishes, offering expansive grounds for grand celebrations.'
    },
    features: ['Private Chapel', 'Bridal Bungalows', 'Artificial Lake'],
    amenities: [{ icon: 'Car', name: 'Parking (100)' }, { icon: 'Wind', name: 'Gardens' }],
    availability: 'available',
    featured: false,
    type: 'wedding',
    interior: {
      description: 'Open spaces that flow seamlessly into the exterior.',
      highlights: ['Stone Arches', 'Exposed Wood Beams', 'Terra Cotta Accents']
    }
  },
  {
    id: '6',
    slug: 'cristal',
    name: 'Cristal',
    tagline: 'Modern transparency',
    location: {
      district: 'Surco',
      city: 'Lima',
      address: 'Av. El Polo 101'
    },
    capacity: { min: 100, max: 200 },
    area: 350,
    priceFrom: 9500,
    images: {
      hero: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_06_e6lbjg.webp',
      gallery: ['https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_06_e6lbjg.webp'],
      thumbnail: 'https://res.cloudinary.com/dkoshgzxo/image/upload/f_auto,q_auto/v1765170643/gal_06_e6lbjg.webp'
    },
    description: {
      short: 'A glass pavilion floating on water.',
      full: 'An architectural jewel floating above reflecting pools. Cristal offers an ethereal experience both day and night, where the venue itself becomes a sculpture of light.'
    },
    features: ['Reflecting Pools', 'Underwater Lighting', 'Glass Bridges'],
    amenities: [{ icon: 'Users', name: '200 Guests' }, { icon: 'Maximize', name: 'Climate Control' }],
    availability: 'limited',
    featured: true,
    type: 'social',
    interior: {
      description: 'White steel structure with tempered glass.',
      highlights: ['Backlit Flooring', 'Column-free Design', 'Suspended Walkways']
    }
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: 1,
    text: "ZYVARA realized our dream wedding. The space was absolutely magical and the management flawless.",
    author: "Sofia & Marco",
    type: "Wedding 2026"
  },
  {
    id: 2,
    text: "Attention to detail and service were impeccable. Highly recommended for high-level corporate events.",
    author: "Maria Gonzalez",
    type: "Corporate Event 2026"
  },
  {
    id: 3,
    text: "Finding such an exclusive venue in Lima seemed impossible until we discovered ZYVARA.",
    author: "Carlos Rossi",
    type: "Private Celebration 2026"
  }
];

export const ANIMATIONS = {
  pageTransition: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  },
  reveal: {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10%" },
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  },
  titleReveal: {
     initial: { y: '100%' },
     animate: { y: 0 },
     transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }
};