import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Bangers } from "next/font/google"
import "./globals.css"
import ThemeProviderClient from "@/components/theme-provider"
import GsapInit from "@/components/gsap-init"

const bangers = Bangers({
  weight: "400",
  variable: "--font-display",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "AI for Everyone | Kerala AI Literacy Initiative",
  description:
    "A statewide initiative to democratize AI knowledge across Kerala. Building on Kerala's digital literacy legacy, we aim to make communities active creators in the AI era.",
  icons: {
    icon: [
      {
        url: "/vercel.svg",
      },
      {
        url: "/vercel.svg",
      },
      {
        url: "/vercel.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/vercel.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bangers.variable} ${plusJakartaSans.variable} font-body antialiased`}>
        <ThemeProviderClient>
          {children}
          <GsapInit />
        </ThemeProviderClient>
      </body>
    </html>
  )
}
