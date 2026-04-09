import { motion } from "framer-motion";
import { Brain, ShieldCheck, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "KI-gestützte Grundrissvorschläge",
    description:
      "Auf Basis Ihres aktuellen Planungsstands generiert unsere App intelligente Vorschläge für die Grundrissgestaltung – angepasst an Ihre individuellen Vorgaben und Anforderungen.",
  },
  {
    icon: ShieldCheck,
    title: "Automatische Normprüfung",
    description:
      "DIN-Normen, Brandschutzrichtlinien, Fluchtwegbreiten und Barrierefreiheit werden in Echtzeit geprüft – nicht erst am Ende des Planungsprozesses, sondern von Anfang an.",
  },
  {
    icon: LayoutDashboard,
    title: "Intuitive Planungsumgebung",
    description:
      "Eine visuelle Oberfläche, die Architekten, Fachplanern und Bauherren gleichermaßen verständlich macht, was im Entwurf passiert – für bessere Kommunikation und schnellere Entscheidungen.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 md:py-32 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/30 to-background" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">Unsere Lösung</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Planung, die <span className="gradient-text">mitdenkt</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            DINamisch verbindet KI-gestützte Entwurfsoptimierung mit automatischer Normprüfung – für Architekten, Ingenieure und Fachplaner, die effizienter planen wollen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              <div className="surface-glass rounded-2xl p-8 h-full flex flex-col hover:border-primary/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-6 group-hover:glow-primary transition-shadow">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Zielgruppe: Architekten · Innenarchitekten · Ingenieure · Fachplaner</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
