import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

export function Button({ variant = 'primary', children, className, to, onClick, ...props }: any) {
  const baseClasses = "inline-flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
  
  const variants = {
    primary: "bg-brand-accent text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-brand-accent",
    secondary: "border-2 border-brand-black text-brand-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-brand-black hover:text-white",
    ghost: "text-brand-accent text-sm font-medium hover:underline transition-all duration-150",
    outlineWhite: "border-2 border-white text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-brand-black"
  }

  const classes = cn(baseClasses, variants[variant], className)

  const content = (
    <motion.button 
      whileHover={{ scale: 1.03 }} 
      whileTap={{ scale: 0.97 }} 
      transition={{ duration: 0.15 }}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  )

  if (to) {
    if (to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:')) {
      return <a href={to}>{content}</a>
    }
    return <Link to={to}>{content}</Link>
  }

  return content
}
