"use client"

import '@rainbow-me/rainbowkit/styles.css'
import type { Chain } from "viem";
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from 'wagmi/chains'
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query"

export const rarichain: Chain = {
  id: 1918988905,
  name: "RARI Chain Testnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://rari-testnet.calderachain.xyz/http"] },
    public: { http: ["https://rari-testnet.calderachain.xyz/http"] },
  },
  blockExplorers: {
    default: { name: "Rari Explorer", url: "https://rari-testnet.hub.caldera.xyz/" },
  },
  testnet: true,
};

export const appChain: Chain = {
  id: 4661,
  name: "AppChain Testnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://appchaintestnet.rpc.caldera.xyz/http"] },
    public: { http: ["https://appchaintestnet.rpc.caldera.xyz/http"] },
  },
  blockExplorers: {
    default: { name: "AppChain Explorer", url: "https://appchaintestnet.hub.caldera.xyz/" },
  },
  testnet: true,
};


const config = getDefaultConfig({
  appName: 'CoffeeChain',
  projectId: '7a6e6a1f7934519391a590f1b17504df', 
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia, rarichain, appChain], 
  ssr: true,
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
