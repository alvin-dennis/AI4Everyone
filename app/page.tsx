import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ApproachSection } from "@/components/approach-section"
import { AudienceSection } from "@/components/audience-section"
import { JourneySection } from "@/components/journey-section"
import { ChallengeSection } from "@/components/challenge-section"
import { PartnerSection } from "@/components/partner-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ChallengeSection />
      <ApproachSection />
      <AudienceSection />
      <JourneySection />
      <PartnerSection />
      <CTASection />
      <Footer />
    </main>
  )
}
