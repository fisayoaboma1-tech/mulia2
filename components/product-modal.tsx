"use client"

import { useState, useEffect, useCallback } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Product {
  slug: string
  name: string
  description: string
  image: string
  tag: string
  details: string
  specifications: {
    [key: string]: string
  }
}

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [isAnimatingIn, setIsAnimatingIn] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure DOM is ready before starting animation
      requestAnimationFrame(() => {
        setIsAnimatingIn(true)
      })
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setIsAnimatingIn(false)
    setTimeout(() => {
      onClose()
      setIsClosing(false)
    }, 500)
  }, [onClose])

  if (!isOpen || !product) return null

  const showContent = isAnimatingIn && !isClosing

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ease-out ${
      isClosing ? 'pointer-events-none' : ''
    }`}>
      {/* Backdrop with blur */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 ease-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div
        className={`relative bg-background rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transition-all duration-500 ease-out ${
          showContent
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-[0.96] translate-y-4'
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
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Product Hero */}
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Image / Video */}
            <div className="relative aspect-[4/5] bg-card rounded-2xl overflow-hidden">
              {product.image.endsWith(".mp4") ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={product.image} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              )}
              <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                {product.tag}
              </span>
            </div>

            {/* Details */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
                {product.tag}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-balance mb-4">
                {product.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.details}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 group"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="rounded-full px-8 border-border/50 hover:bg-background/10"
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="px-8 pb-8">
            <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
              Product Specifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="bg-card rounded-xl p-5 border border-border/50">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                  <p className="text-base font-medium text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}