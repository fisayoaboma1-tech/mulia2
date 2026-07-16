import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollBlurText } from "@/components/scroll-blur-text"

const products = [
  {
    slug: "premium-rice",
    name: "Premium Rice",
    description: "High-quality aromatic and non-aromatic rice varieties including Basmati, Jasmine, and IR64, sourced from fertile Indonesian paddies.",
    image: "/images/product-equilibrium.png",
    tag: "Grains",
  },
  {
    slug: "yellow-corn",
    name: "Yellow Corn",
    description: "Premium yellow corn suitable for animal feed and industrial processing, meeting international quality standards.",
    image: "/images/product-serenity.png",
    tag: "Grains",
  },
  {
    slug: "wheat",
    name: "Wheat",
    description: "High-protein wheat varieties sourced from optimal growing regions, ideal for bread-making and pasta production.",
    image: "/images/product-vitality.png",
    tag: "Grains",
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    description: "Premium Indonesian black pepper with bold flavor profile, carefully harvested and processed for global spice markets.",
    image: "/images/product-equilibrium.png",
    tag: "Spices",
  },
  {
    slug: "nutmeg",
    name: "Nutmeg",
    description: "Aromatic nutmeg from the Spice Islands, available in whole, ground, and essential oil forms for culinary and pharmaceutical use.",
    image: "/images/product-serenity.png",
    tag: "Spices",
  },
  {
    slug: "cinnamon",
    name: "Cinnamon",
    description: "High-quality Ceylon cinnamon sticks and powder, known for superior aroma and flavor in international markets.",
    image: "/images/product-vitality.png",
    tag: "Spices",
  },
  {
    slug: "cloves",
    name: "Cloves",
    description: "Premium cloves from North Sulawesi, hand-selected for size, color, and oil content for spice traders worldwide.",
    image: "/images/product-equilibrium.png",
    tag: "Spices",
  },
  {
    slug: "vanilla-beans",
    name: "Vanilla Beans",
    description: "Grade A Indonesian vanilla beans with high vanillin content, carefully cured for premium food and fragrance applications.",
    image: "/images/product-serenity.png",
    tag: "Spices",
  },
  {
    slug: "arabica-coffee",
    name: "Arabica Coffee",
    description: "Premium Arabica coffee beans from highland plantations, offering complex flavor profiles for specialty coffee roasters.",
    image: "/images/product-vitality.png",
    tag: "Beverage Crops",
  },
  {
    slug: "robusta-coffee",
    name: "Robusta Coffee",
    description: "High-quality Robusta coffee beans with strong body and bold flavor, perfect for espresso blends and instant coffee production.",
    image: "/images/product-equilibrium.png",
    tag: "Beverage Crops",
  },
  {
    slug: "cocoa-beans",
    name: "Cocoa Beans",
    description: "Fine flavor cocoa beans from Sulawesi and Sumatra, fermented and dried to international standards for chocolate manufacturers.",
    image: "/images/product-serenity.png",
    tag: "Beverage Crops",
  },
  {
    slug: "crude-palm-oil",
    name: "Crude Palm Oil",
    description: "Premium crude palm oil (CPO) from sustainable plantations, meeting global food industry specifications and standards.",
    image: "/images/product-vitality.png",
    tag: "Oils",
  },
  {
    slug: "refined-palm-oil",
    name: "Refined Palm Oil",
    description: "Highly refined palm oil for food processing, cosmetics, and industrial applications with consistent quality specifications.",
    image: "/images/product-equilibrium.png",
    tag: "Oils",
  },
  {
    slug: "coconut-oil",
    name: "Coconut Oil",
    description: "Virgin and refined coconut oil from Indonesian coconuts, suitable for food, cosmetic, and pharmaceutical industries.",
    image: "/images/product-serenity.png",
    tag: "Oils",
  },
  {
    slug: "natural-rubber",
    name: "Natural Rubber",
    description: "SIR20 and SIR3CV grade natural rubber, processed to meet global tire and manufacturing industry specifications.",
    image: "/images/product-vitality.png",
    tag: "Industrial",
  },
  {
    slug: "cashew-nuts",
    name: "Cashew Nuts",
    description: "Premium raw and roasted cashew nuts in various grades, from whole nuts to splits and pieces for food processing.",
    image: "/images/product-equilibrium.png",
    tag: "Nuts",
  },
  {
    slug: "macadamia-nuts",
    name: "Macadamia Nuts",
    description: "Premium macadamia nuts from Indonesian plantations, available in various roast levels and packaging options.",
    image: "/images/product-serenity.png",
    tag: "Nuts",
  },
  {
    slug: "mangoes",
    name: "Mangoes",
    description: "Premium Indonesian mango varieties including Arumanis and Gedong Gincu, exported fresh to global markets.",
    image: "/images/product-vitality.png",
    tag: "Fruits",
  },
  {
    slug: "pineapples",
    name: "Pineapples",
    description: "Sweet and juicy Indonesian pineapples, available fresh or processed for international food retailers and processors.",
    image: "/images/product-equilibrium.png",
    tag: "Fruits",
  },
  {
    slug: "bananas",
    name: "Bananas",
    description: "Premium Cavendish and local banana varieties, carefully harvested and packed for export to Asian and Middle Eastern markets.",
    image: "/images/product-serenity.png",
    tag: "Fruits",
  },
  {
    slug: "durian",
    name: "Durian",
    description: "Premium Musang King and other durian varieties, frozen or fresh, for specialty Asian food markets worldwide.",
    image: "/images/product-vitality.png",
    tag: "Fruits",
  },
  {
    slug: "green-tea",
    name: "Green Tea",
    description: "High-quality Indonesian green tea leaves, carefully processed to preserve antioxidants and fresh flavor for global tea markets.",
    image: "/images/product-equilibrium.png",
    tag: "Beverages",
  },
  {
    slug: "black-tea",
    name: "Black Tea",
    description: "Premium Indonesian black tea with rich flavor profile, suitable for breakfast blends and specialty tea applications.",
    image: "/images/product-serenity.png",
    tag: "Beverages",
  },
  {
    slug: "tuna",
    name: "Tuna",
    description: "Premium skipjack and yellowfin tuna, freshly caught and processed for sashimi, canned, and frozen seafood markets.",
    image: "/images/product-vitality.png",
    tag: "Seafood",
  },
  {
    slug: "shrimp",
    name: "Shrimp",
    description: "High-quality vannamei and black tiger shrimp, farmed and processed to meet international food safety standards.",
    image: "/images/product-equilibrium.png",
    tag: "Seafood",
  },
  {
    slug: "squid",
    name: "Squid",
    description: "Fresh and frozen squid products, cleaned and processed for restaurant chains and seafood processors worldwide.",
    image: "/images/product-serenity.png",
    tag: "Seafood",
  },
  {
    slug: "palm-sugar",
    name: "Palm Sugar",
    description: "Organic palm sugar and coconut sugar, traditionally processed and certified for health food and specialty markets.",
    image: "/images/product-vitality.png",
    tag: "Sweeteners",
  },
  {
    slug: "coconut-sugar",
    name: "Coconut Sugar",
    description: "Low glycemic index coconut sugar, sustainably produced from Indonesian coconut palms for health-conscious consumers.",
    image: "/images/product-equilibrium.png",
    tag: "Sweeteners",
  },
  {
    slug: "turmeric",
    name: "Turmeric",
    description: "Premium Indonesian turmeric with high curcumin content, available as dried rhizomes, powder, and extracts for food and nutraceutical industries.",
    image: "/images/product-serenity.png",
    tag: "Spices",
  },
  {
    slug: "ginger",
    name: "Ginger",
    description: "High-quality Indonesian ginger, fresh or dried, known for its strong flavor and medicinal properties in international markets.",
    image: "/images/product-vitality.png",
    tag: "Spices",
  },
  {
    slug: "galangal",
    name: "Galangal",
    description: "Fresh and dried galangal rhizomes, essential for Southeast Asian cuisine and increasingly popular in global gourmet cooking.",
    image: "/images/product-equilibrium.png",
    tag: "Spices",
  },
  {
    slug: "lemongrass",
    name: "Lemongrass",
    description: "Premium lemongrass stalks and powder, sourced from sustainable farms for culinary, tea, and essential oil production.",
    image: "/images/product-serenity.png",
    tag: "Herbs",
  },
  {
    slug: "kaffir-lime-leaves",
    name: "Kaffir Lime Leaves",
    description: "Fresh and dried kaffir lime leaves, essential for authentic Southeast Asian cuisine and increasingly demanded by global restaurants.",
    image: "/images/product-vitality.png",
    tag: "Herbs",
  },
  {
    slug: "long-pepper",
    name: "Long Pepper",
    description: "Traditional Indonesian long pepper with complex spicy flavor, gaining popularity in gourmet and fusion cuisine worldwide.",
    image: "/images/product-equilibrium.png",
    tag: "Spices",
  },
  {
    slug: "cardamom",
    name: "Cardamom",
    description: "Premium Indonesian cardamom pods with intense aroma, suitable for culinary, beverage, and pharmaceutical applications.",
    image: "/images/product-serenity.png",
    tag: "Spices",
  },
  {
    slug: "candlenuts",
    name: "Candlenuts",
    description: "High-quality candlenuts (kemiri) for Indonesian cuisine and industrial applications, carefully processed and packed.",
    image: "/images/product-vitality.png",
    tag: "Nuts",
  },
  {
    slug: "areca-nuts",
    name: "Areca Nuts",
    description: "Premium areca nuts from Indonesian plantations, processed according to international quality and safety standards.",
    image: "/images/product-equilibrium.png",
    tag: "Nuts",
  },
  {
    slug: "tempeh",
    name: "Tempeh",
    description: "Traditional Indonesian tempeh, fermented soybean product with high protein content, available fresh or frozen for export.",
    image: "/images/product-serenity.png",
    tag: "Specialty Foods",
  },
  {
    slug: "tapioca",
    name: "Tapioca",
    description: "Premium tapioca starch and pearls from Indonesian cassava, used in food processing, textile, and paper industries.",
    image: "/images/product-vitality.png",
    tag: "Starch Products",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background pt-15">
      <Header />
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">
              Our Products
            </p>
            <ScrollBlurText
              text="Premium agricultural commodities"
              className="font-serif text-3xl text-foreground text-balance mb-6 md:text-7xl font-light"
            />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Each product is carefully sourced, processed, and quality-checked to meet the highest international standards for global trade.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {products.map((product) => (
              <div key={product.name} className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-muted z-10">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full z-10">
                    {product.tag}
                  </span>
                </div>
                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-serif text-foreground mb-3 text-3xl font-normal">{product.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                  <Button
                    variant="ghost"
                    asChild
                    className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto group/btn"
                  >
                    <Link href={`/products/${product.slug || product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      Discover
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
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
