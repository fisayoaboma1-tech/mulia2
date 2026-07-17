"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import dynamic from "next/dynamic"

const LegalModal = dynamic(() => import("@/components/legal-modal").then((mod) => mod.LegalModal), { ssr: false }) as React.ComponentType<{
  type: "legal-notice" | "privacy-policy" | "terms-of-sale" | null
  isOpen: boolean
  onClose: () => void
}>
const BlogModal = dynamic(() => import("@/components/blog-modal").then((mod) => mod.BlogModal), { ssr: false }) as React.ComponentType<{
  isOpen: boolean
  onClose: () => void
}>

export function Footer() {
  const [legalModalType, setLegalModalType] = useState<"legal-notice" | "privacy-policy" | "terms-of-sale" | null>(null)
  const [blogOpen, setBlogOpen] = useState(false)

  return (
    <>
    <footer className="bg-gradient-to-br from-foreground via-foreground/95 to-primary text-primary-foreground py-16 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-serif text-sm font-medium">K</span>
              </div>
              <span className="font-serif text-xl font-medium text-primary-foreground">PT Kanematsu Trading Indonesia</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm text-sm sm:text-base">
              Agricultural trading and supply company connecting Indonesian producers with global markets through reliable sourcing, strict quality control, and efficient logistics.
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@kanematsu-trading.com" className="hover:text-primary-foreground transition-colors">info@kanematsu-trading.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 shrink-0" />
                <div className="flex flex-col gap-2">
                  <a href="tel:+62318521230" className="hover:text-primary-foreground transition-colors">+62-031 8521230</a>
                  <a href="tel:+6281686892024" className="hover:text-primary-foreground transition-colors">+62 816-868-92024</a>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span>Atria Sudirman Building, 15th Floor</span>
                  <span>Jl. Jend. Sudirman Kav. 33A, Central Jakarta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div className="md:justify-self-start lg:justify-self-auto">
            <h4 className="font-medium text-primary-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Premium Grains
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Spices & Herbs
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Coffee & Cocoa
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  All products
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:justify-self-start lg:justify-self-auto">
            <h4 className="font-medium text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Our story
                </Link>
              </li>
              <li>
                <Link href="/#science" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:justify-self-start lg:justify-self-auto">
            <h4 className="font-medium text-primary-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setBlogOpen(true)}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  Blog
                </button>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col items-center text-center md:flex-row md:justify-between md:text-left gap-4">
          <p className="text-xs sm:text-sm text-primary-foreground/50 max-w-xs md:max-w-none">
            &copy; 2026 PT Kanematsu Trading Indonesia. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-primary-foreground/50">
            <button
              onClick={() => setLegalModalType("legal-notice")}
              className="hover:text-primary-foreground transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Legal notice
            </button>
            <button
              onClick={() => setLegalModalType("privacy-policy")}
              className="hover:text-primary-foreground transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Privacy policy
            </button>
            <button
              onClick={() => setLegalModalType("terms-of-sale")}
              className="hover:text-primary-foreground transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              Terms of sale
            </button>
          </div>
        </div>
      </div>
    </footer>

    <LegalModal
      type={legalModalType}
      isOpen={!!legalModalType}
      onClose={() => setLegalModalType(null)}
    />
    <BlogModal
      isOpen={blogOpen}
      onClose={() => setBlogOpen(false)}
    />
    </>
  )
}