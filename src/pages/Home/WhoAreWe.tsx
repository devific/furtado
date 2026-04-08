import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { slideLeft, slideRight } from "@/lib/animations";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { imagekitBaseUrl } from "@/config";

const whoWeAreImages = ["IMG_1222.JPG", "IMG_1186.JPG", "IMG_1138.JPG"];

export function WhoAreWe() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % whoWeAreImages.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + whoWeAreImages.length) % whoWeAreImages.length,
    );

  return (
    <section className="bg-white py-24 md:py-32 px-5 md:px-10 overflow-hidden">
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

        {/* CAROUSEL BELOW */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full max-w-5xl mx-auto"
        >
          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <ArrowLeft size={18} />
          </button>

          {/* IMAGE CONTAINER (16:9) */}
          <div className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={`${imagekitBaseUrl}/${whoWeAreImages[currentIndex]}?tr=w-1200,h-675,fo-auto,q-80`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
