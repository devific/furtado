import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ParallaxSection } from "@/components/ui/ParallaxSection";
import { imagekitBaseUrl } from "@/config";
import { Link } from "react-router-dom";

export function Parallax() {
  return (
    <ParallaxSection
      imageSrc={`${imagekitBaseUrl}/IMG_1209.JPG?tr=w-1200,h-700,fo-auto,q-80,tr:fl-h`}
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
          Six waterfalls. A 2-seater jacuzzi. A sun-drenched deck. This is where
          mornings stretch and evenings dissolve.
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

        <Button asChild variant="outlineWhite" className="cursor-pointer">
          <Link to="/pool">Discover the Pool &rarr;</Link>
        </Button>
      </motion.div>
    </ParallaxSection>
  );
}
