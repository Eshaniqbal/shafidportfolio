'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Pill, Microscope, Activity, Users } from 'lucide-react'

const skillCategories = [
  {
    title: "Pharmaceutical Knowledge",
    icon: <Pill className="w-6 h-6" />,
    skills: ["Drug Formulation", "Pharmacology", "Organic Chemistry", "Clinical Pharmacy", "Basic Drug Info"]
  },
  {
    title: "Clinical & Research",
    icon: <Microscope className="w-6 h-6" />,
    skills: ["Healthcare Safety", "Patient Safety", "Clinical Research", "Laboratory Skills", "AI in Pharma"]
  },
  {
    title: "General & Professional",
    icon: <Users className="w-6 h-6" />,
    skills: ["Communication", "Team Collaboration", "Problem Solving", "MS Office", "Time Management"]
  }
]

const progressSkills = [
  { name: "Pharmacology", level: 85 },
  { name: "Clinical Pharmacy", level: 80 },
  { name: "Drug Formulation", level: 75 },
  { name: "Organic Chemistry", level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none text-foreground"
            >
              Technical <br />
              <span className="text-primary text-glow">Expertise.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground font-medium"
            >
              A synthesis of pharmaceutical mastery and modern clinical integration.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Progress Section */}
          <div className="lg:col-span-5 space-y-10">
            <h3 className="text-2xl font-black mb-8 flex items-center gap-4 text-foreground uppercase tracking-tighter">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Activity className="w-6 h-6" />
              </div>
              Core Proficiency
            </h3>
            <div className="space-y-8">
              {progressSkills.map((skill, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-black uppercase tracking-widest text-foreground/80">{skill.name}</span>
                    <span className="text-primary font-black text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-foreground/5 rounded-full overflow-hidden border border-border p-[2px]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-foreground/10 animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Section */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bento-card group hover:neon-border flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-foreground/5 text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-black text-foreground uppercase tracking-tighter">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <Badge key={sIdx} variant="secondary" className="bg-foreground/5 border border-border hover:bg-primary/20 hover:text-primary transition-all py-1.5 px-3 text-[10px] font-black uppercase tracking-widest rounded-lg">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
