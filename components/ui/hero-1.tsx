"use client"

import { ChevronRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    
    // Trigger animations on load
    const timer = setTimeout(() => setIsLoaded(true), 300)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-24 sm:pt-32 pb-16 sm:pb-20 px-6 text-center md:px-8 
      h-[70vh] sm:h-[75vh] md:h-[80vh] overflow-hidden z-0
      bg-[linear-gradient(135deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.5)_25%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.7)_75%,rgba(30,34,71,0.8)_100%),url('/assets/img/banner/metro-2.jpg')]
      dark:bg-[linear-gradient(135deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.7)_60%,rgba(30,34,71,0.9)_100%),url('/assets/img/banner/metro-2.jpg')] 
      bg-cover bg-center bg-no-repeat
      rounded-b-xl flex flex-col justify-center items-center"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-20 h-[600px] w-full 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:6rem_5rem] 
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent */}
      <div
        className="absolute left-0 bottom-0 
        h-[180px] w-full 
        rounded-[100%] 
        z-5 opacity-90"
        style={{ 
          transform: 'translateY(50%)',
          background: 'radial-gradient(ellipse at bottom, #fdc51a 0%, rgba(253, 197, 26, 0.9) 10%, rgba(253, 197, 26, 0.8) 20%, rgba(253, 197, 26, 0.6) 30%, rgba(253, 197, 26, 0.4) 40%, rgba(253, 197, 26, 0.2) 50%, #2a2a2a 60%, #1a1a1a 70%, #111111 80%, #000000 90%, transparent 100%)'
        }}
      />

      {/* Content Container */}
      <div className="flex flex-col items-center space-y-6 max-w-4xl mx-auto relative z-10">
        {/* Eyebrow */}
        {eyebrow && (
          <a href="#" className={`group transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
          }`}>
            <span
              className="text-sm text-white font-geist mx-auto px-5 py-2 
              bg-gradient-to-tr from-white/20 via-white/10 to-transparent  
              border-[2px] border-white/30 dark:border-white/25 
              rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center"
            >
              {eyebrow}
              <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        )}

        {/* Title */}
        <h1
          className={`text-balance text-white pt-8 pb-8 text-5xl font-semibold leading-none tracking-tighter 
          sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-1500 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)', marginTop: '20px' }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className={`text-balance text-lg tracking-tight text-white md:text-xl
          transition-all duration-1300 ease-out delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)', marginTop: '8px' }}
        >
          {subtitle}
        </p>

        {/* CTA */}
        {ctaLabel && (
          <div className={`flex justify-center transition-all duration-1200 ease-out delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ marginTop: '1rem' }}>
            <Button
              asChild
              className="w-fit md:w-52 font-geist tracking-tighter text-center text-lg
              bg-[#fdc51a] text-black border-2 border-[#fdc51a] 
              hover:bg-transparent hover:border-yellow-400 hover:!text-white
              transition-all duration-300 ease-in-out transform
              hover:shadow-lg"
              style={{ 
                height: '56px',
                paddingTop: '16px',
                paddingBottom: '16px'
              }}
            >
              <a href={ctaHref} className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {ctaLabel}
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Fade */}
      <div
        className="animate-fade-up relative mt-16 opacity-0 [perspective:2000px] 
        after:absolute after:inset-0 after:z-0 
        after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
      />
    </section>
  )
}

