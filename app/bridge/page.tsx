"use client"

import { RainbowConnectButton } from "@/components/rainbow-connect-button"

export default function BridgePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Pattern - Same as home page */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23${encodeURIComponent("8B4513").substring(1)}' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Coffee Steam Animation - Same as home page */}
      <div className="absolute top-20 right-20 opacity-20">
        <div className="steam w-2 h-8 bg-gradient-to-t from-primary/40 to-transparent rounded-full"></div>
        <div className="steam w-2 h-6 bg-gradient-to-t from-primary/30 to-transparent rounded-full ml-3 -mt-6"></div>
        <div className="steam w-2 h-10 bg-gradient-to-t from-primary/20 to-transparent rounded-full ml-6 -mt-8"></div>
      </div>

      {/* Header with Logo and Connect Button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <span className="text-xl font-bold text-foreground">CoffeeChain</span>
            <RainbowConnectButton />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Page Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bridge</span>{" "}
            Your Assets
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Connect your wallet to start bridging tokens across different blockchains.{" "}
            <span className="font-semibold text-foreground">Fast, Secure, Reliable.</span>
          </p>

          {/* Bridge Interface Placeholder */}
          <div className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Bridge Interface Coming Soon
              </h2>
              <p className="text-muted-foreground">
                Connect your wallet above to get started with cross-chain bridging.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </main>
  )
}
