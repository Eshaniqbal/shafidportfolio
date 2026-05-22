'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-20 border-t border-border relative overflow-hidden bg-mesh">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="order-1">
            <h3 className="text-3xl font-black tracking-tighter mb-4 text-foreground uppercase">
              Shafid <span className="text-primary text-glow">Bilal.</span>
            </h3>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em] font-black">
              © 2026 Pharmaceutical Innovation <span className="text-primary/40 mx-2">|</span> All Rights Reserved
            </p>
          </div>
          
          <div className="flex items-center gap-10 order-3 md:order-2">
            {["Privacy", "Terms", "Lab"].map((item, i) => (
              <a key={i} href="#" className="text-[10px] text-muted-foreground hover:text-primary transition-all uppercase tracking-[0.3em] font-black">
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end order-2 md:order-3">
            <div className="relative w-48 md:w-56 h-12">
              {/* Refined ECG Animation */}
              <svg viewBox="0 0 200 50" className="w-full h-full stroke-primary fill-none stroke-[4] opacity-50">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  d="M0,25 L30,25 L35,15 L40,35 L45,25 L70,25 L75,5 L80,45 L85,25 L110,25 L115,15 L120,35 L125,25 L150,25 L155,5 L160,45 L165,25 L200,25"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
            </div>
            <p className="text-[9px] uppercase tracking-[0.5em] text-primary font-black mt-4 opacity-70">Healthcare Innovation Pulse</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
