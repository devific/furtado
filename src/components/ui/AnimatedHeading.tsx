import { motion } from "motion/react"
import { staggerContainer } from "../../lib/animations"

export function AnimatedHeading({ text, className }) {
  const words = text.split(' ')
  return (
    <motion.h1
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } } }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
