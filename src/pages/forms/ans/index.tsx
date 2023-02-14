import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useSignMessage } from 'wagmi'
import Confetti from 'react-confetti'

import { formatAddress } from '@/utils/arconnect'
import Spinner from '@/components/Spinner'
import { useAccountModal } from '@rainbow-me/rainbowkit'
import { EXMWhitelistState, Results, Submission } from '@/types'

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
  const [submitLoading, setSubmitLoading] = useState<boolean>(false);
  const [isEligible, setIsEligible] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<any>({});

  const [alreadySubmitted, setAlreadySubmitted] = useState(false);

  const [isEverpayWinner, setIsEverpayWinner] = useState<boolean>(false);
  const [isArkHolder, setIsArkHolder] = useState<boolean>(false);
  const [isEmilyHolder, setIsEmilyHolder] = useState<boolean>(false);
  const [isAurobotsHolder, setIsAurobotsHolder] = useState<boolean>(false);
  const [isArkProtocolUser, setIsArkProtocolUser] = useState<boolean>(false);
  const [isMaskTokenHolder, setIsMaskTokenHolder] = useState<boolean>(false);
  const [isRSS3TokenHolder, setIsRSS3TokenHolder] = useState<boolean>(false);
  const [isSarcoTokenHolder, setIsSarcoTokenHolder] = useState<boolean>(false);
  
  const [ResultsState, setResultsState] = useState<Results>();

  const flush = () => {
    setIsEverpayWinner(false);
    setIsArkHolder(false);
    setIsEmilyHolder(false);
    setIsAurobotsHolder(false);
    setIsArkProtocolUser(false);
    setIsMaskTokenHolder(false);
    setIsRSS3TokenHolder(false);
    setIsSarcoTokenHolder(false);
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

    const fetchData = async () => {
      flush();
      try {
        const contractState: EXMWhitelistState = (await axios.post('/api/whitelist/exm-state', {})).data;
        setSigMessage(contractState.verification_message + contractState.counter);
        if (contractState.list.find((submission: Submission) => submission.evm === caller)) submitStatus({status: "error", message: `${caller} is already whitelisted!`});
      } catch {};
      setLoading(false);
    };
    setLoading(true);
    if (caller.length > 0) fetchData();
    setIsEligible(false);
    setSubmitStatus({});
    setArweave_address('');
  }, [caller]);

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
    if (!(arweave_address && signature && caller)) {
      setSubmitStatus({status: "error", message: "No address!"});
      return;
    };
    console.log(signature)
    const sendRequest = async () => {
      setSubmitLoading(true);
      console.log(caller)
      const result = await axios.post('/api/whitelist/apply', {arweave_address, signature, caller});
      const newCaller = caller;
      setTimeout(async () => {
        console.log(newCaller)
        const state = await axios.post('/api/whitelist/exm-state', {});
        const isWL: Submission = state.data.list.find((item:any) => item.evm == newCaller);
        console.log('wl', isWL);
        if (!isWL) {
          setSubmitStatus({status: "error", message: "Request failed, please refresh page."});
        }
        else if ((isWL !== undefined && isWL !== null) && Object.values(isWL?.results).find((val) => !val)) {
          setSubmitStatus({status: "error", message: `${newCaller} is not whitelisted!`});
        } else {
          setSubmitLoading(false)
          setIsEligible(true);
          setResultsState(isWL.results);
          setSubmitStatus({status: "success", message: "Successfully whitelisted!"});
        };
        setSubmitLoading(false);
      }, 5000)
    };
    sendRequest();
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
              {(!isEligible && caller) ? (
                <div className="min-w-[350px]">
                  <div className="header-base mb-4">Okay, {formatAddress(caller, 7) }</div>
                  <div className="subheader-text mb-8 tracking-wide font-light">{"Let's check if you're eligible."}</div>
                  <div className="flex items-center">
                    <input 
                      placeholder={"Paste your Arweave address"}
                      className="px-2 py-2 border-black border-2 rounded-xl text-black mr-2 w-64"
                      value={arweave_address}
                      onChange={(e) => setArweave_address(e.target.value)}
                    />
                    <button 
                      onClick={() => signMessage()}
                      disabled={arweave_address.length !== 43 || arweaveValidation.length > 0 || submitStatus?.status === "success"}
                      className={`flex items-center gap-x-2 px-12 py-2 border-green-500 border-2 rounded-xl text-green-500 disabled:text-gray-500 disabled:border-gray-500`}
                    >
                      {"Whitelist"}
                      {submitLoading && <Spinner className='w-4 h-4 spinner' />}
                    </button>
                  </div>
                  <div className="mt-2">
                    {arweaveValidation?.length > 0 && <div className="text-red-400">{arweaveValidation}</div>}
                    {submitStatus?.status === "error" && <div className="text-red-400">{submitStatus.message}</div>}
                    {submitStatus?.status === "success" && <div className="text-green-400">{submitStatus?.message}</div>}
                  </div>
                </div>
              ) : (
                <>
                  <div className="header-base mb-8">Congratulations!</div>
                  <div className="subheader-text mb-8 tracking-wide font-light">{"You're eligible for the ANS whitelist"}</div>
                  <div className="max-w-sm text-lg tracking-wide font-light">
                    <div className="flex items-center w-full justify-between mb-2">{"Won everpay Auction"} {ResultsState?.IS_EVERPAY_WINNER ? <Tick />: <Cross />}</div>
                    <div className="flex items-center w-full justify-between mb-2">{"Owns an Ark NFT"} {ResultsState?.IS_ARK_NFT_HOLDER ? <Tick />: <Cross />}</div>
                    <div className="flex items-center w-full justify-between mb-2">{"Is Emily NFT holder"} {ResultsState?.IS_EMILY_NFT_HOLDER ? <Tick />: <Cross />}</div>
                    <div className="flex items-center w-full justify-between mb-2">{"Is Aurobots NFT holder"} {ResultsState?.IS_AURO_BOTS_HOLDER ? <Tick />: <Cross />}</div>
                    <div className="flex items-center w-full justify-between mb-2">{"Connected via Ark Protocol"} {ResultsState?.IS_ARK_PROTOCOL_USER ? <Tick />: <Cross />}</div>
                    <div className="flex items-center w-full justify-between mb-2">{"Is Mask token holder"} {ResultsState?.IS_MASK_TOKEN_HOLDER ? <Tick />: <Cross />}</div>
                    <div className="flex items-center w-full justify-between mb-2">{"Is RSS3 token holder"} {ResultsState?.IS_RSS3_TOKEN_HOLDER ? <Tick />: <Cross />}</div>
                    <div className="flex items-center w-full justify-between mb-2">{"Is $SARCO token holder"} {ResultsState?.IS_SARCO_TOKEN_HOLDER ? <Tick />: <Cross />}</div>
                    <button onClick={openAccountModal} className="mt-6 px-12 py-2 border-blue-500 border-2 rounded-xl text-blue-500">Restart</button>
                    <Confetti
                      width={windowSize.width}
                      height={windowSize.height}
                      recycle={false}
                      numberOfPieces={2000}
                      style={{ zIndex: 50 }}
                    />
                  </div>              
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
