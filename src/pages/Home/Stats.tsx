import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { CountUp } from "@/components/ui/CountUp";

export function Stats() {
  return (
    <section className="bg-brand-surface border-y border-brand-rule py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <motion.div variants={fadeUp}>
            <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2">
              <CountUp target={2} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Private Villas
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2">
              <CountUp target={14} suffix="m" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Infinity Pool
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2">
              <CountUp target={6} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Waterfalls
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="text-4xl md:text-5xl font-bold text-brand-black mb-2">
              <CountUp target={12} />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              Max Guests (Together)
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
