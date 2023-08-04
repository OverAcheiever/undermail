"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import Wallet from "../components/wallet";
import { useEffect, useState } from "react";

import { setCookie } from "cookies-next";

const Home = ({ children }: { children: React.ReactNode }) => {
  const { publicKey } = useWallet();
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (publicKey) {
      setCookie("publicKey", publicKey.toString());
    }
  }, [publicKey]);

  return (
    <div className="h-screen w-screen bg-black">
      {/* {!publicKey && true ? (
        <div className="flex h-full w-full items-center justify-center">
          <Wallet />
        </div>
      ) : (
        <div className="flex h-full w-full">
          <div className="h-full w-full">{children}</div>
        </div>
      )} */}
    </div>
  );
};

export default Home;
