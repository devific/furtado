import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  Waves,
  Utensils,
  Flame,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";

export function TheExperience() {
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
              The Experience
            </span>
          </div>
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
            Everything Thought Of
          </h2>
          <p className="text-base font-normal leading-relaxed text-brand-mid max-w-2xl">
            From the moment you arrive to the moment you reluctantly leave.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeUp}>
            <FeatureCard
              icon={Waves}
              title="The Pool & Jacuzzi"
              body="A 14-metre private pool with 6 waterfalls and a 2-seater jacuzzi - yours for the entire stay."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FeatureCard
              icon={Utensils}
              title="Private Chef"
              body="Wake up to a custom breakfast or host a private dinner. Our chef is available on request."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FeatureCard
              icon={Users}
              title="Caretaker On-Site"
              body="A dedicated caretaker couple lives on-site, available around the clock for anything you need."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FeatureCard
              icon={ShieldCheck}
              title="Fully Furnished"
              body="Two halls, a fully-equipped kitchen, 4 balconies, garage, and every detail already taken care of."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FeatureCard
              icon={Sparkles}
              title="Valley & Sea Views"
              body="Every balcony frames something beautiful - pool, valley, or a sliver of the Arabian Sea."
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FeatureCard
              icon={Flame}
              title="Year-Round Availability"
              body="We're open every day of the year. Monsoon, peak season, or the quiet weeks in between."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
