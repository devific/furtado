import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export function ParallaxSection({ children, imageSrc, className = "" }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img 
        style={isMobile ? {} : { y }} 
        className="absolute inset-0 w-full h-full object-cover scale-110" 
        src={imageSrc} 
        alt="" 
      />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  )
}
