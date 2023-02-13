import axios from "axios";
import { EXMWhitelistState } from "@/types";
import { EXM_WHITELIST_CONTRACT, EXM_READ_URL } from "@/constants";


export const fetchEXMStateWhitelist = async (): Promise<EXMWhitelistState> => {
  const contract = await axios.get(EXM_READ_URL + EXM_WHITELIST_CONTRACT);
  return contract.data;
}
