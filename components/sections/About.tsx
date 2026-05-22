'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Target, Microscope } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-mesh">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-border glass-dark z-20">
                <Image
                    src="/profile2.jpg"
                    alt="Shafid Bilal Working"
                    fill
                    priority
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                {/* Card hidden on mobile, shown on lg+ overlaid on image */}
                <div className="hidden lg:block absolute bottom-10 left-10 right-10">
                  <div className="glass p-8 rounded-3xl border-primary/20 backdrop-blur-3xl">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                      <Microscope className="w-6 h-6" />
                    </div>
                    <p className="text-primary font-black mb-2 text-xs uppercase tracking-widest">Active Research</p>
                    <p className="text-sm text-foreground font-medium leading-relaxed">Exploring AI-driven pharmaceutical synthesis at UCP.</p>
                  </div>
                </div>
              </div>

              {/* Card shown below image on mobile only */}
              <div className="lg:hidden mt-4 mx-2">
                <div className="glass p-6 rounded-3xl border border-primary/20 backdrop-blur-3xl">
                  <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-3">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <p className="text-primary font-black mb-1 text-xs uppercase tracking-widest">Active Research</p>
                  <p className="text-sm text-foreground font-medium leading-relaxed">Exploring AI-driven pharmaceutical synthesis at UCP.</p>
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-12 order-1 lg:order-2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none text-foreground">
                The Science <br />
                <span className="text-primary text-glow">of Healing.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                Dedicated B.Pharmacy student focused on the intersection of traditional pharmacology and futuristic healthcare technology. Mastering the art of medicine through precision and research.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bento-card group hover:neon-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:rotate-12 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-black text-xl mb-3 text-foreground uppercase tracking-tighter">Visionary</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">Bridging the gap between pharmacology and patient care with AI innovation.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bento-card group hover:neon-border"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:-rotate-12 transition-transform">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h3 className="font-black text-xl mb-3 text-foreground uppercase tracking-tighter">Excellence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">Batch of 2024-28 at Universal College of Pharmacy, specializing in Clinical Pharmacy.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
