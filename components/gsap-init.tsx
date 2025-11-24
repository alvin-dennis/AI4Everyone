"use client"

import { useEffect } from "react"
import { initGSAP } from "@/lib/animations"

export default function GsapInit() {
    useEffect(() => {
        initGSAP()
    }, [])

    return null
}
