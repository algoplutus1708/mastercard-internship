"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Heart, Zap, Star, Sparkles, Rocket } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  statement: string
  cardStyle: string
  shape: string
  animation: string
}

interface TeamCardProps {
  member: TeamMember
  index: number
}

const cardStyles = {
  "neon-orange": {
    front:
      "bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-400 shadow-lg shadow-orange-400/50",
    back: "bg-gradient-to-br from-orange-500 to-red-500",
    glow: "shadow-orange-400/50",
    icon: Rocket,
  },
  "neon-pink": {
    front: "bg-gradient-to-br from-pink-500/20 to-rose-500/20 border-2 border-pink-400 shadow-lg shadow-pink-400/50",
    back: "bg-gradient-to-br from-pink-500 to-rose-500",
    glow: "shadow-pink-400/50",
    icon: Heart,
  },
  "neon-purple": {
    front:
      "bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-2 border-purple-400 shadow-lg shadow-purple-400/50",
    back: "bg-gradient-to-br from-purple-500 to-violet-500",
    glow: "shadow-purple-400/50",
    icon: Zap,
  },
  "neon-cyan": {
    front: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 shadow-lg shadow-cyan-400/50",
    back: "bg-gradient-to-br from-cyan-500 to-blue-500",
    glow: "shadow-cyan-400/50",
    icon: Star,
  },
  "gradient-pink": {
    front: "bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm border border-pink-300/50",
    back: "bg-gradient-to-br from-pink-600 to-purple-600",
    glow: "shadow-pink-500/30",
    icon: Sparkles,
  },
  "gradient-blue": {
    front: "bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm border border-blue-300/50",
    back: "bg-gradient-to-br from-blue-600 to-indigo-600",
    glow: "shadow-blue-500/30",
    icon: Star,
  },
  "gradient-orange": {
    front: "bg-gradient-to-br from-orange-600/30 to-yellow-600/30 backdrop-blur-sm border border-orange-300/50",
    back: "bg-gradient-to-br from-orange-600 to-yellow-600",
    glow: "shadow-orange-500/30",
    icon: Rocket,
  },
  "gradient-purple": {
    front: "bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-purple-300/50",
    back: "bg-gradient-to-br from-purple-600 to-pink-600",
    glow: "shadow-purple-500/30",
    icon: Zap,
  },
  "gradient-cyan": {
    front: "bg-gradient-to-br from-cyan-600/30 to-teal-600/30 backdrop-blur-sm border border-cyan-300/50",
    back: "bg-gradient-to-br from-cyan-600 to-teal-600",
    glow: "shadow-cyan-500/30",
    icon: Sparkles,
  },
  holographic: {
    front:
      "bg-gradient-to-br from-orange-500/10 via-pink-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-md border-2 border-white/30 shadow-xl",
    back: "bg-gradient-to-br from-orange-500 via-pink-500 via-purple-500 to-blue-500",
    glow: "shadow-white/20",
    icon: Star,
  },
}

export function TeamCard({ member, index }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const style = cardStyles[member.cardStyle as keyof typeof cardStyles] || cardStyles["neon-orange"]
  const IconComponent = style.icon

  return (
    <div
      ref={cardRef}
      className={`group perspective-1000 h-96 relative cursor-pointer ${member.animation} transition-all duration-500`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic glow effect */}
      <div
        className={`absolute -inset-2 ${style.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}
      />

      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className={`${style.front} ${member.shape} h-full overflow-hidden transition-all duration-500`}>
            {/* Interactive light effect */}
            <div
              className="absolute w-40 h-40 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-3xl transition-all duration-300 pointer-events-none"
              style={{
                left: mousePosition.x - 80,
                top: mousePosition.y - 80,
                opacity: isFlipped ? 0 : 0.8,
              }}
            />

            <div className="relative h-64 overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Animated icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                  <IconComponent className="w-6 h-6 text-white animate-bounce" />
                </div>
              </div>
            </div>

            <div className="p-6 relative">
              <h3 className="text-2xl font-black text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-gray-300 mb-4 font-bold group-hover:text-gray-100 transition-colors duration-300">
                {member.role}
              </p>

              <div className="flex items-center justify-between">
                <div className="w-20 h-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-150 animate-pulse" />
                <div className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-black">
                  #{String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div
            className={`${style.back} ${member.shape} h-full p-8 flex flex-col justify-center text-white relative overflow-hidden`}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/30 rounded-full animate-spin" />
              <div
                className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full animate-spin"
                style={{ animationDirection: "reverse" }}
              />
              <div className="absolute top-1/2 right-8 w-12 h-12 border-2 border-white/30 rounded-full animate-ping" />
            </div>

            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                  <IconComponent className="w-8 h-8 text-white animate-pulse" />
                </div>
              </div>

              <h3 className="text-2xl font-black mb-6 animate-pulse">{member.name}</h3>
              <p className="text-sm leading-relaxed text-white/95 font-medium">{member.statement}</p>

              <div className="mt-8 flex justify-center">
                <div className="w-24 h-2 bg-white/40 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
