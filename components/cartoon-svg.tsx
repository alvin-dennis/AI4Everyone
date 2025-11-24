export function CartoonBrain() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Brain illustration */}
      <g className="animate-pulse-soft">
        <ellipse cx="100" cy="100" rx="60" ry="70" fill="oklch(0.65 0.18 260)" opacity="0.2" />
        <path
          d="M70 80 Q60 70 70 60 Q80 50 90 60 Q100 50 110 60 Q120 50 130 60 Q140 70 130 80 Q140 90 130 100 Q140 110 130 120 Q120 130 110 120 Q100 130 90 120 Q80 130 70 120 Q60 110 70 100 Q60 90 70 80 Z"
          fill="oklch(0.65 0.18 260)"
          stroke="oklch(0.42 0.15 260)"
          strokeWidth="3"
        />
        {/* Neural connections */}
        <circle cx="80" cy="85" r="4" fill="oklch(0.65 0.18 45)" className="animate-ping" />
        <circle
          cx="100"
          cy="90"
          r="4"
          fill="oklch(0.65 0.18 45)"
          className="animate-ping"
          style={{ animationDelay: "0.3s" }}
        />
        <circle
          cx="120"
          cy="85"
          r="4"
          fill="oklch(0.65 0.18 45)"
          className="animate-ping"
          style={{ animationDelay: "0.6s" }}
        />
      </g>
      {/* Thought bubbles */}
      <g className="animate-float">
        <circle cx="140" cy="50" r="10" fill="oklch(0.99 0.01 120)" stroke="oklch(0.42 0.15 260)" strokeWidth="2" />
        <circle cx="150" cy="40" r="6" fill="oklch(0.99 0.01 120)" stroke="oklch(0.42 0.15 260)" strokeWidth="2" />
        <text x="140" y="55" fontSize="12" textAnchor="middle">
          💡
        </text>
      </g>
    </svg>
  )
}

export function CartoonHand() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Hand building blocks */}
      <g className="animate-bounce-gentle">
        {/* Hand */}
        <path
          d="M100 150 L100 120 L90 110 L90 80 L100 70 L100 60 L110 60 L110 70 L120 70 L120 60 L130 60 L130 80 L140 90 L140 120 L130 130 L120 140 L110 145 L100 150 Z"
          fill="oklch(0.85 0.08 40)"
          stroke="oklch(0.42 0.15 260)"
          strokeWidth="3"
        />
        {/* Thumb */}
        <path
          d="M90 110 L80 110 L70 100 L70 90 L80 85 L90 90 Z"
          fill="oklch(0.85 0.08 40)"
          stroke="oklch(0.42 0.15 260)"
          strokeWidth="3"
        />
      </g>
      {/* Building blocks */}
      <g className="animate-scale-up" style={{ animationDelay: "0.2s" }}>
        <rect
          x="105"
          y="90"
          width="20"
          height="20"
          rx="3"
          fill="oklch(0.65 0.18 45)"
          stroke="oklch(0.42 0.15 260)"
          strokeWidth="2"
        />
        <text x="115" y="105" fontSize="16" textAnchor="middle">
          🔧
        </text>
      </g>
      {/* Sparkles */}
      <g className="animate-ping">
        <circle cx="150" cy="70" r="3" fill="oklch(0.65 0.18 45)" />
        <circle cx="160" cy="100" r="3" fill="oklch(0.65 0.18 45)" style={{ animationDelay: "0.3s" }} />
      </g>
    </svg>
  )
}

export function CartoonHeart() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Heart with people */}
      <g className="animate-pulse-soft">
        <path
          d="M100 160 L60 120 Q50 110 50 95 Q50 75 65 70 Q75 68 85 75 Q90 80 100 90 Q110 80 115 75 Q125 68 135 70 Q150 75 150 95 Q150 110 140 120 Z"
          fill="oklch(0.75 0.18 10)"
          stroke="oklch(0.6 0.2 10)"
          strokeWidth="3"
        />
      </g>
      {/* People connected */}
      <g className="animate-bounce-gentle">
        <circle cx="85" cy="100" r="8" fill="oklch(0.99 0.01 120)" />
        <circle cx="100" cy="110" r="8" fill="oklch(0.99 0.01 120)" style={{ animationDelay: "0.2s" }} />
        <circle cx="115" cy="100" r="8" fill="oklch(0.99 0.01 120)" style={{ animationDelay: "0.4s" }} />
      </g>
      {/* Connection lines */}
      <g opacity="0.5" stroke="oklch(0.99 0.01 120)" strokeWidth="2">
        <line x1="85" y1="100" x2="100" y2="110" />
        <line x1="100" y1="110" x2="115" y2="100" />
      </g>
    </svg>
  )
}

export function CartoonKid() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Happy kid with idea */}
      <g className="animate-bounce-gentle">
        {/* Head */}
        <circle cx="100" cy="80" r="35" fill="oklch(0.95 0.05 45)" stroke="oklch(0.42 0.15 260)" strokeWidth="3" />
        {/* Eyes */}
        <circle cx="90" cy="75" r="5" fill="oklch(0.2 0 0)" />
        <circle cx="110" cy="75" r="5" fill="oklch(0.2 0 0)" />
        {/* Smile */}
        <path d="M85 90 Q100 100 115 90" stroke="oklch(0.2 0 0)" strokeWidth="3" fill="none" />
        {/* Body */}
        <rect x="75" y="115" width="50" height="50" rx="10" fill="oklch(0.65 0.18 260)" />
        {/* Arms */}
        <path d="M75 125 L50 140" stroke="oklch(0.95 0.05 45)" strokeWidth="8" strokeLinecap="round" />
        <path d="M125 125 L150 140" stroke="oklch(0.95 0.05 45)" strokeWidth="8" strokeLinecap="round" />
      </g>
      {/* Idea lightbulb */}
      <g className="animate-float" style={{ animationDelay: "0.3s" }}>
        <circle cx="140" cy="50" r="15" fill="oklch(0.95 0.95 90)" stroke="oklch(0.65 0.18 45)" strokeWidth="2" />
        <rect x="135" y="65" width="10" height="5" rx="2" fill="oklch(0.65 0.18 45)" />
        <path d="M132 45 L148 45 M135 40 L145 40" stroke="oklch(0.65 0.18 45)" strokeWidth="2" />
      </g>
    </svg>
  )
}

export function CartoonStudent() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Student with laptop */}
      <g className="animate-bounce-gentle">
        {/* Head */}
        <circle cx="100" cy="70" r="30" fill="oklch(0.75 0.08 180)" stroke="oklch(0.42 0.15 260)" strokeWidth="3" />
        {/* Graduation cap */}
        <rect x="70" y="45" width="60" height="8" rx="2" fill="oklch(0.42 0.15 260)" />
        <polygon points="100,35 85,45 115,45" fill="oklch(0.42 0.15 260)" />
        {/* Eyes */}
        <circle cx="90" cy="70" r="4" fill="oklch(0.2 0 0)" />
        <circle cx="110" cy="70" r="4" fill="oklch(0.2 0 0)" />
        {/* Smile */}
        <path d="M90 80 Q100 85 110 80" stroke="oklch(0.2 0 0)" strokeWidth="2" fill="none" />
        {/* Body */}
        <rect x="70" y="100" width="60" height="50" rx="10" fill="oklch(0.65 0.18 45)" />
      </g>
      {/* Laptop */}
      <g className="animate-scale-up" style={{ animationDelay: "0.3s" }}>
        <rect x="60" y="130" width="80" height="50" rx="5" fill="oklch(0.42 0.15 260)" />
        <rect x="65" y="135" width="70" height="35" rx="3" fill="oklch(0.85 0.85 180)" />
        <line x1="100" y1="170" x2="100" y2="175" stroke="oklch(0.42 0.15 260)" strokeWidth="3" />
      </g>
      {/* Code symbols */}
      <g className="animate-ping" opacity="0.7">
        <text x="85" y="155" fontSize="16" fill="oklch(0.42 0.15 260)">
          {"</>"}
        </text>
      </g>
    </svg>
  )
}

export function CartoonElder() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Elder with phone learning */}
      <g className="animate-bounce-gentle">
        {/* Head */}
        <circle cx="100" cy="75" r="32" fill="oklch(0.85 0.05 60)" stroke="oklch(0.42 0.15 260)" strokeWidth="3" />
        {/* Glasses */}
        <circle cx="90" cy="73" r="10" fill="none" stroke="oklch(0.2 0 0)" strokeWidth="2" />
        <circle cx="110" cy="73" r="10" fill="none" stroke="oklch(0.2 0 0)" strokeWidth="2" />
        <line x1="80" y1="73" x2="70" y2="70" stroke="oklch(0.2 0 0)" strokeWidth="2" />
        <line x1="120" y1="73" x2="130" y2="70" stroke="oklch(0.2 0 0)" strokeWidth="2" />
        {/* Eyes */}
        <circle cx="90" cy="73" r="3" fill="oklch(0.2 0 0)" />
        <circle cx="110" cy="73" r="3" fill="oklch(0.2 0 0)" />
        {/* Smile */}
        <path d="M90 85 Q100 92 110 85" stroke="oklch(0.2 0 0)" strokeWidth="2" fill="none" />
        {/* Body */}
        <rect x="70" y="107" width="60" height="60" rx="10" fill="oklch(0.58 0.16 180)" />
      </g>
      {/* Phone in hand */}
      <g className="animate-float" style={{ animationDelay: "0.2s" }}>
        <rect
          x="85"
          y="140"
          width="30"
          height="45"
          rx="5"
          fill="oklch(0.42 0.15 260)"
          stroke="oklch(0.2 0 0)"
          strokeWidth="2"
        />
        <rect x="88" y="145" width="24" height="32" rx="2" fill="oklch(0.95 0.95 180)" />
        <circle cx="100" cy="181" r="3" fill="oklch(0.2 0 0)" />
        {/* Shield icon on screen */}
        <path d="M100 155 L95 158 L95 165 Q95 170 100 172 Q105 170 105 165 L105 158 Z" fill="oklch(0.58 0.16 140)" />
      </g>
    </svg>
  )
}
