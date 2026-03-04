import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import bgrLogo from "@/assets/bgr-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "Land", path: "/land" },
  { label: "Our Team", path: "/team" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={bgrLogo}
              alt="Best Grandmaster Realty"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+234919945833"
              className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-gold transition-colors"
            >
              <Phone className="w-4 h-4" />
              +234 919 945 833
            </a>
            <Link to="/contact">
              <Button className="bg-gradient-gold text-primary font-semibold hover:opacity-90 transition-opacity">
                Schedule a Visit
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-primary-foreground/10"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-primary-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+234919945833"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 py-2"
              >
                <Phone className="w-4 h-4" />
                +234 919 945 833
              </a>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-gold text-primary font-semibold">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;