import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const services = [
  {
    title: "Sourcing & Procurement",
    description: "We partner directly with trusted Indonesian farms and cooperatives to source premium agricultural commodities at their peak quality.",
    details: "Our sourcing team travels across Indonesia to establish direct relationships with farmers and cooperatives. We prioritize sustainable farming practices and fair trade relationships, ensuring that our partners receive fair compensation while maintaining the highest quality standards.",
    icon: "🌾",
    image: "https://res.cloudinary.com/qz5m8bhg/video/upload/f_auto,q_auto/v1784304909/sourcing_bducsa.mp4",
    video: true,
  },
  {
    title: "Quality Assurance",
    description: "Each shipment undergoes rigorous inspection and testing to ensure it meets international standards for purity, grading, and safety.",
    details: "Our quality control process includes multiple inspection points, laboratory testing for contaminants, grading according to international standards, and certification documentation. We work with accredited laboratories to ensure compliance with import regulations in destination countries.",
    icon: "✓",
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/f_auto,q_auto/v1784304895/qualityassurance_rwl8oh.jpg",
    video: false,
  },
  {
    title: "Processing & Packaging",
    description: "State-of-the-art processing facilities ensure products meet specific buyer requirements for grade, size, and packaging.",
    details: "We operate modern processing facilities equipped with advanced sorting, cleaning, and packaging technology. Our flexible packaging solutions cater to diverse market requirements, from bulk shipments for industrial buyers to retail-ready packaging for consumer markets.",
    icon: "⚙️",
    image: "https://res.cloudinary.com/qz5m8bhg/video/upload/f_auto,q_auto/v1784305007/processing_wperwg.mp4",
    video: true,
  },
  {
    title: "Global Distribution",
    description: "Our efficient supply chain and logistics network ensure timely delivery of agricultural commodities to buyers worldwide.",
    details: "With strategic partnerships across shipping lines, freight forwarders, and customs brokers, we manage the entire logistics chain from Indonesian ports to destinations across Asia, Europe, Middle East, and beyond. Our track record includes 98% on-time delivery performance.",
    icon: "🚢",
    image: "https://res.cloudinary.com/qz5m8bhg/video/upload/f_auto,q_auto/v1784304894/globaldistribution_hkk7es.mp4",
    video: true,
  },
  {
    title: "Documentation & Compliance",
    description: "Complete documentation and regulatory compliance for smooth international trade operations.",
    details: "We handle all necessary export documentation, phytosanitary certificates, certificates of origin, and compliance with international trade regulations. Our experienced team ensures seamless customs clearance and adherence to import requirements in destination markets.",
    icon: "📋",
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/f_auto,q_auto/v1784304888/compliance_suzdz4.jpg",
    video: false,
  },
  {
    title: "Market Intelligence",
    description: "We provide our clients with valuable market insights, price trends, and commodity analysis to help them make informed purchasing decisions.",
    details: "Our team monitors global agricultural markets, weather patterns, and trade policies to provide timely intelligence that gives our partners a competitive advantage. We offer regular market reports, price forecasts, and customized analysis tailored to specific commodities and markets.",
    icon: "📊",
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/f_auto,q_auto/v1784304889/marketintelligence_dzhpmn.webp",
    video: false,
  },
  {
    title: "Custom Solutions",
    description: "We work closely with clients to develop customized sourcing and supply chain solutions tailored to their specific requirements.",
    details: "Whether you need specific grades, packaging requirements, or delivery schedules, we adapt our services to meet your unique business needs. Our flexible approach allows us to handle both large-scale bulk orders and specialized small-batch requirements.",
    icon: "🎯",
    image: "https://res.cloudinary.com/qz5m8bhg/video/upload/f_auto,q_auto/v1784304906/customsolution_lolb4o.mp4",
    video: true,
  },
  {
    title: "Risk Management",
    description: "We help clients mitigate supply chain risks through diversified sourcing, quality guarantees, and contingency planning.",
    details: "Our risk management strategies ensure business continuity and protect our partners from market volatility and supply disruptions. We maintain multiple sourcing options, quality guarantees, and contingency plans to ensure uninterrupted supply.",
    icon: "🛡️",
    image: "https://res.cloudinary.com/qz5m8bhg/video/upload/f_auto,q_auto/v1784304907/riskmanage_szyljq.mp4",
    video: true,
  },
  {
    title: "Training & Support",
    description: "We offer training programs and technical support to help our clients optimize their use of our products and services.",
    details: "From product application guidance to supply chain best practices, we invest in knowledge sharing to strengthen our partnerships. Our dedicated support team is always available to address questions, provide technical assistance, and ensure complete customer satisfaction.",
    icon: "🎓",
    image: "https://res.cloudinary.com/qz5m8bhg/image/upload/f_auto,q_auto/v1784304894/training_r9eqqr.jpg",
    video: false,
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background pt-15">
      <Header />
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              Our Services
            </p>
            <ScrollBlurText
              text="Comprehensive agricultural trading solutions"
              className="font-serif text-2xl sm:text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
            />
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From farm to global market, we offer end-to-end services designed to meet the diverse needs of our international clients.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500"
              >
                {/* Image or Video Placeholder */}
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  {service.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    >
                      <source src={service.image} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-8">
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-medium text-foreground mb-2 sm:mb-3">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">{service.description}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed">{service.details}</p>
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