import { motion } from "motion/react";
import { fadeIn, fadeUp } from "@/lib/animations";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah L.",
    role: "Wedding Guest",
    text: "Familia Furtado was the perfect setting for our intimate celebration. The pool in the evening is simply magical.",
  },
  {
    name: "Mark T.",
    role: "Family Vacation",
    text: "Spacious, luxurious, and right in the heart of Goa but away from the noise. The 14-metre pool kept the kids entertained for days.",
  },
  {
    name: "Priya R.",
    role: "Corporate Retreat",
    text: "We hosted our leadership offsite here. The ample space, great Wi-Fi, and the bar area made it an unforgettable team experience.",
  },
  {
    name: "James D.",
    role: "Group Trip",
    text: "Having two identical villas in one compound meant we could hang out together but still have our own space when needed. Highly recommend!",
  },
  {
    name: "Aisha M.",
    role: "Day Event Host",
    text: "Hosted a sundowner pool party here. The party lawns and the upper bar setup were absolutely stunning. The guests loved it!",
  },
  {
    name: "Tom H.",
    role: "Anniversary Stay",
    text: "A truly romantic getaway. The architecture of the villa combined with the lush Porvorim surroundings is a masterpiece.",
  },
  {
    name: "Elena V.",
    role: "Birthday Celebration",
    text: "Unforgettable 30th birthday! The property is gorgeous, incredibly well-maintained, and the outdoor areas are just fabulous.",
  },
  {
    name: "Rahul S.",
    role: "Family Reunion",
    text: "Gathered 14 of us from across the country. The estate handled our large group effortlessly. Best holiday we've had.",
  },
  {
    name: "Sophie C.",
    role: "Holiday Maker",
    text: "I've stayed in many places in Goa, but this feels like a home. Every detail is thought of. A brilliant experience from start to finish.",
  },
  {
    name: "Vikram K.",
    role: "Weekend Getaway",
    text: "Superb property. The infinity pool over looking the trees is where I spent most of my time. Will definitely be returning.",
  },
];

function Reviews() {
  return (
    <section className="bg-brand-surface py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 mb-12 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-brand-black mb-4"
        >
          What Our Guests Say
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-brand-mid text-lg max-w-2xl mx-auto"
        >
          Don't just take our word for it. Read the experiences of those who
          have celebrated, relaxed, and made memories at Familia Furtado.
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee py-4 w-max">
          {[...reviews, ...reviews].map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[400px] bg-white rounded-3xl p-8 shadow-sm border border-brand-rule mx-4"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="fill-brand-accent text-brand-accent"
                  />
                ))}
              </div>
              <p className="text-brand-black text-lg mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <div className="font-semibold text-brand-black">
                  {review.name}
                </div>
                <div className="text-sm text-brand-muted">{review.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Edges Overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-surface to-transparent" />
      </div>
    </section>
  );
}

export default Reviews;
