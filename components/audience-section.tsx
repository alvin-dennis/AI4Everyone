import { StoryChapter } from "./story-chapter"
import { Baby, GraduationCap, Users } from "lucide-react"

export function AudienceSection() {
  const audiences = [
    {
      icon: Baby,
      title: "KuttyMakers",
      age: "Ages 10-17",
      what: "Develop curiosity and familiarity with foundational AI concepts such as pattern recognition and logic.",
      why: "Children are already immersed in AI. Without proper exposure, they risk becoming mere consumers rather than creators or critical thinkers.",
      how: "Through pattern recognition games, sorting exercises, AI storybooks, and hands-on experiments using tools like Teachable Machine and Scratch.",
    },
    {
      icon: GraduationCap,
      title: "Young Makers",
      age: "College Students & Early Professionals",
      what: "Problem-solving across disciplines, understanding AI's fairness and limitations, and building AI solutions.",
      why: "To guide students into becoming innovators, decision-makers, and creators of AI-driven solutions.",
      how: "Students engage through study jams, hackathons, and mentoring. They innovate by developing applications with Gen AI and LLMs, contributing to Kerala-specific AI models.",
    },
    {
      icon: Users,
      title: "Friends of the Movement",
      age: "Educators, Professionals, Parents, Elderly, Community Leaders",
      what: "Gain understanding of AI's impact and practical applications, while learning to identify misinformation, deepfakes and threats.",
      why: "Understanding AI's multifaceted nature is crucial for developing appropriate policies and fostering societal adoption.",
      how: "Facilitate learning circles in workplaces and communities, host public discussions. Bring together diverse professionals to explore AI's transformation of their fields.",
    },
  ]

  return (
    <StoryChapter number="04" subtitle="Who We Empower" title="Three Communities, One Movement" id="audience">
      <div className="story-element">
        <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 text-balance">
          AI literacy for every stage of life. From curious children to experienced professionals, everyone has a role
          in shaping our AI future.
        </p>
      </div>

      <div className="space-y-16 story-element">
        {audiences.map((audience, index) => (
          <div key={index} className="border-l-4 border-primary pl-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <audience.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{audience.title}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{audience.age}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">What</h4>
                <p className="text-foreground leading-relaxed">{audience.what}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Why</h4>
                <p className="text-foreground leading-relaxed">{audience.why}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">How</h4>
                <p className="text-foreground leading-relaxed">{audience.how}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </StoryChapter>
  )
}
