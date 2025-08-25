"use client"

import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { Particles } from "./magicui/particles"
import { Marquee } from "./magicui/marquee"
import { RainbowConnectButton } from "@/components/rainbow-connect-button"

export function HeroSection() {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/bridge')
  }

  // Chain logos - you can replace these with your actual transparent logos
  const chainLogos = [
    { name: "Ethereum", src: "https://cdn.simpleicons.org/ethereum/8B4513" },
    { name: "Polygon", src: "https://cdn.simpleicons.org/polygon/8B4513" },
    { name: "Optimism", src: "https://cdn.simpleicons.org/optimism/8B4513" },
    { name: "BSC", src: "https://cdn.simpleicons.org/binance/8B4513" },
    { name: "Solana", src: "https://cdn.simpleicons.org/solana/8B4513" },
    { name: "Cardano", src: "https://cdn.simpleicons.org/cardano/8B4513" },
    { name: "Polkadot", src: "https://cdn.simpleicons.org/polkadot/8B4513" },
    { name: "Chainlink", src: "https://cdn.simpleicons.org/chainlink/8B4513" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Connect Wallet Button - Fixed Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <RainbowConnectButton />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${encodeURIComponent("8B4513").substring(1)}' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Coffee Steam Animation */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8">
        <div className="steam w-2 h-2 bg-amber-300 rounded-full opacity-60"></div>
        <div className="steam w-1.5 h-1.5 bg-amber-200 rounded-full opacity-40"></div>
        <div className="steam w-1 h-1 bg-amber-100 rounded-full opacity-30"></div>
      </div>

      {/* Particles */}
      <Particles 
        className="absolute inset-0 z-0" 
        quantity={50}
        color="#8B4513"
        ease={80}
        refresh
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Hyper-fast Cross-Chain
          </span>
          <br />
          <span className="text-foreground">Payments</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Lightning-fast cross-chain transactions. Any Token. Any Chain. 
          <br />
          
        </p>
        
        <Button 
          onClick={handleGetStarted}
          size="lg" 
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Get Started
        </Button>

                 {/* Receive Payment Button */}
         <Button
           onClick={() => router.push('/receive')}
           size="lg"
           className="text-lg px-8 py-6 bg-black hover:bg-black text-white ml-4"
         >
           Receive Payment
         </Button>

        {/* Chain Logos Marquee */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="relative">
            <Marquee 
              className="[--duration:30s] [--gap:2rem]"
              pauseOnHover={true}
            >
              {chainLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-12 h-12 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    title={logo.name}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
