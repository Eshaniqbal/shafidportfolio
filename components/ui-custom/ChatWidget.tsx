'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[120]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-80 md:w-96 glass rounded-3xl border-primary/20 shadow-2xl overflow-hidden"
          >
            <div className="bg-primary p-4 md:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3 text-black">
                <Bot className="w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <h4 className="font-bold text-sm md:text-base">PharmaAI</h4>
                  <p className="text-[8px] md:text-[10px] uppercase tracking-widest opacity-70">Always Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-black/50 hover:text-black transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="h-64 md:h-80 p-4 md:p-6 overflow-y-auto space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none text-xs md:text-sm">
                  Hello! I&apos;m Shafid&apos;s AI assistant. How can I help you today?
                </div>
              </div>
            </div>

            <div className="p-3 md:p-4 bg-black/40 border-t border-white/5 flex gap-2">
              <Input placeholder="Ask something..." className="h-10 md:h-12 bg-white/5 border-white/10 rounded-xl text-xs md:text-sm" />
              <Button size="icon" className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex-shrink-0 bg-primary text-black">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-black shadow-2xl shadow-primary/20 flex items-center justify-center group"
      >
        <MessageSquare className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
      </motion.button>
    </div>
  )
}
