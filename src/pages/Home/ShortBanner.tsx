import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";

function ShortBanner() {
  return (
    <section className="bg-brand-black py-20 md:py-28 px-5">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Not a resort. Not a hotel. Yours, entirely.
        </h2>
        <p className="text-white/50 text-sm md:text-base">
          Familia Furtado is a home - built with love, furnished with care, and
          waiting for you.
        </p>
      </motion.div>
    </section>
  );
}

export default ShortBanner;
