import { motion } from "framer-motion";
import { Play } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">Demo</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            DINamisch in <span className="gradient-text">Aktion</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Erleben Sie, wie unsere App den Entwurfsprozess vereinfacht – von der ersten Skizze bis zur normgerechten Planung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="surface-glass rounded-2xl overflow-hidden p-1.5">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-background/80">
              {/* Placeholder – replace the YouTube URL below with the real video ID */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="DINamisch Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* Overlay hint (hidden once video plays) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center glow-primary">
                  <Play className="w-7 h-7 text-primary-foreground ml-0.5" />
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground/50 mt-3">
            Platzhalter-Video – wird durch das offizielle Demo-Video ersetzt.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
