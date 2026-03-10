import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'

export function CountUp({ target, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!inView) return
    let start = 0
    const steps = 60
    const increment = target / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 1000 / steps)
    return () => clearInterval(timer)
  }, [inView, target])
  
  return <span ref={ref}>{count}{suffix}</span>
}
