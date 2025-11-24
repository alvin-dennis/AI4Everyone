import { StoryChapter } from "./story-chapter"
import { Button } from "./ui/button"
import Link from "next/link"

const PARTNERS = [
  {
    id: "knowledge",
    title: "Knowledge",
    description:
      "AI experts, educators and mentors who bring deep domain expertise and hands-on learning.",
    number: "01",
  },
  {
    id: "financial",
    title: "Funding",
    description:
      "Organizations that enable scale — training, materials and program growth across districts.",
    number: "02",
  },
  {
    id: "media",
    title: "Media",
    description:
      "Storytellers and platforms that amplify impact and surface local success stories.",
    number: "03",
  },
  {
    id: "resource",
    title: "Resources",
    description:
      "Hardware, software and learning kits that make practical, hands-on AI experiences possible.",
    number: "04",
  },
  {
    id: "community",
    title: "Community",
    description:
      "Schools, libraries and local groups opening doors for learners of all ages.",
    number: "05",
  },
]

export function PartnershipSection() {
  return (
    <StoryChapter number="06" subtitle="Join the Movement" title="Partner With Us" id="partner">
      <div className="story-element max-w-3xl mx-auto text-center">
        <p className="text-2xl md:text-3xl leading-relaxed text-foreground/90 font-light text-balance">
          Collaboration is the heart of this initiative. We bring together people and organizations to co-create
          learning, tools, and opportunities that make AI accessible and useful for every community.
        </p>
      </div>

      <div className="story-element max-w-5xl mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERS.map((p) => (
            <div
              key={p.id}
              className="story-element relative rounded-2xl p-6 bg-transparent text-foreground/90 hover:bg-accent/5 hover:shadow-lg transition-colors"
            >
              <div className="absolute -top-6 -right-6 text-primary/10 text-6xl font-light pointer-events-none parallax">
                {p.number}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{p.title} Partners</h4>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="w-full max-w-2xl text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">How You Can Contribute</h3>
            <p className="text-foreground/70">Host workshops, mentor learners, sponsor toolkits, or open local spaces.</p>
          </div>

          <div className="flex gap-4">
            <Link href="" aria-label="Contact to partner">
              <Button variant="default">Become a Partner</Button>
            </Link>
            <Link href="#contact" aria-label="See volunteering options">
              <Button variant="outline">Volunteer & Mentor</Button>
            </Link>
          </div>
        </div>
      </div>
    </StoryChapter>
  )
}
