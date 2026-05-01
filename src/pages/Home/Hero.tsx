import { motion } from "motion/react";
import { imagekitBaseUrl } from "@/config";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-end">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
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
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 flex max-lg:flex-col items-center justify-between gap-12 pt-20">
        {/* Text Content */}
        <motion.div
          className="max-w-2xl pb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white leading-[1.1] tracking-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Experience{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Timeless Luxury
            </span>{" "}
            in Goa
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl mb-8 text-white/70 max-w-lg leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Indulge in serene coastal living with our exclusive villas, where
            modern elegance meets the natural beauty of Goa.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg shadow-white/10"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/villas")}
            >
              Explore Villas
            </motion.button>
            <motion.button
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Image */}
        <motion.div
          className="relative w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-75" />
          <motion.img
            src={`${imagekitBaseUrl}/ai/hero.png`}
            alt="Luxury Villa"
            className="relative z-10 w-full h-auto drop-shadow-2xl max-lg:max-w-[500px]"
            animate={{
              x: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
