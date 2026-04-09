import { motion } from "framer-motion";

const team = [
  {
    name: "Antonio Dario Spadafora",
    role: "CEO",
    initials: "AS",
  },
  {
    name: "Philipp Thumbs",
    role: "CTO",
    initials: "PT",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-3 block">Das Team</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Die Köpfe hinter <span className="gradient-text">DINamisch</span>
          </h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="surface-glass rounded-2xl p-8 text-center w-full sm:w-72 group hover:border-primary/40 transition-colors"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-5 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-heading text-xl font-bold">
                {member.initials}
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">{member.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
