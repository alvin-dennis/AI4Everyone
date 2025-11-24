"use client"

import { easeOut, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: {  ease: easeOut } },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float-minimal" />
        <div
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-float-minimal"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="absolute top-20 right-20 animate-float opacity-20">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path
                d="M40 10 L50 30 L70 30 L55 45 L60 65 L40 50 L20 65 L25 45 L10 30 L30 30 Z"
                fill="currentColor"
                className="text-accent"
              />
            </svg>
          </div>

          <motion.div className="space-y-12 text-center" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div className="inline-block" variants={item}>
              <div className="story-line mx-auto" />
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mt-4 font-medium">
                A Kerala Story
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                AI for <span className="text-primary">Everyone</span>
              </motion.h1>

              <motion.p variants={item} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Democratizing AI knowledge across Kerala. Building on our digital literacy legacy, we're empowering
                communities to become active <span className="text-primary font-semibold">creators</span> in the AI era.
              </motion.p>
            </div>

            <motion.div variants={item} className="flex flex-wrap justify-center gap-8 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">1L+</div>
                <div className="text-sm text-muted-foreground mt-1">Target Learners</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">14</div>
                <div className="text-sm text-muted-foreground mt-1">Districts</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground mt-1">Audience Groups</div>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="rounded-full text-base group min-w-[180px]">
                Join the Movement
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base min-w-[180px] bg-transparent">
                Learn More
              </Button>
            </motion.div>

            <motion.div variants={item} className="pt-12">
              <p className="text-sm text-muted-foreground">
                Enabled by <span className="text-foreground font-semibold">TinkerHub</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
