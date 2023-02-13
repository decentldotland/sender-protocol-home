import { verification } from "@/types";
const { atom } = require('recoil');

// Misc
export const showCasePayload = atom({
  key: 'showCasePayload',
  default: {}
});

export const mintConfirmation = atom({
  key: 'mintConfirmation',
  default: false
})

export const listingFee = atom({
  key: 'listingFee',
  default: 0
})

// State for Filters
export const searchMarketplace = atom({
  key: 'searchMarketplace',
  default: ""
})

export const lengthMarketplace = atom({
  key: "lengthMarketplace",
  default: "0"
})

export const priceRangeMarketplace = atom({
  key: "priceRangeMarketplace",
  default: "Low"
})

// State for Gallery
export const galleryNames = atom({
  key: 'galleryNames',
  default: []
})

export const filteredGalleryNames = atom({
  key: 'filteredGalleryNames',
  default: []
})


// *** Modal ***
export const modalIsOpen = atom({
  key: 'modalIsOpen',
  default: false
})

export const modalType = atom({
  key: 'modalType',
  default: '' as string
})

export const modalArgs = atom({
  key: 'modalArgs',
  default: {} as any
})

// *** ArConnect ***
export const arweaveAddress = atom({
  key: 'arweaveAddress',
  default: ""
});

export const arconnectPubkey = atom({
  key: 'arconnectPubkey',
  default: ""
})

export const latestSignature = atom({
  key: 'latestSignature',
  default: ""  
});

export const signatureCounter = atom({
  key: 'signatureCounter',
  default: ""
});

export const verificationAtom = atom({
  key: 'verificationAtom',
  default: {
    "address": "",
    "jwk_n": "",
    "sig": "",
    "newSig": (() => undefined)
  } as verification
});

export const justForYouNames = atom({
  key: 'justForYouNames',
  default: []
})

/*** dashboard selected domain ***/
export const selectedDomain = atom({
  key: 'selectedDomain',
  default: ''
})
