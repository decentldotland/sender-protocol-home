// MINT
export const EVERPAY_EOA = '0x197f818c1313DC58b32D88078ecdfB40EA822614';
export const EVERPAY_AR_TAG = 'arweave,ethereum-ar-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA,0x4fadc7a98f2dc96510e42dd1a74141eeae0c1543';
export const MINT_SLIPPAGE = 1.0025;

// API
export const EXM_READ_URL = 'https://api.exm.dev/read/';

export const EXM_CONTRACT = 'tC3T7glvIXWt2-7HFF-T_QGSyRKsmx8ZI8c-T2Fix20';
export const EXM_WHITELIST_CONTRACT = 'cZj-DKPYZ-ofO-Vlo8NwuCzrWdPbH4PB5hbpN74QkwI'
export const OLD_EXM_CONTRACT = 'L03Ez68iRMK28qOREpYdy7f7uITOY31XX9Exa2gHOQg'; //Error Handling Only
export const DOMAIN_OWNERSHIP_URL = 'https://ark-core.decent.land/v2/domains/arweave/';

export const ANS_STATS_PROFILE = 'https://ans-stats.decent.land/profile/'; // address/label at the end

// WALLET
export const WALLET_INIT = 4;
export const WALLET_END = 5;

export const LABEL_LENGTHS: Record<number, string> = {
  2: "Ār",
  3: "Vix",
  4: "Zūr",
  5: "Yu",
  6: "Yow",
  7: "K'us",
  8: "En",
  9: "Pon",
  10: "Pōr",
  11: "Strād",
  12: "Bī",
  13: "Sān",
  14: "Bōh",
  15: "Kew"
}

// MARKETPLACE
export const OPEN_MARKET = "open"
export const EXCLUSIVE_MARKET = "exclusive"
export const SELL_NAME_MIN = 0.001;
export const MKTPLACE_CUT = 0.02;
export const NAME_DAILY_FEE = 0.00001;
export const SUBDOMAIN_CREATION_FEE = 0.0000001;

//FETCH ERRORS
export const NO_FETCH_LISTING_FEE = "There was an issue fetching the listing fee."
export const INSUFF_EVERPAY_BAL = "You have an insufficient AR balance on Everpay."
export const EVERYPAY_TRANS_ERROR = "There was an error processing your transaction on Everpay."
export const GEN_LISTING_ERROR = "There was an error attempting to list your name."
export const GEN_BUY_ERROR = "There was an error attempting to buy this name."
export const EXM_LISTING_ERROR = "There was an error listing on EXM."
export const EXM_EXECUTE_ERROR = "There was an error buying this name on EXM."
export const SELL_AMOUNT_MIN_ERROR = `All domains have a minimum sell value of ${SELL_NAME_MIN}`
export const EXM_SUB_MINT_ERROR = "There was an error minting this subdomain batch."
export const EXM_SUBDOMAIN_BATCH_ERROR = "There was an error minting the batch of subdomains."

//FORM ERRORS
export const SUBDOMAIN_EMPTY = "Subdomain is Empty"
export const INCORRECT_ARWEAVE = "Invalid Arweave Address"
export const ALREADY_MINTED = "Name Already Minted"
export const OWN_ADDRESS_ERROR = "Cannot Mint to Own Address"
