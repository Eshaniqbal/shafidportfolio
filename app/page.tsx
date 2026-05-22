'use client'

import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import SmoothScroll from '@/components/ui-custom/SmoothScroll'
import CustomCursor from '@/components/ui-custom/CustomCursor'
import LoadingScreen from '@/components/ui-custom/LoadingScreen'
import ChatWidget from '@/components/ui-custom/ChatWidget'
import { motion, useScroll, useSpring } from 'framer-motion'

import useGSAPAnimations from '@/hooks/useGSAPAnimations'

export default function Home() {
  useGSAPAnimations()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <SmoothScroll>
      <LoadingScreen />
      <CustomCursor />
      
      {/* Scroll Progress Bar - Simplified */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[110] origin-left"
        style={{ scaleX }}
      />

      <main className="relative bg-background">
        <Navbar />
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <Footer />
        <ChatWidget />
      </main>
    </SmoothScroll>
  )
}
