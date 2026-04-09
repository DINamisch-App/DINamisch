import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <footer id="contact" className="border-t border-border/50 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:Info.dinamisch@web.de" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  Info.dinamisch@web.de
                </a>
              </li>
              <li>
                <a href="tel:+49152400024682" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  +49 152 400024682
                </a>
              </li>
            </ul>
          </div>

          {/* Impressum */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Impressum</h3>
            <address className="not-italic text-sm text-muted-foreground leading-relaxed space-y-1">
              <p className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                Hochschule Mainz
              </p>
              <p className="pl-6">Lucy-Hillebrand-Straße 2</p>
              <p className="pl-6">55128 Mainz, Deutschland</p>
            </address>
          </div>

          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-heading font-bold">
              <span className="gradient-text">DIN</span>amisch
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Intelligente Grundrissplanung. Normgerecht. Effizient.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DINamisch. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
