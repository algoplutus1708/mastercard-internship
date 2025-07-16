import { TeamGrid } from "./components/team-grid"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { HeroSection } from "./components/hero-section"
import { ThankYouSection } from "./components/thank-you-section"
import { ParticleBackground } from "./components/particle-background"
import { FloatingShapes } from "./components/floating-shapes"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-x-hidden">
      <ParticleBackground />
      <FloatingShapes />

      {/* Dynamic gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-blue-500/10 animate-pulse" />

      <Header />
      <HeroSection />

      <main className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 mb-8 animate-gradient-shift">
              The Squad
            </h2>
            <div className="absolute -inset-8 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 blur-3xl rounded-full animate-pulse" />
          </div>
          <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
            A Special Message to all the members of my Team from my side.
          </p>
        </div>
        <TeamGrid />
      </main>

      <ThankYouSection />
      <Footer />
    </div>
  )
}
