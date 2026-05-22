'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, Trophy } from 'lucide-react'

const experiences = [
  {
    title: "Hospital Pharmacy Internship",
    company: "Universal Hospital",
    period: "Upcoming / Summer 2025",
    description: "Scheduled exposure to inpatient medication management, dispensing protocols, and patient counseling.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Medical Store Training",
    company: "Local Pharmacy Center",
    period: "Winter 2024",
    description: "Practical training in drug inventory management, prescription handling, and over-the-counter medicine consultation.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Research Exposure",
    company: "College Research Lab",
    period: "2024 - Present",
    description: "Assisting in pharmaceutical formulation trials and conducting basic chemical analysis of drug compounds.",
    icon: <Briefcase className="w-6 h-6" />
  }
]

const achievements = [
  { title: "AI in Pharma Certification", provider: "Skill India", value: "2024" },
  { title: "Seminar Participation", provider: "National Pharma Meet", value: "2024" },
  { title: "Academic Excellence", provider: "12th Science Board", value: "2023" },
  { title: "Science Competition Win", provider: "Inter-College Fest", value: "Top 3" }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden bg-mesh">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* Experience Timeline */}
          <div className="lg:col-span-7 space-y-16">
            <div className="text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none text-foreground"
              >
                Practical <br />
                <span className="text-primary text-glow">Milestones.</span>
              </motion.h2>
              <p className="text-lg text-muted-foreground font-medium">A chronological journey through clinical pharmacy and healthcare training.</p>
            </div>

            <div className="space-y-12 relative before:absolute before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-foreground/5">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-24 group"
                >
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl glass-dark flex items-center justify-center text-primary z-10 border border-border group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                    <div className="w-7 h-7">
                      {exp.icon}
                    </div>
                  </div>
                  <div className="bento-card group-hover:neon-border !p-10">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                      <div>
                        <h3 className="text-2xl font-black text-foreground uppercase tracking-tighter mb-2">{exp.title}</h3>
                        <p className="text-primary font-black text-xs uppercase tracking-widest">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1.5 rounded-full glass border-border text-[10px] font-black uppercase tracking-[0.2em] text-foreground/60">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed font-medium">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="lg:col-span-5 space-y-16">
            <div className="text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black mb-6 tracking-tighter leading-none text-foreground"
              >
                Honor & <br />
                <span className="text-accent text-glow">Recognition.</span>
              </motion.h2>
              <p className="text-lg text-muted-foreground font-medium">Certified milestones and academic excellence.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {achievements.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl flex items-center gap-8 group hover:bg-foreground/[0.03] transition-all duration-500 border border-border"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-foreground uppercase tracking-tighter mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground font-black uppercase tracking-widest">{item.provider} <span className="text-accent mx-2">•</span> {item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="glass p-10 rounded-[2.5rem] text-center border-border hover:border-primary/20 transition-all">
                <p className="text-5xl font-black text-primary mb-2">2024-28</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Class of</p>
              </div>
              <div className="glass p-10 rounded-[2.5rem] text-center border-border hover:border-accent/20 transition-all">
                <p className="text-5xl font-black text-accent mb-2">05+</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Research</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
