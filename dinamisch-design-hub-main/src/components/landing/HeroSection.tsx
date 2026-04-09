import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={logo} alt="DINamisch" className="h-64 md:h-96 lg:h-[28rem] mx-auto mb-2" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light">
            Intelligente Grundrissplanung. Normgerecht. Effizient.
          </p>
          <p className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-10">
            Wir revolutionieren den Entwurfsprozess in der Bauwirtschaft – mit KI-gestützter Planung, die DIN-Normen von Anfang an mitdenkt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#solution"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
          >
            Unsere Lösung entdecken
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg font-medium border border-border text-foreground hover:bg-surface transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
