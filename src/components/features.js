
/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from 'react';
import { LinkIcon, HeartIcon, CubeTransparentIcon, RssIcon, CodeIcon, GiftIcon, LockClosedIcon, GlobeIcon, CashIcon } from '@heroicons/react/outline'
import rssFeature from '../assets/rss-icon.png'
import lockFeature from '../assets/lock-icon.png'
import nftFeature from '../assets/nft-icon.png'

const distributionFeatures = [
  {
    id: 1,
    name: 'RSS feeds',
    description:
      'permacast provides you your own RSS feed that works with Spotify and iTunes',
    icon: RssIcon,
  },
  {
    id: 2,
    name: 'Built for interoperability',
    description:
      'Your RSS feeds are made to conform with the expected standards for podcast clients',
    icon: GlobeIcon,
  }
]
const censorshipFeatures = [
  {
    id: 1,
    name: 'All data is stored on chain for at least 200 years',
    description:
      'permacast shows are smart contracts which store the references to media and metadata from Arweave - backed by a 200 year permanence guarantee',
    icon: LinkIcon,
  },
  {
    id: 2,
    name: 'Loved by dissidents and content creators alike',
    description:
      'permacast is a safe haven for a number of shows oppressed by state actors',
    icon: HeartIcon,
  },
]

const nftFeatures = [
  {
    id: 1,
    name: 'Automatically mint episodes as NFTs',
    description:
      'Integrated with Arweave - and soon Mintbase - permacast makes it easy to turn your show into an NFT collection',
    icon: GiftIcon,
  },
  {
    id: 2,
    name: 'Use episode NFTs as fan tokens',
    description:
      'No need to mint an ERC20 to create a token-gated community',
    icon: CashIcon,
  },
]

export default function Features() {


  const [stats, setAnsStats] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAnsStats()
      .then(items => {
        if (mounted) {
          setAnsStats(items)
        }
      })
    return () => mounted = false;
  }, [])


  function getAnsStats() {
    return fetch('https://ans-stats.decent.land/stats')
      .then(response => response.json())
  }

  //bg-gradient-to-b from-white to-yellow-300

  return (
    <div className="py-2 bg-white overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">

        <div className="relative">
          <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Quit your web2 host
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-600">
            With no recurring hosting fees, you control your content
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-black tracking-tight sm:text-3xl">
              Integrates with any distribution platform
            </h3>
            <p className="mt-3 text-lg text-gray-600">
              Generate an RSS feed you can use with Spotify, iTunes, Fountain, and pretty much everywhere else
            </p>

            <dl className="mt-10 space-y-10">
              {distributionFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-none text-gray-800">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-black">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-600">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto w-60"
              /*width={490}*/
              src={rssFeature}
              alt=""
            />
          </div>
        </div>


        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-black tracking-tight sm:text-3xl">Censorship resistant</h3>
              <p className="mt-3 text-lg text-gray-600">
                We use Arweave to store your media files, which makes it impossible to be censored or deplaformed
              </p>

              <dl className="mt-10 space-y-10">
                {censorshipFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-none text-gray-800">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-black">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-800">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">

              <img
                className="relative mx-auto w-80"
                width={490}
                src={lockFeature}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-black tracking-tight sm:text-3xl">
              Episodes are NFTs
            </h3>
            <p className="mt-3 text-lg text-gray-900">
              Tokenize your show and give fans a way fund its development
            </p>

            <dl className="mt-10 space-y-10">
              {nftFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-none text-gray-800">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-black">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-800">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">

            <img
              className="relative mx-auto w-80"
              width={600}
              src={nftFeature}
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  )
}
