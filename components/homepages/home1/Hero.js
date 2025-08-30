"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showButtons, setShowButtons] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setIsLoaded(true), 500)
    const timer2 = setTimeout(() => setShowButtons(true), 1000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900" style={{ marginTop: '96px' }}>
      {/* Background layers */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Architectural background image */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-out"
          style={{
            backgroundImage: "url('/assets/img/images.jpg')",
            transform: isLoaded ? "scale(1)" : "scale(1.1)",
          }}
        />
        
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
        
        {/* Animated lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-400 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Left sidebar social media */}
      <div
        className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 transition-all duration-1000 delay-1500 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="text-white text-sm font-medium -rotate-90 whitespace-nowrap mb-8">Follow Us</div>
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full"></div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center space-y-12">
          <div
            className={`w-16 h-16 flex items-center justify-center transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-180"}`}
          >
            <div
              className="w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse"
              style={{ borderBottomWidth: "28px" }}
            ></div>
          </div>

          <div className="overflow-hidden">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-wider">
              {"NEW WAY OF LIVING".split("").map((char, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-700 ease-out ${
                    isLoaded ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-8 blur-sm"
                  }`}
                  style={{
                    transitionDelay: `${index * 50 + 800}ms`,
                    textShadow: "0 0 30px rgba(255,255,255,0.3)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 items-center transition-all duration-1000 ${showButtons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              size="lg"
              className="bg-red-500 text-white px-12 py-4 text-lg font-semibold uppercase tracking-wider transition-all duration-700 hover:scale-105 relative overflow-hidden group border-0 hover:shadow-[0_0_40px_rgba(239,68,68,0.6)] h-auto min-h-[60px]"
            >
              <span className="relative z-10 transition-all duration-500 ease-out group-hover:text-white">
                DISCOVER MORE
              </span>
              <div className="absolute inset-0 bg-gradient-to-b from-red-600 via-red-500 to-red-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent transform -translate-y-full group-hover:translate-y-full transition-transform duration-900 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-150"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out delay-200"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white px-12 py-4 text-lg font-semibold uppercase tracking-wider transition-all duration-700 hover:scale-105 bg-transparent relative overflow-hidden group hover:border-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] h-auto min-h-[60px]"
            >
              <span className="relative z-10 transition-all duration-500 ease-out group-hover:text-black">
                GET STARTED NOW
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-900 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] delay-150"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out delay-200"></div>
            </Button>
          </div>
        </div>
      </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}
