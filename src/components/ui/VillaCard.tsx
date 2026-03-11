import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function VillaCard({
  id,
  name,
  bedrooms,
  bathrooms,
  maxOccupancy,
  views,
  features,
  imageSrc,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-2xl border border-brand-rule shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
    >
      <div className="overflow-hidden aspect-[16/10] relative">
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-full object-cover"
          src={imageSrc}
          alt={name}
        />
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-lg">
          Per night - contact for rates
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-2">
          Familia Furtado
        </div>
        <h3 className="text-xl font-semibold leading-snug text-brand-black mb-3">
          {name}
        </h3>
        <p className="text-sm text-brand-mid mb-4 line-clamp-2">
          {bedrooms} Bedrooms · {bathrooms} Bathrooms · Up to {maxOccupancy}{" "}
          Guests · {views[0]}
        </p>
        <div className="mt-auto">
          <Link
            to={`/villas/${id}`}
            className="text-brand-accent text-sm font-medium hover:underline transition-all duration-150 inline-flex items-center gap-1"
          >
            Explore Villa <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
