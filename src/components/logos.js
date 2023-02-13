import Image from "next/image";

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
              <Image width={48} height={48} src={`/arweave.png`} alt="Arweave" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image width={48} height={48} src={`/ethereum.png`} alt="Ethereum" />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                width={48}
                height={48}
                src={`/solana.png`}
                alt="Solana"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                width={48}
                height={48}
                src={`/polkadot.svg`}
                alt="Polkadot"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                width={48}
                height={48}
                src={`/ton.png`}
                alt="TON"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <Image
                width={48}
                height={48}
                src={`/stacks.png`}
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