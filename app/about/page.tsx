import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MissionSection } from "@/components/mission-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <MissionSection />
      <Footer />
    </main>
  )
}