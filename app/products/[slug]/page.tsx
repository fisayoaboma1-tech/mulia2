import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const products = [
  {
    slug: "premium-rice",
    name: "Premium Rice",
    description: "High-quality aromatic and non-aromatic rice varieties including Basmati, Jasmine, and IR64, sourced from fertile Indonesian paddies.",
    image: "/images/product-equilibrium.png",
    tag: "Grains",
    details: "Our premium rice selection includes some of the finest varieties grown in Indonesia's fertile paddies. From the aromatic Basmati to the fragrant Jasmine rice and the versatile IR64, we ensure each grain meets international quality standards. Our rice is carefully harvested, processed, and packaged to preserve its natural aroma, texture, and nutritional value.",
    specifications: {
      origin: "Indonesia",
      varieties: "Basmati, Jasmine, IR64",
      packaging: "25kg, 50kg, bulk",
      shelfLife: "12-24 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "yellow-corn",
    name: "Yellow Corn",
    description: "Premium yellow corn suitable for animal feed and industrial processing, meeting international quality standards.",
    image: "/images/product-serenity.png",
    tag: "Grains",
    details: "Our yellow corn is sourced from trusted farms across Indonesia, ensuring consistent quality and nutritional value. Perfect for animal feed, industrial processing, and food manufacturing, our corn meets stringent international standards for moisture content, purity, and grading.",
    specifications: {
      origin: "Indonesia",
      grade: "Grade A, Feed Grade",
      packaging: "Bulk, 50kg bags",
      shelfLife: "12 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "wheat",
    name: "Wheat",
    description: "High-protein wheat varieties sourced from optimal growing regions, ideal for bread-making and pasta production.",
    image: "/images/product-vitality.png",
    tag: "Grains",
    details: "Our wheat selection focuses on high-protein varieties perfect for bread-making, pasta production, and other food processing applications. Sourced from optimal growing regions, our wheat delivers excellent gluten content and consistent quality.",
    specifications: {
      origin: "Indonesia",
      protein: "11-13%",
      packaging: "Bulk, 50kg bags",
      shelfLife: "12 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    description: "Premium Indonesian black pepper with bold flavor profile, carefully harvested and processed for global spice markets.",
    image: "/images/product-equilibrium.png",
    tag: "Spices",
    details: "Indonesia is world-renowned for its black pepper, and we offer only the finest grades. Our black pepper is carefully harvested, sun-dried, and processed to preserve its bold flavor and aromatic qualities. Available in various mesh sizes to meet diverse culinary and industrial needs.",
    specifications: {
      origin: "Indonesia (Lampung, Bangka)",
      grade: "550g/l, 600g/l",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP, Organic",
    },
  },
  {
    slug: "nutmeg",
    name: "Nutmeg",
    description: "Aromatic nutmeg from the Spice Islands, available in whole, ground, and essential oil forms for culinary and pharmaceutical use.",
    image: "/images/product-serenity.png",
    tag: "Spices",
    details: "Sourced from the historic Spice Islands of Indonesia, our nutmeg offers exceptional aroma and flavor. Available in whole nuts, ground powder, and essential oil forms, it serves both culinary and pharmaceutical applications worldwide.",
    specifications: {
      origin: "Indonesia (Maluku)",
      forms: "Whole, Ground, Essential Oil",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP",
    },
  },
  {
    slug: "cinnamon",
    name: "Cinnamon",
    description: "High-quality Ceylon cinnamon sticks and powder, known for superior aroma and flavor in international markets.",
    image: "/images/product-vitality.png",
    tag: "Spices",
    details: "Our Ceylon cinnamon, also known as 'true cinnamon,' is sourced from Indonesian farms and processed to preserve its delicate flavor and aromatic properties. Available as whole sticks or fine powder, it's prized by chefs and food manufacturers worldwide.",
    specifications: {
      origin: "Indonesia",
      forms: "Sticks, Powder",
      packaging: "25kg bags, bulk",
      shelfLife: "24 months",
      certification: "ISO 22000, HACCP",
    },
  },
]

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background pt-15">
      <Header />
      
      {/* Product Hero */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                {product.tag}
              </span>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
                {product.tag}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground text-balance mb-6">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
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
                  <Link href="/products">
                    Back to Products
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-balance mb-12">
            Product Specifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="bg-card rounded-2xl p-6 border border-border/50">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-lg font-medium text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground text-balance mb-8">
            Interested in this product?
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-10">
            Contact us for pricing, availability, and customization options.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-background text-foreground hover:bg-background/90 rounded-full px-10 py-7 text-lg group"
          >
            <Link href="/contact">
              Get in touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}