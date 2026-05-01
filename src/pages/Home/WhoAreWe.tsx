import { motion } from "motion/react";
import { slideLeft } from "@/lib/animations";

export function WhoAreWe() {
  return (
    <section className="bg-white pt-12 md:pt-16 px-5 md:px-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto space-y-16">
        {/* TEXT FULL WIDTH */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8 tracking-tight">
            Who We Are
          </h2>

          <div className="space-y-6 text-brand-mid text-base md:text-lg leading-relaxed">
            <p>
              At Furtado's Hospitality, we believe a home is more than bricks
              and mortar—it's a personal sanctuary where life unfolds, memories
              are made, and peace finds its place.
            </p>
            <p>
              Our mission is to guide you in discovering that perfect haven,
              delivering exceptional service and refined expertise at every step
              of your journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
