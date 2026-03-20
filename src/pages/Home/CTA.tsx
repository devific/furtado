import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";

function CTA() {
  return (
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
        <p className="text-white/60 text-lg mx-auto mb-10">
          Check availability or simply get in touch. We respond personally - no
          automated replies, no waiting rooms.
        </p>
        <div className="flex max-md:flex-col  gap-4 justify-center max-w-md mx-auto">
          <Button to="/contact" variant="primary" className="w-full">
            Start the Conversation &rarr;
          </Button>
          <Button
            to="#"
            variant="outlineWhite"
            className="w-full border-white/20 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/30"
          >
            View on Airbnb
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

export default CTA;
