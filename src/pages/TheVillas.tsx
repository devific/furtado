import { motion } from "motion/react";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import { Button } from "../components/ui/Button";
import { ParallaxSection } from "../components/ui/ParallaxSection";
import { PageTransition } from "../components/layout/PageTransition";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainerSlow,
  staggerContainer,
  scaleUp,
} from "../lib/animations";
import { villaData, sharedAmenities } from "../data/villas";
import {
  Waves,
  Fish,
  TreePine,
  Utensils,
  Flame,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export function TheVillas() {
  return (
    <PageTransition>
      {/* Section 2.1 - Page Hero */}
      <ParallaxSection
        imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        className="min-h-[60vh] flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-5 max-w-3xl mx-auto"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-6"
          >
            Familia Furtado
          </motion.p>
          <AnimatedHeading
            text="The Villas"
            className="text-6xl xl:text-7xl font-extrabold leading-none text-white mb-6"
          />
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/80 max-w-lg mx-auto leading-relaxed"
          >
            Two private retreats. Same soul, same address. Both available
            independently or together.
          </motion.p>
        </motion.div>
      </ParallaxSection>

      {/* Section 2.2 - Villa Selector */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {villaData.map((villa, index) => (
            <motion.div
              key={villa.id}
              variants={index === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-8">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={
                    index === 0
                      ? "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                      : "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                  }
                  alt={villa.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-brand-black mb-4">
                {villa.name}
              </h2>
              <p className="text-brand-mid mb-6">
                {villa.bedrooms} Bedrooms · {villa.bathrooms} Bathrooms · Up to{" "}
                {villa.maxOccupancy} Guests · {villa.balconies} Balconies
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {villa.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-mid">
                    <Sparkles className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button to={`/villas/${villa.id}`} variant="primary">
                  Explore This Villa &rarr;
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 2.3 - Rent Both Together */}
      <section className="bg-brand-surface py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Full Estate"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            variants={slideRight}
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
                The Full Estate
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
              One Compound. Twelve Guests. Zero Compromises.
            </h2>
            <p className="text-base font-normal leading-relaxed text-brand-mid mb-6">
              When the whole family comes to Goa - or when a wedding calls for
              something extraordinary - both villas open as a single private
              estate. Shared pool, shared grounds, two fully staffed homes.
            </p>
            <p className="text-lg font-medium text-brand-black mb-8">
              12 Guests · 4 Bedrooms · 6 Bathrooms · 14m Pool · 8 Balconies
            </p>
            <Button to="/contact" variant="primary">
              Enquire About the Full Estate &rarr;
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 2.4 - Shared Amenities */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20 text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16 flex flex-col items-center"
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
                Shared Between Both Villas
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-right"
              />
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
              The Grounds Are Yours
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Waves, label: "Pool & Jacuzzi" },
              { icon: Fish, label: "Fish Pond" },
              { icon: TreePine, label: "Garden & Lawn" },
              { icon: Utensils, label: "Outdoor Dining" },
              { icon: Flame, label: "BBQ Setup" },
              { icon: Users, label: "Caretaker On-Site" },
              { icon: Sparkles, label: "Daily Housekeeping" },
              { icon: ShieldCheck, label: "CCTV Security" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-brand-surface flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <span className="text-sm font-semibold text-brand-black">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2.5 - Book / Enquire CTA */}
      <section className="bg-brand-black py-24 px-5">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-white mb-6">
            Ready to make it yours?
          </h2>
          <p className="text-white/60 text-lg max-w-lg mx-auto mb-10">
            Check availability or simply get in touch. We respond personally -
            no automated replies, no waiting rooms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" variant="primary">
              Start the Conversation &rarr;
            </Button>
            <Button
              to="#"
              variant="outlineWhite"
              className="border-white/20 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30"
            >
              View on Airbnb
            </Button>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
