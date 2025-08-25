"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { RainbowButton } from './magicui/rainbow-button'

export function RainbowConnectButton() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated')

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <RainbowButton
                    onClick={openConnectModal}
                    type="button"
                    size="lg"
                    className="text-white font-semibold"
                  >
                    Connect Wallet
                  </RainbowButton>
                )
              }

              if (chain.unsupported) {
                return (
                  <RainbowButton
                    onClick={openChainModal}
                    type="button"
                    size="lg"
                    variant="outline"
                    className="text-red-500 font-semibold"
                  >
                    Wrong network
                  </RainbowButton>
                )
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <RainbowButton
                    onClick={openChainModal}
                    type="button"
                    size="default"
                    className="text-white font-semibold"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </RainbowButton>

                  <RainbowButton
                    onClick={openAccountModal}
                    type="button"
                    size="default"
                    className="text-white font-semibold"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </RainbowButton>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
