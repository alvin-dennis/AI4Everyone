export function Footer() {
  const links = {
    about: [
      { name: "Mission", href: "#about" },
      { name: "Approach", href: "#approach" },
      { name: "Challenge", href: "#challenge" },
    ],
    participate: [
      { name: "For Students", href: "#audience" },
      { name: "For Professionals", href: "#audience" },
      { name: "For Educators", href: "#audience" },
    ],
    partner: [
      { name: "Partnership Options", href: "#partner" },
      { name: "Volunteer", href: "#partner" },
      { name: "Sponsor", href: "#partner" },
    ],
  }

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AI</span>
              </div>
              <span className="font-bold text-lg">AI for Everyone</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A statewide initiative for AI literacy, enabled by TinkerHub.
            </p>
            <p className="text-xs text-muted-foreground">Empowering Kerala to become creators in the AI era.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {links.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Participate</h3>
            <ul className="space-y-2">
              {links.participate.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Partner</h3>
            <ul className="space-y-2">
              {links.partner.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 AI for Everyone. Enabled by TinkerHub. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">Building Kerala's AI-literate future, together.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
