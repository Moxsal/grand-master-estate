import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, Phone, ArrowLeft, Share2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Property Not Found</h1>
          <Link to="/properties" className="text-accent hover:underline mt-4 inline-block">
            Back to Properties
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: property.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Link to="/properties" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Properties
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg overflow-hidden aspect-[4/3]"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {property.type}
                </span>
                {property.featured && (
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {property.title}
              </h1>

              <div className="flex items-center gap-1 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                {property.location}
              </div>

              <p className="text-3xl md:text-4xl font-bold text-accent mb-6">{property.price}</p>

              <div className="flex items-center gap-6 mb-6 text-muted-foreground">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5" />
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-5 h-5" />
                  <span>{property.area}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">{property.description}</p>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/234919945833" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="lg" className="w-full bg-gradient-gold text-primary font-semibold hover:opacity-90">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule a Visit
                  </Button>
                </a>
                <Link to="/contact" className="flex-1">
                  <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Contact Agent
                  </Button>
                </Link>
                <Button size="lg" variant="outline" onClick={handleShare} className="border-border">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
