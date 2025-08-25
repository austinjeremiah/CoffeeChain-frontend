export function CoffeeLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        {/* Coffee cup */}
        <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary">
          <path
            fill="currentColor"
            d="M6 10h16v12c0 2.2-1.8 4-4 4h-8c-2.2 0-4-1.8-4-4V10zm18 4h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2v-6zM8 6h12v2H8V6z"
          />
        </svg>
        {/* Blockchain cube overlay */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-sm opacity-80">
          <div className="w-full h-full border border-accent-foreground/20 rounded-sm"></div>
        </div>
      </div>
      <span className="text-xl font-bold text-foreground">CoffeeChain</span>
    </div>
  )
}
