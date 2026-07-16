"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollBlurText } from "./scroll-blur-text"

const testimonials = [
  {
    quote:
      "PT Kanematsu Trading has been our most reliable grain supplier for over three years. Their quality control and on-time delivery are unmatched.",
    author: "Mr. Hiroshi T.",
    role: "Procurement Manager, Japan",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The consistency and quality of their spice exports have helped us grow our business significantly. A trusted partner in every sense.",
    author: "Mrs. Sarah W.",
    role: "Import Director, UK",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As a food manufacturer, I rely on PT Kanematsu Trading for premium agricultural raw materials. Their rigorous quality assurance gives us complete confidence.",
    author: "Mr. Andreas K.",
    role: "Production Manager, Germany",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Their supply chain management is exceptional. From farm to port, every step is handled with professionalism and transparency.",
    author: "Ms. Li M.",
    role: "Commodity Trader, Singapore",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "We've partnered with PT Kanematsu Trading for our coffee bean imports. Their sourcing expertise and product quality consistently exceed expectations.",
    author: "Mr. James R.",
    role: "Coffee Roaster, USA",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Outstanding service and product quality. PT Kanematsu Trading has become an integral part of our supply chain strategy.",
    author: "Ms. Anna K.",
    role: "Supply Chain Director, Netherlands",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "The team's deep knowledge of Indonesian agricultural products and their commitment to quality is truly impressive.",
    author: "Mr. David L.",
    role: "Import Manager, Australia",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "Reliable, professional, and always delivering on promises. PT Kanematsu Trading is our go-to partner for agricultural commodities.",
    author: "Mrs. Emily C.",
    role: "Purchasing Head, Canada",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

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
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled past half (since we duplicate content)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section ref={sectionRef} id="temoignages" className="py-24 bg-background overflow-hidden lg:py-32 lg:pb-0">
      {/* Section Header */}
      <div className="w-full">
        <div className="text-center mb-16 lg:mb-20 px-6">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
            Testimonials
          </p>
          <ScrollBlurText
            text="Trusted by global partners"
            className="font-serif text-3xl md:text-4xl text-foreground text-balance lg:text-7xl font-light"
          />
        </div>

        <div className="reveal opacity-0 animation-delay-400">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-card rounded-2xl p-6 border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 my-6 py-10"
              >
                <blockquote className="font-serif text-base md:text-lg text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-sm text-foreground">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center mt-12 lg:mt-16">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base group"
          >
            <Link href="/testimonials">
              See all testimonials
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}