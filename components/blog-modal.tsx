"use client"

import { useState, useEffect, useCallback } from "react"
import { X, Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
}

const blogPosts = [
  {
    title: "Indonesia's Position in Global Agricultural Trade: A 2026 Outlook",
    excerpt: "Explore how Indonesia continues to strengthen its role as a key player in the global agricultural commodity market, with insights on emerging trends and opportunities for international buyers.",
    date: "March 15, 2026",
    author: "PT Kanematsu Trading Indonesia",
    category: "Market Insights",
    image: "/images/product-equilibrium.png",
    slug: "indonesia-agricultural-trade-2026",
  },
  {
    title: "Sustainable Sourcing: How We Partner with Indonesian Farmers",
    excerpt: "Learn about our commitment to sustainable agricultural practices and how we work directly with local farmers to ensure premium quality while supporting rural communities.",
    date: "February 28, 2026",
    author: "PT Kanematsu Trading Indonesia",
    category: "Sustainability",
    image: "/images/product-serenity.png",
    slug: "sustainable-sourcing-partnerships",
  },
  {
    title: "Quality Control in Agricultural Commodity Trading",
    excerpt: "A comprehensive look at our multi-stage quality assurance process, from farm-level inspection to final laboratory testing before global shipment.",
    date: "February 10, 2026",
    author: "PT Kanematsu Trading Indonesia",
    category: "Quality",
    image: "/images/product-vitality.png",
    slug: "quality-control-commodity-trading",
  },
  {
    title: "The Spice Islands: Indonesia's Heritage in Global Cuisine",
    excerpt: "Discover the rich history and modern significance of Indonesia's spice trade, from nutmeg and cloves to pepper and vanilla.",
    date: "January 25, 2026",
    author: "PT Kanematsu Trading Indonesia",
    category: "Products",
    image: "/images/product-equilibrium.png",
    slug: "spice-islands-heritage",
  },
]

export function BlogModal({ isOpen, onClose }: BlogModalProps) {
  const [isAnimatingIn, setIsAnimatingIn] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setIsAnimatingIn(true)
      })
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setIsAnimatingIn(false)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 500)
  }, [onClose])

  if (!isOpen) return null

  const showContent = isAnimatingIn && !isClosing

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-out ${
        isClosing ? "pointer-events-none" : ""
      }`}
    >
      {/* Backdrop with blur */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ease-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-background rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden transition-all duration-500 ease-out ${
          showContent
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-[0.96] translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-all duration-300 hover:scale-110"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] p-8 md:p-12 lg:p-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Our Blog
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 lg:mb-12 max-w-2xl">
            Insights, stories, and updates from PT Kanematsu Trading Indonesia on agricultural commodities, market trends, and sustainable practices.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.slug}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-medium px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 lg:p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-medium text-foreground mb-2 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium group/btn">
                    Coming soon
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}