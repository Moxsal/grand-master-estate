import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import investment1 from "@/assets/investment-1.png";
import investment2 from "@/assets/investment-2.png";
import investment3 from "@/assets/investment-3.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const landListings = [
  {
    image: investment1,
    title: "Joint Venture Development Opportunity – Chevron Alternative Route",
    location: "Chevron Alternative Route, Lekki, Lagos",
    size: "Negotiable",
    titleDoc: "Governor's Consent",
    description:
      "Prime joint venture opportunity located directly along the Chevron alternative route. This property is ideal for a terrace development project. The title document is Governor's Consent, providing strong legal security for investors and developers. Other agreement terms are open for discussion. Perfect for smart developers ready for immediate development.",
  },
  {
    image: investment3,
    title: "Premium Development Land – Lekki Beach Road, Igbarra",
    location: "Lekki Beach Road, Igbarra, Lagos",
    size: "5 Plots",
    titleDoc: "Direct Brief",
    description:
      "A premium 5-plot property strategically located in a well-developed and highly desirable area of Lekki Beach Road, Igbarra. This direct brief offering is suitable for terraces or block of flats development. An excellent opportunity for investors seeking high-return residential development.",
  },
  {
    image: investment2,
    title: "Joint Venture Land – Opposite Mayfair Gardens, Awoyaya",
    location: "Opposite Mayfair Gardens, Awoyaya, Lagos",
    size: "3,382.659 sqm",
    titleDoc: "Survey Available",
    description:
      "Strategically positioned mixed-use development land located opposite Mayfair Gardens, Awoyaya. Suitable for both commercial and residential projects. Total Area: 3,382.659 sqm (as indicated in survey). Available as a direct brief for capable developers seeking a structured joint venture opportunity.",
  },
];

const Land = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-2">
            Investment Opportunities
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Land & Development
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Premium land opportunities for serious investors and developers across Lagos's most strategic locations.
          </p>
        </div>
      </section>

      {/* Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {landListings.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-card-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    {item.location}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full">
                      Size: {item.size}
                    </span>
                    <span className="text-xs bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full">
                      Title: {item.titleDoc}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <a
                    href={`https://wa.me/2347033841190?text=${encodeURIComponent(`Hi, I'm interested in: ${item.title} - ${item.location}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-gold text-primary font-semibold hover:opacity-90 transition-opacity">
                      Enquire Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-2">
            Have Land to Sell?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            List Your Land With Us
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Partner with Best Grandmaster Realty to connect your land with verified buyers and investors.
          </p>
          <a
            href="https://wa.me/234919945833?text=Hi%2C%20I%20have%20land%20I%20would%20like%20to%20list%20with%20BGM%20Realty."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-gradient-gold text-primary font-semibold hover:opacity-90 transition-opacity">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Land;