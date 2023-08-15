import { PublicKey } from "@solana/web3.js";

export const isValidPublicKey = (publickey: string) => {
  try {
    const pk = new PublicKey(publickey);
    if (!PublicKey.isOnCurve(publickey)) {
      throw new Error();
    }

    return true;
  } catch {
    return false;
  }
};
