import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PageTransition } from "../components/layout/PageTransition";
import {
  fadeUp,
  staggerContainer,
  staggerContainerSlow,
  slideLeft,
  slideRight,
} from "../lib/animations";
import {
  ArrowLeft,
  ArrowRight,
  Waves,
  Fish,
  TreePine,
  Utensils,
  Flame,
  Users,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import { Button } from "../components/ui/Button";
import { ParallaxSection } from "../components/ui/ParallaxSection";
import { VillaCard } from "../components/ui/VillaCard";
import { FeatureCard } from "../components/ui/FeatureCard";
import { CountUp } from "../components/ui/CountUp";
import { villaData } from "../data/villas";

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

const whoWeAreImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
];

export function Home() {
  const [expandedId, setExpandedId] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % whoWeAreImages.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + whoWeAreImages.length) % whoWeAreImages.length,
    );

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-end flex-col">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://ik.imagekit.io/devific/furtado/pool.mp4?updatedAt=1773174474223"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/20" />

        <motion.div
          variants={staggerContainerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-5 max-w-4xl mx-auto mt-[-10vh] py-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight !text-white mb-6 drop-shadow-lg"
          >
            Secure Your Share of
            <br />
            Elite Property
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Access handpicked, high-value real estate across the globe—curated
            for discerning investors seeking elevated returns and exclusivity.
          </motion.p>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-24 md:py-32 px-5 md:px-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-lg lg:ml-auto pr-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8 tracking-tight">
              Who We Are
            </h2>
            <div className="space-y-6 text-brand-mid text-base leading-relaxed">
              <p>
                At Furtado's Hospitality, we believe a home is more than bricks
                and mortar—it's a personal sanctuary where life unfolds,
                memories are made, and peace finds its place.
              </p>
              <p>
                Our mission is to guide you in discovering that perfect haven,
                delivering exceptional service and refined expertise at every
                step of your journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[500px] w-full flex items-center"
          >
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ArrowLeft size={18} className="text-brand-black" />
            </button>

            <div className="absolute left-16 right-32 h-full z-10 overflow-hidden rounded-3xl shadow-2xl">
              <AnimatePresence>
                <motion.img
                  key={currentIndex}
                  src={whoWeAreImages[currentIndex]}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="absolute -right-16 w-64 h-[80%] z-0">
              <img
                src={whoWeAreImages[(currentIndex + 1) % whoWeAreImages.length]}
                className="w-full h-full object-cover rounded-3xl opacity-40 blur-[2px]"
                alt=""
              />
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-12 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            >
              <ArrowRight size={18} className="text-brand-black" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Curated Experiences Carousel */}
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
      {/* Old Sections */}
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
            Familia Furtado is a home — built with love, furnished with care,
            and waiting for you.
          </p>
        </motion.div>
      </section>

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
              Each villa is a self-contained retreat — identical in luxury,
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
                imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
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
                imageSrc="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
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
              Travelling as a larger group? Both villas can be rented together
              as a private compound for up to 12 guests.
            </p>
            <Button to="/contact" variant="primary" className="shrink-0">
              Book the Full Estate &rarr;
            </Button>
          </motion.div>
        </div>
      </section>

      <ParallaxSection
        imageSrc="https://images.unsplash.com/photo-1576013551627-11dc368f0d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        className="min-h-[70vh] flex items-end"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 p-10 md:p-16 xl:p-20 max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4 block">
            The Pool
          </span>
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight text-white mb-6">
            14 metres of pure stillness.
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10">
            Six waterfalls. A 2-seater jacuzzi. A sun-drenched deck. This is
            where mornings stretch and evenings dissolve.
          </p>

          <div className="flex flex-wrap gap-8 mb-10">
            <div>
              <div className="text-2xl font-bold text-white mb-1">14m</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Length
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">3.5m</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Breadth
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">6</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Waterfalls
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">2</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Jacuzzi Seats
              </div>
            </div>
          </div>

          <Button to="/pool-and-grounds" variant="outlineWhite">
            Discover the Grounds &rarr;
          </Button>
        </motion.div>
      </ParallaxSection>

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
                body="A 14-metre private pool with 6 waterfalls and a 2-seater jacuzzi — yours for the entire stay."
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
                body="Every balcony frames something beautiful — pool, valley, or a sliver of the Arabian Sea."
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

      <section className="bg-brand-surface py-20 md:py-28 overflow-hidden hidden">
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

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pl-5 md:pl-10 xl:pl-20"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -1200 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Romantic Getaways",
              },
              {
                img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Family Celebrations",
              },
              {
                img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Wedding Stays",
              },
              {
                img: "https://images.unsplash.com/photo-1530103862676-de8892b125f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Birthday Escapes",
              },
              {
                img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Friends & Reunions",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-72 h-96 rounded-2xl overflow-hidden flex-shrink-0 pointer-events-none"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-semibold text-lg">
                    {item.label}
                  </h3>
                </div>
              </div>
            ))}
          </motion.div>
          <p className="text-brand-muted text-xs mt-6 text-center md:text-left">
            &larr; Drag to explore &rarr;
          </p>
        </motion.div>
      </section>

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
                Tucked into the lush hills above Porvorim, Familia Furtado sits
                at the sweet spot between Goa's wildness and its quiet. Close
                enough to the beach to feel the salt in the air. Far enough to
                hear nothing but the waterfalls.
              </p>
              <p>
                The village is known for its sunsets, its musicians, and the
                kind of unhurried pace that makes you forget what day it is. We
                think you'll fit right in.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "5 min to Porvorim Beach",
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
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Porvorim, Goa"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-black py-24 px-5">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl xl:text-5xl font-bold text-white mb-6">
            Ready to make it yours?
          </h2>
          <p className="text-white/60 text-lg max-w-lg mx-auto mb-10">
            Check availability or simply get in touch. We respond personally —
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
