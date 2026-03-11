import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { PageTransition } from "../components/layout/PageTransition";
import { AnimatedHeading } from "../components/ui/AnimatedHeading";
import { Button } from "@/components/ui/button";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  staggerContainerSlow,
} from "../lib/animations";
import { villaData } from "../data/villas";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

const images = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
];

export function VillaDetail() {
  const { id } = useParams();
  const villa = villaData.find((v) => v.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!villa) {
    return <Navigate to="/villas" replace />;
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <PageTransition>
      {/* Section 3.1 - Gallery Hero */}
      <section className="relative w-full h-[60vh] md:h-[70vh] pt-16 overflow-hidden bg-brand-black">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-8 flex justify-center gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? "bg-white w-6" : "bg-white/50"}`}
            />
          ))}
        </div>

        <button
          onClick={prevImage}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur text-white flex items-center justify-center hover:bg-black/40 transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur text-white flex items-center justify-center hover:bg-black/40 transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* Section 3.2 - Villa Overview Strip */}
      <section className="bg-white py-10 px-5 md:px-10 xl:px-20 border-b border-brand-rule">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <motion.div variants={slideLeft} initial="hidden" animate="visible">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-black mb-2">
              {villa.name}
            </h1>
            <p className="text-brand-mid text-lg">{villa.tagline}</p>
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            {[
              `${villa.bedrooms} Bedrooms`,
              `${villa.bathrooms} Bathrooms`,
              `${villa.maxOccupancy} Guests`,
              `${villa.balconies} Balconies`,
              villa.size,
              "Pool Access",
              "Daily Housekeeping",
            ].map((spec, i) => (
              <div
                key={i}
                className="bg-brand-surface rounded-full px-4 py-1.5 text-sm font-medium text-brand-black"
              >
                {spec}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3.3 - The Spaces */}
      <section className="bg-brand-surface py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {[
            {
              title: "The Living Hall",
              desc: "Two spacious air-conditioned halls with 3 sofa sets, 2 Smart TVs, and a balcony that looks directly over the pool. The kind of room you never want to leave.",
              img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            },
            {
              title: "The Kitchen & Dining",
              desc: "Fully equipped with a fridge, microwave, gas stove, water purifier, and everything you need to cook or simply make your morning coffee. The dining balcony faces the pool.",
              img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            },
            {
              title: "The Bedrooms",
              desc: "Two generous bedrooms with attached bathrooms - one featuring a full bathtub for when you want to truly slow down. Air-conditioned, ceiling fans, quality linen throughout.",
              img: "https://images.unsplash.com/photo-1522771731478-44eb10e5c776?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            },
            {
              title: "The Balconies",
              desc: "Four balconies, four different moods. Pool, valley, partial sea - each one a reason to wake up early.",
              img: "https://images.unsplash.com/photo-1502672260266-1c1c24240f38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            },
            {
              title: "The Garage",
              desc: "Covered parking for your vehicle, because arriving in Goa often means having a car.",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            },
          ].map((space, i) => (
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
                    src={space.img}
                    alt={space.title}
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
                  {space.title}
                </h3>
                <p className="text-lg text-brand-mid leading-relaxed">
                  {space.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3.4 - Amenities */}
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
                Everything Included
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
              No Detail Overlooked
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Kitchen",
                items: [
                  "Refrigerator",
                  "Gas Stove",
                  "Microwave",
                  "Water Purifier",
                  "Cutlery & Crockery",
                  "Utensils",
                ],
              },
              {
                title: "Entertainment",
                items: ["2 Smart TVs", "High-Speed WiFi", "Washing Machine"],
              },
              { title: "Climate", items: ["AC in All Rooms", "Ceiling Fans"] },
              {
                title: "Convenience",
                items: [
                  "Power Backup (Inverter)",
                  "CCTV Security",
                  "Covered Parking",
                  "Iron & Ironing Board",
                  "Rocking Chair",
                ],
              },
              {
                title: "Service",
                items: [
                  "Daily Housekeeping",
                  "Caretaker On-Site",
                  "Private Chef (on request)",
                  "Villa Manager Contact",
                ],
              },
            ].map((category, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-6">
                  {category.title}
                </h4>
                <ul className="space-y-4">
                  {category.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-brand-black font-medium"
                    >
                      <Check className="w-5 h-5 text-brand-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3.5 - The Views */}
      <section className="bg-brand-surface py-20 md:py-28 px-5 md:px-10 xl:px-20">
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
                Every Balcony, A Different World
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
              The Views
            </h2>
            <p className="text-lg text-brand-mid leading-relaxed">
              Porvorim sits where the hills meet the sea. From the balconies of
              Familia Furtado, you'll catch all three.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                img: "https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Pool View",
              },
              {
                img: "https://images.unsplash.com/photo-1518182170546-076616fdca44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Valley View",
              },
              {
                img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                label: "Partial Sea View",
              },
            ].map((view, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative rounded-2xl overflow-hidden aspect-[4/5]"
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
        </div>
      </section>

      {/* Section 3.6 - Availability & Booking */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
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
                Booking
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Plan Your Stay
            </h2>
            <p className="text-lg text-brand-mid leading-relaxed mb-8">
              Check availability or simply get in touch. We respond personally -
              no automated replies, no waiting rooms.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <Check className="w-5 h-5 text-brand-accent" /> Minimum 1 night
                stay
              </li>
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <Check className="w-5 h-5 text-brand-accent" /> Available
                year-round
              </li>
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <Check className="w-5 h-5 text-brand-accent" /> Per night
                pricing
              </li>
              <li className="flex items-center gap-3 text-brand-black font-medium">
                <Check className="w-5 h-5 text-brand-accent" /> No deposit
                required for enquiry
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <EnquiryForm />
          </motion.div>
        </div>
      </section>

      {/* Section 3.7 - House Rules */}
      <section className="bg-brand-surface py-20 px-5">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-black mb-8 text-center">
            House Rules
          </h3>
          <ul className="space-y-4 bg-white rounded-2xl p-8 border border-brand-rule">
            <li className="flex justify-between items-center border-b border-brand-rule pb-4">
              <span className="font-medium text-brand-black">Minimum stay</span>
              <span className="text-brand-mid">1 night</span>
            </li>
            <li className="flex justify-between items-center border-b border-brand-rule pb-4">
              <span className="font-medium text-brand-black">
                Maximum occupancy
              </span>
              <span className="text-brand-mid">6 guests per villa</span>
            </li>
            <li className="flex justify-between items-center border-b border-brand-rule pb-4">
              <span className="font-medium text-brand-black">Pets</span>
              <span className="text-brand-mid">Not allowed</span>
            </li>
            <li className="flex justify-between items-center border-b border-brand-rule pb-4">
              <span className="font-medium text-brand-black">Smoking</span>
              <span className="text-brand-mid">No smoking indoors</span>
            </li>
            <li className="flex justify-between items-center border-b border-brand-rule pb-4">
              <span className="font-medium text-brand-black">
                Check-in / Check-out
              </span>
              <span className="text-brand-mid">2:00 PM / 11:00 AM</span>
            </li>
            <li className="flex justify-between items-center pt-2">
              <span className="font-medium text-brand-black">
                Cancellation policy
              </span>
              <span className="text-brand-mid">
                Contact directly for details
              </span>
            </li>
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
