import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp } from "@/lib/animations";

const highlights = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1706586344022-7e467f3652b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Romantic Getaways",
    description:
      "A private sanctuary for two, complete with sunset views and a jacuzzi.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Family Celebrations",
    description:
      "Spacious living areas and a 14-metre pool for unforgettable family moments.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Wedding Stays",
    description:
      "Rent the full estate for your bridal party or intimate wedding celebrations.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1633113214207-1568ec4b3298?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Friends & Reunions",
    description:
      "Two identical villas, one shared compound. The perfect setup for groups of up to 12.",
  },
];

export function CuratedExperiences() {
  const [expandedId, setExpandedId] = useState(1);

  return (
    <section className="bg-white py-24 md:py-32 px-5">
      <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-20 mb-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
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
              Perfect For
            </span>
          </div>
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
            Every Reason to Celebrate
          </h2>
          <p className="text-base font-normal leading-relaxed text-brand-mid max-w-2xl">
            Familia Furtado is a backdrop for life's most beautiful moments.
          </p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[500px] w-full"
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              className="relative rounded-3xl overflow-hidden cursor-pointer shadow-lg flex-1"
              animate={{ flex: expandedId === highlight.id ? 4 : 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              onHoverStart={() => setExpandedId(highlight.id)}
              onClick={() => setExpandedId(highlight.id)}
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 hover:bg-black/10" />

              <AnimatePresence>
                {expandedId === highlight.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white flex flex-col justify-end h-full md:h-auto"
                  >
                    <div className="max-w-[90%] md:max-w-[70%]">
                      <div className="text-2xl md:text-3xl font-bold mb-2">
                        {highlight.title}
                      </div>
                      <div className="text-sm md:text-base text-white/80 leading-relaxed">
                        {highlight.description}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {expandedId !== highlight.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center md:items-end md:justify-center md:pb-8 bg-black/30"
                  >
                    <div className="text-white font-bold text-center tracking-wide">
                      {highlight.title}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
