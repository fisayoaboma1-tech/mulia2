import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-24 lg:py-32">
        <div className="relative max-w-7xl mx-auto rounded-[48px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src="/images/mission-background.png" alt="Nature background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/50" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background/0 to-transparent backdrop-blur-[2px]" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background/0 to-transparent backdrop-blur-[8px] opacity-60" />
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background/0 to-transparent backdrop-blur-[20px] opacity-30" />
          </div>

          {/* Content with padding */}
          <div className="relative px-6 lg:px-8 py-16 lg:py-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1"></div>

              <div className="order-1 lg:order-2">
                <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                  About Us
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-background text-balance mb-8">
                  Connecting producers with global markets
                </h2>
                <div className="space-y-6 text-background/90 leading-relaxed">
                  <p>
                    At PT Kanematsu Trading, we believe that reliable supply chains begin with trusted partnerships. Our mission is to bridge Indonesian agricultural producers with international buyers through rigorous quality assurance, efficient logistics, and transparent trade practices.
                  </p>
                  <p>
                    We are committed to sourcing, processing, packaging, and distributing premium agricultural commodities that meet the highest global standards. Every shipment reflects our dedication to quality, consistency, and timely delivery for manufacturers, wholesalers, and bulk commodity traders worldwide.
                  </p>
                  <p>
                    With over two decades of experience in agricultural commodity trading, we have built an extensive network of partner farms, processing facilities, and logistics partners across Indonesia. Our team of experts ensures that every product meets stringent quality controls before reaching our clients.
                  </p>
                  <p>
                    We pride ourselves on our sustainable sourcing practices, supporting local farming communities while delivering exceptional value to our international partners. Our commitment to excellence has made us a trusted name in agricultural trading across Asia, Europe, and beyond.
                  </p>
                </div>
                <div className="mt-10">
                  <Button
                    size="lg"
                    className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 group"
                  >
                    Contact us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional About Content */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              Our Values
            </p>
            <ScrollBlurText
              text="What drives us forward"
              className="font-serif text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg shadow-primary/5">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">Quality First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product undergoes rigorous quality control at every stage, from farm selection to final delivery, ensuring only the best reaches our clients.
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg shadow-primary/5">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">Sustainable Sourcing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work directly with Indonesian farmers and cooperatives, promoting sustainable agricultural practices that benefit both communities and the environment.
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg shadow-primary/5">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">Global Reach</h3>
              <p className="text-muted-foreground leading-relaxed">
                With distribution networks spanning 25+ countries, we deliver premium agricultural commodities to markets worldwide with efficiency and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
