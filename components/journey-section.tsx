"use client"

import { StoryChapter } from "./story-chapter"
import { motion } from "framer-motion"

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: {} } }

export function JourneySection() {
  const journey = [
    {
      step: "01",
      title: "Discover",
      description: "Learn about AI fundamentals and how it impacts your life.",
    },
    {
      step: "02",
      title: "Explore",
      description: "Engage with hands-on activities, tools, and real-world projects.",
    },
    {
      step: "03",
      title: "Create",
      description: "Build AI solutions that address local challenges and opportunities.",
    },
    {
      step: "04",
      title: "Share",
      description: "Mentor others, contribute to the community, and shape the future.",
    },
  ]

  return (
    <StoryChapter
      number="05"
      subtitle="Your Path"
      title="The Learning Journey"
      className="bg-secondary/30"
      id="journey"
    >
      <motion.div variants={list} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="story-element">
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border parallax" />
          <motion.div className="grid md:grid-cols-4 gap-8 relative" variants={list}>
            {journey.map((stepItem, index) => (
              <motion.div key={index} variants={item} className="text-center space-y-4">
                <div className="w-24 h-24 bg-background border-4 border-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl font-bold text-primary">{stepItem.step}</span>
                </div>
                <h3 className="text-xl font-bold">{stepItem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{stepItem.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      <div className="story-element">
        <p className="text-xl leading-relaxed text-center text-foreground/80 text-balance">
          A structured path from curiosity to creation, designed for learners at every level.
        </p>
      </div>
    </StoryChapter>
  )
}
