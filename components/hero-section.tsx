"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Play video immediately when the video element is mounted, no useEffect delay
  const handleVideoRef = useCallback((video: HTMLVideoElement | null) => {
    if (video) {
      videoRef.current = video
      // Attempt immediate play - no async wrapper to avoid microtask delay
      video.play().catch((err) => {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Video playback error:", err)
        }
      })
    }
  }, [])

  const handleVideoCanPlay = useCallback(() => {
    const video = videoRef.current
    if (video && video.paused) {
      video.play().catch((err) => {
        if (err instanceof Error && err.name !== "AbortError") {
          console.error("Video playback error:", err)
        }
      })
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrollY = window.scrollY
      const sectionHeight = sectionRef.current.offsetHeight

      const progress = Math.min(scrollY / (sectionHeight * 0.5), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const scale = 1 - scrollProgress * 0.05
  const borderRadius = scrollProgress * 24

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Full-width background video with zoom effect */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-100"
        style={{
          transform: `scale(${scale})`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        <video
          ref={handleVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={handleVideoCanPlay}
          poster="/images/hero-biometic.png"
          className="w-full h-full object-cover"
          disableRemotePlayback
        >
          <source src="https://res.cloudinary.com/qz5m8bhg/video/upload/f_auto,q_auto/v1784293662/From_Klickpin.com-_Nail_design_inspiration_that_are_worth_saving_if_you_love_elegant_details_and_creative_inspiration_for_people_who_want_stylish_h7g3t3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />
      </div>

      {/* Content overlay - text on the left */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32 w-full">
        <div className="max-w-md sm:max-w-xl lg:max-w-2xl">
          {/* Text content */}
          <p className="reveal opacity-0 mt-10 text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] text-background font-medium mb-3 sm:mb-4 md:mb-6">
            Agricultural Trading & Supply
          </p>
          <h1 className="font-serif mt-17 mb-2 font-medium leading-[1.15] text-background mb-4 sm:mb-6 md:mb-8">
            <span className="whitespace-nowrap">
              <AnimatedText text="Connecting trusted" delay={0.2} />
            </span>
            <br />
            <span className="text-accent">
              <AnimatedText text="agricultural producers" delay={0.6} />
            </span>
          </h1>
          <p className="reveal opacity-0 animation-delay-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-background/90 leading-relaxed mb-6 sm:mb-8 md:mb-10 mr-0 pr-0">
            Sourcing, processing, quality assurance, and global distribution of premium agricultural commodities for international markets including premium grains, oilseeds, pulses, high-grade cocoa, coffee, and cashew nuts, delivered directly from farm to port.
          </p>
          <div className="flex flex-col sm:flex-row mt-20 gap-3 sm:gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("produits")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 sm:px-8 md:px-10 py-4 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg group w-full sm:w-auto"
            >
              Explore our products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("science")}
              className="rounded-full px-5 sm:px-8 md:px-10 py-4 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg border-background/30 hover:bg-background/10 text-background bg-transparent backdrop-blur-sm w-full sm:w-auto"
            >
              Learn more
            </Button>
          </div>
        </div>
        {/* Floating card - bottom left */}
      </div>
    </section>
  )
}