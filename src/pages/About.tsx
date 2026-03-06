import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Target, Eye, Award, ChevronRight, Building, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-2">
            About Us
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Best Grandmaster Realty
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            A premier real estate development and investment firm delivering institutional-grade property solutions across Nigeria's most strategic markets.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Properties Delivered" },
              { value: "10+", label: "Years of Experience" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "RC: 3497825", label: "Registered & Verified" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl md:text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.p variants={fadeUp} className="text-accent tracking-[0.2em] uppercase text-sm font-medium mb-2 text-center">
              Who We Are
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground mb-8 text-center">
              Our Story
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-5">
              Best Grandmaster Realty is a subsidiary of Best Grandmaster Group (BGM), a diversified conglomerate with interests spanning real estate development, property investment, and strategic business ventures across Nigeria and the broader African market.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-5">
              With a portfolio of over 500 properties delivered across Lagos's most sought-after corridors — from Lekki and Ikoyi to Eko Atlantic City — we have established ourselves as one of the most trusted names in Nigerian real estate. Our developments are defined by architectural excellence, legal transparency, and enduring value.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-5">
              We serve a discerning clientele of high-net-worth individuals, institutional investors, diaspora buyers, and corporate entities seeking premium residential and commercial assets. Every engagement is guided by rigorous due diligence, market expertise, and a commitment to exceeding client expectations.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              Whether you are acquiring your first home, expanding an investment portfolio, or exploring joint venture development opportunities, Best Grandmaster Realty provides the expertise, integrity, and market access to help you succeed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Target, title: "Our Mission", desc: "To deliver world-class real estate solutions that create lasting value, build generational wealth, and transform communities across Nigeria." },
              { icon: Eye, title: "Our Vision", desc: "To be Africa's most trusted and innovative real estate development firm — setting the industry standard for excellence, transparency, and client success." },
              { icon: Award, title: "Our Values", desc: "Integrity, excellence, innovation, and a relentless client-first approach guide every decision we make, every property we develop, and every relationship we build." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-card rounded-lg p-8 text-center shadow-sm">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Invest With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.p variants={fadeUp} className="text-accent tracking-[0.2em] uppercase text-sm font-medium mb-2">
              Competitive Advantage
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Why Invest With BGM Realty
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Building, title: "500+ Properties Delivered", desc: "A proven track record of successfully completing and delivering premium properties across Lagos's most valued locations." },
              { icon: Shield, title: "Verified & Legally Sound", desc: "Every property undergoes thorough legal verification. All transactions are backed by proper title documentation and due diligence." },
              { icon: Users, title: "Professional Leadership", desc: "Our executive team brings decades of combined experience in real estate development, investment management, and strategic operations." },
              { icon: TrendingUp, title: "High-Value Returns", desc: "We identify and develop properties in high-growth corridors, ensuring strong capital appreciation and rental yield for our investors." },
              { icon: Award, title: "End-to-End Service", desc: "From property sourcing and acquisition to development, management, and resale — we handle every aspect of your real estate journey." },
              { icon: Target, title: "Market Intelligence", desc: "Deep understanding of Nigeria's real estate market dynamics, pricing trends, and emerging opportunity zones gives our clients a decisive edge." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Construction & Property Development */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p variants={fadeUp} className="text-accent tracking-[0.2em] uppercase text-sm font-medium mb-2">
              Development Track Record
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              Construction & Property Development
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-5 text-lg">
              Best Grandmaster Group has successfully partnered in over 1,000 construction projects across Nigeria and has independently completed over 500 self-developed construction and property development projects.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              Our company continues to contribute to Nigeria's real estate sector through large-scale development, strategic partnerships, and quality construction standards.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12"
          >
            {[
              { value: "1,000+", label: "Partnership Projects" },
              { value: "500+", label: "Self-Developed Projects" },
              { value: "6,000+", label: "Properties Managed" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="bg-card rounded-lg p-8 text-center shadow-sm border border-border">
                <p className="font-display text-3xl font-bold text-accent mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Whether you're buying, investing, or developing — our team is ready to deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/team">
              <Button size="lg" className="bg-gradient-gold text-primary font-semibold hover:opacity-90 transition-opacity">
                Meet Our Team
                <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;