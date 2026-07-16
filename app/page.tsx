import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductSection } from "@/components/product-section"
import { ScienceSection } from "@/components/science-section"
import { MissionSection } from "@/components/mission-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pt-15">
      <Header />
      <HeroSection />
      <ProductSection />
      <ScienceSection />
      <MissionSection />
      <Footer />
    </main>
  )
}
