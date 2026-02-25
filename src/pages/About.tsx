import { motion } from "framer-motion";
import { Shield, Target, Eye, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import michealImg from "@/assets/micheal-ojimadu.jpg";
import adonisImg from "@/assets/adonis-peterz.jpg";

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
            A trusted name in Nigerian real estate, committed to excellence, integrity, and creating lasting value for our clients.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground mb-6">
              Our Story
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
              Best Grandmaster Realty is a subsidiary of Best Grandmaster Group (BGM), a diversified conglomerate with interests spanning real estate, investments, and business development across Nigeria and beyond.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
              Founded with a vision to transform the Nigerian real estate landscape, we combine local expertise with global standards to deliver exceptional property solutions. Whether you're buying your first home, expanding your investment portfolio, or seeking premium commercial spaces, our team of dedicated professionals is here to guide you every step of the way.
            </motion.p>
            <motion.p variants={fadeUp} className="text-accent font-semibold text-sm">
              RC Registration: 3497825
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              { icon: Target, title: "Our Mission", desc: "To provide world-class real estate services that create lasting value, build trust, and transform communities across Nigeria." },
              { icon: Eye, title: "Our Vision", desc: "To be the most trusted and innovative real estate company in Africa, setting the standard for excellence and integrity." },
              { icon: Award, title: "Our Values", desc: "Integrity, excellence, innovation, and client-first approach guide every decision we make and every property we represent." },
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

      {/* Team */}
      <section className="py-20">
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
              Executive Team
            </motion.h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
          >
            {[
              {
                name: "Micheal Izuchukwu Ojimadu",
                role: "Chairman / CEO",
                org: "Best Grandmaster Group (BGM)",
                phone: "+234 919 945 833 / 070 6298 5424",
                image: michealImg,
                bio: "As Chairman and CEO of Best Grandmaster Group, Micheal Izuchukwu Ojimadu brings visionary leadership and deep expertise in real estate development and investment. With a proven track record of successful property ventures across Nigeria, he drives the strategic direction of the group with a focus on innovation, integrity, and community impact.",
              },
              {
                name: "Adonis St-Gerald Une Peterz",
                role: "Vice President / COO & Investor",
                org: "Best Grandmaster Group",
                phone: "+234 919 945 833",
                image: adonisImg,
                bio: "As Vice President and COO, Adonis St-Gerald Une Peterz brings a wealth of experience in business operations, property investment, and strategic management. His global perspective and commitment to operational excellence ensure that BGM Group consistently delivers world-class real estate services.",
              },
            ].map((person) => (
              <motion.div key={person.name} variants={fadeUp} className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square overflow-hidden">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-card-foreground">{person.name}</h3>
                  <p className="text-accent font-medium text-sm mt-1">{person.role}</p>
                  <p className="text-muted-foreground text-xs mb-3">{person.org}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{person.bio}</p>
                  <p className="text-muted-foreground text-xs">
                    <Shield className="w-3 h-3 inline mr-1" />
                    {person.phone}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
