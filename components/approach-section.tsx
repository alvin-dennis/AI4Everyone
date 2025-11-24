"use client"

import { StoryChapter } from "./story-chapter"
import { Brain, Hammer, Heart } from "lucide-react"
import { motion } from "framer-motion"

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: {} } }

export function ApproachSection() {
  const approaches = [
    {
      icon: Brain,
      title: "Head",
      subtitle: "Understand",
      description: "Understand how AI works and why it matters in daily life.",
    },
    {
      icon: Hammer,
      title: "Hand",
      subtitle: "Build",
      description: "Build with AI tools, create projects, and solve problems that matter locally.",
    },
    {
      icon: Heart,
      title: "Heart",
      subtitle: "Create",
      description: "Share knowledge, mentor others, and shape a more inclusive AI future.",
    },
  ]

  return (
    <StoryChapter
      number="03"
      subtitle="Our Approach"
      title="Head, Hand, and Heart"
      className="bg-secondary/30"
      id="approach"
    >
      <motion.div className="story-element" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.p variants={item} className="text-2xl md:text-3xl font-light leading-relaxed text-center text-balance">
          True learning engages the <span className="story-highlight">head</span>,{" "}
          <span className="story-highlight">hand</span>, and <span className="story-highlight">heart</span>.
        </motion.p>
      </motion.div>

      <motion.div className="grid md:grid-cols-3 gap-12 story-element" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        {approaches.map((approach, index) => (
          <motion.div key={index} className="text-center space-y-4" variants={item}>
            <div className="w-20 h-20 bg-background rounded-xl flex items-center justify-center mx-auto shadow-sm">
              <approach.icon className="w-10 h-10 text-primary" />
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">{approach.subtitle}</div>
              <h3 className="text-2xl font-bold mb-3">{approach.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{approach.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </StoryChapter>
  )
}
