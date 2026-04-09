import { motion } from "framer-motion";
import { AlertTriangle, Clock, MessageCircleWarning, Eye, Ruler, HardHat } from "lucide-react";

const problems = [
  { icon: Clock, text: "Entwürfe durchlaufen zahlreiche Überarbeitungsschleifen – die Zeitplanung im Entwurfsprozess ist kaum optimiert." },
  { icon: Ruler, text: "DIN-Normen, Brandschutzanforderungen wie Türbreiten und Fluchtwege werden oft erst viel zu spät berücksichtigt." },
  { icon: MessageCircleWarning, text: "Die Kommunikation zwischen Bauherren und Fachplanern scheitert häufig an fehlendem gemeinsamen Verständnis." },
  { icon: Eye, text: "Möblierung und Raumwirkung sind entscheidend für die Nutzung – werden aber oft erst beim Einzug bedacht." },
  { icon: HardHat, text: "Viele planerische Entscheidungen fallen erst auf der Baustelle, wenn Änderungen teuer und aufwändig sind." },
  { icon: AlertTriangle, text: "Trockenbau-Planung und inklusive Wohnkonzepte werden in der Entwurfsphase selten zeiteffektiv integriert." },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">Mission & Problem</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Der Entwurfsprozess braucht ein <span className="gradient-text">Update</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            In der Bauplanung gehen wertvolle Zeit und Ressourcen verloren – durch fehlende Automatisierung, verspätete Normprüfungen und mangelnde Kommunikation zwischen allen Beteiligten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="surface-glass rounded-xl p-6 flex items-start gap-4 group hover:border-primary/40 transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-primary/15 text-primary shrink-0 group-hover:glow-primary transition-shadow">
                <item.icon className="w-5 h-5" />
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
