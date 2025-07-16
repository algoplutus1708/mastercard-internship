"use client"

import { useState, useEffect } from "react"
import { Rocket, Menu, X, Home, Users, Mail, Heart } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl border-b-2 border-gradient-to-r from-orange-400/50 via-pink-400/50 to-purple-400/50 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-500/50">
                <Rocket className="w-8 h-8 text-white animate-bounce" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-pink-300 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300 animate-gradient-shift">
                Swastick
              </h2>
              <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300 font-bold">
                Epic Journey
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#hero"
              className="group flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 font-bold"
            >
              <Home className="w-5 h-5 group-hover:animate-bounce" />
              <span>HOME</span>
            </a>
            <a
              href="#thank-you-section"
              className="group flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 font-bold"
            >
              <Heart className="w-5 h-5 group-hover:animate-pulse" />
              <span>THANK YOU</span>
            </a>
            <a
              href="#team-section"
              className="group flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 font-bold"
            >
              <Users className="w-5 h-5 group-hover:animate-bounce" />
              <span>THE SQUAD</span>
            </a>
            <a
              href="#footer"
              className="group flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-bold"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              <span>CONTACT</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors duration-300 p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8 animate-spin" />
            ) : (
              <Menu className="w-8 h-8 hover:animate-bounce" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t-2 border-gradient-to-r from-orange-400/50 to-pink-400/50 backdrop-blur-xl">
            <div className="flex flex-col space-y-4">
              <a
                href="#hero"
                className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-300 font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>HOME</span>
              </a>
              <a
                href="#thank-you-section"
                className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-300 font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart className="w-5 h-5" />
                <span>THANK YOU</span>
              </a>
              <a
                href="#team-section"
                className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300 font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="w-5 h-5" />
                <span>THE SQUAD</span>
              </a>
              <a
                href="#footer"
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail className="w-5 h-5" />
                <span>CONTACT</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
