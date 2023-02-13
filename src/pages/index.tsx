import Head from 'next/head'

import Hero from '@/components/hero'
import FeaturesNew from '@/components/features'
import Logos from '@/components/Logos'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Gasless on-chain notifications for dApps" />
        <meta property="og:image"
          content="https://raw.githubusercontent.com/decentldotland/sender-protocol-home/main/sender-img/sender-banner.png" />
        <meta property="twitter:image"
          content="https://raw.githubusercontent.com/decentldotland/sender-protocol-home/main/sender-img/sender-banner.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <div className="w-full">
          <Hero />
        </div>
        <FeaturesNew />
        <Logos />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
