'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Pill, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ui-custom/ThemeToggle'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Scrolled state for background change
      setIsScrolled(currentScrollY > 20)
      
      // Visibility state for hiding/showing navbar
      // Don't hide if mobile menu is open
      if (!isMobileMenuOpen && currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <motion.nav 
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-[100] p-6 pointer-events-none"
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-auto"
          >
            <a href="#" className="flex items-center gap-3 group relative">
              <span className="text-2xl font-black tracking-tighter flex items-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient transition-all duration-500">
                  Shafid Bilal
                </span>
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
            </a>
          </motion.div>

          {/* Desktop Links - Floating pill style */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`hidden md:flex items-center gap-2 p-2 rounded-[2rem] transition-all duration-500 pointer-events-auto ${isScrolled ? 'glass-dark border-border shadow-2xl' : ''}`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-2.5 text-sm font-bold text-muted-foreground hover:text-primary transition-all rounded-full hover:bg-foreground/5"
              >
                {link.name}
              </a>
            ))}
            <div className="w-[1px] h-6 bg-border mx-2" />
            <ThemeToggle />
            <Button size="sm" className="rounded-full px-8 h-11 bg-primary text-black hover:scale-105 active:scale-95 transition-all font-black uppercase tracking-widest text-[10px]">
              Hire Me
            </Button>
          </motion.div>

          {/* Mobile Toggle Group */}
          <div className="md:hidden flex items-center gap-3 pointer-events-auto">
            <ThemeToggle />
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-foreground" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Outside motion.nav to avoid being hidden on scroll */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-background/98 backdrop-blur-3xl md:hidden"
          >
            <div className="flex flex-col h-full p-8 pt-24 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
              
              <button 
                className="absolute top-8 right-8 w-12 h-12 rounded-2xl glass flex items-center justify-center text-foreground hover:text-primary transition-colors z-50 border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="flex flex-col gap-6 relative z-10">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.1 + idx * 0.05,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="group flex items-center justify-between py-4 border-b border-border"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-4xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto relative z-10"
              >
                <Button className="w-full rounded-2xl h-16 text-xl font-bold bg-primary text-black hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20">
                  Hire Me
                </Button>
                <p className="text-center mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
                  Shafid Bilal <span className="text-primary">•</span> B.Pharm Student
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
