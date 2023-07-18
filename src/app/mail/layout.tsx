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
      setLoaded(true);
    }
  }, [publicKey]);

  return (
    <div className="h-screen w-screen bg-black">
      {!publicKey && !loaded ? (
        <div className="flex h-full w-full items-center justify-center">
          <Wallet />
        </div>
      ) : (
        <div className="flex h-full w-full">
          {/* <div className="h-full w-16 border-r-2 border-[#111]"></div> */}
          <div className="h-full w-full">
            {/* <div className="flex h-16 w-full justify-between border-b-2 border-[#111]"></div> */}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
