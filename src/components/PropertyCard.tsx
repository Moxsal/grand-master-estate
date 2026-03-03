import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {property.type}
          </span>
        </div>
        {property.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
          <MapPin className="w-3.5 h-3.5" />
          {property.location}
        </div>
        <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
          {property.title}
        </h3>
        <p className="text-lg font-semibold text-accent mb-4">{property.price}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              {property.bedrooms} Beds
            </div>
          )}
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            {property.bathrooms} Baths
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            {property.area}
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={`/properties/${property.id}`} className="flex-1">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-navy-light transition-colors text-sm">
              View Details
            </Button>
          </Link>
          <a
            href={`https://wa.me/234919945833?text=${encodeURIComponent(`Hi, I'm interested in: ${property.title} - ${property.location}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors text-sm">
              Schedule Viewing
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
