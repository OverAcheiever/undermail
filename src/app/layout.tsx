"use client";

import { Provider } from "./components/wallet/Provider";
import NextTopLoader from "nextjs-toploader";

import { Space_Grotesk, Space_Mono } from "next/font/google";

const space = Space_Grotesk({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import "./globals.css";
import Sidebar from "./components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body
          className={`flex h-screen w-screen bg-black text-white ${space.className} antialiased`}
        >
          <NextTopLoader color="#fff" showSpinner={false} />
          <Sidebar />
          <div>{children}</div>
        </body>
      </Provider>
    </html>
  );
}
