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
    <main className="min-h-screen bg-background pt-15">
      <Header />
      <section className="py-16 sm:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-foreground/70 font-medium mb-4">
              Our Trading Process
            </p>
            <ScrollBlurText
              text="From farm to global market"
              className="font-serif text-2xl sm:text-3xl text-primary-foreground text-balance mb-6 md:text-7xl font-light"
            />
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              We uphold the highest standards in agricultural commodity trading, ensuring quality and reliability at every stage of the supply chain.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-primary-foreground mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {principles.map((principle) => (
              <div key={principle.number} className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
                <span className="text-xs sm:text-sm font-medium text-primary-foreground/50 mb-3 sm:mb-4 block">{principle.number}</span>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-primary-foreground mb-3 sm:mb-4">
                  {principle.title}
                </h3>
                <p className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed mb-3 sm:mb-4">{principle.description}</p>
                <p className="text-xs sm:text-sm text-primary-foreground/60 leading-relaxed">{principle.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              See It In Action
            </p>
            <ScrollBlurText
              text="Our operations in action"
              className="font-serif text-2xl sm:text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
            />
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Watch how we source, process, and deliver premium agricultural commodities from Indonesian farms to global markets.
            </p>
          </div>

          {/* Video with Overlay Text */}
          <div className="relative aspect-video bg-card rounded-3xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://res.cloudinary.com/qz5m8bhg/video/upload/v1784305007/processing_wperwg.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex flex-col justify-end p-6 sm:p-8 lg:p-12">
              <div className="max-w-3xl space-y-3 sm:space-y-4 text-background">
                <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  From Indonesian farms to global markets — we source, process, and deliver premium agricultural commodities with uncompromising quality.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-background/80 leading-relaxed">
                  Our state-of-the-art processing facilities ensure every shipment meets international standards for purity, grading, and safety.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-background/80 leading-relaxed">
                  With strategic partnerships across shipping lines and logistics networks, we manage the entire supply chain from farm to destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              Our Facilities
            </p>
            <ScrollBlurText
              text="State-of-the-art infrastructure"
              className="font-serif text-2xl sm:text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
            />
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From modern processing facilities to efficient logistics networks, we invest in infrastructure to ensure quality at every step.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="relative aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <img
                src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1784306136/1_5_fjb6aw.jpg"
                alt="Processing facility"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <img
                src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1784306136/1_1_ssnsrd.jpg"
                alt="Quality control lab"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <img
                src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1784306136/1_4_wpvaub.jpg"
                alt="Warehouse and logistics"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <img
                src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1784306136/1_2_bqizj4.jpg"
                alt="Farm partnerships"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <img
                src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1784306136/1_3_g5ehw4.jpg"
                alt="Shipping and export"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative aspect-[4/3] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <img
                src="https://res.cloudinary.com/qz5m8bhg/image/upload/v1784306135/1_1_pbjyvo.webp"
                alt="Sustainable farming"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}