"use client";
import "./globals.css";
import { Space_Mono } from "next/font/google";

import { Provider } from "./components/wallet/Provider";
import { useWallet } from "@solana/wallet-adapter-react";

const space = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`h-screen w-screen bg-black text-white ${space.className}`}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}
