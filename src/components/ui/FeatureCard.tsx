import { motion } from 'motion/react'

export function FeatureCard({ icon: Icon, title, body }) {
  return (
    <div className="bg-brand-surface rounded-2xl p-7">
      <Icon className="w-10 h-10 text-brand-accent" />
      <h3 className="text-lg font-semibold text-brand-black mt-4">{title}</h3>
      <p className="text-sm text-brand-mid mt-2 leading-relaxed">{body}</p>
    </div>
  )
}
