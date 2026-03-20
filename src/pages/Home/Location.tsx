import { motion } from "motion/react";
import { slideLeft, slideRight } from "@/lib/animations";

function Location() {
  return (
    <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
              Location
            </span>
          </div>
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
            Porvorim, North Goa
          </h2>
          <div className="space-y-4 text-base font-normal leading-relaxed text-brand-mid">
            <p>
              Tucked into the lush hills above Porvorim, Familia Furtado sits at
              the sweet spot between Goa's wildness and its quiet. Close enough
              to the beach to feel the salt in the air. Far enough to hear
              nothing but the waterfalls.
            </p>
            <p>
              The village is known for its sunsets, its musicians, and the kind
              of unhurried pace that makes you forget what day it is. We think
              you'll fit right in.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "5 min to Porvorim City",
              "Portuguese Heritage",
              "Valley Views",
              "Lush Tropical Gardens",
            ].map((tag, i) => (
              <div
                key={i}
                className="bg-brand-surface rounded-full px-4 py-2 text-sm font-medium text-brand-black"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://malldegoa.com/wp-content/uploads/2024/11/DJI_0153-2048x1536.jpg"
              alt="Porvorim, Goa"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Location;
