import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FlaskConical, Leaf, Shield, Users } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const stats = [
  { icon: FlaskConical, value: "50+", label: "Partner farms" },
  { icon: Leaf, value: "100%", label: "Quality assured" },
  { icon: Shield, value: "25+", label: "Export countries" },
  { icon: Users, value: "500K+", label: "Tons delivered" },
]

const principles = [
  {
    number: "01",
    title: "Sourcing & Procurement",
    description:
      "We partner directly with trusted Indonesian farms and cooperatives to source premium agricultural commodities at their peak quality.",
    details: "Our sourcing team travels across Indonesia to establish direct relationships with farmers and cooperatives. We prioritize sustainable farming practices and fair trade relationships, ensuring that our partners receive fair compensation while maintaining the highest quality standards.",
  },
  {
    number: "02",
    title: "Quality Assurance",
    description: "Each shipment undergoes rigorous inspection and testing to ensure it meets international standards for purity, grading, and safety.",
    details: "Our quality control process includes multiple inspection points, laboratory testing for contaminants, grading according to international standards, and certification documentation. We work with accredited laboratories to ensure compliance with import regulations in destination countries.",
  },
  {
    number: "03",
    title: "Processing & Packaging",
    description: "State-of-the-art processing facilities ensure products meet specific buyer requirements for grade, size, and packaging.",
    details: "We operate modern processing facilities equipped with advanced sorting, cleaning, and packaging technology. Our flexible packaging solutions cater to diverse market requirements, from bulk shipments for industrial buyers to retail-ready packaging for consumer markets.",
  },
  {
    number: "04",
    title: "Global Distribution",
    description: "Our efficient supply chain and logistics network ensure timely delivery of agricultural commodities to buyers worldwide.",
    details: "With strategic partnerships across shipping lines, freight forwarders, and customs brokers, we manage the entire logistics chain from Indonesian ports to destinations across Asia, Europe, Middle East, and beyond. Our track record includes 98% on-time delivery performance.",
  },
  {
    number: "05",
    title: "Documentation & Compliance",
    description: "Complete documentation and regulatory compliance for smooth international trade operations.",
    details: "We handle all necessary export documentation, phytosanitary certificates, certificates of origin, and compliance with international trade regulations. Our experienced team ensures seamless customs clearance and adherence to import requirements in destination markets.",
  },
  {
    number: "06",
    title: "After-Sales Support",
    description: "Dedicated customer support to address any concerns and maintain long-term partnerships.",
    details: "Our relationship with clients extends beyond delivery. We provide ongoing support, quality feedback loops, and responsive communication to ensure complete satisfaction. Many of our clients have been with us for over a decade, a testament to our commitment to service excellence.",
  },
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 font-medium mb-4">
              Our Trading Process
            </p>
            <ScrollBlurText
              text="From farm to global market"
              className="font-serif text-3xl text-primary-foreground text-balance mb-6 md:text-7xl font-light"
            />
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We uphold the highest standards in agricultural commodity trading, ensuring quality and reliability at every stage of the supply chain.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="font-serif text-4xl md:text-5xl font-medium text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {principles.map((principle) => (
              <div key={principle.number} className="border-t border-primary-foreground/20 pt-8">
                <span className="text-sm font-medium text-primary-foreground/50 mb-4 block">{principle.number}</span>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-primary-foreground mb-4">
                  {principle.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed mb-4">{principle.description}</p>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{principle.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
