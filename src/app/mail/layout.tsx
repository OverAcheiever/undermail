"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import Wallet from "../components/wallet";
import { useEffect, useState } from "react";
import { setCookie } from "./set-cookie";

const Home = ({ children }: { children: React.ReactNode }) => {
  const { publicKey } = useWallet();
  // const [loaded, setLoaded] = useState<boolean>(false);

  // useEffect(() => {
  //   if (publicKey) {
  //     setCookie(publicKey.toString());
  //     setLoaded(true);
  //   }
  // }, [publicKey]);

  return (
    <div className="h-full w-[calc(100vw-4rem)] bg-black">
      {!publicKey ? (
        <div className="flex h-full w-full items-center justify-center">
          <Wallet />
        </div>
      ) : (
        <div className="flex h-full w-full">
          <div className="h-full w-full">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Home;
