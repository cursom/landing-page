"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 dark:from-purple-900/30 dark:via-blue-900/30 dark:to-teal-900/30" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-radial from-white/5 to-transparent rounded-full blur-2xl transition-all duration-1000 ease-out" style={{ left: mousePosition.x - 192, top: mousePosition.y - 192 }} />
        </div>
    )
}