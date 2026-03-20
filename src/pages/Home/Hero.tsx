import { motion } from "motion/react";
import { fadeUp, staggerContainerSlow } from "@/lib/animations";
import { imagekitBaseUrl } from "@/config";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-end flex-col">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover  object-[60%_center] hidden"
      >
        <source
          src={`${imagekitBaseUrl}/pool.mp4?updatedAt=1773174474223`}
          type="video/mp4"
        />
      </video>
      <img
        src={`${imagekitBaseUrl}/IMG_1247.JPG?updatedAt=1773079618156`}
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 bg-black/20" />

      <motion.div
        variants={staggerContainerSlow}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-5 max-w-4xl mx-auto mt-[-10vh] py-10"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl lg:text-5xl font-black leading-tight text-white mb-2 drop-shadow-lg"
        >
          Your Private Goa, Finally.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          Two Portuguese villas. One extraordinary address. Yours, entirely.
        </motion.p>
      </motion.div>
    </section>
  );
}
