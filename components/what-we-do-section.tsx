import { BorderBeam } from "./magicui/border-beam"

export function WhatWeDoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Main Heading */}
          <div className="flex items-start">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2d1810] leading-tight">
            Why Choose CoffeeChain for Cross-Chain Payments?
            </h2>
          </div>
          
          {/* Descriptive Paragraphs */}
          <div className="space-y-6">
            <p className="text-lg text-[#4a4a4a] font-bold leading-relaxed">
             Cross-chain commerce has been stuck with clunky bridges and delayed settlements..
            </p>
            <p className="text-lg text-[#4a4a4a] font-bold leading-relaxed">
            CoffeeChain changes that by using Solvers to fill and settle intents instantly across chains, secured by Espresso confirmation. For merchants and users, it feels like one chain — no matter where the tokens come from.
            </p>
          </div>
        </div>

        {/* Bottom Section - Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Box 1 */}
          <div className="relative bg-[#f5e6d3] rounded-lg p-6 h-full overflow-hidden">
            <BorderBeam 
              size={100} 
              duration={8} 
              colorFrom="#000000" 
              colorTo="#333333"
              borderWidth={2}
            />
            <div className="flex items-start space-x-4 relative z-10">
              <div className="w-8 h-8 bg-[#f5e6d3] border-2 border-[#8b4513] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#8b4513] font-semibold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5d2e0c] mb-2">Instant Payments</h3>
                <p className="text-[#8b4513] font-bold text-sm leading-relaxed">
                Payments settle in seconds, giving your customers a smooth checkout and your business immediate, secure funds.
                </p>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="relative bg-[#f5e6d3] rounded-lg p-6 h-full overflow-hidden">
            <BorderBeam 
              size={100} 
              duration={8} 
              colorFrom="#000000" 
              colorTo="#333333"
              borderWidth={2}
            />
            <div className="flex items-start space-x-4 relative z-10">
              <div className="w-8 h-8 bg-[#f5e6d3] border-2 border-[#8b4513] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#8b4513] font-semibold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5d2e0c] mb-2"> Accept Any Token</h3>
                <p className="text-[#8b4513] text-sm font-bold leading-relaxed">
                Accept payments from any blockchain — CoffeeChain handles routing so you can receive in the asset you want.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="relative bg-[#f5e6d3] rounded-lg p-6 h-full overflow-hidden">
            <BorderBeam 
              size={100} 
              duration={8} 
              colorFrom="#000000" 
              colorTo="#333333"
              borderWidth={2}
            />
            <div className="flex items-start space-x-4 relative z-10">
              <div className="w-8 h-8 bg-[#f5e6d3] border-2 border-[#8b4513] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#8b4513] font-semibold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5d2e0c] mb-2"> Flexible Settlement</h3>
                <p className="text-[#8b4513] text-sm font-bold leading-relaxed">
                Decide how you get paid: stablecoins, native assets, or your chosen tokens — tailored to your business.
                </p>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="relative bg-[#f5e6d3] rounded-lg p-6 h-full overflow-hidden">
            <BorderBeam 
              size={100} 
              duration={8} 
              colorFrom="#000000" 
              colorTo="#333333"
              borderWidth={2}
            />
            <div className="flex items-start space-x-4 relative z-10">
              <div className="w-8 h-8 bg-[#f5e6d3] border-2 border-[#8b4513] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#8b4513] font-semibold text-sm">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#5d2e0c] mb-2">Compatibility</h3>
                <p className="text-[#8b4513] text-sm font-bold leading-relaxed">
                Seamlessly integrates with wallets, apps, and infrastructure you already use, with full Ethereum support and more to come.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-[#2d1810]">
            Any Token. Any Chain. Seamless Settlement.
          </p>
        </div>
      </div>
    </section>
  )
}
