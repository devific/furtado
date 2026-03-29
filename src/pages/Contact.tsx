import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { PageTransition } from "@/components/layout/PageTransition";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "../lib/animations";
import { ChevronDown } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { faqs, contactInfo } from "@/config";
import { cn } from "@/lib/utils";

export function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageTransition>
      {/* Section 7.1 - Page Hero */}
      <section className="bg-brand-black pt-32 pb-16 px-5 text-center">
        <AnimatedHeading
          text="Start the Conversation"
          className="text-5xl xl:text-6xl font-extrabold leading-none text-white mb-4"
        />
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/60 text-lg"
        >
          We respond personally. Usually within a few hours.
        </motion.p>
      </section>

      {/* Section 7.2 - Contact Form */}
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
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Plan Your Stay
            </h2>
            <p className="text-lg text-brand-mid leading-relaxed mb-10">
              Tell us when you'd like to arrive, how many guests, and which
              villa interests you. We'll come back to you personally with
              availability and any answers you need.
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-surface flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-black">
                      {info.label}
                    </h4>
                    <a
                      href={info.href}
                      className={cn(
                        "text-brand-mid mt-1",
                        info.href ? "hover:underline" : "",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
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

      {/* Section 7.3 - OTA Links */}
      <section className="bg-brand-surface py-16 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
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
                Prefer to book through a platform?
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-right"
              />
            </div>
            <h2 className="text-3xl xl:text-4xl font-bold leading-tight mb-4">
              Also on Airbnb & Booking.com
            </h2>
            <p className="text-lg text-brand-mid leading-relaxed mb-10">
              We're listed on the major platforms if you prefer to book there.
              Direct enquiries always get the fastest response and the most
              flexibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#"
                className="bg-white rounded-2xl p-6 border border-brand-rule hover:border-brand-accent transition-colors flex items-center justify-center gap-3 w-full sm:w-64"
              >
                <span className="font-semibold text-brand-black">
                  Book on Airbnb
                </span>
              </a>
              <a
                href="#"
                className="bg-white rounded-2xl p-6 border border-brand-rule hover:border-brand-accent transition-colors flex items-center justify-center gap-3 w-full sm:w-64"
              >
                <span className="font-semibold text-brand-black">
                  Book on Booking.com
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7.4 - FAQ */}
      <section className="bg-white py-20 md:py-28 px-5 md:px-10 xl:px-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
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
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                Common Questions
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-px w-12 bg-brand-rule origin-right"
              />
            </div>
            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mb-4">
              Good to Know
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-brand-surface rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-brand-black pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-muted transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-brand-mid leading-relaxed pt-2 border-t border-brand-rule">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
