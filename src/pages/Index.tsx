import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Home, TrendingUp, Users, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import propertyNew3 from "@/assets/property-new-3.jpg";
import michealImg from "@/assets/micheal-ojimadu.jpg";
import adonisImg from "@/assets/adonis-peterz.jpg";
import investment1 from "@/assets/investment-1.png";
import investment2 from "@/assets/investment-2.png";
import investment3 from "@/assets/investment-3.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  const featuredProperties = properties.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-navy opacity-70" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-gold tracking-[0.3em] uppercase text-sm mb-4 font-medium"
          >
            Your Trusted Property Partner
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Discover Your
            <span className="text-gradient-gold block">Dream Property</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Best Grandmaster Realty brings you premium properties across Nigeria's
            most sought-after locations. Buy, sell, or invest with confidence.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <Button size="lg" className="bg-gradient-gold text-primary font-semibold text-base px-8 hover:opacity-90 transition-opacity">
                Explore Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "200+", label: "Properties Sold" },
              { value: "50+", label: "Active Listings" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "10+", label: "Years Experience" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <p className="font-display text-3xl md:text-4xl font-bold text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-accent tracking-[0.2em] uppercase text-sm font-medium mb-2">
              Curated Selection
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Properties
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto">
              Hand-picked premium listings in Nigeria's most desirable locations
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredProperties.map((property) => (
              <motion.div key={property.id} variants={fadeUp}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/properties">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Properties
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Investment Opportunities */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="text-accent tracking-[0.2em] uppercase text-sm font-medium mb-2">
              Exclusive Deals
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Investment Opportunities
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Premium land and development opportunities for serious investors and developers
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {[
              {
                image: investment1,
                title: "Joint Venture Development Opportunity – Chevron Alternative Route",
                description: "Prime joint venture opportunity located directly along the Chevron alternative route. This property is ideal for a terrace development project. The title document is Governor's Consent, providing strong legal security for investors and developers. Other agreement terms are open for discussion. Perfect for smart developers ready for immediate development.",
                highlights: [
                  { label: "Title", value: "Governor's Consent" },
                  { label: "Type", value: "Joint Venture" },
                  { label: "Use", value: "Terrace Development" },
                ],
              },
              {
                image: investment3,
                title: "Premium Development Land – Lekki Beach Road, Igbarra",
                description: "A premium 5-plot property strategically located in a well-developed and highly desirable area of Lekki Beach Road, Igbarra. This direct brief offering is suitable for terraces or block of flats development. An excellent opportunity for investors seeking high-return residential development.",
                highlights: [
                  { label: "Size", value: "5 Plots" },
                  { label: "Type", value: "Direct Brief" },
                  { label: "Use", value: "Terraces / Flats" },
                ],
              },
              {
                image: investment2,
                title: "Joint Venture Land – Opposite Mayfair Gardens, Awoyaya",
                description: "Strategically positioned mixed-use development land located opposite Mayfair Gardens, Awoyaya. Suitable for both commercial and residential projects. Total Area: 3,382.659 sqm (as indicated in survey). Available as a direct brief for capable developers seeking a structured joint venture opportunity.",
                highlights: [
                  { label: "Area", value: "3,382.659 sqm" },
                  { label: "Type", value: "Mixed-Use" },
                  { label: "Brief", value: "Direct" },
                ],
              },
            ].map((item) => (
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.highlights.map((h) => (
                      <span
                        key={h.label}
                        className="text-xs bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full"
                      >
                        {h.label}: {h.value}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <a
                    href="https://wa.me/234919945833"
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

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-accent tracking-[0.2em] uppercase text-sm font-medium mb-2">
              Why BGM Realty
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Us
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Shield, title: "Trusted & Verified", desc: "All properties are verified and legally documented. RC: 3497825." },
              { icon: Home, title: "Premium Listings", desc: "Access to exclusive luxury properties across Nigeria's top locations." },
              { icon: TrendingUp, title: "Investment Guidance", desc: "Expert advice on high-yield property investments and market trends." },
              { icon: Users, title: "Dedicated Support", desc: "Personalized service from consultation to closing and beyond." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="bg-card rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-accent tracking-[0.2em] uppercase text-sm font-medium mb-2">
              Leadership
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Meet Our Team
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                name: "Micheal Izuchukwu Ojimadu",
                role: "Chairman / CEO",
                org: "Best Grandmaster Group (BGM)",
                image: michealImg,
                bio: "A visionary leader with extensive experience in real estate development and investment across Nigeria. Micheal drives the strategic direction of BGM Group with a passion for creating value and transforming communities.",
              },
              {
                name: "Adonis St-Gerald Une Peterz",
                role: "Vice President / COO & Investor",
                org: "Best Grandmaster Group",
                image: adonisImg,
                bio: "An accomplished business strategist and investor, Adonis brings global perspective and operational excellence to BGM Group. His expertise in property investment and management ensures world-class service delivery.",
              },
            ].map((person) => (
              <motion.div
                key={person.name}
                variants={fadeUp}
                className="bg-card rounded-lg overflow-hidden shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-card-foreground">
                    {person.name}
                  </h3>
                  <p className="text-accent font-medium text-sm mt-1">{person.role}</p>
                  <p className="text-muted-foreground text-xs mb-3">{person.org}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.p variants={fadeUp} className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-2">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              What Our Clients Say
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                name: "Chidi Okonkwo",
                text: "BGM Realty made buying our first home an incredibly smooth experience. Their team was professional, transparent, and genuinely cared about finding us the perfect property.",
                role: "Homeowner, Lagos",
              },
              {
                name: "Amara Eze",
                text: "I've invested in multiple properties through BGM Realty. Their market knowledge and integrity are unmatched. I trust them completely with my real estate portfolio.",
                role: "Property Investor",
              },
              {
                name: "David Akpan",
                text: "The level of service and attention to detail from BGM Realty is truly world-class. They helped us find the perfect commercial space for our business.",
                role: "Business Owner, Abuja",
              },
            ].map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUp}
                className="bg-navy-light/50 rounded-lg p-8 border border-primary-foreground/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-primary-foreground/50 text-xs">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Find Your Dream Property?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Get in touch with our team today and let us help you make the best
              property decision of your life.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties">
                <Button size="lg" className="bg-gradient-gold text-primary font-semibold text-base px-8 hover:opacity-90">
                  Browse Properties
                </Button>
              </Link>
              <a href="https://wa.me/234919945833" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8">
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
