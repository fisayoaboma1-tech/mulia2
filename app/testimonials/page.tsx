import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const testimonials = [
  {
    quote: "PT Kanematsu Trading has been our most reliable grain supplier for over three years. Their quality control and on-time delivery are unmatched.",
    author: "Mr. Hiroshi T.",
    role: "Procurement Manager, Japan",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "The consistency and quality of their spice exports have helped us grow our business significantly. A trusted partner in every sense.",
    author: "Mrs. Sarah W.",
    role: "Import Director, UK",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote: "As a food manufacturer, I rely on PT Kanematsu Trading for premium agricultural raw materials. Their rigorous quality assurance gives us complete confidence.",
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

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              Testimonials
            </p>
            <ScrollBlurText
              text="Trusted by global partners"
              className="font-serif text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hear from our partners around the world who trust us with their agricultural commodity needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
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
      </section>
      <Footer />
    </main>
  )
}
