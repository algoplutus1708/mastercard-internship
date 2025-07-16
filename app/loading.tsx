export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-orange-400/30 border-t-orange-400 rounded-full animate-spin mx-auto"></div>
          <div
            className="absolute inset-0 w-24 h-24 border-4 border-pink-400/20 border-b-pink-400 rounded-full animate-spin mx-auto"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
          <div
            className="absolute inset-0 w-24 h-24 border-4 border-purple-400/10 border-l-purple-400 rounded-full animate-spin mx-auto"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
        <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 mb-2 animate-gradient-shift">
          Loading EPIC Content...
        </h2>
        <p className="text-gray-400 font-bold">Preparing something absolutely AMAZING! 🚀✨</p>
      </div>
    </div>
  )
}
