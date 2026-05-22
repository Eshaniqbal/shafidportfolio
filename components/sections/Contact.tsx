'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Link, Send, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-mesh">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none text-foreground"
            >
              Let&apos;s <br />
              <span className="text-primary text-glow">Innovate.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Ready to discuss research collaborations, clinical projects, or professional opportunities? Reach out below.
            </motion.p>

            <div className="space-y-6 max-w-sm mx-auto lg:mx-0">
              {[
                { icon: <Mail />, label: "Email", value: "Shafidbilal7@gmail.com" },
                { icon: <Link />, label: "LinkedIn", value: "shafid-bilal" },
                { icon: <MapPin />, label: "Location", value: "Kulgam, J&K, India" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group text-left"
                >
                  <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 flex-shrink-0 border border-border shadow-xl">
                    <div className="w-6 h-6">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black mb-1">{item.label}</p>
                    <p className="text-lg font-black text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bento-card !p-12 relative"
          >
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground ml-1">Full Name</label>
                  <Input placeholder="Enter your name" className="h-14 bg-muted/60 border-border rounded-2xl focus:border-primary transition-all text-sm font-medium px-6" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground ml-1">Email</label>
                  <Input placeholder="name@domain.com" className="h-14 bg-muted/60 border-border rounded-2xl focus:border-primary transition-all text-sm font-medium px-6" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground ml-1">Message</label>
                <Textarea placeholder="How can we collaborate?" className="min-h-[180px] bg-muted/60 border-border rounded-2xl focus:border-primary transition-all resize-none text-sm font-medium p-6" />
              </div>
              <Button size="lg" className="w-full h-16 rounded-2xl font-black text-sm uppercase tracking-[0.2em] group bg-primary text-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/20">
                Send Message
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
