import { StoryChapter } from "./story-chapter"
import { AlertTriangle, Briefcase, Shield } from "lucide-react"

export function ChallengeSection() {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Student Skill Gap",
      description:
        "Many students are graduating without understanding the technologies that will define their future careers. Tomorrow's essential skills are yet to be developed.",
    },
    {
      icon: Briefcase,
      title: "Workforce Disruption",
      description:
        "AI's rapid integration into the workplace presents significant challenges for professionals, particularly freshers and those in the service industry facing automation.",
    },
    {
      icon: Shield,
      title: "Misinformation Crisis",
      description:
        "The rise of deepfakes and misinformation blurs truth. Elders face scams and fake news. AI literacy can give awareness to pause, question, and protect.",
    },
  ]

  return (
    <StoryChapter number="02" subtitle="The Challenge" title="What We're Up Against" id="challenge">
      <div className="story-element">
        <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 text-balance">
          AI is reshaping our world at an unprecedented pace. Without proper literacy, we risk being left behind as
          passive consumers rather than active participants in this transformation.
        </p>
      </div>

      <div className="space-y-8 story-element">
        {challenges.map((challenge, index) => (
          <div key={index} className="flex gap-6 items-start group">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
              <challenge.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-3">{challenge.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">{challenge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </StoryChapter>
  )
}
