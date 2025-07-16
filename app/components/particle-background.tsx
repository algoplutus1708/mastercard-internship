"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = ["#fb7185", "#f97316", "#a855f7", "#06b6d4", "#eab308"]

    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    setParticles(initialParticles)

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          const newX = particle.x + particle.speedX
          const newY = particle.y + particle.speedY

          if (newX < 0 || newX > window.innerWidth) particle.speedX *= -1
          if (newY < 0 || newY > window.innerHeight) particle.speedY *= -1

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-30 animate-pulse"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
        />
      ))}
    </div>
  )
}
