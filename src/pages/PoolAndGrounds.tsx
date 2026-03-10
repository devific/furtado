import { motion } from 'motion/react'
import { AnimatedHeading } from '../components/ui/AnimatedHeading'
import { ParallaxSection } from '../components/ui/ParallaxSection'
import { PageTransition } from '../components/layout/PageTransition'
import { fadeUp, slideLeft, slideRight, staggerContainer, staggerContainerSlow } from '../lib/animations'

export function PoolAndGrounds() {
  return (
    <PageTransition>
      {/* Section 4.1 — Page Hero */}
      <ParallaxSection 
        imageSrc="https://images.unsplash.com/photo-1576013551627-11dc368f0d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          variants={staggerContainerSlow} 
          initial="hidden" 
          animate="visible"
          className="relative z-10 text-center px-5 max-w-3xl mx-auto"
        >
          <AnimatedHeading 
            text="The Pool" 
            className="text-6xl xl:text-7xl font-extrabold leading-none text-white mb-6"
          />
          <motion.p variants={fadeUp} className="text-lg text-white/80 max-w-lg mx-auto leading-relaxed">
            Six waterfalls. A jacuzzi. Fourteen metres of silence.
          </motion.p>
        </motion.div>
      </ParallaxSection>

      {/* Section 4.2 — Pool Details */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6 text-brand-black">Built for Long Afternoons</h2>
            <p className="text-lg text-brand-mid leading-relaxed mb-10">
              At 14 metres long and 3.5 metres wide, the pool is the beating heart of Familia Furtado. The water flows in from six surrounding waterfalls. A 2-seater jacuzzi sits at one end. The sun-drenched deck wraps the entire pool in warm stone. There is nothing to do here but enjoy it.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Length", value: "14 metres" },
                { label: "Breadth", value: "3.5 metres" },
                { label: "Depth", value: "1.4 metres" },
                { label: "Jacuzzi", value: "2-seater" }
              ].map((stat, i) => (
                <div key={i} className="bg-brand-surface rounded-2xl p-6">
                  <div className="text-xl font-bold text-brand-black mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1576013551627-11dc368f0d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Pool details" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4.3 — The Deck */}
      <section className="bg-brand-surface relative py-32 px-5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="The Deck" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-surface/80" />
        </div>
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative z-10 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6 text-brand-black">The Deck</h2>
          <p className="text-lg text-brand-mid leading-relaxed">
            Sun loungers, the sound of water, and the smell of Goa in the air. The deck is yours from sunrise to last light — and beyond.
          </p>
        </motion.div>
      </section>

      {/* Section 4.4 — The Garden */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                alt="Tropical Garden" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6 text-brand-black">The Garden</h2>
            <p className="text-lg text-brand-mid leading-relaxed mb-8">
              Lush tropical lawn surrounds a fish pond fed by a natural waterfall. Whether you're hosting a BBQ at sunset or simply sitting in the shade with a book, the garden rewards you for slowing down.
            </p>
            <ul className="space-y-4">
              {["Fish Pond with Waterfall", "BBQ Setup", "Outdoor Dining Area", "Natural Lawn", "Tropical Landscaping"].map((highlight, i) => (
                <li key={i} className="flex items-center gap-3 text-brand-black font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 4.5 — Outdoor Dining */}
      <section className="bg-brand-surface relative py-32 px-5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
            alt="Outdoor Dining" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-surface/80" />
        </div>
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative z-10 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6 text-brand-black">Dine Under the Goa Sky</h2>
          <p className="text-lg text-brand-mid leading-relaxed">
            The outdoor dining area sits directly opposite the pool — open air, tropical breezes, and the sound of waterfalls as your background music. The private chef can set this up for any meal, any occasion.
          </p>
        </motion.div>
      </section>

      {/* Section 4.6 — Photo Grid */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            {[
              "https://images.unsplash.com/photo-1576013551627-11dc368f0d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1522771731478-44eb10e5c776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ].map((src, i) => (
              <motion.div key={i} variants={fadeUp} className="break-inside-avoid rounded-2xl overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  src={src} 
                  alt="Gallery image" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
