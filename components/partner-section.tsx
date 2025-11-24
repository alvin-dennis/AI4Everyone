import { Lightbulb, DollarSign, Radio, Package, Building } from "lucide-react"

export function PartnerSection() {
  const partners = [
    {
      icon: Lightbulb,
      title: "Knowledge Partners",
      description:
        "Tech companies, educators, and subject experts contributing technical know-how, mentorship, and curriculum design.",
      examples: ["AI Companies", "Educators", "Subject Experts", "Content Creators"],
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      icon: DollarSign,
      title: "Financial Partners",
      description:
        "Organizations providing funding for program operations, facilitator training, venue costs, and scaling to new districts.",
      examples: ["Program Funding", "Resource Funding", "Scaling Support", "Operations"],
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: Radio,
      title: "Media & Outreach Partners",
      description:
        "Traditional and digital media amplifying our reach through coverage, social media, and content creation.",
      examples: ["Newspapers", "TV & Radio", "Social Media", "Content Creation"],
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Package,
      title: "Resource Partners",
      description: "Providers of hardware, software, learning materials, and technical support for our programs.",
      examples: ["Hardware", "Software Tools", "Learning Materials", "Technical Support"],
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      icon: Building,
      title: "Community Partners",
      description:
        "Schools, libraries, NGOs, Kudumbashree, and workplaces hosting and facilitating learning programs on the ground.",
      examples: ["Schools", "Libraries", "NGOs", "Workplaces", "Community Centers"],
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Partner <span className="text-primary">With Us</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              AI for Everyone is designed to be collaborative and inclusive. TinkerHub acts as the enabler, holding
              space for partners and communities to lead, learn, and build together.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {partners.map((partner, index) => {
              // pattern: 1 from left, 2 from right (cycle of 3)
              // index % 3 === 0 -> left; index % 3 === 1 or 2 -> right
              const flipped = index % 3 !== 0
              return (
                <div
                  key={index}
                  className={`story-element relative flex flex-col md:flex-row items-start gap-6 p-6 md:py-8 md:px-8 rounded-2xl bg-transparent transition-colors hover:bg-accent/5`}
                >
                  <div
                    className={`shrink-0 flex items-center justify-center rounded-full w-20 h-20 bg-secondary/5 ${flipped ? "md:order-2" : "md:order-1"
                      }`}
                    aria-hidden
                  >
                    <div className={`${partner.bg} rounded-full w-14 h-14 flex items-center justify-center`}>
                      <partner.icon className={`w-7 h-7 ${partner.color}`} />
                    </div>
                  </div>

                  <div className={`flex-1 ${flipped ? "md:pl-8 md:pr-0 text-left" : "md:pr-8 text-left"}`}>
                    <div className="relative">
                      <div className="absolute -top-6 right-0 md:left-auto text-foreground/10 text-7xl font-light pointer-events-none parallax select-none">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">{partner.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{partner.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {partner.examples.map((example, i) => (
                        <span key={i} className="text-xs bg-muted-foreground/10 text-muted-foreground px-3 py-1 rounded-full">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* connector to next tile (subtle curve) */}
                  {index < partners.length - 1 ? (
                    <svg
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 pointer-events-none ${flipped ? "-left-22" : "-right-22"
                        } text-foreground/10`}
                      width="160"
                      height="64"
                      viewBox="0 0 160 64"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M8 48 C48 8 112 56 152 16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="connector-path"
                      />
                    </svg>
                  ) : null}

                </div>
              )
            })}
          </div>

          <div className="story-element rounded-xl border bg-linear-to-br from-primary/10 to-accent/10 border-primary/20 p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">How You Can Partner</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Host Learning Programs</h4>
                    <p className="text-sm text-muted-foreground">Facilitate workshops, study circles, or demo days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Volunteer & Mentor</h4>
                    <p className="text-sm text-muted-foreground">Share expertise and guide grassroots facilitators</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sponsor Programs</h4>
                    <p className="text-sm text-muted-foreground">Help distribute learning kits and resources</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Contribute to Repository</h4>
                    <p className="text-sm text-muted-foreground">Add real-world challenges for learners to solve</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Open Doors</h4>
                    <p className="text-sm text-muted-foreground">Invite communities to participate in activities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Financial Support</h4>
                    <p className="text-sm text-muted-foreground">Help sustain and scale this initiative</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
