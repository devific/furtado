import { motion } from "motion/react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { PageTransition } from "@/components/layout/PageTransition";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerContainerSlow,
  scaleUp,
} from "../lib/animations";
import { ChefHat, Flame, Waves, Sunset, Star, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import EnquiryForm from "@/components/EnquiryForm";
import EnquiryFormDialog from "@/components/EnquiryFormDialog";

export function Explore() {
  return (
    <PageTransition>
      {/* Section 5.1 - Page Hero */}
      <ParallaxSection
        imageSrc="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        className="min-h-[60vh] flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-5 max-w-3xl mx-auto py-2"
        >
          <AnimatedHeading
            text="Goa, Your Way."
            className="text-6xl xl:text-7xl font-extrabold leading-none text-white mb-6"
          />
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/80 max-w-lg mx-auto leading-relaxed"
          >
            The caretaker knows everything. We've listed the best of it here.
          </motion.p>
        </motion.div>
      </ParallaxSection>

      {/* Section 5.2 - In-Villa Experiences */}
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
                At The Villa
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
              Without Leaving the Gates
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: ChefHat,
                title: "Private Chef Dining",
                body: "From Goan fish curry to continental breakfasts - tell us what you want and we'll make it happen in your kitchen.",
              },
              {
                icon: Flame,
                title: "BBQ Evenings",
                body: "The garden BBQ setup is all yours. Fire it up at sunset, gather your people, and let Goa do the rest.",
              },
              {
                icon: Waves,
                title: "Pool Mornings",
                body: "The pool opens with the sun. Swim, float, or just sit by the waterfalls with your coffee. The schedule is entirely yours.",
              },
              {
                icon: Sunset,
                title: "Sundowners on the Deck",
                body: "Cocktails, golden light, and the sound of six waterfalls. Some evenings, the villa is all you need.",
              },
              {
                icon: Star,
                title: "Special Occasion Setup",
                body: "Celebrating something? Tell us in advance and we'll make sure the villa is dressed for the occasion.",
              },
              {
                icon: Moon,
                title: "Late Night, Yours",
                body: "No curfews, no noise complaints from neighbours, no hotel rules. Stay up as late as you like.",
              },
            ].map((exp, i) => (
              <motion.div key={i} variants={fadeUp}>
                <FeatureCard
                  icon={exp.icon}
                  title={exp.title}
                  body={exp.body}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 5.3 - Around Goa */}
      <section className="bg-brand-surface py-20 md:py-28 px-5 md:px-10 xl:px-20">
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
                Beyond the Gates
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
              Porvorim & Beyond
            </h2>
            <p className="text-base font-normal leading-relaxed text-brand-mid max-w-2xl">
              Our caretaker can help arrange any of the below - just ask on
              arrival.
            </p>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                title: "Calangute Beach",
                desc: "A five-minute drive and you're at one of North Goa's most beloved beaches. Long, uncrowded, and lined with beach cafes. Perfect for mornings.",
                img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
              },
              {
                title: "Portuguese Quarter Walks",
                desc: "Panaji's Latin Quarter and Fontainhas are among the most beautiful colonial streets in India. A half-day well spent.",
                img: "https://images.unsplash.com/photo-1648367819123-19d2ffe43f3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
              },
            ].map((exp, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-center`}
              >
                <motion.div
                  variants={i % 2 !== 0 ? slideRight : slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={exp.img}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  variants={i % 2 !== 0 ? slideLeft : slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <h3 className="text-3xl font-bold text-brand-black mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-brand-mid leading-relaxed">
                    {exp.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.4 - Occasions */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16 text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-left"
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                For Special Occasions
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-right"
              />
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
              We Set the Stage
            </h2>
            <p className="text-lg text-brand-mid leading-relaxed mb-10">
              Whether you're celebrating a wedding stay, a milestone birthday,
              or a long-overdue family gathering, Familia Furtado is built for
              exactly this.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Wedding Stays",
              },
              {
                img: "https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Anniversary Escapes",
              },
              {
                img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Family Celebrations",
              },
            ].map((view, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative rounded-2xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={view.img}
                  alt={view.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white font-semibold text-xl">
                    {view.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <EnquiryFormDialog>
              <Button variant="primary">Tell us your occasion &rarr;</Button>
            </EnquiryFormDialog>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
