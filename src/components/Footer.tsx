import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-2">
              Best Grandmaster
            </h3>
            <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4">
              Realty
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your Trusted Property Partner. We help you find the perfect property
              for your lifestyle and investment goals.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-4">
              RC: 3497825
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Properties", path: "/properties" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Property Types
            </h4>
            <div className="flex flex-col gap-3">
              {["Residential", "Commercial", "Land", "Luxury Villas", "Apartments"].map(
                (type) => (
                  <Link
                    key={type}
                    to="/properties"
                    className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {type}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-gold">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+234919945833"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                +234 919 945 833
              </a>
              <a
                href="tel:07062985424"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                070 6298 5424
              </a>
              <a
                href="mailto:info@bgmrealty.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 text-gold shrink-0" />
                info@bgmrealty.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                Lagos, Nigeria
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Best Grandmaster Realty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/50 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
