import ArweaveLogo from '../assets/chains/arweave.png'
import SolanaLogo from '../assets/chains/solana.png'
import EthereumLogo from '../assets/chains/ethereum.png'
import TonLogo from '../assets/chains/ton.png'
import Stacks from '../assets/chains/stacks.png'
import PolkadotLogo from '../assets/chains/polkadot.svg'

function Logos() {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-20 lg:px-6">
          <h2 className="text-center text-2xl font-semibold text-black pb-8">
            Integrates with all EVM chains, and 12 more
          </h2>
          <div className="mt-8 grid grid-cols-6 gap-1 xs:grid-cols-6 md:grid-cols-10 lg:grid-cols-6">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={ArweaveLogo} alt="Arweave" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img className="h-12" src={EthereumLogo} alt="Ethereum" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src={SolanaLogo}
                alt="Solana"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src={PolkadotLogo}
                alt="Polkadot"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src={TonLogo}
                alt="Solana"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src={Stacks}
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logos;