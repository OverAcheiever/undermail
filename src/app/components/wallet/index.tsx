"use client";
import dynamic from "next/dynamic";

export const DynamicWallet = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Wallet = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <DynamicWallet
      style={{
        background: "white",
        color: "black",
        ...style,
      }}
    />
  );
};

export default Wallet;
