export function StoryDivider({ variant = "wave" }: { variant?: "wave" | "mountains" | "dots" }) {
  if (variant === "wave") {
    return (
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path
            d="M0,50 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,120 L0,120 Z"
            fill="oklch(0.95 0.02 100)"
            opacity="0.5"
          />
          <path
            d="M0,70 C200,40 400,90 600,70 C800,50 1000,100 1200,70 L1200,120 L0,120 Z"
            fill="oklch(0.95 0.02 100)"
          />
        </svg>
      </div>
    )
  }

  if (variant === "mountains") {
    return (
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <polygon
            points="0,120 0,80 300,20 600,60 900,10 1200,80 1200,120"
            fill="oklch(0.42 0.15 260)"
            opacity="0.1"
          />
          <polygon
            points="0,120 0,90 200,40 500,80 800,30 1100,70 1200,90 1200,120"
            fill="oklch(0.42 0.15 260)"
            opacity="0.2"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className="w-full py-8 flex justify-center gap-3">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-3 h-3 rounded-full bg-primary animate-bounce-gentle"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  )
}
