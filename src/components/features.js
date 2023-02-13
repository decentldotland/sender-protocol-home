import { LinkIcon, ChatBubbleOvalLeftIcon, BellIcon, UserIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Flexible, out-of-the-box notifications',
    description:
      'Sender Protocol eliminates the need for dApps to build custom solutions for chat and notifications. Whatever the chain, just hook Sender into the right page or destination and set up the trigger conditions',
    icon: <BellIcon className="h-8 w-8" aria-hidden="true" />,
  },
  {
    name: 'Encrypted on-chain messaging',
    description:
      'Use any one of a user\'s connected identities to encrypt and decrypt messages between dApps, protocols and chains.',
    icon: <ChatBubbleOvalLeftIcon className="h-8 w-8" aria-hidden="true" />,
  },
  {
    name: 'Send the right message to the right user',
    description:
      'Likes and mentions on your web3 social dapp, sales on your NFT marketplace, or announcements to the whole userbase -- Ark Protocol links identity across chains to reach users where they are.',
    icon: <UserIcon className="h-8 w-8" aria-hidden="true" />,
  },
  {
    name: 'Gasless, on-chain and real-time',
    description:
      'Sending and receiving notifications with Sender Protocol is executed for free with EXM, a gasless Arweave-based smart contract platform with the ability to store unlimited data on-chain.',
    icon: <LinkIcon className="h-8 w-8" aria-hidden="true" />,
  }
]

export default function FeaturesNew() {
  return (
    <div className="bg-white py-12 sm:py-32 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-gray-500">More than notifications</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Communicate with your dApp and protocol users</p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#21275A] text-white sm:shrink-0">
                  {feature.icon}
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}