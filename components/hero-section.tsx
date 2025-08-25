import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="absolute top-20 right-20 opacity-20">
        <div className="steam w-2 h-8 bg-gradient-to-t from-primary/40 to-transparent rounded-full"></div>
        <div className="steam w-2 h-6 bg-gradient-to-t from-primary/30 to-transparent rounded-full ml-3 -mt-6"></div>
        <div className="steam w-2 h-10 bg-gradient-to-t from-primary/20 to-transparent rounded-full ml-6 -mt-8"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hyper-fast{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">cross-chain</span>{" "}
            payments
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            CoffeeChain enables lightning-fast cross-chain transactions.{" "}
            <span className="font-semibold text-foreground">Any Token. Any Chain.</span>
          </p>

          {/* CTA Button */}
          <div className="mb-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold px-12 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Secondary Note */}
          <p className="text-sm text-muted-foreground font-medium tracking-wide">Expanding to 70+ Chains and More</p>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
