import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import { PageTransition } from "../components/layout/PageTransition";
import { fadeUp, staggerContainer, scaleUp } from "../lib/animations";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Pool & Grounds",
    caption: "14-metre private pool",
  },
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Exteriors",
    caption: "Villa exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Interiors",
    caption: "Living hall",
  },
  {
    src: "https://images.unsplash.com/photo-1518182170546-076616fdca44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Views",
    caption: "Valley view from balcony",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Pool & Grounds",
    caption: "Sun deck",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Exteriors",
    caption: "Villa Two exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Interiors",
    caption: "Fully equipped kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Views",
    caption: "Partial sea view",
  },
  {
    src: "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Pool & Grounds",
    caption: "Tropical garden",
  },
  {
    src: "https://images.unsplash.com/photo-1522771731478-44eb10e5c776?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Interiors",
    caption: "Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Pool & Grounds",
    caption: "Outdoor dining",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    category: "Occasions",
    caption: "Wedding stays",
  },
];

const categories = [
  "All",
  "Pool & Grounds",
  "Interiors",
  "Exteriors",
  "Views",
  "Occasions",
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  return (
    <PageTransition>
      {/* Section 6.1 - Page Hero */}
      <section className="bg-brand-black pt-32 pb-16 px-5 text-center">
        <AnimatedHeading
          text="The Gallery"
          className="text-5xl xl:text-6xl font-extrabold leading-none text-white mb-4"
        />
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/60 text-lg"
        >
          Every image is a reason to book.
        </motion.p>
      </section>

      {/* Section 6.2 - Filter Bar */}
      <div className="bg-white sticky top-16 z-30 border-b border-brand-rule py-4 px-5">
        <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar">
          <div className="flex gap-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-brand-black text-white"
                    : "bg-brand-surface text-brand-mid hover:bg-brand-rule"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6.3 - Masonry Grid */}
      <section className="bg-white py-12 px-5 md:px-10 xl:px-20 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {filteredImages.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                variants={scaleUp}
                className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(i)}
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">View</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-5"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white p-2"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={prevImage}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={nextImage}
            >
              <ChevronRight size={48} />
            </button>

            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[currentImageIndex].src}
                alt={filteredImages[currentImageIndex].caption}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-white/80 mt-4 text-center">
                {filteredImages[currentImageIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
