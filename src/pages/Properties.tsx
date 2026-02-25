import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [bedroomFilter, setBedroomFilter] = useState("all");

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = typeFilter === "all" || p.type === typeFilter;
      const matchesBedrooms =
        bedroomFilter === "all" ||
        (bedroomFilter === "1-2" && p.bedrooms >= 1 && p.bedrooms <= 2) ||
        (bedroomFilter === "3-4" && p.bedrooms >= 3 && p.bedrooms <= 4) ||
        (bedroomFilter === "5+" && p.bedrooms >= 5);
      const matchesPrice =
        priceFilter === "all" ||
        (priceFilter === "under100" && p.priceValue < 100000000) ||
        (priceFilter === "100-300" && p.priceValue >= 100000000 && p.priceValue <= 300000000) ||
        (priceFilter === "300-500" && p.priceValue > 300000000 && p.priceValue <= 500000000) ||
        (priceFilter === "500+" && p.priceValue > 500000000);
      return matchesSearch && matchesType && matchesBedrooms && matchesPrice;
    });
  }, [searchQuery, typeFilter, priceFilter, bedroomFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-2">
            Our Portfolio
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Property Listings
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Browse our curated selection of premium properties across Nigeria
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Residential">Residential</SelectItem>
                <SelectItem value="Commercial">Commercial</SelectItem>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="Villa">Villa</SelectItem>
                <SelectItem value="Land">Land</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under100">Under ₦100M</SelectItem>
                <SelectItem value="100-300">₦100M - ₦300M</SelectItem>
                <SelectItem value="300-500">₦300M - ₦500M</SelectItem>
                <SelectItem value="500+">Above ₦500M</SelectItem>
              </SelectContent>
            </Select>
            <Select value={bedroomFilter} onValueChange={setBedroomFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Bedrooms</SelectItem>
                <SelectItem value="1-2">1-2 Bedrooms</SelectItem>
                <SelectItem value="3-4">3-4 Bedrooms</SelectItem>
                <SelectItem value="5+">5+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm mb-6">
            {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"} found
          </p>
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property, i) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No properties match your filters.</p>
              <p className="text-muted-foreground text-sm mt-2">Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;
