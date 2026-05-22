'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] bg-background flex flex-col items-center justify-center"
        >
          <div className="relative w-24 h-24 mb-8">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 border-4 border-primary/20 rounded-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 0.8, 1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-4 border-4 border-primary rounded-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-xl font-bold tracking-[0.3em] uppercase mb-2">Shafid Bilal</h2>
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-4">Initializing Bio-Tech Portfolio</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
