import { PageTransition } from "@/components/layout/PageTransition";
import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";

export function Privacy() {
  return (
    <PageTransition>
      <section className="bg-brand-black pt-32 pb-16 px-5 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-none text-white mb-4"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-white/60 text-lg"
        >
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </section>

      <section className="bg-white py-20 px-5 md:px-10 xl:px-20">
        <div className="max-w-3xl mx-auto prose prose-lg prose-slate">
          <p>
            At Furtado's Hospitality, we take your privacy seriously. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or book a stay at
            Familia Furtado.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal information that you voluntarily provide to
            us when expressing an interest in obtaining information about us or
            our products and services, when participating in activities on the
            Website, or otherwise contacting us.
          </p>
          <p>
            The personal information that we collect depends on the context of
            your interactions with us and the Website, the choices you make, and
            the products and features you use. The personal information we
            collect can include the following:
          </p>
          <ul>
            <li>Name and Contact Data (such as email address, phone number)</li>
            <li>
              Booking Information (such as dates of stay, number of guests)
            </li>
            <li>
              Payment Information (processed securely through our payment
              partners)
            </li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>
            We use personal information collected via our Website for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>
          <ul>
            <li>To facilitate account creation and logon process.</li>
            <li>To send you marketing and promotional communications.</li>
            <li>To fulfill and manage your bookings.</li>
            <li>To respond to user inquiries/offer support to users.</li>
          </ul>

          <h3>3. Information Sharing</h3>
          <p>
            We only share information with your consent, to comply with laws, to
            provide you with services, to protect your rights, or to fulfill
            business obligations.
          </p>

          <h3>4. Contact Us</h3>
          <p>
            If you have questions or comments about this policy, you may email
            us at hello@furtadohospitality.com.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
