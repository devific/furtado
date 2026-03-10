import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Villas', path: '/villas' },
    { name: 'Pool & Grounds', path: '/pool-and-grounds' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const isTransparent = isHome && !scrolled && !mobileMenuOpen

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 flex items-center",
          isTransparent ? "bg-transparent" : "bg-white border-b border-brand-rule",
          scrolled && !isTransparent ? "shadow-md" : ""
        )}
      >
        <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link to="/" className={cn(
            "flex items-center gap-1 z-50",
            isTransparent ? "text-white" : "text-brand-black"
          )}>
            <span className="font-bold text-2xl tracking-tight">Furtado's Hospitality</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-accent",
                  isTransparent ? "text-white/80 hover:text-white" : "text-brand-black"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button to="/contact" variant={isTransparent ? "outlineWhite" : "secondary"} className="rounded-full px-6 py-2.5 text-sm font-medium">
              Plan Your Stay &rarr;
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={cn(
              "lg:hidden z-50 p-2 -mr-2",
              isTransparent ? "text-white" : "text-brand-black"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} className="text-brand-black" /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-5 pb-10 flex flex-col"
          >
            <motion.div 
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 text-2xl font-bold"
            >
              {navLinks.map((link) => (
                <motion.div 
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Link to={link.path} className="text-brand-black hover:text-brand-accent block">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-auto">
              <Button to="/contact" className="w-full">
                Plan Your Stay &rarr;
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
