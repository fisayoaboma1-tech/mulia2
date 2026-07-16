"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const products = [
  {
    name: "Premium Grains",
    description: "High-quality rice, corn, and wheat sourced directly from trusted Indonesian farms for domestic and international buyers.",
    image: "/images/product-equilibrium.png",
    tag: "Grains",
  },
  {
    name: "Spices & Herbs",
    description: "Premium-grade spices including pepper, nutmeg, cinnamon, and vanilla, processed and packaged for global export.",
    image: "/images/product-serenity.png",
    tag: "Spices",
  },
  {
    name: "Coffee & Cocoa",
    description: "Specialty coffee beans and premium cocoa sourced from sustainable plantations with strict quality control.",
    image: "/images/product-vitality.png",
    tag: "Beverage Crops",
  },
  {
    name: "Palm Oil",
    description: "Refined and crude palm oil sourced from sustainable plantations, meeting international food industry standards.",
    image: "/images/product-equilibrium.png",
    tag: "Oils",
  },
  {
    name: "Rubber",
    description: "Natural rubber products including SIR20 and SIR3CV grades, processed to meet global manufacturing specifications.",
    image: "/images/product-serenity.png",
    tag: "Industrial",
  },
  {
    name: "Cashew Nuts",
    description: "Premium cashew nuts sourced from Indonesian plantations, available in various grades for food processing and retail.",
    image: "/images/product-vitality.png",
    tag: "Nuts",
  },
]

export function ProductSection() {
  const sectionRef = useRef<HTMLElement>(null)

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

  return (
    <section ref={sectionRef} id="produits" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="reveal opacity-0 text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
            Our Products
          </p>
          <ScrollBlurText
            text="Premium agricultural commodities"
            className="font-serif text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
          />
          <p className="reveal opacity-0 animation-delay-400 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Each product is carefully sourced, processed, and quality-checked to meet the highest international standards for global trade.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible -mx-6 px-6 lg:mx-0">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`reveal opacity-0 ${index === 1 ? "animation-delay-200" : index === 2 ? "animation-delay-400" : ""} group min-w-[65vw] md:min-w-[70vw] lg:min-w-0 snap-center`}
            >
              <div className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted z-10">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* End of Progressive blur effect from bottom */}
                  <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full z-10">
                    {product.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-serif text-foreground mb-3 text-3xl font-normal">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto group/btn"
                  >
                    Discover
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="reveal opacity-0 animation-delay-600 text-center mt-12 lg:mt-16">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base group"
          >
            <Link href="/products">
              See all products
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}