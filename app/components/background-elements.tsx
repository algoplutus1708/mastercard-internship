"use client"

import { useEffect, useState } from "react"

export function BackgroundElements() {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 8000,
    }))

    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute bg-emerald-400/20 rounded-full animate-pulse"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}ms`,
            animationDuration: `${4 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  )
}
