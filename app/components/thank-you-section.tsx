"use client"

import { useEffect, useState, useRef } from "react"
import { Heart, Sparkles, Rocket, Star } from "lucide-react"

export function ThankYouSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-pink-900/20 to-purple-900/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div
              className={`transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-90"}`}
            >
              <div className="flex items-center justify-center mb-8 space-x-4">
                <Rocket className="w-12 h-12 text-orange-400 animate-bounce" />
                <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 animate-gradient-shift">
                  MY EPIC THANK YOU!
                </h2>
                <Heart className="w-12 h-12 text-pink-400 animate-pulse" />
              </div>
              <div className="w-32 h-2 bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 rounded-full mx-auto animate-pulse" />
            </div>
          </div>

          {/* Thank you card */}
          <div
            className={`transition-all duration-2000 delay-500 ${isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-20 rotate-3"}`}
          >
            <div className="relative">
              {/* Mega glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-[3rem] blur-3xl animate-pulse" />

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border-2 border-gradient-to-r from-orange-400/50 via-pink-400/50 to-purple-400/50 rounded-[3rem] p-12 md:p-16 shadow-2xl">
                {/* Floating icons */}
                <div className="absolute top-8 left-8 animate-bounce delay-0">
                  <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
                </div>
                <div className="absolute top-8 right-8 animate-bounce delay-500">
                  <Star className="w-8 h-8 text-pink-400 animate-pulse" />
                </div>
                <div className="absolute bottom-8 left-8 animate-bounce delay-1000">
                  <Rocket className="w-8 h-8 text-orange-400 animate-ping" />
                </div>
                <div className="absolute bottom-8 right-8 animate-bounce delay-1500">
                  <Heart className="w-8 h-8 text-red-400 animate-pulse" />
                </div>

                <div className="space-y-8 text-gray-200 leading-relaxed relative z-10">
                  <p className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 animate-gradient-shift">
                    Hey Payment Resiliency Squad! 🚀
                  </p>

                  <p className="text-xl md:text-2xl font-bold">
                    HOLY MOLY! What an absolutely INCREDIBLE journey this has been! I'm sitting here trying to put into
                    words how AMAZING you all are, and honestly, I'm getting a bit emotional! 😭✨
                  </p>

                  <p className="text-lg md:text-xl font-medium">
                    Thank you all for making me feel so comfortable in the team. Each one of you helped me at every step. Earlier, I had a very typical image of corporate life (thanks to Bollywood!), but the reality turned out to be very different—and in the best possible way. Thank you for listening to my ideas and for encouraging me to push my limits. I will truly cherish these memories.
                  </p>

                

                  <div className="pt-8 border-t-2 border-gradient-to-r from-orange-400/50 to-pink-400/50">
                    <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-shift">
                      You're not just colleagues - you're LEGENDS! 🏆
                    </p>
                    <div className="mt-6 flex items-center justify-center space-x-4">
                      <div className="text-3xl md:text-4xl font-black text-orange-400 animate-bounce">Swastick</div>
                      <Heart className="w-8 h-8 text-red-400 animate-pulse" />
                      <Sparkles className="w-8 h-8 text-yellow-400 animate-spin-slow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div
            className={`text-center mt-16 transition-all duration-2000 delay-1000 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90"}`}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-400 hover:via-pink-400 hover:to-purple-400 text-white font-black text-2xl rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-2 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-4">
                <Rocket className="w-8 h-8 group-hover:animate-spin" />
                <span>BACK TO THE TOP!</span>
                <Star className="w-8 h-8 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
