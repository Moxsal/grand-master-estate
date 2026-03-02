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
import propertyNew1 from "@/assets/property-new-1.jpg";
import propertyNew2 from "@/assets/property-new-2.jpg";
import propertyNew3 from "@/assets/property-new-3.jpg";
import propertyNew4 from "@/assets/property-new-4.jpg";
import propertyNew5 from "@/assets/property-new-5.jpg";
import propertyNew6 from "@/assets/property-new-6.jpg";
import propertyNew7 from "@/assets/property-new-7.jpg";
import propertyNew8 from "@/assets/property-new-8.jpg";
import propertyInterior1 from "@/assets/property-interior-1.jpg";
import story1 from "@/assets/story-1.jpg";
import story92 from "@/assets/story-9-2.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";
import story5 from "@/assets/story-5.jpg";

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
      story1,
    ],
    description: "A masterfully crafted 4-bedroom contemporary terrace duplex delivered to the highest standards of modern living. This completed development showcases bold architectural lines, premium interior finishes, and meticulous attention to detail — from the designer pop ceilings with ambient LED lighting and fully fitted kitchen with centre island, to the bespoke walk-in wardrobe with full-length mirror panelling. The spacious living areas feature polished porcelain floors, expansive windows for natural light, and a well-proportioned compound with private parking and landscaped frontage.",
    amenities: ["Designer Pop Ceiling", "Fitted Kitchen with Island", "Walk-in Wardrobe", "Marble Accent Wall", "Private Compound", "Ambient Lighting", "Premium Tiling", "Secure Entry", "Landscaped Frontage"],
    featured: true,
  },
  {
    id: "9",
    title: "Modern Detached Bungalow",
    location: "Ajah, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
    type: "Residential",
    bedrooms: 3,
    bathrooms: 3,
    area: "220 sqm",
    image: propertyNew1,
    gallery: [propertyNew1, propertyInterior1, story92],
    description: "A thoughtfully designed 3-bedroom detached bungalow featuring a contemporary façade with clean architectural lines, a covered front porch with statement lighting, and premium exterior finishes. Situated in a well-planned residential enclave, this property combines modern aesthetics with practical living — ideal for families and first-time homeowners seeking quality and value.",
    amenities: ["Covered Porch", "Statement Lighting", "Gated Compound", "Paved Driveway", "Modern Finishes", "Landscaped Garden"],
    featured: true,
  },
  {
    id: "10",
    title: "Classical Arch-Front Residence",
    location: "Lekki Phase 2, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
    type: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    area: "320 sqm",
    image: propertyNew2,
    gallery: [propertyNew2, story3],
    description: "An elegantly proportioned residence distinguished by its neoclassical arched entryways, ornamental cornicing, and symmetrical façade. This 4-bedroom bungalow exudes timeless sophistication with expansive window openings, a grand covered entrance, and meticulously landscaped surroundings — a refined choice for buyers who appreciate classical architectural character.",
    amenities: ["Arched Entryways", "Ornamental Cornicing", "Grand Entrance", "Landscaped Grounds", "Spacious Layout", "Private Parking"],
    featured: true,
  },
  {
    id: "11",
    title: "Premium Contemporary Bungalow",
    location: "Ibeju-Lekki, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
    type: "Residential",
    bedrooms: 4,
    bathrooms: 4,
    area: "300 sqm",
    image: propertyNew3,
    gallery: [propertyNew3, story4],
    description: "A striking 4-bedroom bungalow defined by bold geometric columns, ambient recessed lighting, and a dramatic stone-clad accent wall. The elevated entrance with feature steps and designer pendant lighting creates an impressive arrival experience. Generously proportioned with modern fenestration for abundant natural light — perfectly suited for executives seeking a distinguished address.",
    amenities: ["Geometric Columns", "Recessed Lighting", "Stone Accent Wall", "Elevated Entrance", "Designer Pendant Light", "Modern Fenestration"],
    featured: true,
  },
  {
    id: "12",
    title: "Heritage-Inspired Detached Bungalow",
    location: "Sangotedo, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
    type: "Residential",
    bedrooms: 3,
    bathrooms: 3,
    area: "280 sqm",
    image: propertyNew4,
    gallery: [propertyNew4],
    description: "A charming 3-bedroom detached bungalow that blends heritage-inspired details with contemporary construction standards. The distinctive arched window, brick accent façade, and columned front porch lend warmth and character, while the dark-toned hip roof and well-maintained frontage project solidity and curb appeal — an excellent opportunity for families and investors alike.",
    amenities: ["Arched Window", "Brick Accent Façade", "Columned Porch", "Hip Roof", "Paved Frontage", "Secure Perimeter"],
    featured: false,
  },
  {
    id: "13",
    title: "Executive Modern Bungalow",
    location: "Awoyaya, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
    type: "Residential",
    bedrooms: 3,
    bathrooms: 3,
    area: "260 sqm",
    image: propertyNew5,
    gallery: [propertyNew5],
    description: "A sleek and commanding 3-bedroom executive bungalow with a minimalist contemporary design. The crisp white exterior contrasts elegantly with the dark-toned roof, while tall vertical windows and structured symmetry create a refined streetscape presence. Ample private parking, manicured landscaping, and a secure perimeter wall complete this turnkey residence — ideal for professionals and discerning homeowners.",
    amenities: ["Minimalist Design", "Tall Vertical Windows", "Structured Symmetry", "Private Parking", "Manicured Landscaping", "Perimeter Security"],
    featured: false,
  },
  {
    id: "14",
    title: "Classic Arch-Front Bungalow",
    location: "Epe, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
    type: "Residential",
    bedrooms: 3,
    bathrooms: 3,
    area: "250 sqm",
    image: propertyNew6,
    gallery: [propertyNew6],
    description: "A solidly constructed 3-bedroom bungalow featuring distinctive arched entryways with white columned supports, a textured stone-clad façade, and a dark aluminium hip roof. The covered veranda, steel railing accents, and generous compound provide practical outdoor living space — a dependable choice for families seeking quality craftsmanship and enduring value.",
    amenities: ["Arched Entryways", "Stone-Clad Façade", "Aluminium Roof", "Covered Veranda", "Steel Railings", "Spacious Compound"],
    featured: true,
  },
  {
    id: "15",
    title: "Grand Executive Residence",
    location: "Ikorodu, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
    type: "Residential",
    bedrooms: 5,
    bathrooms: 5,
    area: "400 sqm",
    image: propertyNew7,
    gallery: [propertyNew7],
    description: "An imposing 5-bedroom executive residence with a commanding multi-tiered roofline and refined brick-and-render façade. The grand columned portico, ornamental pilasters, and carefully proportioned fenestration project institutional-grade quality. Set within a secured estate with ample frontage — an exceptional acquisition for high-net-worth families and corporate housing portfolios.",
    amenities: ["Multi-Tiered Roof", "Grand Portico", "Ornamental Pilasters", "Brick-and-Render Façade", "Secured Estate", "Ample Frontage"],
    featured: true,
  },
  {
    id: "16",
    title: "Contemporary White-Finish Bungalow",
    location: "Bogije, Lagos",
    price: "Price Available Upon Request",
    priceValue: 0,
    type: "Residential",
    bedrooms: 3,
    bathrooms: 3,
    area: "230 sqm",
    image: propertyNew8,
    gallery: [propertyNew8],
    description: "A pristine 3-bedroom bungalow distinguished by its crisp white exterior, dark stone-clad column accents, and clean architectural geometry. The elevated entrance with wide steps, covered porch, and shingle-style charcoal roof create a polished streetscape presence. Situated in a quiet residential corridor — ideal for buyers prioritising modern aesthetics and low-maintenance living.",
    amenities: ["White Exterior Finish", "Stone Column Accents", "Elevated Entrance", "Covered Porch", "Shingle Roof", "Quiet Location"],
    featured: true,
  },
];
