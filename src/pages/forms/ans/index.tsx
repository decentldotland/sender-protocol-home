import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useSignMessage } from 'wagmi'
import Confetti from 'react-confetti'

import { formatAddress } from '@/utils/arconnect'
import Spinner from '@/components/Spinner'
import { useAccountModal } from '@rainbow-me/rainbowkit'

interface Token {
  token_address: string;
  token_id: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_hash: string;
  amount: string;
  contract_type: string;
  name: string;
  symbol: string;
  token_uri: string;
  metadata: any;
  last_token_uri_sync: string;
  last_metadata_sync: string;
  minter_address: string;
}

const Cross = () => (
  <svg width="10" height="10" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33 33L3 3" stroke="#AFAFAF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M33 3L3 33" stroke="#AFAFAF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Tick = () => (
  <svg width="10" height="10" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33 3L12 27L3 18" stroke="#149F11" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

)


export default function Home() {
  const senderFormURL = "https://molecule-apis-wrapper.herokuapp.com/sender-form-collection/";

  const { address } = useAccount();

  const { openAccountModal } = useAccountModal();

  const [caller, setCaller] = useState<string>('');
  const [sigMessage, setSigMessage] = useState<string>('');
  const [arweave_address, setArweave_address] = useState('');
  const [arweaveValidation, setArweaveValidation] = useState('');
  const { data: signature, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: sigMessage,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [isEligible, setIsEligible] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<any>({});

  const [isEverpayWinner, setIsEverpayWinner] = useState<boolean>(false);
  const [isArkHolder, setIsArkHolder] = useState<boolean>(false);
  const [isEmilyHolder, setIsEmilyHolder] = useState<boolean>(false);
  const [isAurobotsHolder, setIsAurobotsHolder] = useState<boolean>(false);
  const [isArkProtocolUser, setIsArkProtocolUser] = useState<boolean>(false);
  
  const flush = () => {
    setIsEverpayWinner(false);
    setIsArkHolder(false);
    setIsEmilyHolder(false);
    setIsAurobotsHolder(false);
    setIsArkProtocolUser(false);
  }

  useEffect(() => {
    if (address) setCaller(address);
    else setCaller('')
  }, [address]);

  useEffect(() => {
    if (arweave_address.length > 0 && !/[a-z0-9_-]{43}/i.test(arweave_address)) setArweaveValidation('Invalid wallet address!');
    else setArweaveValidation('');
  }, [arweave_address])

  useEffect(() => {
    const isOwner = (state: Token[]) => {
      return state
      .map((obj: Token) => obj.owner_of.toLowerCase())
      .includes(caller.toLowerCase());
    };

    const fetchData = async () => {
      flush();
      const contractState = (await axios.post('/api/whitelist/exm-state', {}))?.data;
      console.log(caller)
      if (contractState === "Not found") return;
      setSigMessage(contractState.verification_message);
      const arkList = (await axios.get(senderFormURL + contractState.ark_nft_contract))?.data?.result;
      const emilyList = (await axios.get(senderFormURL + contractState.emily_nft_contract))?.data?.result;
      const isAuroraBotsHolder = (await axios.post('/api/whitelist/aurora', {aurobots_nft_contract: contractState.aurobots_nft_contract, address: caller}))?.data;
      const everpayWinner = contractState.everfinance_nft_auctions.includes(caller);
      const arkProtocolUser = (await axios.get("https://ark-core.decent.land/v2/address/resolve/" + caller))?.data?.arweave_address;
      if (everpayWinner) setIsEverpayWinner(true);
      if (isOwner(arkList)) setIsArkHolder(true);
      if (isOwner(emilyList)) setIsEmilyHolder(true);
      if (isAuroraBotsHolder?.message === "OK" && !!Number(isAuroraBotsHolder?.result)) setIsAurobotsHolder(true);
      if (arkProtocolUser) setIsArkProtocolUser(true);
      setLoading(false);
    };
    setLoading(true);
    if (caller.length > 0) fetchData();
  }, [caller]);

  const atLeastOne = (
    isEverpayWinner ||
    isArkHolder ||
    isEmilyHolder ||
    isAurobotsHolder ||
    isArkProtocolUser
  );

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // Configure Screen Size for Confetti!
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!(arweave_address && signature && caller)) return;
    const sendRequest = async () => {
      const result = await axios.post('/api/whitelist/apply', {arweave_address, signature, caller})
      if (result.status !== 200) {
        setSubmitStatus({status: "error", message: "Request failed: check internet connection"})
        return
      } else {
        console.log(result.data);
        setSubmitStatus({status: "success", message: "Successfully whitelisted!"});
      }
    };
    sendRequest()
  }, [signature]);

  return (
    <>
      <Head>
        <title>ANS Whitelist</title>
        <meta name="description" content="ANS Whitelisting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main>
        <div className="w-full h-[40vw] flex items-center justify-center">
          {caller ? (
            <div className="text-center">
              {isEligible ? (
                <div className="min-w-[350px]">
                  <div className="header-base mb-8">Congratulations!</div>
                  <div className="subheader-text mb-8 tracking-wide font-light">{"You're eligible for the ANS whitelist"}</div>
                  <div className="flex items-center">
                    <input 
                      placeholder={"Paste your Arweave address"}
                      className="px-2 py-2 border-black border-2 rounded-xl text-black w-full mr-2"
                      value={arweave_address}
                      onChange={(e) => setArweave_address(e.target.value)}
                    />
                    <button 
                      onClick={() => signMessage()}
                      disabled={arweaveValidation.length > 0 || submitStatus?.status === "success"}
                      className={`px-12 py-2 border-green-500 border-2 rounded-xl ${submitStatus?.status === "success" ? "bg-green-500 text-white": "text-green-500"}`}
                    >
                      {submitStatus?.status === "success" ? "Confirmed!" : "Confirm"}
                    </button>
                  </div>
                  <div className="mt-2">
                    {submitStatus?.status !== "success" && arweaveValidation?.length > 0 && <div className="text-red-400">{arweaveValidation}</div>}
                    {submitStatus?.status === "success" && <div className="text-green-400">{submitStatus?.message}</div>}
                  </div>
                  <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={false}
                    numberOfPieces={2000}
                    style={{ zIndex: 50 }}
                  />
                </div>
              ) : (
                <>
                  <div className="header-base mb-4">Okay, {formatAddress(caller, 7) }</div>
                  <div className="subheader-text mb-8 tracking-wide font-light">{"Let's check if you're eligible."}</div>
                  {loading ? (
                    <div className="w-full flex justify-center items-center">
                      <Spinner className="w-20 h-20 spinner" />
                    </div>
                  ): (
                    <div className="max-w-sm text-lg tracking-wide font-light">
                      <div className="flex items-center w-full justify-between mb-2">{"Won everpay Auction"} {isEverpayWinner ? <Tick />: <Cross />}</div>
                      <div className="flex items-center w-full justify-between mb-2">{"Owns an Ark NFT"} {isArkHolder ? <Tick />: <Cross />}</div>
                      <div className="flex items-center w-full justify-between mb-2">{"Is Emily NFT holder"} {isEmilyHolder ? <Tick />: <Cross />}</div>
                      <div className="flex items-center w-full justify-between mb-2">{"Is Aurobots NFT holder"} {isAurobotsHolder ? <Tick />: <Cross />}</div>
                      <div className="flex items-center w-full justify-between mb-2">{"Connected via Ark Protocol"} {isArkProtocolUser ? <Tick />: <Cross />}</div>
                      {atLeastOne ? (
                        <button onClick={() => setIsEligible(true)} className="mt-6 px-12 py-2 border-green-500 border-2 rounded-xl text-green-500">Continue</button>
                      ) : (
                        <button onClick={openAccountModal} className="mt-6 px-12 py-2 border-blue-500 border-2 rounded-xl text-blue-500">Restart</button>
                      )}
                    </div>
              
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-y-4 items-center">
              <div className="header-base mb-4">Whitelist for ANS</div>
              <ConnectButton label='Connect Wallet' />
            </div>
          )}
        </div>
      </main>
      <footer>
        <div className="w-full">
        </div>
      </footer>
    </>
  )
}
