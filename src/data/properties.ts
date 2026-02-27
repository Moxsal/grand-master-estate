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
import terraceFrontEntrance from "@/assets/terrace-front-entrance.jpg";
import terraceCourtyard from "@/assets/terrace-courtyard.jpg";
import terraceKitchen from "@/assets/terrace-kitchen.jpg";
import terraceReception from "@/assets/terrace-reception.jpg";

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
    id: "7",
    title: "Executive High-Rise Apartment",
    location: "Eko Atlantic City, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
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
  {
    id: "8",
    title: "Contemporary Terrace Duplex",
    location: "Lekki, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
    type: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    area: "350 sqm",
    image: terraceFrontEntrance,
    gallery: [
      terraceFrontEntrance,
      terraceCourtyard,
      terraceKitchen,
      terraceReception,
      terraceExterior,
      terraceEntrance,
      terraceLounge,
      terraceLiving,
      terraceWardrobe,
      terraceCompound,
    ],
    description: "A masterfully crafted 4-bedroom contemporary terrace duplex delivered to the highest standards of modern living. This completed development showcases bold architectural lines, premium interior finishes, and meticulous attention to detail — from the designer pop ceilings with ambient LED lighting and fully fitted kitchen with centre island, to the bespoke walk-in wardrobe with full-length mirror panelling. The spacious living areas feature polished porcelain floors, expansive windows for natural light, and a well-proportioned compound with private parking and landscaped frontage.",
    amenities: ["Designer Pop Ceiling", "Fitted Kitchen with Island", "Walk-in Wardrobe", "Marble Accent Wall", "Private Compound", "Ambient Lighting", "Premium Tiling", "Secure Entry", "Landscaped Frontage"],
    featured: true,
  },
];
