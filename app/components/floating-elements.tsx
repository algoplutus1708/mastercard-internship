"use client"

import { useEffect, useState } from "react"
import { Sparkles, Star, Heart, Zap } from "lucide-react"

export function FloatingElements() {
  const [elements, setElements] = useState<
    Array<{ id: number; x: number; y: number; icon: any; color: string; delay: number }>
  >([])

  useEffect(() => {
    const icons = [Sparkles, Star, Heart, Zap]
    const colors = ["text-cyan-400", "text-purple-400", "text-pink-400", "text-yellow-400"]

    const newElements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5000,
    }))

    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element) => {
        const IconComponent = element.icon
        return (
          <div
            key={element.id}
            className={`absolute ${element.color} opacity-20 animate-float`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}ms`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            <IconComponent className="w-4 h-4" />
          </div>
        )
      })}
    </div>
  )
}
