"use client"

import { useEffect, useState } from "react"

export function FloatingShapes() {
  const [shapes, setShapes] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newShapes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 50,
      delay: Math.random() * 10000,
    }))

    setShapes(newShapes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <div
          key={shape.id}
          className={`absolute opacity-5 animate-float ${
            index % 3 === 0
              ? "bg-gradient-to-br from-orange-400 to-pink-400 rounded-full"
              : index % 3 === 1
                ? "bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"
                : "bg-gradient-to-br from-pink-400 to-purple-400 transform rotate-45"
          }`}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            animationDelay: `${shape.delay}ms`,
            animationDuration: `${15 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  )
}
