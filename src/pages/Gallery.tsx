import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { PageTransition } from "@/components/layout/PageTransition";
import { fadeUp, staggerContainer, scaleUp } from "../lib/animations";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { imagekitBaseUrl } from "@/config";
import { shuffleArray } from "@/lib/utils";

const galleryImages = [
  { src: "IMG_1261.JPG", category: "deck" },
  { src: "IMG_1259.JPG", category: "deck" },

  { src: "IMG_1209.JPG", category: "pool" },
  { src: "IMG_1197.JPG", category: "pool" },
  { src: "IMG_1210.JPG", category: "pool" },
  { src: "IMG_1247.JPG", category: "pool" },
  { src: "IMG_1248.JPG", category: "pool" },
  { src: "IMG_1198.JPG", category: "pool" },
  { src: "IMG_1243.JPG", category: "pool" },
  { src: "IMG_1230.JPG", category: "pool" },
  { src: "IMG_1225.JPG", category: "pool" },
  { src: "IMG_1238.JPG", category: "pool" },
  { src: "IMG_1234.JPG", category: "pool" },
  { src: "IMG_1264.JPG", category: "pool" },

  { src: "IMG_1183.JPG", category: "interiors" },
  { src: "IMG_1141.JPG", category: "interiors" },
  { src: "IMG_1192.JPG", category: "interiors" },
  { src: "IMG_1131.JPG", category: "interiors" },
  { src: "IMG_1148.JPG", category: "interiors" },
  { src: "IMG_1133.JPG", category: "interiors" },
  { src: "IMG_1265.JPG", category: "interiors" },
  { src: "IMG_1252.JPG", category: "interiors" },
  { src: "IMG_1194.JPG", category: "interiors" },
  { src: "IMG_1203.JPG", category: "interiors" },
  { src: "IMG_1186.JPG", category: "interiors" },
  { src: "IMG_1174.JPG", category: "interiors" },
  { src: "IMG_1150.JPG", category: "interiors" },
  { src: "IMG_1138.JPG", category: "interiors" },
  { src: "IMG_1180.JPG", category: "interiors" },
  { src: "IMG_1191.JPG", category: "interiors" },
  { src: "IMG_1129.JPG", category: "interiors" },
  { src: "IMG_1199.JPG", category: "interiors" },
  { src: "IMG_1130.JPG", category: "interiors" },
  { src: "IMG_1176.JPG", category: "interiors" },
  { src: "IMG_1193.JPG", category: "interiors" },
  { src: "IMG_1137.JPG", category: "interiors" },
  { src: "IMG_1195.JPG", category: "interiors" },
  { src: "IMG_1184.JPG", category: "interiors" },
  { src: "IMG_1132.JPG", category: "interiors" },
  { src: "IMG_1152.JPG", category: "interiors" },
  { src: "IMG_1149.JPG", category: "interiors" },
  { src: "IMG_1136.JPG", category: "interiors" },
  { src: "IMG_1134.JPG", category: "interiors" },
  { src: "IMG_1140.JPG", category: "interiors" },
  { src: "IMG_1196.JPG", category: "interiors" },
  { src: "IMG_1147.JPG", category: "interiors" },
  { src: "IMG_1151.JPG", category: "interiors" },

  { src: "IMG_1262.JPG", category: "outdoors" },
  { src: "IMG_1217.JPG", category: "outdoors" },
  { src: "IMG_1215.JPG", category: "outdoors" },
  { src: "IMG_1249.JPG", category: "outdoors" },
  { src: "IMG_1222.JPG", category: "outdoors" },

  { src: "IMG_1279.JPG", category: "exteriors" },
  { src: "IMG_1285.JPG", category: "exteriors" },
  { src: "IMG_1270.JPG", category: "exteriors" },
  { src: "IMG_1288.JPG", category: "exteriors" },
  { src: "IMG_1286.JPG", category: "exteriors" },
];

const shuffledGalleryImages = shuffleArray(galleryImages);

const categories = [
  "All",
  "Pool",
  "Interiors",
  "Exteriors",
  "Outdoors",
  "Deck",
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === "all"
      ? shuffledGalleryImages
      : shuffledGalleryImages.filter((img) => img.category === activeCategory);

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
                onClick={() => setActiveCategory(cat.toLocaleLowerCase())}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.toLowerCase()
                    ? " border border-brand-black"
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4"
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
                  src={`${imagekitBaseUrl}/${img.src}?tr=w-600,h-400,fo-auto`}
                  alt={i}
                  className="w-full h-auto object-cover"
                  loading="lazy"
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
                src={`${imagekitBaseUrl}/${filteredImages[currentImageIndex].src}?tr=w-600,h-400,fo-auto`}
                alt="Furtado Gallery"
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
