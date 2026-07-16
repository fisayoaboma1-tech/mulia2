import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScienceSection } from "@/components/science-section"

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ScienceSection />
      <Footer />
    </main>
  )
}