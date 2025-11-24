"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

interface StoryChapterProps {
  number: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
  id?: string
}

export function StoryChapter({ number, title, subtitle, children, className, id = "" }: StoryChapterProps) {
  const chapterRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ctx: gsap.Context | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = chapterRef.current?.querySelectorAll(".story-element")
    elements?.forEach((el) => observer.observe(el))

    if (typeof window !== "undefined") {
      try {
        gsap.registerPlugin(ScrollTrigger)
      } catch (e) { }

      ctx = gsap.context(() => {
        const el = chapterRef.current
        if (!el) return

        const header = el.querySelector(".chapter-number")
        const line = el.querySelector(".story-line")
        const title = el.querySelector("h2")

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })

        if (header) tl.from(header, { x: -20, opacity: 0, })
        if (line) tl.from(line, { scaleX: 0, transformOrigin: "left center", }, "<")
        if (title) tl.from(title, { y: 24, opacity: 0, }, "-=" + 0.3)
      }, chapterRef)
    }

    return () => {
      observer.disconnect()
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <motion.section
      id={id}
      ref={chapterRef}
      className={`section-spacing ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{}}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative mb-16 story-element"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{}}
          >
            <span className="chapter-number">{number}</span>
            <div className="relative z-10">
              <div className="story-line" />
              {subtitle && (
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">{subtitle}</p>
              )}
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl text-balance">{title}</h2>
            </div>
          </motion.div>

          <div className="space-y-12">{children}</div>
        </div>
      </div>
    </motion.section>
  )
}
