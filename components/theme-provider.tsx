"use client"

import { ThemeProvider as NextThemeProvider } from "next-themes"
import React from "react"

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
    return (
        <NextThemeProvider attribute="class" enableSystem defaultTheme="light">
            {children}
        </NextThemeProvider>
    )
}
