import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}