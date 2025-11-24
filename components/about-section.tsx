import { StoryChapter } from "./story-chapter"
import { Sparkles, Users, BookOpen } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Users,
      title: "Literacy for All",
      description:
        "Equitable AI education empowering every citizen to understand and apply AI responsibly, positioning Kerala as a global model for inclusive technology education.",
    },
    {
      icon: Sparkles,
      title: "Creators, Not Consumers",
      description:
        "Enabling Keralites to innovate and build AI-driven solutions rather than passively consuming technology created elsewhere.",
    },
    {
      icon: BookOpen,
      title: "Knowledge as Public Good",
      description:
        "Making AI knowledge accessible to all through open, grassroots-first, multilingual approaches where everyone becomes both learner and teacher.",
    },
  ]

  return (
    <StoryChapter number="01" subtitle="Our Vision" title="Why Kerala Needs AI Literacy Now">
      <div className="story-element">
        <div className="border-l-4 border-primary pl-8 py-6">
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 mb-6 text-balance">
            "We have a historical opportunity to establish a human-centred framework for AI research, education,
            practice and policy."
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            — Fei-Fei Li, Stanford University & Co-Founder of AI4ALL
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 story-element">
        {values.map((value, index) => (
          <div key={index} className="space-y-4">
            <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center">
              <value.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold">{value.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="story-element">
        <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 text-balance">
          Building on Kerala's pioneering <span className="story-highlight">digital literacy legacy</span>, we're
          setting a global model for responsible AI education rooted in{" "}
          <span className="story-highlight">social responsibility</span> and{" "}
          <span className="story-highlight">community well-being</span>.
        </p>
      </div>
    </StoryChapter>
  )
}
