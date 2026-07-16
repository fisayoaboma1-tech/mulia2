import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductSection } from "@/components/product-section"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductSection />
      <Footer />
    </main>
  )
}