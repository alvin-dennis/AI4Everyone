"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Vision", href: "#about" },
    { name: "Challenge", href: "#challenge" },
    { name: "Approach", href: "#approach" },
    { name: "Audiences", href: "#audience" },
    { name: "Partner", href: "#partner" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AI</span>
            </div>
            <span className="font-bold text-lg text-foreground">AI for Everyone</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" className="rounded-full">
              Get Involved
            </Button>
            <ThemeToggle />
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" className="rounded-full w-fit mt-2">
                Get Involved
              </Button>
              <div className="mt-2">
                <ThemeToggle small />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function ThemeToggle({ small }: { small?: boolean } = { small: false }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const current = resolvedTheme || theme

  if (!mounted) {
    return (
      <button className="p-2 rounded-full opacity-0 pointer-events-none" aria-hidden>
        <Sun size={small ? 14 : 16} />
      </button>
    )
  }

  return (
    <button
      onClick={() => {
        try {
          document.documentElement.classList.add("theme-transition")
          setTimeout(() => document.documentElement.classList.remove("theme-transition"), 380)
        } catch (e) { }

        setTheme(current === "dark" ? "light" : "dark")
      }}
      className="p-2 rounded-full hover:bg-background/5 transition-colors"
      aria-label="Toggle theme"
    >
      {current === "dark" ? <Sun size={small ? 14 : 16} /> : <Moon size={small ? 14 : 16} />}
    </button>
  )
}
