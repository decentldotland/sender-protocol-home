# ANS EXM type definitions

## admins
 `admins: string[];`

  Admin addresses


## treasury_address
  `treasury_address: string;`

  Address of the treasury

## user_sig_messages
  `user_sig_messages: string[];`

  When interacting with EXM, users need to provide an Arweave wallet-generated signature in order to prove ownership of the wallet. This array contains the messages that are signed by the user, in order to prevent re-entrancy attacks.


## admin_sig_messages
  `admin_sig_messages: string[];`

  When interacting with EXM, admins need to provide an Arweave wallet-generated signature in order to prove ownership of the wallet. This array contains the messages that are signed by the admins, in order to prevent re-entrancy attacks.


## total_winston_volume
  `total_winston_volume: number;`

  Total volume of all transactions in EXM, in winston.

## balances
  `balances:` [Balance](#balance) `[];`

  Array of balances (namely user's info) in EXM. Each balance is an object with the following properties:
  ```
  address: string;
  primary_domain: string;
  ownedDomains: Domain[];
  record: any | null;
  ```



  molecule_endpoints: Record<string, string>;
  supply: Record<string, number>;
  pricing: Record<string, number>;
  otc_marketplace: OTCSaleOrder[];
  signatures: any[];
  minting_fees_id: any[];
  isPaused: boolean;



## Balance
  User's info and owned domains in EXM

#### address
  `address: string;`

  User's address

#### primary_domain
  `primary_domain: string;`

  Currently set domain used to represent an Arweave wallet

#### ownedDomains
  `ownedDomains: Domain[];`
  
  List of domains owned by the user

##### Domain  
  `record: any | null;`

  Domain record
