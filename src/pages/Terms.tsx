import { PageTransition } from "../components/layout/PageTransition";
import { motion } from "motion/react";
import { fadeUp } from "../lib/animations";

export function Terms() {
  return (
    <PageTransition>
      <section className="bg-brand-black pt-32 pb-16 px-5 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-none text-white mb-4"
        >
          Terms of Service
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
            Welcome to Furtado's Hospitality. These Terms of Service govern your
            use of our website and your stay at Familia Furtado. By accessing
            our website or booking a stay, you agree to these terms.
          </p>

          <h3>1. Booking and Reservations</h3>
          <p>
            All bookings are subject to availability and confirmation. A
            reservation is only confirmed once full payment or the required
            deposit has been received. We reserve the right to refuse any
            booking at our discretion.
          </p>

          <h3>2. Cancellation Policy</h3>
          <p>
            Cancellations made more than 30 days prior to the arrival date will
            receive a full refund. Cancellations made between 15 and 30 days
            prior will receive a 50% refund. No refunds are provided for
            cancellations made less than 15 days before arrival.
          </p>

          <h3>3. House Rules</h3>
          <p>
            Guests are expected to treat the property with respect. The
            following rules apply during your stay at Familia Furtado:
          </p>
          <ul>
            <li>No smoking inside the villas.</li>
            <li>No pets allowed on the property.</li>
            <li>Maximum occupancy must not be exceeded.</li>
            <li>Quiet hours are from 10:00 PM to 8:00 AM.</li>
          </ul>

          <h3>4. Liability</h3>
          <p>
            Furtado's Hospitality is not liable for any loss, damage, or injury
            sustained by guests during their stay, except where such liability
            cannot be excluded by law. Guests are responsible for their personal
            belongings.
          </p>

          <h3>5. Changes to Terms</h3>
          <p>
            We may update these Terms of Service from time to time. The updated
            version will be indicated by an updated "Last updated" date and the
            updated version will be effective as soon as it is accessible.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have any questions or concerns about these Terms of Service,
            please contact us at hello@furtadohospitality.com.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
