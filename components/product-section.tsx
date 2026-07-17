"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { ProductModal } from "@/components/product-modal"

const products = [
  {
    slug: "premium-grains",
    name: "Premium Rice",
    description: "High-quality aromatic and non-aromatic rice varieties including Basmati, Jasmine, and IR64, sourced from fertile Indonesian paddies.",
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/v1784298229/premium_grains_cv4wqy.jpg",
    tag: "Grains",
  },
  {
    slug: "spices-herbs",
    name: "Spices & Herbs",
    description: "Premium-grade spices including pepper, nutmeg, cinnamon, and vanilla, processed and packaged for global export.",
    image: "/images/product-serenity.png",
    tag: "Spices",
  },
  {
    slug: "coffee-cocoa",
    name: "Coffee & Cocoa",
    description: "Specialty coffee beans and premium cocoa sourced from sustainable plantations with strict quality control.",
    image: "/images/product-vitality.png",
    tag: "Beverage Crops",
  },
  {
    slug: "palm-oil",
    name: "Palm Oil",
    description: "Refined and crude palm oil sourced from sustainable plantations, meeting international food industry standards.",
    image: "/images/product-equilibrium.png",
    tag: "Oils",
  },
  {
    slug: "rubber",
    name: "Rubber",
    description: "Natural rubber products including SIR20 and SIR3CV grades, processed to meet global manufacturing specifications.",
    image: "/images/product-serenity.png",
    tag: "Industrial",
  },
  {
    slug: "cashew-nuts",
    name: "Cashew Nuts",
    description: "Premium cashew nuts sourced from Indonesian plantations, available in various grades for food processing and retail.",
    image: "/images/product-vitality.png",
    tag: "Nuts",
  },
]

export function ProductSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

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
              <div
                className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted z-10">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* End of Progressive blur effect from bottom */}
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 bg-background/90 backdrop-blur-sm text-foreground text-[10px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-full z-10">
                    {product.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="p-3 sm:p-4 lg:p-8">
                  <h3 className="font-serif text-foreground mb-1 sm:mb-2 lg:mb-3 text-sm sm:text-base lg:text-3xl font-normal leading-tight">{product.name}</h3>
                  <p className="text-muted-foreground leading-snug mb-2 sm:mb-3 lg:mb-6 text-xs sm:text-sm lg:text-base line-clamp-2 sm:line-clamp-3 lg:line-clamp-none">{product.description}</p>
                  <span className="inline-flex items-center text-primary hover:text-primary/80 text-xs sm:text-sm font-medium group/btn">
                    Discover
                    <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
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

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct ? {
          ...selectedProduct,
          slug: selectedProduct.slug,
          details: selectedProduct.slug === "premium-grains"
            ? "Our premium rice selection includes some of the finest varieties grown in Indonesia's fertile paddies. From the aromatic Basmati to the fragrant Jasmine rice and the versatile IR64, we ensure each grain meets international quality standards. Our rice is carefully harvested, processed, and packaged to preserve its natural aroma, texture, and nutritional value."
            : `${selectedProduct.name} are premium agricultural commodities sourced directly from trusted Indonesian farms, processed and quality-checked to meet the highest international standards for global trade.`,
          specifications: selectedProduct.slug === "premium-grains"
            ? {
                origin: "Indonesia",
                varieties: "Basmati, Jasmine, IR64",
                packaging: "25kg, 50kg, bulk",
                "shelf Life": "12-24 months",
                certification: "ISO 22000, HACCP",
              }
            : {
                origin: "Indonesia",
                quality: "Premium Grade",
                packaging: "Customizable",
                certification: "ISO 22000, HACCP",
              },
        } : null}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}