'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = [
    "Shafid Bilal",
    "B.Pharm Student",
    "Future Pharmacist",
    "Clinical Innovator"
  ]

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length
      const fullPhrase = phrases[i]

      if (isDeleting) {
        setText(fullPhrase.substring(0, text.length - 1))
        setTypingSpeed(50)
      } else {
        setText(fullPhrase.substring(0, text.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && text === fullPhrase) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-mesh">
      {/* Refined Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse delay-700" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1 px-2 sm:px-0">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-black mb-6 sm:mb-8 tracking-[-0.04em] leading-[1] sm:leading-[0.9] text-foreground">
              Hi, I&apos;m <br />
              <span className="text-primary text-glow block mt-1 sm:mt-2">
                {text}<span className="inline-block w-[2px] sm:w-[4px] h-[0.8em] bg-primary ml-1 sm:ml-2 animate-pulse" />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Bridging the gap between <span className="text-foreground font-bold">Pharmaceutical Chemistry</span> and <span className="text-foreground font-bold">Clinical Innovation</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
            >
              <Button size="lg" className="w-full sm:w-auto rounded-2xl px-10 h-16 text-sm font-black uppercase tracking-widest group bg-primary text-black hover:scale-105 active:scale-95 transition-all">
                Explore Projects
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-2xl px-10 h-16 text-sm font-black uppercase tracking-widest glass-dark border-border group hover:scale-105 active:scale-95 transition-all">
                <a href="/resume.pdf" download>
                  Get Resume
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0 pt-8 border-t border-border"
            >
              <div>
                <p className="text-xl sm:text-2xl font-black text-foreground">B.Pharm</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Degree</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-foreground whitespace-nowrap">2024-28</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Batch</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-foreground">5+</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Research</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group order-1 lg:order-2"
          >
            <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] md:w-[450px] md:h-[580px] mx-auto">
              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-border glass-dark shadow-2xl z-20">
                <Image
                  src="/profile.jpg"
                  alt="Shafid Bilal"
                  fill
                  priority
                  className="object-cover scale-110 group-hover:scale-105 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Background Accents */}
              <div className="absolute -inset-4 bg-primary/10 rounded-[3.5rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700 z-10" />
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/40 to-accent/40 rounded-[3.5rem] opacity-20 blur group-hover:opacity-40 transition-all duration-1000 z-0" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements - Refined */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-black rotate-90 origin-left mt-8">Scroll</span>
      </motion.div>
    </section>
  )
}
