import { motion } from "framer-motion";
import { Shield, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import michealImg from "@/assets/micheal-ojimadu.jpg";
import adonisImg from "@/assets/adonis-peterz.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const teamMembers = [
  {
    name: "Micheal Izuchukwu Ojimadu",
    role: "Chairman / CEO",
    org: "Best Grandmaster Group (BGM)",
    phone: "+234 802 394 7619",
    whatsapp: "2348023947619",
    image: michealImg,
    bio: "As Chairman and CEO of Best Grandmaster Group, Micheal Izuchukwu Ojimadu brings visionary leadership and deep expertise in real estate development and investment. With a proven track record of successful property ventures across Nigeria, he drives the strategic direction of the group with a focus on innovation, integrity, and community impact.",
  },
  {
    name: "Adonis St-Gerald Une Peterz",
    role: "Vice President & CEO / Investor",
    org: "Best Grandmaster Group",
    phone: "+234 706 298 5424",
    whatsapp: "2347062985424",
    image: adonisImg,
    bio: "As Vice President and CEO / Investor, Adonis St-Gerald Une Peterz brings a wealth of experience in business operations, property investment, and strategic management. His global perspective and commitment to operational excellence ensure that BGM Group consistently delivers world-class real estate services.",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-2">
            Leadership
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Team
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Meet the professionals behind Best Grandmaster Realty — a team of experienced leaders committed to delivering excellence in every transaction.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          >
            {teamMembers.map((person) => (
              <motion.div
                key={person.name}
                variants={fadeUp}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-card-foreground">
                    {person.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mt-2">
                    {person.role}
                  </p>
                  <p className="text-muted-foreground text-xs mb-4">
                    {person.org}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {person.bio}
                  </p>
                  <a
                    href={`https://wa.me/${person.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Phone / WhatsApp: {person.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-accent tracking-[0.2em] uppercase text-sm font-medium mb-2">
              Our Culture
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built on Trust & Excellence
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
              At Best Grandmaster Realty, our leadership team embodies the values that define our brand — integrity, professionalism, and an unwavering commitment to client success. With a combined portfolio of 500+ properties and years of market expertise, we bring institutional-grade service to every client relationship.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
