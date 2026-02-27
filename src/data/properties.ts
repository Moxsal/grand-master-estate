import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";
import luxuryAptBalcony from "@/assets/luxury-apt-balcony.jpg";
import luxuryAptBedroom from "@/assets/luxury-apt-bedroom.jpg";
import luxuryAptBath1 from "@/assets/luxury-apt-bath1.jpg";
import luxuryAptBath2 from "@/assets/luxury-apt-bath2.jpg";
import luxuryAptKitchen from "@/assets/luxury-apt-kitchen.jpg";
import terraceExterior from "@/assets/terrace-exterior.jpg";
import terraceEntrance from "@/assets/terrace-entrance.jpg";
import terraceCompound from "@/assets/terrace-compound.jpg";
import terraceLiving from "@/assets/terrace-living.jpg";
import terraceLounge from "@/assets/terrace-lounge.jpg";
import terraceWardrobe from "@/assets/terrace-wardrobe.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  type: "Residential" | "Commercial" | "Land" | "Apartment" | "Villa";
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  gallery?: string[];
  description: string;
  amenities: string[];
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Luxury Apartment",
    location: "Victoria Island, Lagos",
    price: "₦150,000,000",
    priceValue: 150000000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "250 sqm",
    image: property1,
    description: "Experience urban luxury in this stunning 3-bedroom apartment with panoramic city views. Features floor-to-ceiling windows, premium finishes, and state-of-the-art amenities.",
    amenities: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Smart Home"],
    featured: true,
  },
  {
    id: "2",
    title: "Contemporary Villa",
    location: "Lekki Phase 1, Lagos",
    price: "₦350,000,000",
    priceValue: 350000000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 5,
    area: "600 sqm",
    image: property2,
    description: "A masterpiece of modern architecture. This 5-bedroom villa features tropical landscaping, a private pool, and spacious entertainment areas.",
    amenities: ["Private Pool", "Garden", "Smart Home", "Staff Quarters", "CCTV"],
    featured: true,
  },
  {
    id: "3",
    title: "Penthouse Suite",
    location: "Ikoyi, Lagos",
    price: "₦500,000,000",
    priceValue: 500000000,
    type: "Apartment",
    bedrooms: 4,
    bathrooms: 4,
    area: "400 sqm",
    image: property3,
    description: "The pinnacle of luxury living. This penthouse offers breathtaking panoramic views, a private terrace, and world-class finishes throughout.",
    amenities: ["Rooftop Terrace", "Private Elevator", "Concierge", "Wine Cellar", "Gym"],
    featured: true,
  },
  {
    id: "4",
    title: "Premium Office Complex",
    location: "Adeola Odeku, VI, Lagos",
    price: "₦800,000,000",
    priceValue: 800000000,
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 8,
    area: "2,000 sqm",
    image: property4,
    description: "A Grade A office complex in the heart of Victoria Island's business district. Modern glass facade, high-speed elevators, and ample parking.",
    amenities: ["Elevator", "Generator", "Parking", "Conference Room", "Security"],
    featured: false,
  },
  {
    id: "5",
    title: "Gated Estate Home",
    location: "Banana Island, Lagos",
    price: "₦1,200,000,000",
    priceValue: 1200000000,
    type: "Residential",
    bedrooms: 6,
    bathrooms: 7,
    area: "800 sqm",
    image: property5,
    description: "An exclusive residence in Nigeria's most prestigious address. This 6-bedroom mansion features colonial-modern architecture with manicured gardens.",
    amenities: ["Swimming Pool", "Tennis Court", "Cinema", "Staff Quarters", "Helipad Access"],
    featured: true,
  },
  {
    id: "6",
    title: "Modern Duplex",
    location: "Ajah, Lagos",
    price: "₦85,000,000",
    priceValue: 85000000,
    type: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    area: "320 sqm",
    image: property6,
    description: "A beautiful semi-detached duplex in a serene environment. Features modern finishes, spacious rooms, and a family-friendly neighborhood.",
    amenities: ["Garden", "Parking", "Security", "Boys' Quarters", "Water Treatment"],
    featured: false,
  },
  {
    id: "7",
    title: "Executive High-Rise Apartment",
    location: "Eko Atlantic City, Lagos",
    price: "₦450,000,000",
    priceValue: 450000000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "280 sqm",
    image: luxuryAptBalcony,
    gallery: [luxuryAptBalcony, luxuryAptBedroom, luxuryAptBath1, luxuryAptBath2, luxuryAptKitchen],
    description: "An exceptional high-rise residence offering panoramic waterfront views from floor-to-ceiling glass panels. This meticulously finished 3-bedroom apartment features premium wood-finish wardrobes with built-in organizers, a designer kitchen with modern cabinetry, and luxury bathrooms with mosaic tile accents and glass-enclosed showers. Ideal for discerning professionals and investors seeking a prestigious address in Lagos's most iconic waterfront development.",
    amenities: ["Panoramic Views", "Built-in Wardrobes", "Designer Kitchen", "Premium Bathrooms", "Balcony", "24/7 Security", "Concierge", "Parking"],
    featured: true,
  },
];
