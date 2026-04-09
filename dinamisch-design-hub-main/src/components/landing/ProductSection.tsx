import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="product" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">Produkt</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Bereit zum <span className="gradient-text">Loslegen?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Testen Sie DINamisch direkt in Ihrem Browser – keine Installation nötig. Starten Sie Ihre erste normgerechte Grundrissplanung in wenigen Minuten.
          </p>

          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-semibold text-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
          >
            <Sparkles className="w-5 h-5" />
            Webapp öffnen
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          <p className="text-xs text-muted-foreground/50 mt-4">
            Link wird in Kürze verfügbar sein.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
