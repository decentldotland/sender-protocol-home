export interface EXMWhitelistState {
  verification_message: string;
  counter: number;
  evm_molecule_endpoint: string;
  admin_address: string;
  ark_nft_contract: string;
  emily_nft_contract: string;
  aurobots_nft_contract: string;
  arweave_addresses: string[];
  everfinance_nft_auctions: string[];
  list: Submission[];
  signatures: string[];
  is_active: boolean;
}
export interface Results {
  IS_ARK_NFT_HOLDER: boolean;
  IS_EVERPAY_WINNER: boolean;
  IS_EMILY_NFT_HOLDER: boolean;
  IS_AURO_BOTS_HOLDER: boolean;
  IS_ARK_PROTOCOL_USER: boolean;
  IS_MASK_TOKEN_HOLDER: boolean;
  IS_RSS3_TOKEN_HOLDER: boolean;
  IS_SARCO_TOKEN_HOLDER: boolean;
}

export interface Submission {
  evm: string;
  arweave: string;
  results: Results;
}