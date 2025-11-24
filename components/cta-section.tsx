import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="story-element revealed">
            <div className="story-line mx-auto" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mt-4 mb-8 font-medium">Your Turn</p>
          </div>

          <div className="space-y-6 story-element revealed">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Shape Kerala's <span className="text-primary">AI Future</span>
            </h2>

            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">
              AI will shape the future of work, culture, and communities. Kerala can either be a consumer or a creator.
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              With your partnership, we can ensure every Keralite learns, builds, and creates responsibly with AI. This
              is our chance to set a global model again, like we did with digital literacy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 story-element revealed">
            <Button size="lg" className="rounded-full text-base group min-w-[200px]">
              <Mail className="mr-2 w-4 h-4" />
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base min-w-[200px] bg-transparent">
              Partnership Details
            </Button>
          </div>

          <div className="pt-12 story-element revealed">
            <div className="inline-block border-t-2 border-primary pt-6">
              <p className="text-sm text-muted-foreground italic">Enabled by TinkerHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
