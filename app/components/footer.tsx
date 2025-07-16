"use client"

import { Linkedin, Github, Mail, ArrowUp, Heart, Rocket, Star, Sparkles } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      id="footer"
      className="relative bg-black/40 backdrop-blur-xl border-t-2 border-gradient-to-r from-orange-400/50 via-pink-400/50 to-purple-400/50 mt-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-pink-900/10 to-purple-900/10" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full text-white hover:from-orange-400 hover:via-pink-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-2xl mb-12 group shadow-lg shadow-pink-500/50"
          >
            <ArrowUp className="w-8 h-8 group-hover:animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
          </button>

          <div className="flex items-center justify-center mb-12 space-x-4">
            <Rocket className="w-8 h-8 text-orange-400 animate-bounce" />
            <p className="text-2xl text-gray-200 font-black">Made with EPIC gratitude and TONS of love! 🚀✨</p>
            <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>

          <div className="flex items-center justify-center space-x-8 mb-12">
            <a href="#" className="group relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12 shadow-lg shadow-blue-500/50">
                <Linkedin className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </a>
            <a href="#" className="group relative">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12 shadow-lg shadow-gray-500/50">
                <Github className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </a>
            <a href="#" className="group relative">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300 transform group-hover:scale-125 group-hover:rotate-12 shadow-lg shadow-pink-500/50">
                <Mail className="w-8 h-8 text-white group-hover:animate-bounce" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            </a>
          </div>

          <div className="border-t-2 border-gradient-to-r from-orange-400/50 via-pink-400/50 to-purple-400/50 pt-8">
            <div className="flex items-center justify-center mb-4 space-x-2">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-spin-slow" />
              <p className="text-gray-400 font-bold">© 2024 Swastick • Payment Resiliency Team LEGEND!</p>
              <Star className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
            <p className="text-lg text-gray-500 font-bold">
              Thank you for making this the most INCREDIBLE chapter of my life! 🌟🚀
            </p>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-6 h-6 bg-orange-400 rounded-full animate-ping opacity-30" />
      <div className="absolute top-20 right-20 w-4 h-4 bg-pink-400 rounded-full animate-ping delay-1000 opacity-30" />
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-purple-400 rounded-full animate-ping delay-2000 opacity-30" />
      <div className="absolute bottom-10 right-10 w-5 h-5 bg-blue-400 rounded-full animate-ping delay-3000 opacity-30" />
    </footer>
  )
}
