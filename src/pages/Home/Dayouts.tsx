import { motion } from "motion/react";
import { slideLeft, slideRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { imagekitBaseUrl } from "@/config";
import EnquiryFormDialog from "@/components/EnquiryFormDialog";

const images = [
  "shoot-1/SOL_2254.JPG",
  "shoot-1/SOL_2221.JPG",
  "/shoot-1/SOL_2227.JPG",
];

function Dayouts() {
  return (
    <section className="bg-brand-black py-20 md:py-28 px-5 md:px-10 xl:px-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              className="h-px w-12 bg-brand-accent origin-left"
            />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
              Celebrate With Us
            </span>
          </div>
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
            Day Outs & Pool Parties
          </h2>
          <div className="space-y-4 text-base font-normal leading-relaxed text-white/80 mb-8">
            <p>
              Looking for an exclusive venue without an overnight stay? Familia
              Furtado is perfect for hosting vibrant day-out events, sundowner
              pool parties, and milestone celebrations.
            </p>
            <p>
              Gain full access to our massive 14-metre infinity pool, upper and
              lower bar areas, and sprawling party lawns. Whether it’s a
              birthday bash, a corporate retreat, or just a day soaking in the
              sun with friends, we provide the ultimate canvas for a lively
              escape.
            </p>
          </div>
          <EnquiryFormDialog>
            <Button variant="primary">Book Now &rarr;</Button>
          </EnquiryFormDialog>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 h-[500px] md:h-[600px]"
        >
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
              <img
                src={`${imagekitBaseUrl}/${images[0]}?auto=format&fit=crop&w=800&q=80`}
                alt="People toasting drinks"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
              <img
                src={`${imagekitBaseUrl}/${images[1]}?auto=format&fit=crop&w=800&q=80`}
                alt="Bar setup"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg h-full mt-8 md:mt-12">
            <img
              src={`${imagekitBaseUrl}/${images[2]}?auto=format&fit=crop&w=800&q=80`}
              alt="Pool Party"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Dayouts;
