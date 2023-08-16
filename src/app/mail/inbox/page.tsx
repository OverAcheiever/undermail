"use client";
import { PlusIcon } from "@heroicons/react/20/solid";
import { useWallet } from "@solana/wallet-adapter-react";
import { JSONContent } from "@tiptap/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { get } from "./get";
import Loading from "@/app/components/loading";
import { date, preview } from "@/utils/helpers/inbox";

const Inbox = () => {
  const [emails, setEmails] = useState<
    {
      id: string;
      from: string;
      subject: string;
      body: JSONContent;
      createdAt: string;
      hasOpened: boolean;
    }[]
  >();

  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      (async () => {
        setEmails(await get(publicKey!.toString()));
      })();
    }
  }, [publicKey]);

  return (
    <div className="relative h-screen w-full">
      {emails !== undefined ? (
        emails.map(({ id, from, subject, body, createdAt, hasOpened }, key) => {
          return (
            <Link href={`/mail/inbox/${id}`} key={id}>
              <div
                className={`flex h-16 items-center justify-between border-b-2 px-5 transition-all duration-200 hover:bg-[rgb(20,20,20)]
                ${
                  hasOpened
                    ? " border-[#111]"
                    : "border-[rgb(20,20,20)] bg-[rgb(15,15,15)] "
                }
              `}
              >
                <div className="flex items-center">
                  <div className="text-[#444]">
                    {from.slice(0, 5) + "..." + from.slice(-5)}
                  </div>
                  <div className="pl-10">{subject}</div>
                  <div className="px-2 text-[#555]">-</div>
                  <div className="text-[#555]">{preview(body)}</div>
                </div>

                <div className="text-sm text-[#555]">{date(createdAt)}</div>
              </div>
            </Link>
          );
        })
      ) : (
        <Loading />
      )}

      <div className="fixed bottom-5 right-5">
        <Link href="/mail/create">
          <button className="h-14 w-14 rounded-full bg-white p-3">
            <PlusIcon className="h-full w-full text-black" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export const revalidate = 5;

export default Inbox;
