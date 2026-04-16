import { motion } from "motion/react";
import { imagekitBaseUrl } from "@/config";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden ">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imagekitBaseUrl}/ai/sky-1.png')`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: ["0%", "5%", "0%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative flex max-lg:flex-col justify-end mx-auto pt-28 lg:pt-58 gap-8">
        {/* Text Content */}
        <motion.div
          className="p-6 lg:p-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-bold mb-2 lg:mb-6 text-black/90"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Experience Timeless Luxury in Goa
          </motion.h1>

          <motion.p
            className="lg:text-lg mb-4 lg:mb-6 text-black/70"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Indulge in serene coastal living with our exclusive villas, where
            modern elegance meets the natural beauty of Goa.
          </motion.p>

          <motion.button
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-black/80 transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/villas")}
          >
            Explore Villas
          </motion.button>
        </motion.div>

        {/* Floating Image */}
        <motion.img
          src={`${imagekitBaseUrl}/ai/hero.png`}
          alt=""
          className="w-full lg:max-w-1/2 h-auto"
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: [0, 20, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>
    </section>
  );
}
