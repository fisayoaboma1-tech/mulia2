"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { ProductModal } from "@/components/product-modal"

const products = [
  {
    slug: "premium-rice",
    name: "Premium Rice",
    description: "High-quality aromatic and non-aromatic rice varieties including Basmati, Jasmine, and IR64, sourced from fertile Indonesian paddies.",
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/f_auto,q_auto/v1784298229/premium_grains_cv4wqy.jpg",
    tag: "Grains",
  },
  {
    slug: "yellow-corn",
    name: "Yellow Corn",
    description: "Premium yellow corn suitable for animal feed and industrial processing, meeting international quality standards.",
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/f_auto,q_auto/v1784298228/yellowcorrn_mdgjmk.jpg",
    tag: "Grains",
  },
  {
    slug: "wheat",
    name: "Wheat",
    description: "High-protein wheat varieties sourced from optimal growing regions, ideal for bread-making and pasta production.",
    image: "https://res.cloudinary.com/qz5m8bhg/video/upload/f_auto,q_auto/v1784298231/wheat_c2dqfz.mp4",
    tag: "Grains",
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    description: "Premium Indonesian black pepper with bold flavor profile, carefully harvested and processed for global spice markets.",
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/f_auto,q_auto/v1784298226/blackpepper_wj7rbq.jpg",
    tag: "Spices",
  },
  {
    slug: "nutmeg",
    name: "Nutmeg",
    description: "Aromatic nutmeg from the Spice Islands, available in whole, ground, and essential oil forms for culinary and pharmaceutical use.",
    image: "https://res.cloudinary.com/qz5m8bhg/video/upload/f_auto,q_auto/v1784298227/nutmeg_rth2iy.mp4",
    tag: "Spices",
  },
  {
    slug: "cinnamon",
    name: "Cinnamon",
    description: "High-quality Ceylon cinnamon sticks and powder, known for superior aroma and flavor in international markets.",
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/f_auto,q_auto/v1784298228/cinamon_mpwsoi.jpg",
    tag: "Spices",
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
                {/* Image / Video */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted z-10">
                  {product.image.endsWith(".mp4") ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    >
                      <source src={product.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
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
          details: selectedProduct.slug === "premium-rice"
            ? "Our premium rice selection includes some of the finest varieties grown in Indonesia's fertile paddies. From the aromatic Basmati to the fragrant Jasmine rice and the versatile IR64, we ensure each grain meets international quality standards. Our rice is carefully harvested, processed, and packaged to preserve its natural aroma, texture, and nutritional value."
            : selectedProduct.slug === "yellow-corn"
            ? "Our yellow corn is sourced from trusted farms across Indonesia, ensuring consistent quality and nutritional value. Perfect for animal feed, industrial processing, and food manufacturing, our corn meets stringent international standards for moisture content, purity, and grading."
            : selectedProduct.slug === "wheat"
            ? "Our wheat selection focuses on high-protein varieties perfect for bread-making, pasta production, and other food processing applications. Sourced from optimal growing regions, our wheat delivers excellent gluten content and consistent quality."
            : selectedProduct.slug === "black-pepper"
            ? "Indonesia is world-renowned for its black pepper, and we offer only the finest grades. Our black pepper is carefully harvested, sun-dried, and processed to preserve its bold flavor and aromatic qualities. Available in various mesh sizes to meet diverse culinary and industrial needs."
            : selectedProduct.slug === "nutmeg"
            ? "Sourced from the historic Spice Islands of Indonesia, our nutmeg offers exceptional aroma and flavor. Available in whole nuts, ground powder, and essential oil forms, it serves both culinary and pharmaceutical applications worldwide."
            : selectedProduct.slug === "cinnamon"
            ? "Our Ceylon cinnamon, also known as 'true cinnamon,' is sourced from Indonesian farms and processed to preserve its delicate flavor and aromatic properties. Available as whole sticks or fine powder, it's prized by chefs and food manufacturers worldwide."
            : `${selectedProduct.name} are premium agricultural commodities sourced directly from trusted Indonesian farms, processed and quality-checked to meet the highest international standards for global trade.`,
          specifications: selectedProduct.slug === "premium-rice"
            ? {
                origin: "Indonesia",
                varieties: "Basmati, Jasmine, IR64",
                packaging: "25kg, 50kg, bulk",
                "shelf Life": "12-24 months",
                certification: "ISO 22000, HACCP",
              }
            : selectedProduct.slug === "yellow-corn"
            ? {
                origin: "Indonesia",
                grade: "Grade A, Feed Grade",
                packaging: "Bulk, 50kg bags",
                "shelf Life": "12 months",
                certification: "ISO 22000, HACCP",
              }
            : selectedProduct.slug === "wheat"
            ? {
                origin: "Indonesia",
                protein: "11-13%",
                packaging: "Bulk, 50kg bags",
                "shelf Life": "12 months",
                certification: "ISO 22000, HACCP",
              }
            : selectedProduct.slug === "black-pepper"
            ? {
                origin: "Indonesia (Lampung, Bangka)",
                grade: "550g/l, 600g/l",
                packaging: "25kg bags, bulk",
                "shelf Life": "24 months",
                certification: "ISO 22000, HACCP, Organic",
              }
            : selectedProduct.slug === "nutmeg"
            ? {
                origin: "Indonesia (Maluku)",
                forms: "Whole, Ground, Essential Oil",
                packaging: "25kg bags, bulk",
                "shelf Life": "24 months",
                certification: "ISO 22000, HACCP",
              }
            : selectedProduct.slug === "cinnamon"
            ? {
                origin: "Indonesia",
                forms: "Sticks, Powder",
                packaging: "25kg bags, bulk",
                "shelf Life": "24 months",
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