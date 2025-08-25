import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatWeDoSection />
    </main>
  )
}
