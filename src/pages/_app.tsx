import type { AppProps } from 'next/app'

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { bsc, mainnet, evmos, avalanche, fantom, optimism, arbitrum, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import '@rainbow-me/rainbowkit/styles.css'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {

  const { chains, provider } = configureChains(
    [bsc, mainnet, evmos, avalanche, fantom, optimism, arbitrum, polygon],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: 'Sender Protocol',
    chains
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  });
  
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
