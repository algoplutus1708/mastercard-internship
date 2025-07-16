"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Calendar, Coffee, Code2 } from "lucide-react"

const stats = [
  { icon: Users, label: "Team Members", value: 21, suffix: "" },
  { icon: Calendar, label: "Weeks Together", value: 12, suffix: "" },
  { icon: Coffee, label: "Coffee Chats", value: 50, suffix: "+" },
  { icon: Code2, label: "Projects Completed", value: 8, suffix: "" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numbers
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.value / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setAnimatedValues((prev) => {
                const newValues = [...prev]
                newValues[index] = Math.floor(current)
                return newValues
              })
            }, 30)
          })
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-orange-300 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {animatedValues[index]}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
