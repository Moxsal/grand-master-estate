import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-2">
            Client Protection
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Refund Policy
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Our commitment to transparency, trust, and client satisfaction is at the core of every transaction.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center mb-10">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                <Shield className="w-10 h-10 text-accent" />
              </div>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Our Guarantee to You
            </motion.h2>

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-6 text-lg">
              At Best Grandmaster Realty, client trust and transparency are our highest priorities. In the rare event of any issues arising from a property transaction — including but not limited to poor building construction, distress sales, property location disputes, or any form of incorrect property representation — the company guarantees a full refund of the total amount paid by the client.
            </motion.p>

            <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-10 text-lg">
              Our organization is committed to ethical real estate practices and ensuring that every property transaction is secure, transparent, and satisfactory for our clients.
            </motion.p>

            <motion.div variants={fadeUp} className="bg-secondary rounded-xl p-8 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                What This Policy Covers
              </h3>
              <div className="space-y-4">
                {[
                  "Poor or substandard building construction",
                  "Distress sales or misrepresented property conditions",
                  "Property location disputes or boundary issues",
                  "Incorrect property representation or documentation",
                  "Any form of fraudulent or misleading property transactions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 bg-card rounded-xl p-8 border border-border text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Your Investment Is Protected
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                We stand firmly behind every property we list and every transaction we facilitate. Our refund guarantee reflects the confidence we have in the quality and integrity of our services.
              </p>
              <p className="text-accent font-semibold text-sm">
                RC: 3497825 — Registered & Verified
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
