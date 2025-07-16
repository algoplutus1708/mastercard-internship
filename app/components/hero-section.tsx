"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Zap, Rocket, Star, Heart, Sparkles } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive cursor trail */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-sm opacity-70 pointer-events-none z-50 transition-all duration-200"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-sm opacity-50 pointer-events-none z-50 transition-all duration-400"
        style={{
          left: mousePosition.x * 0.98 - 8,
          top: mousePosition.y * 0.98 - 8,
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-2000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          {/* Animated icons */}
          <div className="flex items-center justify-center mb-12 space-x-8">
            <div className="animate-bounce delay-0">
              <Rocket className="w-12 h-12 text-orange-400 animate-spin-slow" />
            </div>
            <div className="animate-bounce delay-300">
              <Zap className="w-10 h-10 text-yellow-400 animate-pulse" />
            </div>
            <div className="animate-bounce delay-600">
              <Star className="w-11 h-11 text-pink-400 animate-ping" />
            </div>
            <div className="animate-bounce delay-900">
              <Heart className="w-10 h-10 text-red-400 animate-pulse" />
            </div>
            <div className="animate-bounce delay-1200">
              <Sparkles className="w-12 h-12 text-purple-400 animate-spin-slow" />
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 animate-gradient-shift animate-bounce-subtle">
              THANK
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-shift delay-500 animate-bounce-subtle">
              YOU!
            </span>
          </h1>

          <div className="relative mb-12">
            <p className="text-3xl md:text-4xl text-gray-200 max-w-5xl mx-auto leading-relaxed font-bold animate-fade-in-up delay-1000">
              To the most <span className="text-orange-400 animate-pulse">AMAZING</span> Payment Resiliency Team who
              made my internship absolutely <span className="text-pink-400 animate-pulse">LEGENDARY!</span>
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/10 via-pink-400/10 to-purple-400/10 blur-2xl rounded-lg animate-pulse" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 animate-fade-in-up delay-1500">
            <button
              onClick={() => document.getElementById("team-section")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white font-black text-xl rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-2 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>MEET THE LEGENDS</span>
                <ChevronDown className="w-6 h-6 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-pink-300 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </button>

            <button className="group relative px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white font-black text-xl rounded-full transition-all duration-300 transform hover:scale-110 hover:-rotate-2 hover:shadow-2xl">
              <span className="relative z-10 flex items-center space-x-3">
                <Rocket className="w-6 h-6 group-hover:animate-spin" />
                <span>SHARE THE LOVE</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-orange-400 rounded-full animate-ping opacity-60" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full animate-ping delay-1000 opacity-60" />
      <div className="absolute bottom-40 left-20 w-10 h-10 bg-purple-400 rounded-full animate-ping delay-2000 opacity-60" />
      <div className="absolute bottom-20 right-40 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-3000 opacity-60" />
    </section>
  )
}
