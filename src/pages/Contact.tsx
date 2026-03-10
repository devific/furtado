import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { AnimatedHeading } from '../components/ui/AnimatedHeading'
import { PageTransition } from '../components/layout/PageTransition'
import { fadeUp, slideLeft, slideRight, staggerContainer, scaleUp } from '../lib/animations'
import { Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react'
import { Button } from '../components/ui/Button'

const faqs = [
  { q: "Is the pool shared between both villas?", a: "Yes — the 14-metre pool, jacuzzi, and all outdoor grounds are shared between both villas. If you book both villas together, the entire compound is exclusively yours." },
  { q: "Can we have an event or celebration at the villa?", a: "Absolutely. The outdoor spaces are well-suited for private celebrations, small weddings, and milestone events. Let us know in advance so we can prepare." },
  { q: "Is a private chef included in the price?", a: "The villa rate includes daily housekeeping and on-site caretaker service. A private chef is available at an additional cost — just ask when you book." },
  { q: "What is the check-in and check-out time?", a: "Standard check-in is at 2:00 PM and check-out is at 11:00 AM. Early/late options can be arranged subject to availability." },
  { q: "Are pets allowed?", a: "We're unable to accommodate pets at Familia Furtado." },
  { q: "What is the cancellation policy?", a: "Our cancellation terms vary by season and booking channel. Please contact us directly for current policy details, or refer to the platform you book through." }
]

export function Contact() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <PageTransition>
      {/* Section 7.1 — Page Hero */}
      <section className="bg-brand-black pt-32 pb-16 px-5 text-center">
        <AnimatedHeading 
          text="Start the Conversation" 
          className="text-5xl xl:text-6xl font-extrabold leading-none text-white mb-4"
        />
        <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-white/60 text-lg">
          We respond personally. Usually within a few hours.
        </motion.p>
      </section>

      {/* Section 7.2 — Contact Form */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-left"
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Get In Touch</span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">Plan Your Stay</h2>
            <p className="text-lg text-brand-mid leading-relaxed mb-10">
              Tell us when you'd like to arrive, how many guests, and which villa interests you. We'll come back to you personally with availability and any answers you need.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: Phone, label: "Call or WhatsApp", value: "+91 98765 43210" },
                { icon: Mail, label: "Email Us", value: "hello@familiafurtado.com" },
                { icon: MapPin, label: "Location", value: "Porvorim, North Goa, India" },
                { icon: Clock, label: "Response Time", value: "Usually within a few hours" }
              ].map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-black">{info.label}</h4>
                    <p className="text-brand-mid mt-1">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <form className="bg-brand-surface rounded-2xl p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-white border border-brand-rule rounded-xl px-5 py-3.5 text-sm text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200" />
                <input type="email" placeholder="Email Address" className="w-full bg-white border border-brand-rule rounded-xl px-5 py-3.5 text-sm text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone Number" className="w-full bg-white border border-brand-rule rounded-xl px-5 py-3.5 text-sm text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200" />
                <input type="number" placeholder="Number of Guests" min="1" max="12" className="w-full bg-white border border-brand-rule rounded-xl px-5 py-3.5 text-sm text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" placeholder="Check-in Date" className="w-full bg-white border border-brand-rule rounded-xl px-5 py-3.5 text-sm text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200" />
                <input type="date" placeholder="Check-out Date" className="w-full bg-white border border-brand-rule rounded-xl px-5 py-3.5 text-sm text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full bg-white border border-brand-rule rounded-xl px-5 py-3.5 text-sm text-brand-black focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200">
                  <option value="">Villa Preference</option>
                  <option value="villa-one">Villa One</option>
                  <option value="villa-two">Villa Two</option>
                  <option value="both">Both Villas (Full Estate)</option>
                  <option value="unsure">Not Sure</option>
                </select>
                <select className="w-full bg-white border border-brand-rule rounded-xl px-5 py-3.5 text-sm text-brand-black focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200">
                  <option value="">Occasion (Optional)</option>
                  <option value="leisure">Leisure</option>
                  <option value="wedding">Wedding Stay</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="birthday">Birthday</option>
                  <option value="family">Family Gathering</option>
                  <option value="corporate">Corporate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <textarea placeholder="Message" className="w-full bg-white border border-brand-rule rounded-xl px-5 py-3.5 text-sm text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/15 transition-all duration-200 resize-none h-32"></textarea>
              <Button type="submit" variant="primary" className="w-full">Send Enquiry &rarr;</Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Section 7.3 — OTA Links */}
      <section className="bg-brand-surface py-16 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-left"
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Prefer to book through a platform?</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-right"
              />
            </div>
            <h2 className="text-3xl xl:text-4xl font-bold leading-tight mb-4">Also on Airbnb & Booking.com</h2>
            <p className="text-lg text-brand-mid leading-relaxed mb-10">
              We're listed on the major platforms if you prefer to book there. Direct enquiries always get the fastest response and the most flexibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#" className="bg-white rounded-2xl p-6 border border-brand-rule hover:border-brand-accent transition-colors flex items-center justify-center gap-3 w-full sm:w-64">
                <span className="font-semibold text-brand-black">Book on Airbnb</span>
              </a>
              <a href="#" className="bg-white rounded-2xl p-6 border border-brand-rule hover:border-brand-accent transition-colors flex items-center justify-center gap-3 w-full sm:w-64">
                <span className="font-semibold text-brand-black">Book on Booking.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7.4 — FAQ */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-left"
              />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted">Common Questions</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-right"
              />
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">Good to Know</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-brand-surface rounded-2xl overflow-hidden">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-brand-black pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-muted transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-brand-mid leading-relaxed pt-2 border-t border-brand-rule">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
