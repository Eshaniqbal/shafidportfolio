'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Microscope, Pill, BookOpen, BarChart, Smartphone, Activity } from 'lucide-react'

const projects = [
  {
    title: "AI in Pharma Study",
    description: "Researching the application of machine learning algorithms in predicting drug-target interactions and optimizing lead compound discovery.",
    icon: <Activity className="w-10 h-10 text-cyan-500" />,
    tags: ["AI", "Innovation"],
    color: "from-cyan-500/20 to-indigo-500/20"
  },
  {
    title: "Drug Interaction Study",
    description: "In-depth analysis of pharmacokinetic and pharmacodynamic interactions between common antibiotics and anticoagulants.",
    icon: <Pill className="w-10 h-10 text-primary" />,
    tags: ["Pharmacology", "Research"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Herbal Medicine Research",
    description: "Evaluating the therapeutic potential and safety profiles of indigenous medicinal plants in treating inflammatory conditions.",
    icon: <Microscope className="w-10 h-10 text-emerald-500" />,
    tags: ["Pharmacognosy", "Herbal Science"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Clinical Case Study",
    description: "Comprehensive review of patient medication therapy management in a hospital setting, focusing on dosage optimization.",
    icon: <BookOpen className="w-10 h-10 text-purple-500" />,
    tags: ["Clinical Pharmacy", "Case Study"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Pharma Marketing Analysis",
    description: "Study of digital transformation in pharmaceutical marketing and its impact on physician prescribing behavior.",
    icon: <BarChart className="w-10 h-10 text-amber-500" />,
    tags: ["Marketing", "Analysis"],
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Medicine Reminder App Idea",
    description: "A concept for an AI-powered application to improve medication adherence through smart notifications and tracking.",
    icon: <Smartphone className="w-10 h-10 text-rose-500" />,
    tags: ["HealthTech", "UX Design"],
    color: "from-rose-500/20 to-red-500/20"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-mesh">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none text-foreground"
            >
              Academic <br />
              <span className="text-primary text-glow">Case Studies.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground font-medium"
            >
              Documenting the evolution of pharmaceutical science through research.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass px-6 py-3 rounded-2xl border-border"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{projects.length} Published Projects</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <Card className={`bento-card h-full border-none bg-gradient-to-br ${project.color} overflow-hidden flex flex-col`}>
                <CardHeader className="p-0 mb-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-2xl bg-foreground/10 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-500">
                      <div className="w-8 h-8 md:w-10 md:h-10">
                        {project.icon}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full glass border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <ExternalLink className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-black text-foreground uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow flex flex-col">
                  <CardDescription className="text-muted-foreground text-base leading-relaxed font-medium mb-8">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tIdx) => (
                      <Badge key={tIdx} variant="outline" className="text-[8px] font-black uppercase tracking-[0.2em] border-border px-3 py-1 text-foreground/60 group-hover:border-primary group-hover:text-primary transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
