import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollBlurText } from "@/components/scroll-blur-text"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-15">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-foreground/70 font-medium mb-4">
              About Us
            </p>
            <ScrollBlurText
              text="Connecting producers with global markets"
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-foreground text-balance mb-6 lg:text-7xl font-light"
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-primary-foreground/90 leading-relaxed">
            <p className="text-sm sm:text-base md:text-lg">
              At PT Kanematsu Trading, we believe that reliable supply chains begin with trusted partnerships. Our mission is to bridge Indonesian agricultural producers with international buyers through rigorous quality assurance, efficient logistics, and transparent trade practices.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              We are committed to sourcing, processing, packaging, and distributing premium agricultural commodities that meet the highest global standards. Every shipment reflects our dedication to quality, consistency, and timely delivery for manufacturers, wholesalers, and bulk commodity traders worldwide.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              With over two decades of experience in agricultural commodity trading, we have built an extensive network of partner farms, processing facilities, and logistics partners across Indonesia. Our team of experts ensures that every product meets stringent quality controls before reaching our clients.
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              We pride ourselves on our sustainable sourcing practices, supporting local farming communities while delivering exceptional value to our international partners. Our commitment to excellence has made us a trusted name in agricultural trading across Asia, Europe, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3 sm:mb-4">
                Our Journey
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6 sm:mb-8">
                Our Story
              </h2>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-sm sm:text-base">
                  Founded in 2003, PT Kanematsu Trading began as a small trading firm with a vision to connect Indonesian agricultural producers with global markets. What started as a modest operation has grown into a leading agricultural commodity trading company, serving clients across 25+ countries.
                </p>
                <p className="text-sm sm:text-base">
                  Our journey has been defined by perseverance, integrity, and an unwavering commitment to quality. From our humble beginnings in Jakarta, we have expanded our operations to include multiple processing facilities, quality control laboratories, and strategic partnerships with over 50 farms across Indonesia.
                </p>
                <p className="text-sm sm:text-base">
                  Today, we handle over 500,000 tons of agricultural commodities annually, ranging from grains and spices to coffee, cocoa, and tropical fruits. Our success is built on the trust of our partners and the satisfaction of our clients, who rely on us for consistent quality and reliable delivery.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <img
                src="/images/mission-background.png"
                alt="Our story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 lg:order-1">
              <img
                src="/images/product-equilibrium.png"
                alt="Our mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-2">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3 sm:mb-4">
                What Drives Us
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6 sm:mb-8">
                Our Mission
              </h2>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-sm sm:text-base">
                  To empower Indonesian agricultural producers by providing them with access to international markets while delivering exceptional value to our global clients. We strive to be the most trusted partner in agricultural commodity trading, known for our quality, reliability, and ethical business practices.
                </p>
                <p className="text-sm sm:text-base">
                  We are committed to sustainable development, ensuring that our operations benefit local communities, protect the environment, and contribute to the long-term growth of Indonesia's agricultural sector. Our mission extends beyond business—we aim to make a positive impact on the lives of farmers and the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We're Going Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-3 sm:mb-4">
                Future Vision
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6 sm:mb-8">
                Where We're Going
              </h2>
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-sm sm:text-base">
                  As we look to the future, PT Kanematsu Trading is focused on expanding our global footprint while deepening our roots in Indonesia. We are investing in technology, infrastructure, and talent to enhance our capabilities and better serve our clients.
                </p>
                <p className="text-sm sm:text-base">
                  Our vision includes becoming the leading agricultural commodity trading platform in Southeast Asia, leveraging digital solutions to streamline supply chains, improve transparency, and create greater value for all stakeholders. We are exploring new markets, diversifying our product portfolio, and building strategic partnerships to drive growth.
                </p>
                <p className="text-sm sm:text-base">
                  Sustainability remains at the core of our strategy. We are committed to achieving carbon-neutral operations by 2030, implementing circular economy principles, and supporting climate-smart agriculture practices among our partner farms. Together with our clients and partners, we are shaping the future of agricultural trade—one that is profitable, sustainable, and beneficial for all.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <img
                src="/images/product-serenity.png"
                alt="Where we're going"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-foreground/70 font-medium mb-4">
              Our Values
            </p>
            <ScrollBlurText
              text="What drives us forward"
              className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary-foreground text-balance mb-6 lg:text-7xl font-light"
            />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-primary-foreground mb-3 sm:mb-4">Quality First</h3>
              <p className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed">
                Every product undergoes rigorous quality control at every stage, from farm selection to final delivery, ensuring only the best reaches our clients.
              </p>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-primary-foreground mb-3 sm:mb-4">Sustainable Sourcing</h3>
              <p className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed">
                We work directly with Indonesian farmers and cooperatives, promoting sustainable agricultural practices that benefit both communities and the environment.
              </p>
            </div>
            <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8 sm:col-span-2 md:col-span-1">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-primary-foreground mb-3 sm:mb-4">Global Reach</h3>
              <p className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed">
                With distribution networks spanning 25+ countries, we deliver premium agricultural commodities to markets worldwide with efficiency and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground text-balance mb-6 sm:mb-8">
            Ready to work with us?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-10">
            Let's discuss how we can help you source the finest agricultural commodities from Indonesia.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 sm:px-10 py-5 sm:py-7 text-sm sm:text-lg group"
          >
            <Link href="/contact">
              Get in touch
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}