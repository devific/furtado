import { motion } from "motion/react";
import { fadeUp, slideLeft, slideRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { VillaCard } from "@/components/ui/VillaCard";
import { villaData } from "@/data/villas";
import { imagekitBaseUrl } from "@/config";

export function TheVillas() {
  return (
    <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-px w-12 bg-brand-rule origin-left"
            />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              The Villas
            </span>
          </div>
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
            Choose Your Escape
          </h2>
          <p className="text-base font-normal leading-relaxed text-brand-mid max-w-2xl">
            Each villa is a self-contained retreat - identical in luxury,
            infinite in memory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <VillaCard
              {...villaData[0]}
              imageSrc={`${imagekitBaseUrl}/${villaData[0].image}?tr=w-800,h-600,fo-auto,q-80`}
            />
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <VillaCard
              {...villaData[1]}
              imageSrc={`${imagekitBaseUrl}/${villaData[1].image}?tr=w-800,h-600,fo-auto,q-80`}
            />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-brand-surface rounded-2xl p-8 md:p-12 mt-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <p className="text-lg font-medium text-brand-black max-w-2xl">
            Travelling as a larger group? Both villas can be rented together as
            a private compound for up to 12 guests.
          </p>
          <Button
            to="/contact"
            variant="primary"
            className="shrink-0 cursor-pointer"
          >
            Book the Full Estate &rarr;
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
